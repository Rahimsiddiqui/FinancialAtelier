import fetch from "node-fetch";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message too long"),
  token: z.string().min(1, "Bot verification token is required"),
});

// Initialize Redis and Ratelimit
let ratelimit = null;
if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "1 h"), // 3 submissions per hour per IP
    analytics: true,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1. Rate Limiting
    if (ratelimit) {
      const ip = req.headers["x-forwarded-for"] || "127.0.0.1";
      const { success, limit, remaining, reset } = await ratelimit.limit(
        `ratelimit_contact_${ip}`,
      );

      res.setHeader("X-RateLimit-Limit", limit.toString());
      res.setHeader("X-RateLimit-Remaining", remaining.toString());
      res.setHeader("X-RateLimit-Reset", reset.toString());

      if (!success) {
        return res.status(429).json({
          error: "Too many submissions. Please try again later.",
        });
      }
    }

    // 2. Schema Validation & Sanitization
    const validation = contactSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: validation.error.flatten().fieldErrors,
      });
    }

    const { name, email, message, token } = validation.data;

    // Check environment variables for EmailJS and Turnstile
    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_TEMPLATE_ID ||
      !process.env.EMAILJS_PUBLIC_KEY ||
      !process.env.TURNSTILE_SECRET_KEY
    ) {
      return res.status(500).json({ error: "Server configuration error" });
    }

    // 3. Verify Turnstile server-side
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      },
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(403).json({ error: "Bot detected" });
    }

    // 4. Send email via EmailJS
    const emailRes = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: {
            name,
            email,
            message,
          },
        }),
      },
    );

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("EmailJS Error:", errorText);
      return res.status(emailRes.status).json({
        error: "Email send failed",
      });
    }

    // Success response
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

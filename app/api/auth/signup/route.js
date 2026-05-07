import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Ratelimit
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 signups per 10 mins per IP
    })
  : null;

export async function POST(req) {
  try {
    // 1. Rate Limiting
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
      const { success } = await ratelimit.limit(`signup_${ip}`);
      if (!success) {
        return NextResponse.json(
          { message: "Too many requests. Try again later." },
          { status: 429 },
        );
      }
    }

    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Basic password strength check
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters" },
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      // Never allow setting password on existing account via signup route.
      // If user exists (OAuth or Email), they should use Login.
      // This prevents "Account Takeover" if email isn't verified.
      return NextResponse.json(
        { message: "Account already exists. Please sign in." },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    const pendingUsers = db.collection("pending_users");

    // Upsert pending user
    await pendingUsers.updateOne(
      { email },
      {
        $set: {
          name,
          email,
          password: hashedPassword,
          code,
          expiresAt,
          createdAt: new Date(),
        },
      },
      { upsert: true },
    );

    // In a real app, send email here. For now, log to console.
    console.log(`Verification code for ${email}: ${code}`);

    return NextResponse.json(
      { message: "Verification code sent to email", email },
      { status: 200 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

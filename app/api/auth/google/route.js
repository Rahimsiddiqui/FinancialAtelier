import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("mode") || "login"; // login | signup

  const state = globalThis.crypto.randomUUID();

  // encode mode into state safely
  const stateData = btoa(JSON.stringify({ state, mode }));

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  url.search = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
    state: stateData,
  });

  const res = NextResponse.redirect(url);

  // store ONLY raw state for CSRF safety
  res.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: true,
    maxAge: 600,
    path: "/",
  });

  return res;
}

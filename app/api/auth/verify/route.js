import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { message: "Missing email or verification code" },
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const pendingUsers = db.collection("pending_users");
    const users = db.collection("users");

    // Find the pending user
    const pendingUser = await pendingUsers.findOne({ email });

    if (!pendingUser) {
      return NextResponse.json(
        { message: "Verification record not found. Please sign up again." },
        { status: 400 },
      );
    }

    // Check if code matches
    if (pendingUser.code !== code) {
      return NextResponse.json(
        { message: "Invalid verification code" },
        { status: 400 },
      );
    }

    // Check if expired
    if (new Date() > new Date(pendingUser.expiresAt)) {
      await pendingUsers.deleteOne({ email });
      return NextResponse.json(
        { message: "Verification code has expired. Please sign up again." },
        { status: 400 },
      );
    }

    // Move to users collection logic removed - will happen in register-finalize
    
    return NextResponse.json(
      {
        message: "Email verified successfully",
        email: pendingUser.email,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, twoFactorEnabled, profile } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Missing email" },
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

    // Check again if user exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      await pendingUsers.deleteOne({ email });
      return NextResponse.json(
        { message: "User already exists. Please sign in." },
        { status: 400 },
      );
    }

    // Move to users collection with merged data
    const result = await users.insertOne({
      name: pendingUser.name,
      email: pendingUser.email,
      password: pendingUser.password,
      twoFactorEnabled: twoFactorEnabled || false,
      username: profile?.username || pendingUser.name.toLowerCase().replace(/\s/g, ""),
      image: profile?.avatar || null,
      emailVerified: new Date(),
      createdAt: new Date(),
    });

    // Delete pending record
    await pendingUsers.deleteOne({ email });

    return NextResponse.json(
      {
        message: "Account created successfully",
        id: result.insertedId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Finalize registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

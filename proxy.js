import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    if (req.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-data", JSON.stringify(payload));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    const response = NextResponse.redirect(new URL("/auth", req.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};

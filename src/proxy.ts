import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    // const pathName = request.nextUrl.pathname;
    console.log(request.url)

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};

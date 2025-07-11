import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const ADMIN_PROTECTED_ROUTES = [
  "/articles/create",
  "/articles/edit/:path*",
];

const USER_PROTECTED_ROUTES = [
  "/articles/:slug", // hanya halaman detail artikel, bukan list
];

function isMatchingRoute(routePattern: string, pathname: string): boolean {
  if (routePattern.includes(":path*")) {
    const basePath = routePattern.replace("/:path*", "");
    return pathname.startsWith(basePath);
  }

  if (routePattern.includes(":slug")) {
    // match misal /articles/slug123 → panjang path harus 3: ['', 'articles', 'slug']
    const segments = pathname.split("/").filter(Boolean);
    return segments.length === 2 && pathname.startsWith("/articles/");
  }

  return pathname === routePattern;
}

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isAdminRoute = ADMIN_PROTECTED_ROUTES.some(route =>
    isMatchingRoute(route, pathname)
  );

  const isUserRoute = USER_PROTECTED_ROUTES.some(route =>
    isMatchingRoute(route, pathname)
  );

  // Belum login? Redirect ke sign-in
  if ((isAdminRoute || isUserRoute) && !session?.user) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  // Hanya ADMIN boleh akses rute admin
  if (isAdminRoute && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Hanya USER atau ADMIN boleh akses rute read more
  if (isUserRoute && session?.user?.role !== "USER" && session?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/articles/create",
    "/articles/edit/:path*",
    "/articles/:slug", // khusus untuk halaman detail
  ],
};

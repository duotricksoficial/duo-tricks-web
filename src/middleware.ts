import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE = true; // 👈 cambiar a false cuando el sitio esté listo

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permitimos acceder a la página de mantenimiento
  if (pathname.startsWith("/maintenance")) {
    return NextResponse.next();
  }

  // Archivos estáticos y assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (MAINTENANCE) {
    return NextResponse.redirect(
      new URL("/maintenance", request.url)
    );
  }

  return NextResponse.next();
}

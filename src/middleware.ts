// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
  // Siz ishlatmoqchi bo'lgan tillar
  locales: ['eng', 'uzb', 'rus'],

  // Standart til
  defaultLocale: 'rus',
})

export function middleware(request: NextRequest) {
  return intlMiddleware(request)
}

// middleware faollashadigan route'lar
export const config = {
  matcher: [
    // static fayllar, api, favicon va boshqalarni chetlab o'tamiz
    '/((?!api|_next|_static|favicon.ico|.*\\..*).*)',
  ],
}

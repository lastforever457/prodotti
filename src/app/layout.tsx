import { NextIntlClientProvider } from 'next-intl'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${mulish.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

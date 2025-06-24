import { NextIntlClientProvider } from 'next-intl'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin', 'cyrillic'],
})

export const metadata = {
  title: 'PRODOTTI Boutique',
  description:
    "Eng nufuzli Yevropa brendlaridan tanlangan mahsulotlar. Har bir buyum - bu an'ana, sifat va nafislikning mukammal uyg'unligi.",
  metadataBase: new URL('https://prodotti.uz/rus'), // saytingiz domenini bu yerga yozing
  alternates: {
    canonical: '/',
    languages: {
      uz: '/uzb',
      ru: '/rus',
      en: '/eng',
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'PRODOTTI Boutique',
    description:
      "Eng nufuzli Yevropa brendlaridan tanlangan mahsulotlar. Har bir buyum - bu an'ana, sifat va nafislikning mukammal uyg'unligi.",
    siteName: 'PRODOTTI',

    locale: 'rus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRODOTTI Boutique',
    description:
      "Eng nufuzli Yevropa brendlaridan tanlangan mahsulotlar. Har bir buyum - bu an'ana, sifat va nafislikning mukammal uyg'unligi.",
    creator: '@prodotti',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  // verification: {
  //   google: 'GOOGLE_VERIFICATION_CODE', // Google Search Console’dan olingan kod
  //   yandex: 'YANDEX_VERIFICATION_CODE',
  // },
  keywords: [
    'PRODOTTI',
    'onlayn doʻkon',
    'internet magazin',
    'sifatli mahsulotlar',
    'premium market',
    'prodotti.uz',
    'prodotti uz',
  ],
  category: 'shopping',
  authors: [
    {
      name: 'Toxir Karimov',
      url: 'https://www.prodotti.uz/rus',
    },
  ],
  creator: 'Toxir Karimov',
  publisher: 'Toxir Karimov',
}

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

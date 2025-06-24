import { routing } from '@/i18n/routing'
import { hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({ locale })

  const title = t('head-title')
  const description = t('head-desc')
  const imageUrl = '/images/image.png'

  return {
    title,
    description,
    metadataBase: new URL('https://prodotti.uz'), // saytingiz domenini bu yerga yozing
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
      title,
      description,
      siteName: 'PRODOTTI',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@prodotti',
      images: [imageUrl],
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
    ],
    category: 'shopping',
    authors: [
      {
        name: 'Toxir Karimov',
        url: 'https://www.prodotti.uz',
      },
    ],
    creator: 'Toxir Karimov',
    publisher: 'Toxir Karimov',
  }
}

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) => {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return children
}

export default Layout

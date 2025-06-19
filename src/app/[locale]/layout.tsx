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

  return {
    title: t('head-title'),
    description: t('head-desc'),
    metadata: {
      'og:type': 'website',
      'og:title': t('head-title'),
      'og:description': t('head-desc'),
      'twitter:card': 'summary',
      'twitter:title': t('head-title'),
      'twitter:description': t('head-desc'),
      'twitter:creator': '@prodotti',
      'twitter:image': {
        url: '/images/image.png',
        width: 1200,
        height: 630,
        alt: t('head-title'),
      },
      'og:image': {
        url: '/images/image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: t('head-title'),
      },
      'og:site_name': 'PRODOTTI',
      'og:locale': locale,
    },
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

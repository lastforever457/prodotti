'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import icon from '../../../public/images/image.png'
import ChangeLanguage from '../widgets/change-language'

const Header = () => {
  const t = useTranslations()

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-200/50 shadow-sm">
      <div className="container-cs py-4 flex items-center justify-between">
        <Link href={'/'} className="flex items-center space-x-3">
          <Image
            src={icon}
            alt="PRODOTTI boutique"
            width={120}
            height={60}
            className="h-12 w-auto rounded-full md:hidden"
          />
          <h1 className="text-xl font-bold">
            PRODOTTI <span className="hidden md:inline">Boutique</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
          >
            {t('about us')}
          </Link>
          <Link
            href="#products"
            onClick={(e) => handleScroll(e, 'products')}
            className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
          >
            {t('products')}
          </Link>
          <Link
            href="#process"
            onClick={(e) => handleScroll(e, 'process')}
            className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
          >
            {t('process')}
          </Link>
          <Link
            href="#testimonials"
            onClick={(e) => handleScroll(e, 'testimonials')}
            className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
          >
            {t('comments')}
          </Link>
          <Link
            href="#faq"
            onClick={(e) => handleScroll(e, 'contact')}
            className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
          >
            {t('faq')}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ChangeLanguage />
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white hidden md:flex">
            {t('order now')}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

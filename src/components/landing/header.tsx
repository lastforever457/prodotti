'use client'

import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import ChangeLanguage from '../widgets/change-language'

const Header = () => {
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg border-b border-emerald-200/30`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            draggable={false}
            src="/images/image.png"
            alt="PRODOTTI Boutique"
            priority
            width={150}
            height={75}
            className="size-12 rounded-lg w-auto"
          />
          <div>
            <h1 className="text-xl font-bold text-[#D1A563]">PRODOTTI</h1>
            <p className="text-xs text-[#D1A563] font-medium">Boutique</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { href: '#about', label: t('about us') },
            { href: '#products', label: t('products') },
            { href: '#testimonials', label: t('comments') },
            { href: '#faq', label: t('faq') },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.slice(1))}
              className="text-gray-700 hover:text-emerald-700 transition-all duration-300 font-medium relative group py-2"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ChangeLanguage />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {[
              { href: '#about', label: t('about us') },
              { href: '#products', label: t('products') },
              { href: '#testimonials', label: t('comments') },
              { href: '#faq', label: t('faq') },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href.slice(1))}
                className="block text-gray-700 hover:text-emerald-700 transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white mt-4">
              {t('order now')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

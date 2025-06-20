import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../../../public/images/image.png'

const Footer = () => {
  const t = useTranslations()

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-20 relative overflow-hidden"
    >
      <div className="container-cs">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <Image
              src={icon}
              alt="PRODOTTI Boutique"
              width={150}
              height={75}
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Yevropa sifatini O'zbekistonga olib keluvchi ishonchli
              hamkoringiz. Premium mahsulotlar, professional xizmat va mijozlar
              mamnuniyati - bizning asosiy tamoyillarimiz.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-main transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-main transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-main transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">{t('Havolalar')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-300 transition-colors"
                >
                  {t('about us')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-300 transition-colors"
                >
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-300 transition-colors"
                >
                  {t('process')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-300 transition-colors"
                >
                  {t('comments')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-stone-300 transition-colors"
                >
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">{t('contact us')}</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-300" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stone-300" />
                <span>info@prodotti.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-stone-300" />
                <span>Toshkent, O'zbekiston</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-stone-300" />
                <span>Dush-Juma: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PRODOTTI Boutique.{' '}
            {t('Barcha huquqlar himoyalangan')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

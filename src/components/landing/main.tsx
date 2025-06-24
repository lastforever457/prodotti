import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import street from '../../../public/images/street.png'
import PremiumBadge from './premium-badge'

const Main = () => {
  const t = useTranslations()
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-6">
              <PremiumBadge>{t('about us')}</PremiumBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
                {t('hero-title')}
              </h2>
              <p className="text-lg text-stone-200 leading-relaxed">
                {t('hero-title-2')}
              </p>
            </div>

            <div className="space-y-4">
              {[
                t('Shaxsiy tanlov va sifat nazorati'),
                t("To'g'ridan-to'g'ri import qilish"),
                t('Rasmiy kafolat va sertifikatlar'),
                t('Mijozlar bilan uzoq muddatli munosabatlar'),
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group animate-slide-left"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-300 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 group">
              <Image
                src={street}
                alt="About Us"
                priority
                width={500}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>

              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main

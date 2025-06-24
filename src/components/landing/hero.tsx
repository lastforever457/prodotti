'use client'

import { Award, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import FloatingElement from './floating-element'
import PremiumBadge from './premium-badge'

const Hero = () => {
  const t = useTranslations()

  const data = useMemo(
    () => [
      {
        icon: Shield,
        title: t('100% Original'),
        desc: t('Faqat rasmiy brendlardan'),
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-50',
        delay: '0',
      },
      {
        icon: Award,
        title: t('Premium sifat'),
        desc: t('Yuqori standartlar'),
        color: 'from-teal-500 to-emerald-600',
        bgColor: 'bg-teal-50',
        delay: '200',
      },
    ],
    [t]
  )

  return (
    <section
      suppressHydrationWarning
      className="relative py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <PremiumBadge className="mb-6">
            ✨ {t('Bizning afzalliklarimiz')}
          </PremiumBadge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 bg-clip-text text-transparent leading-tight">
            {t("Nima uchun PRODOTTI'ni tanlashadi")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('advantage-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl shadow shadow-[#0E3633] bg-white/80 backdrop-blur-sm border border-emerald-100/50 hover:bg-[#0E3633] hover:shadow-2xl hover:shadow-[#0E3633]/10 transition-all duration-500 hover:-translate-y-3 animate-fade-scale"
              style={{
                animationDelay: `${Number.parseInt(feature.delay) + 200}ms`,
              }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-emerald-100 relative overflow-hidden`}
                >
                  <feature.icon className="w-10 h-10 text-emerald-600 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              <div className="relative text-center space-y-3">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

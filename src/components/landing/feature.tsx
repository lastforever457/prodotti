'use client'

import { Award, Shield, Truck, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import BadgeCs from '../widgets/badge-cs'

const Features = () => {
  const t = useTranslations()
  const data = useMemo(
    () => [
      {
        icon: Shield,
        title: t('100% Original'),
        desc: t('Faqat rasmiy brendlardan'),
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-500/20',
        delay: '0',
      },
      {
        icon: Truck,
        title: t('Tez yetkazish'),
        desc: t('3-7 kun ichida'),
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/20',
        delay: '100',
      },
      {
        icon: Award,
        title: t('Premium sifat'),
        desc: t('Yuqori standartlar'),
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/20',
        delay: '200',
      },
      {
        icon: Users,
        title: t("24/7 qo'llab-quvvatlash"),
        desc: t('Har doim yordamda'),
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-500/20',
        delay: '300',
      },
    ],
    [t]
  )

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-cs mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex justify-center flex-col items-center">
          <BadgeCs>✨ {t('Bizning afzalliklarimiz')}</BadgeCs>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Nima uchun PRODOTTI'ni tanlashadi")}
          </h2>
          <p className="text-base md:text-xl text-blue-200 max-w-2xl mx-auto">
            {t('advantage-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {data.map((feature, index) => (
            <div
              key={index}
              className={`col-span-1 group relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon container */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                  {/* Pulse effect */}
                  <div
                    className={`absolute inset-0 ${feature.bgColor} rounded-2xl animate-pulse opacity-50`}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center space-y-3">
                <h4 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-blue-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                style={{
                  clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-blue-200 mb-6 text-lg">
            Bizning xizmatlarimiz haqida ko'proq bilishni xohlaysizmi?
          </p>
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Batafsil ma'lumot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}

export default Features

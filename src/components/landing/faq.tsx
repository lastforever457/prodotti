'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ChevronDown, Clock, Heart, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import PremiumBadge from './premium-badge'

const Faq = () => {
  const t = useTranslations()

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = useMemo(
    () => [
      {
        question: t("To'lov qanday usullarda amalga oshiriladi"),
        answer: t('payment-desc'),
        icon: CheckCircle,
        bgColor: 'bg-teal-50',
      },
      {
        question: t('Manzilingiz qayerda'),
        answer: t('faq-2-answer'),
        icon: Clock,
        bgColor: 'bg-emerald-50',
      },
    ],
    [t]
  )

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <PremiumBadge className="mb-6">FAQ</PremiumBadge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('frequently asked questions')}
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            {t('faq-desc')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden group animate-fade-scale ${
                openIndex === index
                  ? 'ring-2 ring-emerald-200 shadow-emerald-500/20'
                  : ''
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left hover:bg-emerald-50/50 transition-colors duration-200 flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 ${faq.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                  >
                    <faq.icon className="w-6 h-6 text-emerald-600 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {t("Javobni ko'rish uchun bosing")}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-emerald-600 ${
                      openIndex === index ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r from-[#258b85] to-[#0E3633] bg-opacity-5 relative overflow-hidden`}
                    >
                      <p className="text-stone-300 leading-relaxed relative z-10">
                        {faq.answer}
                      </p>

                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent -translate-x-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden group">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Heart className="mr-2 w-6 h-6 text-emerald-600 animate-pulse" />
                {t('any questions')}
              </h3>
              <p className="text-gray-600 mb-6">{t('faq-desc-2')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+998950779009"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-emerald-500/25 group"
                >
                  <Phone className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  {t("Qo'ng'iroq qiling")}
                </Link>
                <Link
                  target="_blank"
                  href="https://t.me/prodotti_uz"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 border-2 border-emerald-200 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 group"
                >
                  <FaTelegramPlane className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  {t('Telegram orqali yozing')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

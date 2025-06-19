'use client'

import {
  CheckCircle,
  ChevronDown,
  Clock,
  RefreshCw,
  Shield,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import BadgeCs from '../widgets/badge-cs'

const Faq = () => {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = useMemo(
    () => [
      {
        question: 'Mahsulotlar qanchalik tez yetkaziladi?',
        answer:
          "Odatda 3-7 ish kuni ichida yetkazib beramiz. Ba'zi maxsus buyurtmalar 10-14 kun olishi mumkin. Toshkent shahri bo'yicha bir kunda yetkazib berish xizmati ham mavjud.",
        icon: Clock,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
      },
      {
        question:
          "Mahsulotlar originalligiga qanday ishonch hosil qilsam bo'ladi?",
        answer:
          "Barcha mahsulotlarimiz rasmiy distribyutorlardan olinadi va original sertifikatlar bilan ta'minlanadi. Har bir mahsulot bilan birga authenticity sertifikati beriladi.",
        icon: Shield,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
      },
      {
        question: "To'lov qanday usullarda amalga oshiriladi?",
        answer:
          "Naqd pul, bank o'tkazmasi, Click, Payme, Uzcard va boshqa qulay usullarda to'lov qilishingiz mumkin. Onlayn to'lovlar uchun 100% xavfsizlik kafolatlanadi.",
        icon: CheckCircle,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
      },
      {
        question: 'Mahsulotni qaytarish mumkinmi?',
        answer:
          "Ha, 14 kun ichida mahsulotni qaytarish yoki almashtirish imkoniyati mavjud. Mahsulot original holatida bo'lishi va barcha hujjatlar saqlanishi kerak.",
        icon: RefreshCw,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50',
      },
    ],
    [t]
  )

  return (
    <section
      id="faq"
      className="py-10 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-cs mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <BadgeCs>FAQ</BadgeCs>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('frequently asked questions')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('faq-desc')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-4"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${faq.bgColor} rounded-xl hidden md:flex items-center justify-center flex-shrink-0`}
                  >
                    <faq.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Javobni ko'rish uchun bosing
                    </p>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${
                        faq.color
                      } bg-opacity-5 border-l-4 border-gradient-to-b ${
                        faq.color.replace('to-', 'border-').split(' ')[0]
                      }`}
                    >
                      <p className="text-stone-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('any questions')}
            </h3>
            <p className="text-gray-600 mb-6">{t('faq-desc-2')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                📞 {t("Qo'ng'iroq qiling")}
              </a>
              <a
                href="https://t.me/prodotti_uz"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                💬 {t('Telegram orqali yozing')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

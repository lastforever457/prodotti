import { ArrowRight, CheckCircle, Package, Phone, Truck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import BadgeCs from '../widgets/badge-cs'

const Process = () => {
  const t = useTranslations()

  const processSteps = useMemo(
    () => [
      {
        step: '01',
        title: t('Mahsulotni tanlang'),
        desc: t('Katalogdan yoqgan mahsulotingizni tanlang'),
        icon: Package,
      },
      {
        step: '02',
        title: t('Buyurtma bering'),
        desc: t("Telegram yoki telefon orqali bog'laning"),
        icon: Phone,
      },
      {
        step: '03',
        title: t("To'lovni amalga oshiring"),
        desc: t("Qulay usulda to'lov qiling"),
        icon: CheckCircle,
      },
      {
        step: '04',
        title: t('Mahsulotni oling'),
        desc: t('3-7 kun ichida yetkazib beramiz'),
        icon: Truck,
      },
    ],
    [t]
  )

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-cs">
        <div className="text-center mb-16 flex flex-col items-center">
          <BadgeCs>{t('process')}</BadgeCs>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('oddiy 4 qadam')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('process-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center space-y-6 relative">
              <div className="relative">
                <div className="w-20 h-20 bg-main rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-main">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-base md:text-xl text-gray-600">{step.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-main mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

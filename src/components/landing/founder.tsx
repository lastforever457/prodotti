import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ownerImage from '../../../public/images/owner.png'
import PremiumBadge from './premium-badge'

const Founder = () => {
  const t = useTranslations()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex justify-center items-center gap-2">
            <PremiumBadge className="mb-6">{t('founder')}</PremiumBadge>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full blur-xl opacity-50"></div>
              <Image
                src={ownerImage || '/placeholder.svg'}
                alt="Our owner"
                width={500}
                height={500}
                className="size-52 bg-emerald-100 rounded-full border-4 border-emerald-300 relative z-10 shadow-2xl"
              />
            </div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">
                {t('Toxir Karimov')}
              </h2>
              <div className="mt-10 w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder

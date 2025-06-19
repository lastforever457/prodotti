import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Hero = () => {
  const t = useTranslations()
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      <div className="container-cs relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl text-main lg:text-7xl font-bold md:leading-tight">
                🌿 {t('head-desc')}
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('hero-desc')}
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-main hover:bg-main text-white text-lg rounded-full"
              >
                {t('see collection')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div> */}

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-main">2K+</div>
                <div className="text-sm text-gray-600">
                  {t('mamnun mijozlar')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">50+</div>
                <div className="text-sm text-gray-600">
                  {t('Premium brendlar')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">4.9</div>
                <div className="text-sm text-gray-600">{t('Reytingimiz')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/placeholder.png"
                  alt="Italian Fashion"
                  width={250}
                  height={300}
                  className="rounded-3xl shadow-2xl w-fit h-fit"
                />
                <Image
                  src="/images/placeholder.png"
                  alt="European Accessories"
                  width={250}
                  height={200}
                  className="rounded-3xl shadow-2xl w-fit h-fit"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/images/placeholder.png"
                  alt="Luxury Items"
                  width={250}
                  height={250}
                  className="rounded-3xl shadow-2xl w-fit h-fit"
                />
                <Image
                  src="/images/placeholder.png"
                  alt="Home Decor"
                  width={250}
                  height={220}
                  className="rounded-3xl shadow-2xl w-fit h-fit"
                />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-main to-main rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

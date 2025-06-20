import { Button } from '@/components/ui/button'
import { CheckCircle, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import BadgeCs from '../widgets/badge-cs'

const About = () => {
  const t = useTranslations()
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-cs">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <div className="space-y-6 flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <BadgeCs>{t('about us')}</BadgeCs>
              <h2 className="text-4xl md:text-5xl text-center lg:text-start font-bold text-gray-800">
                Yevropa <span className="text-main">an'analarini</span>{' '}
                O'zbekistonga olib kelmoqdamiz
              </h2>
              <p className="text-lg md:text-xl text-center lg:text-start text-gray-600 leading-relaxed">
                2020-yilda tashkil etilgan PRODOTTI Boutique - bu Italiya,
                Fransiya, Ispaniya va boshqa Yevropa davlatlarining eng yaxshi
                mahsulotlarini tanlab, sizga yetkazib beruvchi ishonchli hamkor.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Shaxsiy tanlov va sifat nazorati',
                "To'g'ridan-to'g'ri import qilish",
                'Rasmiy kafolat va sertifikatlar',
                'Mijozlar bilan uzoq muddatli munosabatlar',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-main" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-main hover:bg-main text-white px-8 py-3 rounded-full">
              Batafsil ma'lumot
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/images/placeholder.png"
              alt="About Us"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-main" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">15+ davlat</div>
                  <div className="text-sm text-gray-600">Hamkorlik qilamiz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'
import BadgeCs from '../widgets/badge-cs'

const Products = () => {
  const t = useTranslations()

  const categories = useMemo(
    () => [
      {
        title: 'Italyan modasi',
        desc: 'Gucci, Prada, Versace',
        image: '/images/placeholder.png',
        badge: t('Yangi kolleksiya'),
        color: 'blue',
      },
      {
        title: 'Fransuz kosmetikasi',
        desc: 'Chanel, Dior, Lancôme',
        image: '/images/placeholder.png',
        badge: t('Bestseller'),
        color: 'yellow',
      },
      {
        title: 'Shveytsariya soatlari',
        desc: 'Rolex, Omega, TAG Heuer',
        image: '/images/placeholder.png',
        badge: t('Lyuks'),
        color: 'blue',
      },
      {
        title: 'Nemis avtomobil aksessuarlari',
        desc: 'BMW, Mercedes, Audi',
        image: '/images/placeholder.png',
        badge: t('Premium'),
        color: 'yellow',
      },
      {
        title: 'Skandinav uy buyumlari',
        desc: 'IKEA, H&M Home, Nordic',
        image: '/images/placeholder.png',
        badge: t('Bestseller'),
        color: 'blue',
      },
      {
        title: 'Ispaniya mahsulotlari',
        desc: 'Zara, Mango, Desigual',
        image: '/images/placeholder.png',
        badge: t('Trend'),
        color: 'yellow',
      },
    ],
    [t]
  )

  return (
    <section
      id="products"
      className="py-12 md:py-24 bg-gradient-to-br from-main to-main"
    >
      <div className="container-cs">
        <div className="text-center mb-16 flex flex-col items-center">
          <BadgeCs>{t('Mahsulotlar katalogi')}</BadgeCs>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('eksklyuziv kolleksiyalar')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('products-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={category.image || '/images/placeholder.png'}
                  alt={category.title}
                  width={350}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge
                  className={`absolute top-4 left-4 ${
                    category.color === 'blue'
                      ? 'bg-main text-white'
                      : 'bg-yellow-500 text-main'
                  }`}
                >
                  {category.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

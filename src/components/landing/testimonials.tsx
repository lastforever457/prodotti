import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import BadgeCs from '../widgets/badge-cs'

const Testimonials = () => {
  const t = useTranslations()

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-main to-main text-white"
    >
      <div className="container-cs">
        <div className="text-center mb-16 flex flex-col items-center">
          <BadgeCs>{t('mijozlar fikri')}</BadgeCs>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('Bizga ishongan mijozlar')}
          </h2>
          <p className="text-base md:text-xl text-stone-300 max-w-3xl mx-auto">
            {t('testimonials-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dilnoza Karimova',
              role: 'Biznes ayol',
              text: 'PRODOTTI Boutique orqali Italiyadan olib kelgan sumkam haqiqatan ham ajoyib! Sifati va dizayni mukammal.',
              rating: 5,
              image: '/images/placeholder.png',
            },
            {
              name: 'Bobur Rahimov',
              role: 'Arxitektor',
              text: "Shveytsariya soatini buyurtma qilgandim. Yetkazib berish tez bo'ldi, mahsulot original va kafolat bilan keldi.",
              rating: 5,
              image: '/images/placeholder.png',
            },
            {
              name: 'Malika Tosheva',
              role: 'Dizayner',
              text: 'Fransuz kosmetikasi uchun eng ishonchli manzil. Har doim original mahsulotlar va professional xizmat.',
              rating: 5,
              image: '/images/placeholder.png',
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
            >
              <CardContent className="lg:p-8">
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || '/placeholder.svg'}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-stone-300 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

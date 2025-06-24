import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import aziza from '../../../public/images/aziza.jpg'
import bobur from '../../../public/images/bobur.jpg'
import malika from '../../../public/images/malika.jpg'
import FloatingElement from './floating-element'
import PremiumBadge from './premium-badge'

const Testimonials = () => {
  const t = useTranslations()
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <PremiumBadge className="mb-6 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 border-yellow-300/30">
            {t('mijozlar fikri')}
          </PremiumBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('Bizga ishongan mijozlar')}
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            {t('testimonials-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: t('Dilnoza Karimova'),
              text: t('testimonials-1'),
              rating: 5,
              image: aziza,
            },
            {
              name: t('Bobur Rahimov'),
              text: t('testimonials-3'),
              rating: 5,
              image: bobur,
            },
            {
              name: t('Malika Tosheva'),
              text: t('testimonials-2'),
              rating: 5,
              image: malika,
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group animate-fade-scale"
              style={{ animationDelay: `${index * 150 + 400}ms` }}
            >
              <CardContent className="p-8 relative flex flex-col justify-between items-start h-full">
                <div>
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -inset-2 bg-yellow-300/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image || '/images/placeholder.png'}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                    </div>
                  </div>

                  <div className="flex mt-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-300 text-yellow-300 group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

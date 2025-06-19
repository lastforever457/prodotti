import { Award, Globe, Package, Star, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const Stats = () => {
  const t = useTranslations()

  const stats = useMemo(
    () => [
      {
        number: '2,500+',
        label: t('Mamnun mijozlar'),
        icon: Users,
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-100',
        delay: '0',
      },
      {
        number: '5,000+',
        label: t('Yetkazilgan mahsulotlar'),
        icon: Package,
        color: 'from-emerald-500 to-emerald-600',
        bgColor: 'bg-emerald-100',
        delay: '100',
      },
      {
        number: '50+',
        label: t('Premium brendlar'),
        icon: Award,
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-100',
        delay: '200',
      },
      {
        number: '15+',
        label: t('Yevropa davlatlari'),
        icon: Globe,
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-100',
        delay: '300',
      },
      {
        number: '4.9/5',
        label: t('Mijozlar bahosi'),
        icon: Star,
        color: 'from-yellow-500 to-yellow-600',
        bgColor: 'bg-yellow-100',
        delay: '400',
      },
    ],
    [t]
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-lg"></div>
      </div>

      <div className="container-cs mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('Bizning yutuqlarimiz')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('achievements-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              {/* Icon container with gradient */}
              <div className="relative">
                <div
                  className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  ></div>
                  <stat.icon className="w-10 h-10 text-blue-900 group-hover:text-white transition-colors duration-300 relative z-10" />

                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 group-hover:border-transparent animate-pulse"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                <div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></div>
              </div>

              {/* Number with counter animation effect */}
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {stat.number}
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                    style={{
                      transitionDelay: `${Number.parseInt(stat.delay) + 200}ms`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Stats

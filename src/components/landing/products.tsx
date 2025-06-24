import { useTranslations } from 'next-intl'
import FloatingElement from './floating-element'
import PremiumBadge from './premium-badge'
import ProductsList from './products-list'

const Products = () => {
  const t = useTranslations()

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <FloatingElement delay={0}>
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <PremiumBadge className="mb-6">
            {t('Mahsulotlar katalogi')}
          </PremiumBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('eksklyuziv kolleksiyalar')}
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            {t('products-desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductsList />
        </div>
      </div>
    </section>
  )
}

export default Products

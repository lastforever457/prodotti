import About from '@/components/landing/about'
import Faq from '@/components/landing/faq'
import Feature from '@/components/landing/feature'
import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import Hero from '@/components/landing/hero'
import Process from '@/components/landing/process'
import Products from '@/components/landing/products'
import Stats from '@/components/landing/stats'
import Testimonials from '@/components/landing/testimonials'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-main via-white to-main">
      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature />

      {/* About Section */}
      <About />

      {/* Products Categories */}
      <Products />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section */}
      <Stats />

      {/* Newsletter Section */}
      {/* <Newsletter /> */}

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      {/* <Cta /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

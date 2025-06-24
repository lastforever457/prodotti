import Faq from '@/components/landing/faq'
import Footer from '@/components/landing/footer'
import Founder from '@/components/landing/founder'
import Header from '@/components/landing/header'
import Hero from '@/components/landing/hero'
import Main from '@/components/landing/main'
import Products from '@/components/landing/products'
import StyledCss from '@/components/landing/styled-css'
import Testimonials from '@/components/landing/testimonials'

export default function Page() {
  return (
    <div suppressHydrationWarning>
      <StyledCss />
      {/* Header */}
      <Header />

      {/* About Section */}
      <Main />
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <Products />
      {/* Testimonials Section */}
      <Testimonials />

      {/* Founder Section */}
      <Founder />

      {/* FAQ Section */}
      <Faq />

      <Footer />
    </div>
  )
}

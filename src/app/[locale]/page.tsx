'use client'

import type React from 'react'

import Footer from '@/components/landing/footer'
import PremiumBadge from '@/components/landing/premium-badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ChangeLanguage from '@/components/widgets/change-language'
import { Image as AntdImage } from 'antd'
import {
  Award,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Heart,
  Menu,
  Package,
  Phone,
  Quote,
  Shield,
  Star,
  Truck,
  Users,
  X,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import fabbri from '../../../public/images/fabbri.png'
import farchioni from '../../../public/images/farchioni.png'
import granoro from '../../../public/images/granoro.png'
import italcarciofi from '../../../public/images/italcarciofi.png'
import street from '../../../public/images/street.png'
import '../../components/landing/swiper.css'
// Animated Counter Component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: string
  duration?: number
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericEnd = Number.parseInt(end.replace(/[^\d]/g, ''))
    let startTime: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * numericEnd))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

// Floating Animation Component
const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => (
  <div
    className="animate-float"
    style={{
      animationDelay: `${delay}s`,
      animation: `float 6s ease-in-out infinite ${delay}s`,
    }}
  >
    {children}
  </div>
)

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const data = useMemo(
    () => [
      {
        icon: Shield,
        title: t('100% Original'),
        desc: t('Faqat rasmiy brendlardan'),
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-50',
        delay: '0',
      },
      // {
      //   icon: Truck,
      //   title: t('Tez yetkazish'),
      //   desc: t('3-7 kun ichida'),
      //   color: 'from-green-500 to-emerald-600',
      //   bgColor: 'bg-green-50',
      //   delay: '100',
      // },
      {
        icon: Award,
        title: t('Premium sifat'),
        desc: t('Yuqori standartlar'),
        color: 'from-teal-500 to-emerald-600',
        bgColor: 'bg-teal-50',
        delay: '200',
      },
      // {
      //   icon: Users,
      //   title: t("24/7 qo'llab-quvvatlash"),
      //   desc: t('Har doim yordamda'),
      //   color: 'from-emerald-600 to-green-700',
      //   bgColor: 'bg-emerald-50',
      //   delay: '300',
      // },
    ],
    [t]
  )

  const categories = useMemo(
    () => [
      {
        title: t('Italya mahsulotlari'),
        desc: 'Italcarciofi, Granoro, Farchioni',
        prodImages: [
          '/images/products/006A7431.png',
          '/images/products/granoro1.png',
          '/images/products/granoro2.png',
          '/images/products/granoro3.png',
          '/images/products/farchioni1.png',
          '/images/products/farchioni2.png',
        ],
        badge: t('Yangi kolleksiya'),
        gradient: 'from-emerald-600 to-green-700',
        images: [italcarciofi, granoro, farchioni],
      },
      {
        title: 'Panasia',
        desc: 'Chaokoh, Aroy-D, Mae Ploy',
        prodImages: [
          '/images/products/chaokoh1.png',
          '/images/products/chaokoh2.png',
          '/images/products/aroy-d1.png',
          '/images/products/aroy-d2.png',
          '/images/products/aroy-d3.png',
          '/images/products/aroy-d4.png',
          '/images/products/aroy-d5.png',
          '/images/products/aroy-d6.png',
          '/images/products/aroy-d7.png',
          '/images/products/aroy-d8.png',
          '/images/products/mae-ploy1.png',
        ],
        image: '/images/placeholder.png',
        badge: t('Bestseller'),
        gradient: 'from-green-600 to-emerald-700',
      },
      {
        title: t('Shirinliklar'),
        desc: 'Rolex, Omega, TAG Heuer',
        prodImages: [
          '/images/products/fabbri1.png',
          '/images/products/fabbri2.png',
          '/images/products/fabbri3.png',
          '/images/products/fabbri4.png',
          '/images/products/fabbri5.png',
        ],
        images: [fabbri],
        badge: t('Lyuks'),
        gradient: 'from-teal-600 to-emerald-700',
      },
      {
        title: 'Shakarsiz shirinliklar',
        desc: 'BMW, Mercedes, Audi',
        image: '/images/placeholder.png',
        badge: t('Premium'),
        gradient: 'from-emerald-700 to-green-800',
      },
      {
        title: 'Kosmetika',
        desc: 'IKEA, H&M Home, Nordic',
        image: '/images/placeholder.png',
        badge: t('Bestseller'),
        gradient: 'from-green-700 to-emerald-800',
      },
    ],
    [t]
  )

  const processSteps = useMemo(
    () => [
      {
        step: '01',
        title: t('Mahsulotni tanlang'),
        desc: t('Katalogdan yoqgan mahsulotingizni tanlang'),
        icon: Package,
      },
      {
        step: '02',
        title: t('Buyurtma bering'),
        desc: t("Telegram yoki telefon orqali bog'laning"),
        icon: Phone,
      },
      {
        step: '03',
        title: t("To'lovni amalga oshiring"),
        desc: t("Qulay usulda to'lov qiling"),
        icon: CheckCircle,
      },
      {
        step: '04',
        title: t('Mahsulotni oling'),
        desc: t('3-7 kun ichida yetkazib beramiz'),
        icon: Truck,
      },
    ],
    [t]
  )

  const stats = useMemo(
    () => [
      {
        number: '2500',
        label: t('Mamnun mijozlar'),
        icon: Users,
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-50',
        delay: '0',
      },
      {
        number: '5000',
        label: t('Yetkazilgan mahsulotlar'),
        icon: Package,
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
        delay: '100',
      },
      {
        number: '50',
        label: t('Premium brendlar'),
        icon: Award,
        color: 'from-teal-500 to-emerald-600',
        bgColor: 'bg-teal-50',
        delay: '200',
      },
      {
        number: '15',
        label: t('Yevropa davlatlari'),
        icon: Globe,
        color: 'from-emerald-600 to-green-700',
        bgColor: 'bg-emerald-50',
        delay: '300',
      },
      {
        number: '4.9',
        label: t('Mijozlar bahosi'),
        icon: Star,
        color: 'from-green-600 to-emerald-700',
        bgColor: 'bg-green-50',
        delay: '400',
      },
    ],
    [t]
  )

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = useMemo(
    () => [
      {
        question: t("To'lov qanday usullarda amalga oshiriladi"),
        answer: t('payment-desc'),
        icon: CheckCircle,
        bgColor: 'bg-teal-50',
      },
      {
        question: t('Manzilingiz qayerda'),
        answer: t('faq-2-answer'),
        icon: Clock,
        bgColor: 'bg-emerald-50',
      },
    ],
    [t]
  )

  return (
    <div suppressHydrationWarning>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-fade-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/95 backdrop-blur-xl border-b border-emerald-100/50 shadow-lg shadow-emerald-500/5'
            : 'bg-white/90 backdrop-blur-lg border-b border-emerald-200/30'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              draggable={false}
              src="/images/image.png"
              alt="PRODOTTI Boutique"
              width={150}
              height={75}
              className="size-12 rounded-lg w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-[#D1A563]">PRODOTTI</h1>
              <p className="text-xs text-[#D1A563] font-medium">Boutique</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: '#about', label: t('about us') },
              { href: '#products', label: t('products') },
              { href: '#testimonials', label: t('comments') },
              { href: '#faq', label: t('faq') },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href.slice(1))}
                className="text-gray-700 hover:text-emerald-700 transition-all duration-300 font-medium relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ChangeLanguage />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {[
                { href: '#about', label: t('about us') },
                { href: '#products', label: t('products') },
                { href: '#process', label: t('process') },
                { href: '#testimonials', label: t('comments') },
                { href: '#faq', label: t('faq') },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href.slice(1))}
                  className="block text-gray-700 hover:text-emerald-700 transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white mt-4">
                {t('order now')}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-left">
              <div className="space-y-6">
                <PremiumBadge>{t('about us')}</PremiumBadge>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
                  {t('hero-title')}
                </h2>
                <p className="text-lg text-stone-200 leading-relaxed">
                  {t('hero-title-2')}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  t('Shaxsiy tanlov va sifat nazorati'),
                  t("To'g'ridan-to'g'ri import qilish"),
                  t('Rasmiy kafolat va sertifikatlar'),
                  t('Mijozlar bilan uzoq muddatli munosabatlar'),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group animate-slide-left"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-stone-300 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* <Button className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-8 py-3 rounded-full shadow-lg shadow-emerald-500/25 group">
                Batafsil ma'lumot
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button> */}
            </div>

            <div className="relative animate-slide-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 group">
                <Image
                  src={street}
                  alt="About Us"
                  width={500}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/*
              <FloatingElement delay={1}>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 group hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">15+ davlat</div>
                      <div className="text-sm text-gray-600">
                        Hamkorlik qilamiz
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingElement> */}

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={4}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
          </FloatingElement>

          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <PremiumBadge className="mb-6">
              ✨ {t('Bizning afzalliklarimiz')}
            </PremiumBadge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 bg-clip-text text-transparent leading-tight">
              {t("Nima uchun PRODOTTI'ni tanlashadi")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('advantage-desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl shadow shadow-[#0E3633] bg-white/80 backdrop-blur-sm border border-emerald-100/50 hover:bg-[#0E3633] hover:shadow-2xl hover:shadow-[#0E3633]/10 transition-all duration-500 hover:-translate-y-3 animate-fade-scale"
                style={{
                  animationDelay: `${Number.parseInt(feature.delay) + 200}ms`,
                }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-3xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-emerald-100 relative overflow-hidden`}
                  >
                    <feature.icon className="w-10 h-10 text-emerald-600 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                <div className="relative text-center space-y-3">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer group overflow-hidden bg-white/80 backdrop-blur-sm animate-fade-scale p-5"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative overflow-hidden h-[300px]">
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={true}
                      pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                          return `<span class="${className} custom-bullet"></span>`
                        },
                      }}
                      navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                      }}
                      className="h-[300px] rounded-lg overflow-hidden"
                    >
                      {category?.prodImages?.map((image, index) => (
                        <SwiperSlide key={index} className="h-[300px]">
                          <AntdImage
                            src={image || '/placeholder.svg'}
                            alt={`Slide ${index + 1}`}
                            imgStyle={{
                              width: '100% !important',
                              height: '300px !important',
                              objectFit: 'contain !important',
                              backgroundSize: 'contain !important',
                              backgroundPosition: 'center !important',
                              backgroundRepeat: 'no-repeat !important',
                            }}
                            height={300}
                            className="h-full object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom left arrow */}
                    <div className="custom-swiper-button-prev absolute top-1/2 left-2 z-50 -translate-y-1/2 cursor-pointer text-main rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110">
                      <ChevronLeft size={20} />
                    </div>

                    {/* Custom right arrow */}
                    <div className="custom-swiper-button-next absolute top-1/2 right-2 z-50 -translate-y-1/2 cursor-pointer text-main rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110">
                      <ChevronRight size={20} />
                    </div>

                    {/* Custom pagination */}
                    <div className="custom-swiper-pagination flex justify-center gap-2 mt-4" />
                  </div>

                  {/* <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#154e4a] to-green-600 text-white border-0 shadow-lg">
                    {category.badge}
                  </Badge> */}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <CardContent className="px-0">
                  <div className="flex justify-start items-center gap-2 w-full overflow-x-auto">
                    {category?.images?.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                        width={50}
                        height={50}
                        className="w-18 object-cover"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#154e4a] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.desc}</p>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

          {/* Animated Stars */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
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
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group animate-fade-scale"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon with Animation */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -inset-2 bg-yellow-300/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image || '/images/placeholder.png'}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-emerald-200 text-sm">
                        {testimonial.role}
                      </div>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement delay={0}>
            <div className="absolute top-10 left-20 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
          </FloatingElement>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
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
                className="group text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 animate-fade-scale"
                style={{
                  animationDelay: `${Number.parseInt(stat.delay) + 300}ms`,
                }}
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 border border-emerald-100 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                    ></div>
                    <stat.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300 relative z-10" />

                    {/* Rotating Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-emerald-200 group-hover:border-transparent transition-colors duration-300">
                      <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>

                <div className="space-y-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.number.includes('.') ? '/5' : '+'}
                  />
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                      style={{
                        transitionDelay: `${
                          Number.parseInt(stat.delay) + 200
                        }ms`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Line */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-gradient-to-br from-[#154e4a] to-[#0E3633] relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <PremiumBadge className="mb-6">FAQ</PremiumBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('frequently asked questions')}
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              {t('faq-desc')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden group animate-fade-scale ${
                  openIndex === index
                    ? 'ring-2 ring-emerald-200 shadow-emerald-500/20'
                    : ''
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full p-6 text-left hover:bg-emerald-50/50 transition-colors duration-200 flex items-center gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 ${faq.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                    >
                      <faq.icon className="w-6 h-6 text-emerald-600 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {t("Javobni ko'rish uchun bosing")}
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-emerald-600 ${
                        openIndex === index ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r from-[#258b85] to-[#0E3633] bg-opacity-5 relative overflow-hidden`}
                      >
                        <p className="text-stone-300 leading-relaxed relative z-10">
                          {faq.answer}
                        </p>

                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent -translate-x-full animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden group">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                  <Heart className="mr-2 w-6 h-6 text-emerald-600 animate-pulse" />
                  {t('any questions')}
                </h3>
                <p className="text-gray-600 mb-6">{t('faq-desc-2')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+998950533333"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-emerald-500/25 group"
                  >
                    <Phone className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                    {t("Qo'ng'iroq qiling")}
                  </Link>
                  <Link
                    target="_blank"
                    href="https://t.me/prodotti_uz"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 border-2 border-emerald-200 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 group"
                  >
                    <FaTelegramPlane className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                    {t('Telegram orqali yozing')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

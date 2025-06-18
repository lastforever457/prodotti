import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronDown,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Package,
  Phone,
  Quote,
  Shield,
  Star,
  Truck,
  Twitter,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../../public/images/image.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-200/50 shadow-sm">
        <div className="container-cs py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={icon}
              alt="PRODOTTI boutique"
              width={120}
              height={60}
              className="h-12 w-auto rounded-full"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Biz haqimizda
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Mahsulotlar
            </Link>
            <Link
              href="#process"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Jarayon
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Sharhlar
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Aloqa
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-300 hover:bg-emerald-50"
                >
                  <span className="mr-2">🇺🇿</span>
                  UZ
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <span className="mr-2">🇺🇿</span>
                  O'zbek
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇷🇺</span>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇮🇹</span>
                  Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white hidden md:flex">
              Buyurtma berish
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-green-800/5 to-emerald-900/10"></div>
        <div className="container-cs relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl text-emerald-800 lg:text-7xl font-bold leading-tight">
                  🌿 Премиум-продукты из Европы
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Eng nufuzli Yevropa brendlaridan tanlangan mahsulotlar. Har
                  bir buyum - bu an'ana, sifat va nafislikning mukammal
                  uyg'unligi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-lg rounded-full"
                >
                  Kolleksiyani ko'rish
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">2K+</div>
                  <div className="text-sm text-gray-600">Mamnun mijozlar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">50+</div>
                  <div className="text-sm text-gray-600">Premium brendlar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">4.9</div>
                  <div className="text-sm text-gray-600">Reytingimiz</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Italian Fashion"
                    width={250}
                    height={300}
                    className="rounded-3xl shadow-2xl"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="European Accessories"
                    width={250}
                    height={200}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <Image
                    src="/placeholder.svg?height=250&width=250"
                    alt="Luxury Items"
                    width={250}
                    height={250}
                    className="rounded-3xl shadow-2xl"
                  />
                  <Image
                    src="/placeholder.svg?height=220&width=250"
                    alt="Home Decor"
                    width={250}
                    height={220}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container-cs">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Original',
                desc: 'Faqat rasmiy brendlardan',
              },
              { icon: Truck, title: 'Tez yetkazish', desc: '3-7 kun ichida' },
              {
                icon: Award,
                title: 'Premium sifat',
                desc: 'Yuqori standartlar',
              },
              {
                icon: Users,
                title: "24/7 qo'llab-quvvatlash",
                desc: 'Har doim yordamda',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-emerald-900" />
                </div>
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="text-emerald-200">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container-cs">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  Bizning hikoyamiz
                </Badge>
                <h2 className="text-5xl font-bold text-gray-800">
                  Yevropa <span className="text-emerald-700">an'analarini</span>{' '}
                  O'zbekistonga olib kelmoqdamiz
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  2020-yilda tashkil etilgan PRODOTTI boutique - bu Italiya,
                  Fransiya, Ispaniya va boshqa Yevropa davlatlarining eng yaxshi
                  mahsulotlarini tanlab, sizga yetkazib beruvchi ishonchli
                  hamkor.
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
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full">
                Batafsil ma'lumot
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About Us"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">15+ davlat</div>
                    <div className="text-sm text-gray-600">
                      Hamkorlik qilamiz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section
        id="products"
        className="py-24 bg-gradient-to-br from-emerald-50 to-green-50"
      >
        <div className="container-cs">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-6">
              Mahsulotlar katalogi
            </Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Eksklyuziv <span className="text-emerald-700">kolleksiyalar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har bir kategoriyada eng yaxshi brendlarning eng so'nggi
              kolleksiyalari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Italyan modasi',
                desc: 'Gucci, Prada, Versace',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Yangi kolleksiya',
                color: 'emerald',
              },
              {
                title: 'Fransuz kosmetikasi',
                desc: 'Chanel, Dior, Lancôme',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Bestseller',
                color: 'yellow',
              },
              {
                title: 'Shveytsariya soatlari',
                desc: 'Rolex, Omega, TAG Heuer',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Luksuzli',
                color: 'emerald',
              },
              {
                title: 'Nemis avtomobil aksessuarlari',
                desc: 'BMW, Mercedes, Audi',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Premium',
                color: 'yellow',
              },
              {
                title: 'Skandinav uy buyumlari',
                desc: 'IKEA, H&M Home, Nordic',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Eco-friendly',
                color: 'emerald',
              },
              {
                title: 'Ispaniya mahsulotlari',
                desc: 'Zara, Mango, Desigual',
                image: '/placeholder.svg?height=400&width=350',
                badge: 'Trend',
                color: 'yellow',
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={category.image || '/placeholder.svg'}
                    alt={category.title}
                    width={350}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      category.color === 'emerald'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-yellow-500 text-emerald-900'
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
                  <Button
                    variant="ghost"
                    className="text-emerald-700 hover:text-emerald-800 p-0 h-auto font-semibold"
                  >
                    Ko'proq ko'rish
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container-cs">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-6">
              Qanday ishlaydi
            </Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="text-emerald-700">Oddiy</span> 4 qadam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buyurtmadan tortib yetkazib berishgacha bo'lgan jarayon
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Mahsulotni tanlang',
                desc: 'Katalogdan yoqgan mahsulotingizni tanlang',
                icon: Package,
              },
              {
                step: '02',
                title: 'Buyurtma bering',
                desc: "Telegram yoki telefon orqali bog'laning",
                icon: Phone,
              },
              {
                step: '03',
                title: "To'lovni amalga oshiring",
                desc: "Qulay usulda to'lov qiling",
                icon: CheckCircle,
              },
              {
                step: '04',
                title: 'Mahsulotni oling',
                desc: '3-7 kun ichida yetkazib beramiz',
                icon: Truck,
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-6 relative">
                <div className="relative">
                  <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-900">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-emerald-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-emerald-900 to-green-800 text-white"
      >
        <div className="container-cs">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500 text-emerald-900 hover:bg-yellow-400 mb-6">
              Mijozlar fikri
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Bizga <span className="text-yellow-400">ishongan</span> mijozlar
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Minglab mijozlarimizning mamnuniyati - bizning eng katta yutuqimiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dilnoza Karimova',
                role: 'Biznes ayol',
                text: 'PRODOTTI boutique orqali Italiyadan olib kelgan sumkam haqiqatan ham ajoyib! Sifati va dizayni mukammal.',
                rating: 5,
                image: '/placeholder.svg?height=80&width=80',
              },
              {
                name: 'Bobur Rahimov',
                role: 'Arxitektor',
                text: "Shveytsariya soatini buyurtma qilgandim. Yetkazib berish tez bo'ldi, mahsulot original va kafolat bilan keldi.",
                rating: 5,
                image: '/placeholder.svg?height=80&width=80',
              },
              {
                name: 'Malika Tosheva',
                role: 'Dizayner',
                text: 'Fransuz kosmetikasi uchun eng ishonchli manzil. Har doim original mahsulotlar va professional xizmat.',
                rating: 5,
                image: '/placeholder.svg?height=80&width=80',
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              >
                <CardContent className="p-8">
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
                      <div className="text-emerald-200 text-sm">
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-cs">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { number: '2,500+', label: 'Mamnun mijozlar', icon: Users },
              {
                number: '5,000+',
                label: 'Yetkazilgan mahsulotlar',
                icon: Package,
              },
              { number: '50+', label: 'Premium brendlar', icon: Award },
              { number: '15+', label: 'Yevropa davlatlari', icon: Globe },
              { number: '4.9/5', label: 'Mijozlar bahosi', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-emerald-700" />
                </div>
                <div className="text-4xl font-bold text-emerald-700">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-green-600">
        <div className="container-cs text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Yangiliklar va maxsus takliflar
            </h2>
            <p className="text-xl text-emerald-100">
              Eng so'nggi kolleksiyalar va eksklyuziv chegirmalar haqida
              birinchi bo'lib bilib oling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingizni kiriting"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-emerald-900 px-8 py-3 rounded-full font-semibold">
                Obuna bo'lish
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-cs">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-6">
              Ko'p so'raladigan savollar
            </Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Sizni qiziqtirgan{' '}
              <span className="text-emerald-700">savollar</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Mahsulotlar qanchalik tez yetkaziladi?',
                answer:
                  "Odatda 3-7 ish kuni ichida yetkazib beramiz. Ba'zi maxsus buyurtmalar 10-14 kun olishi mumkin.",
              },
              {
                question:
                  "Mahsulotlar originalligiga qanday ishonch hosil qilsam bo'ladi?",
                answer:
                  "Barcha mahsulotlarimiz rasmiy distribyutorlardan olinadi va original sertifikatlar bilan ta'minlanadi.",
              },
              {
                question: "To'lov qanday usullarda amalga oshiriladi?",
                answer:
                  "Naqd pul, bank o'tkazmasi, Click, Payme va boshqa qulay usullarda to'lov qilishingiz mumkin.",
              },
              {
                question: 'Mahsulotni qaytarish mumkinmi?',
                answer:
                  'Ha, 14 kun ichida mahsulotni qaytarish yoki almashtirish imkoniyati mavjud.',
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-800 to-green-700 text-white">
        <div className="container-cs text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold">Премиум-продукты из Европы</h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Bugun bizga qo'shiling va premium mahsulotlarning ajoyib dunyosiga
              kirish imkoniyatini qo'lga kiriting. Har bir xarid - bu sifat va
              nafislikka sarmoya.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-emerald-900 px-10 py-4 text-lg rounded-full font-semibold"
              >
                Hoziroq xarid qiling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-800 px-10 py-4 text-lg rounded-full"
              >
                Bepul maslahat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="container-cs">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <Image
                src={icon}
                alt="PRODOTTI boutique"
                width={150}
                height={75}
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed max-w-md">
                Yevropa sifatini O'zbekistonga olib keluvchi ishonchli
                hamkoringiz. Premium mahsulotlar, professional xizmat va
                mijozlar mamnuniyati - bizning asosiy tamoyillarimiz.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Tez havolalar</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Mahsulotlar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Yetkazib berish
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Qaytarish siyosati
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Maxfiylik siyosati
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Kategoriyalar</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Italyan modasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Fransuz kosmetikasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Shveytsariya soatlari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Uy buyumlari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Aksessuarlar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Aloqa</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+998 90 123 45 67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>info@prodotti.uz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Toshkent, O'zbekiston</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>Dush-Juma: 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PRODOTTI boutique. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

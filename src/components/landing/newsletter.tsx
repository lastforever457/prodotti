import { Mail, Send, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        <div
          className="absolute bottom-32 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header section */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">
                Eksklyuziv takliflar
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Yangiliklar va{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                maxsus takliflar
              </span>
            </h2>

            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Eng so'nggi kolleksiyalar va eksklyuziv chegirmalar haqida
              birinchi bo'lib bilib oling. Premium mahsulotlar dunyosiga kirish
              uchun bizga qo'shiling!
            </p>
          </div>

          {/* Newsletter form */}
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>

              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <input
                    type="email"
                    placeholder="Email manzilingizni kiriting"
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-blue-300 border-0 focus:ring-0 outline-none text-lg"
                  />
                </div>

                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <span>Obuna bo'lish</span>
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Bepul obuna</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Spam yo'q</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Istalgan vaqt bekor qilish</span>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <p className="text-blue-300 mb-4">2,500+ mijoz bizga ishonadi</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <span className="text-blue-300 ml-2">va boshqalar...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

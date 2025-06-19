import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

const Cta = () => {
  const t = useTranslations()
  return (
    <section className="py-24 bg-gradient-to-br from-main to-main text-white">
      <div className="container-cs text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold">Премиум-продукты из Европы</h2>
          <p className="text-xl text-main leading-relaxed">
            Bugun bizga qo'shiling va premium mahsulotlarning ajoyib dunyosiga
            kirish imkoniyatini qo'lga kiriting. Har bir xarid - bu sifat va
            nafislikka sarmoya.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-main px-10 py-4 text-lg rounded-full font-semibold"
            >
              Hoziroq xarid qiling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-main px-10 py-4 text-lg rounded-full"
            >
              Bepul maslahat
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta

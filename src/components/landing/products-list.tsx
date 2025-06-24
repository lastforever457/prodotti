'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import aroyD from '../../../public/images/aroy-d.png'
import chaokoh from '../../../public/images/chaokoh.jpg'
import fabbri from '../../../public/images/fabbri.png'
import falcone from '../../../public/images/falcone.png'
import farchioni from '../../../public/images/farchioni.png'
import granoro from '../../../public/images/granoro.png'
import gullon from '../../../public/images/gullon.png'
import italcarciofi from '../../../public/images/italcarciofi.png'
import maePloy from '../../../public/images/mae-ploy.jpg'
import muraca from '../../../public/images/muraca.png'
import nestiDante from '../../../public/images/nesti-dante.png'
import schogetten from '../../../public/images/schogetten.jpg'
import EmblaProducts from './embla-products'

const ProductsList = () => {
  const t = useTranslations()
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [previewScale, setPreviewScale] = useState(1)
  const [previewRotation, setPreviewRotation] = useState(0)

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
          '/images/products/muraca1.png',
          '/images/products/muraca2.png',
          '/images/products/muraca3.png',
        ],
        gradient: 'from-emerald-600 to-green-700',
        images: [italcarciofi, granoro, farchioni, muraca],
      },
      {
        title: t('Panasia tovarlari'),
        desc: 'Chaokoh, Aroy-D, Mae Ploy',
        prodImages: [
          '/images/products/aroy-d9.png',
          '/images/products/aroy-d1.png',
          '/images/products/aroy-d2.png',
          '/images/products/aroy-d4.png',
          '/images/products/aroy-d5.png',
          '/images/products/aroy-d6.png',
          '/images/products/aroy-d7.png',
          '/images/products/aroy-d8.png',
          '/images/products/chaokoh1.png',
          '/images/products/chaokoh2.png',
          '/images/products/mae-ploy.png',
        ],
        gradient: 'from-green-600 to-emerald-700',
        images: [aroyD, chaokoh, maePloy],
      },
      {
        title: t('Shirinliklar'),
        desc: 'FABBRI, Falcone, Schogetten, Gullon',
        prodImages: [
          '/images/products/fabbri5.png',
          '/images/products/fabbri4.png',
          '/images/products/fabbri3.png',
          '/images/products/fabbri1.png',
          '/images/products/fabbri2.png',
          '/images/products/amaretti1.png',
          '/images/products/amaretti2.png',
          '/images/products/cantucci1.png',
          '/images/products/cantucci2.png',
          '/images/products/schogetten1.png',
          '/images/products/schogetten2.png',
          '/images/products/schogetten3.png',
          '/images/products/schogetten4.png',
          '/images/products/gullon1.png',
          '/images/products/gullon2.png',
          '/images/products/gullon3.png',
        ],
        images: [fabbri, falcone, schogetten, gullon],
        gradient: 'from-teal-600 to-emerald-700',
      },

      {
        title: t('kosmetikalar'),
        desc: 'Nesti Dante',
        prodImages: [
          '/images/products/nesti1.png',
          '/images/products/nesti2.png',
          '/images/products/nesti3.png',
          '/images/products/nesti4.png',
          '/images/products/nesti5.png',
          '/images/products/nesti6.png',
          '/images/products/nesti7.png',
        ],
        gradient: 'from-green-700 to-emerald-800',
        images: [nestiDante],
      },
    ],
    [t]
  )

  return categories.map((category: Record<string, any>, index: number) => (
    <Card
      key={index + 1}
      className="border-0 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer group overflow-hidden bg-white/80 backdrop-blur-sm"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 100 + 200}ms both`,
      }}
    >
      <div className=" p-5">
        <EmblaProducts
          images={category.prodImages}
          className="mb-4"
          isPreviewOpen={isPreviewOpen}
          previewIndex={previewIndex}
          previewScale={previewScale}
          previewRotation={previewRotation}
          setIsPreviewOpen={setIsPreviewOpen}
          setPreviewIndex={setPreviewIndex}
          setPreviewScale={setPreviewScale}
          setPreviewRotation={setPreviewRotation}
        />
      </div>

      <CardContent className="px-5 pb-5">
        {/* Thumbnail Images */}
        <div className="product-logo flex justify-start h-20 items-start gap-2 w-full overflow-x-auto mb-4">
          {category?.images?.map((image: any, imgIndex: number) => (
            <div key={imgIndex} className="flex-shrink-0">
              <Image
                priority
                src={image || '/placeholder.svg'}
                alt={`thumbnail-${imgIndex}`}
                width={50}
                height={50}
                unoptimized
                className="w-full max-w-20 max-h-16 min-h-10 h-full object-contain transition-colors duration-200"
              />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
          {category.title}
        </h3>
        <p className="text-gray-600 mb-4">{category.desc}</p>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
        </div>
      </CardContent>
    </Card>
  ))
}

export default ProductsList

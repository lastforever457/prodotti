'use client'

import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'

interface EmblaProductsProps {
  images: string[]
  className?: string
}

const EmblaProducts = ({ images, className = '' }: EmblaProductsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // Preview states
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [previewScale, setPreviewScale] = useState(1)
  const [previewRotation, setPreviewRotation] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Preview functions
  const openPreview = (index: number) => {
    console.log('Preview ochilmoqda:', index)
    setPreviewIndex(index)
    setIsPreviewOpen(true)
    setPreviewScale(1)
    setPreviewRotation(0)
    document.body.style.overflow = 'hidden'
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
    document.body.style.overflow = 'unset'
  }

  const previewPrev = () => {
    setPreviewIndex((prev) => (prev === 0 ? images?.length - 1 : prev - 1))
    setPreviewScale(1)
    setPreviewRotation(0)
  }

  const previewNext = () => {
    setPreviewIndex((prev) => (prev === images?.length - 1 ? 0 : prev + 1))
    setPreviewScale(1)
    setPreviewRotation(0)
  }

  const zoomIn = () => {
    setPreviewScale((prev) => Math.min(prev + 0.25, 5))
  }

  const zoomOut = () => {
    setPreviewScale((prev) => Math.max(prev - 0.25, 0.25))
  }

  const rotate = () => {
    setPreviewRotation((prev) => prev + 90)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = images[previewIndex]
    link.download = `image-${previewIndex + 1}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPreviewOpen) return

      switch (e.key) {
        case 'Escape':
          closePreview()
          break
        case 'ArrowLeft':
          previewPrev()
          break
        case 'ArrowRight':
          previewNext()
          break
        case '+':
        case '=':
          if (e.shiftKey) zoomIn()
          break
        case '-':
          zoomOut()
          break
        case 'r':
        case 'R':
          rotate()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isPreviewOpen, images?.length])

  if (!images || images?.length === 0) {
    return (
      <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        No images available
      </div>
    )
  }

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((image: string, index: number) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[300px] group cursor-pointer">
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority
                    className="object-contain transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Preview overlay */}
                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center"
                    style={{
                      zIndex: 100,
                    }}
                    onClick={() => console.log('fsdsd')}
                  >
                    <div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2"
                      style={{
                        zIndex: 1000,
                      }}
                      onClick={() => openPreview(index)}
                    >
                      <ZoomIn className="h-5 w-5 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {images?.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg h-8 w-8"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg h-8 w-8"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Pagination Dots */}
        {images?.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? 'bg-emerald-500 w-6'
                    : 'bg-emerald-50 hover:bg-emerald-100'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-[60] text-white hover:bg-white/20 h-10 w-10"
            onClick={closePreview}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Toolbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 bg-black/50 rounded-lg p-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              onClick={zoomOut}
              disabled={previewScale <= 0.25}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-white text-sm px-2">
              {Math.round(previewScale * 100)}%
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              onClick={zoomIn}
              disabled={previewScale >= 5}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              onClick={rotate}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              onClick={downloadImage}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation arrows */}
          {images?.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/20 h-12 w-12"
                onClick={previewPrev}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/20 h-12 w-12"
                onClick={previewNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Main image */}
          <div className="relative w-full h-full flex items-center justify-center overflow-auto p-4">
            <div
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${previewScale}) rotate(${previewRotation}deg)`,
                transformOrigin: 'center center',
              }}
            >
              <Image
                src={images[previewIndex] || '/placeholder.svg'}
                alt={`Preview ${previewIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                priority
              />
            </div>
          </div>

          {/* Image counter */}
          {images?.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
              {previewIndex + 1} / {images?.length}
            </div>
          )}

          {/* Thumbnail strip */}
          {images?.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-60 flex gap-2 bg-black/50 p-2 rounded-lg max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`relative w-12 h-12 rounded border-2 transition-colors flex-shrink-0 ${
                    index === previewIndex
                      ? 'border-emerald-500'
                      : 'border-transparent hover:border-white/50'
                  }`}
                  onClick={() => {
                    setPreviewIndex(index)
                    setPreviewScale(1)
                    setPreviewRotation(0)
                  }}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    priority
                    className="object-cover rounded"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default EmblaProducts

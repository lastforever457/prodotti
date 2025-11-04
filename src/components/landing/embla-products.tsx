"use client";

import { Image as AntdImage } from "antd";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Button } from "../ui/button";

const EmblaProducts = ({
  images,
  className = "",
  isPreviewOpen,
  previewIndex,
  previewScale,
  previewRotation,
  setIsPreviewOpen,
  setPreviewIndex,
  setPreviewScale,
  setPreviewRotation,
}: {
  images: string[];
  className?: string;
  isPreviewOpen: boolean;
  previewIndex: number;
  previewScale: number;
  previewRotation: number;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
  setPreviewIndex: Dispatch<SetStateAction<number>>;
  setPreviewScale: Dispatch<SetStateAction<number>>;
  setPreviewRotation: Dispatch<SetStateAction<number>>;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Preview states

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Preview functions
  const openPreview = (index: number) => {
    console.log("Preview ochilmoqda:", index);
    setPreviewIndex(index);
    setIsPreviewOpen(true);
    setPreviewScale(1);
    setPreviewRotation(0);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    document.body.style.overflow = "unset";
  };

  const previewPrev = () => {
    setPreviewIndex((prev) => (prev === 0 ? images?.length - 1 : prev - 1));
    setPreviewScale(1);
    setPreviewRotation(0);
  };

  const previewNext = () => {
    setPreviewIndex((prev) => (prev === images?.length - 1 ? 0 : prev + 1));
    setPreviewScale(1);
    setPreviewRotation(0);
  };

  const zoomIn = () => {
    setPreviewScale((prev) => Math.min(prev + 0.25, 5));
  };

  const zoomOut = () => {
    setPreviewScale((prev) => Math.max(prev - 0.25, 0.25));
  };

  const rotate = () => {
    setPreviewRotation((prev) => prev + 90);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[previewIndex];
    link.download = `image-${previewIndex + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPreviewOpen) return;

      switch (e.key) {
        case "Escape":
          closePreview();
          break;
        case "ArrowLeft":
          previewPrev();
          break;
        case "ArrowRight":
          previewNext();
          break;
        case "+":
        case "=":
          if (e.shiftKey) zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "r":
        case "R":
          rotate();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen, images?.length]);

  if (!images || images?.length === 0) {
    return (
      <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        No images available
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((image: string, index: number) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[300px] group cursor-pointer">
                  <AntdImage
                    src={image || "/placeholder.svg"}
                    alt={`Slide ${index + 1}`}
                    height={300}
                    width={"100%"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-[300px] w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
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
          <div className="flex justify-center overflow-x-auto w-full gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? "bg-emerald-500 w-6"
                    : "bg-emerald-50 hover:bg-emerald-100"
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EmblaProducts;

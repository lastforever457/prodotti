const PreviewImage = () => {
  isPreviewOpen && (
    <div className="absolute top-0 left-0 w-full h-full z-50 bg-black/90 flex items-center justify-center">
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
  )
}

export default PreviewImage

"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface LightboxProps {
  isOpen: boolean
  images: Array<{ src: string; alt: string }>
  onClose: () => void
  projectTitle: string
}

export default function PortfolioLightbox({ isOpen, images, onClose, projectTitle }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
      })
      gsap.from(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
      })
    }
  }, [isOpen])

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose,
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 opacity-0"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-white">
          <h3 className="font-display text-2xl font-bold text-white">{projectTitle}</h3>
          <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 bg-black rounded-lg overflow-hidden">
          <img
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-colors text-white z-10"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-colors text-white z-10"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-body">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex ? "border-accent" : "border-white/30 hover:border-white/50"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react"

interface ProjectItem {
  category: string
  title: string
  desc: string
  detailedDescription?: string
  images: string[]
  thumbnail: string
  video?: string
}

interface LightboxProps {
  isOpen: boolean
  project: ProjectItem
  onClose: () => void
}

export default function PortfolioLightbox({ isOpen, project, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
    }
  }, [project, isOpen])

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
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const isVideo = (filename: string) => {
    return filename.toLowerCase().endsWith(".mp4") || filename.toLowerCase().endsWith(".webm")
  }

  if (!isOpen) return null

  const currentMedia = project.images[currentIndex]

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 opacity-0"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="relative max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col bg-[#C3DEEF] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 md:p-8 pb-2 sm:pb-4">
          <div className="flex justify-between items-start gap-3 mb-3 sm:mb-4">
            <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-[#545928] leading-tight">
              {project.title}
            </h3>
            <button
              onClick={handleClose}
              className="p-1.5 sm:p-2 rounded-lg transition-colors shrink-0 hover:bg-black/10 text-[#545928]"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {project.detailedDescription && (
            <p className="text-xs sm:text-sm md:text-base max-w-4xl leading-relaxed text-gray-800 mb-3 sm:mb-4">
              {project.detailedDescription}
            </p>
          )}

          <button
            onClick={handleClose}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors font-semibold bg-[#545928] hover:bg-[#545928]/90 text-white text-xs sm:text-sm md:text-base"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Volver a proyectos
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 min-h-0">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-2xl">
            {isVideo(currentMedia) ? (
              <video
                src={currentMedia}
                className="w-full rounded-xl object-contain mx-auto"
                style={{ maxHeight: "50vh" }}
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={currentMedia || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${currentIndex + 1}`}
                className="w-full rounded-xl object-contain mx-auto"
                style={{ maxHeight: "50vh" }}
              />
            )}
          </div>
        </div>

        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full transition-colors z-10 bg-[#545928] hover:bg-[#545928]/90 text-white shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full transition-colors z-10 bg-[#545928] hover:bg-[#545928]/90 text-white shadow-lg"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
          </>
        )}

        {project.images.length > 1 && (
          <div className="px-4 py-2 text-center">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-body bg-[#545928] text-white">
              {currentIndex + 1} / {project.images.length}
            </span>
          </div>
        )}

        {project.images.length > 1 && (
          <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 justify-start md:justify-center pb-2">
              {project.images.map((media, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all relative flex-shrink-0 ${
                    index === currentIndex
                      ? "border-[#545928] scale-105 sm:scale-110"
                      : "border-gray-400 hover:border-[#545928]"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  {isVideo(media) ? (
                    <>
                      <video src={media} className="w-full h-full object-cover" muted />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="white" />
                      </div>
                    </>
                  ) : (
                    <img
                      src={media || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

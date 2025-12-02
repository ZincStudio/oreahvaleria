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
  const isUICProject = project.title === "Identidad UIC 50 años"

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 opacity-0"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className={`relative max-w-6xl w-full max-h-[90vh] flex flex-col ${
          isUICProject ? "bg-[#E69D3B]/80 p-8 rounded-2xl" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex justify-between items-start">
            <h3 className={`font-display text-3xl font-bold ${isUICProject ? "text-[#545928]" : "text-white"}`}>
              {project.title}
            </h3>
            <button
              onClick={handleClose}
              className={`p-2 rounded-lg transition-colors shrink-0 ${
                isUICProject ? "hover:bg-black/10 text-[#545928]" : "hover:bg-white/10 text-white"
              }`}
            >
              <X size={24} />
            </button>
          </div>
          {project.detailedDescription && (
            <p className={`text-base max-w-4xl leading-relaxed ${isUICProject ? "text-gray-800" : "text-white/90"}`}>
              {project.detailedDescription}
            </p>
          )}
          <button
            onClick={handleClose}
            className={`self-start flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-semibold ${
              isUICProject
                ? "bg-[#545928] hover:bg-[#545928]/90 text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            <ChevronLeft size={20} />
            Volver a proyectos
          </button>
        </div>

        {/* Media Container */}
        <div
          className={`relative flex-1 rounded-lg overflow-hidden flex items-center justify-center ${isUICProject ? "" : "bg-black"}`}
        >
          <div className={`${isUICProject ? "bg-white p-4 rounded-lg shadow-lg" : ""}`}>
            {isVideo(currentMedia) ? (
              <video
                src={currentMedia}
                className={`object-contain ${isUICProject ? "max-w-lg w-full" : "w-full"}`}
                style={{ maxHeight: isUICProject ? "50vh" : "70vh" }}
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={currentMedia || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${currentIndex + 1}`}
                className={`object-contain ${isUICProject ? "max-w-lg w-full" : "w-full"}`}
                style={{ maxHeight: isUICProject ? "50vh" : "70vh" }}
              />
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-lg transition-colors z-10 ${
                isUICProject
                  ? "bg-[#545928] hover:bg-[#545928]/90 text-white"
                  : "bg-white/20 hover:bg-white/40 text-white"
              }`}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-lg transition-colors z-10 ${
                isUICProject
                  ? "bg-[#545928] hover:bg-[#545928]/90 text-white"
                  : "bg-white/20 hover:bg-white/40 text-white"
              }`}
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {project.images.length > 1 && (
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-base font-body ${
              isUICProject ? "bg-[#545928] text-white" : "bg-black/70 text-white"
            }`}
          >
            {currentIndex + 1} / {project.images.length}
          </div>
        )}

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-3 mt-6 justify-center flex-wrap">
            {project.images.map((media, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all relative ${
                  index === currentIndex
                    ? isUICProject
                      ? "border-[#545928] scale-110"
                      : "border-[#FF6B35] scale-110"
                    : isUICProject
                      ? "border-gray-400 hover:border-[#545928]"
                      : "border-white/30 hover:border-white/50"
                }`}
              >
                {isVideo(media) ? (
                  <>
                    <video src={media} className="w-full h-full object-cover" muted />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-6 h-6 text-white" fill="white" />
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
        )}
      </div>
    </div>
  )
}

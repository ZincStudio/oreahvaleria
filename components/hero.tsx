"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6",
      )
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6",
      )
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="flex items-center justify-center pt-36 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20 px-4 md:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-80 md:h-80 bg-muted/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center relative z-10">
        <h1
          ref={titleRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight text-primary"
        >
          Vale Orea
        </h1>

        <p
          ref={subtitleRef}
          className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-secondary font-semibold mb-4 md:mb-6 lg:mb-8"
        >
          Transformando ideas en piezas visuales únicas
        </p>

        <p
          ref={descRef}
          className="font-body text-sm sm:text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-12 px-2 md:px-4"
        >
          Para jóvenes adultos creativos que buscan una identidad visual profesional con autenticidad emocional.
          Convierte la originalidad en arte que resuena con tu audiencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2 md:px-4">
          <button
            onClick={() => scrollToSection("mi-trabajo")}
            className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-primary hover:text-white transition-all transform hover:scale-105"
          >
            Mi Trabajo
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg border-2 border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-all"
          >
            Contáctame
          </button>
        </div>
      </div>
    </section>
  )
}

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

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-muted/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center relative z-10">
        <h1 ref={titleRef} className="font-display text-6xl md:text-7xl font-black mb-6 leading-tight text-primary">
          Vale Orea
        </h1>

        <p ref={subtitleRef} className="font-body text-xl md:text-2xl text-secondary font-semibold mb-8">
          Transformando ideas en piezas visuales únicas
        </p>

        <p ref={descRef} className="font-body text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-12">
          Para jóvenes adultos creativos que buscan una identidad visual profesional con autenticidad emocional.
          Convierte la originalidad en arte que resuena con tu audiencia.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-primary transition-all transform hover:scale-105">
            Ver Portafolio
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-all">
            Contáctame
          </button>
        </div>
      </div>
    </section>
  )
}

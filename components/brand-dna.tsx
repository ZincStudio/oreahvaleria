"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, Palette, Zap, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function BrandDNA() {
  useEffect(() => {
    const elements = gsap.utils.toArray("[data-dna-item]") as any[]

    elements.forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      })
    })
  }, [])

  return (
    <section
      id="adn"
      className="py-10 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/20"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #ffffff, rgba(195, 222, 239, 0.15), rgba(215, 169, 176, 0.1))`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-2 md:mb-3 lg:mb-4 text-center">
          Mi identidad creativa
        </h2>

        <p className="font-body text-center text-primary mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 md:px-4">
          Un espacio para compartir lo que sostiene mi forma de ilustrar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[
            {
              title: "Originalidad",
              desc: "Cada proyecto es único, diseñado específicamente para la identidad de tu marca sin compromiso creativo.",
              icon: <Sparkles className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--warm-orange)" }} />,
            },
            {
              title: "Calidad Visual",
              desc: "Atención meticulosa a cada detalle para garantizar que tu visión se materialice con excelencia artística.",
              icon: <Palette className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--warm-orange)" }} />,
            },
            {
              title: "Versatilidad",
              desc: "Adaptabilidad en diferentes estilos y medios, desde branding hasta síntesis gráfica y editorial.",
              icon: <Zap className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--warm-orange)" }} />,
            },
            {
              title: "Confianza",
              desc: "Compromiso genuino con tu proyecto, trabajando con transparencia y dedicación en cada etapa del proceso.",
              icon: <Heart className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--warm-orange)" }} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              data-dna-item
              className="p-5 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4"
              style={{ borderColor: "var(--cyan-light)" }}
            >
              <div className="mb-2 md:mb-3 lg:mb-4">{item.icon}</div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-primary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 md:mt-12 lg:mt-16 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-3 lg:border-4"
          data-dna-item
          style={{ borderColor: "var(--dusty-pink)" }}
        >
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/852423-hd_1920_1080_24fps-1kmp8kHaRzqvqp589uPGNdybNQjC9n.mp4"
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  )
}

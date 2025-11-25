"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, Palette, Zap, Film } from 'lucide-react'

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
      className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-pink-50/20"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #ffffff, rgba(195, 222, 239, 0.15), rgba(215, 169, 176, 0.1))`
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-4 text-center">
          Mi identidad creativa  
        </h2>

        <p className="font-body text-center text-primary mb-16 max-w-2xl mx-auto text-lg">
          Un espacio para compartir lo que sostiene mi forma de ilustrar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Originalidad",
              desc: "Cada proyecto es único, diseñado específicamente para la identidad de tu marca sin compromiso creativo.",
              icon: <Sparkles className="w-8 h-8" style={{ color: 'var(--warm-orange)' }} />,
            },
            {
              title: "Calidad Visual",
              desc: "Atención meticulosa a cada detalle para garantizar que tu visión se materialice con excelencia artística.",
              icon: <Palette className="w-8 h-8" style={{ color: 'var(--warm-orange)' }} />,
            },
            {
              title: "Versatilidad",
              desc: "Adaptabilidad en diferentes estilos y medios, desde branding hasta síntesis gráfica y editorial.",
              icon: <Zap className="w-8 h-8" style={{ color: 'var(--warm-orange)' }} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              data-dna-item
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4"
              style={{ borderColor: 'var(--cyan-light)' }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="font-body text-primary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border-4" data-dna-item style={{ borderColor: 'var(--dusty-pink)' }}>
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

"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  useEffect(() => {
    const items = gsap.utils.toArray("[data-testimonial]") as any[]

    items.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        rotateY: -10,
        duration: 0.6,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      })
    })
  }, [])

  const testimonials = [
    {
      name: "Sofía Martínez",
      role: "Directora Creativa",
      company: "Studio ModernoDesign",
      text: "Vale capturó la esencia de nuestra marca en cada línea. Su trabajo va más allá del diseño, es pura creatividad.",
    },
    {
      name: "Carlos López",
      role: "Emprendedor",
      company: "TechStartup Co.",
      text: "La versatilidad y profesionalismo de Vale transformó completamente nuestra identidad visual. Altamente recomendado.",
    },
    {
      name: "Analía González",
      role: "Editor en Jefe",
      company: "Revista Creativa",
      text: "Las ilustraciones de Vale aportan un toque único a cada publicación. Trabajar con ella es confianza y alegría garantizadas.",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 md:mb-4 text-center">
          Colaboraciones & Testimonios
        </h2>

        <p className="font-body text-center text-muted mb-10 md:mb-16 max-w-2xl mx-auto text-base md:text-lg px-4">
          Historias de creativos y emprendedores que confiaron en mi visión
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className="p-6 md:p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <p className="font-body text-sm md:text-base text-foreground mb-4 md:mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-3 md:pt-4">
                <p className="font-display font-bold text-sm md:text-base text-foreground">{testimonial.name}</p>
                <p className="font-body text-xs md:text-sm text-muted">{testimonial.role}</p>
                <p className="font-body text-xs md:text-sm text-accent font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

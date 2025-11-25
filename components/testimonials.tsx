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
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl font-black text-foreground mb-4 text-center md:text-5xl">
          Colaboraciones & Testimonios
        </h2>

        <p className="font-body text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
          Historias de creativos y emprendedores que confiaron en mi visión
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className="p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <p className="font-body text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                <p className="font-body text-sm text-muted">{testimonial.role}</p>
                <p className="font-body text-sm text-accent font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

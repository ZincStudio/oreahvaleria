"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Palette, BookOpen, Megaphone, Camera, Combine } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animate title
    gsap.from("[data-service-title]", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    })

    // Animate service cards with stagger
    const cards = gsap.utils.toArray("[data-service-card]") as any[]
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    })

    // Add hover animation for icons
    cards.forEach((card) => {
      const icon = card.querySelector("[data-service-icon]")
      if (icon) {
        card.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            rotation: 8,
            scale: 1.1,
            duration: 0.4,
            ease: "back.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out",
          })
        })
      }
    })
  }, [])

  const services = [
    {
      icon: Palette,
      title: "Branding",
      description:
        "Creación de identidades visuales únicas que capturan la esencia de tu marca través de ilustración personalizada.",
    },
    {
      icon: BookOpen,
      title: "Editorial",
      description:
        "Diagramación y diseño de publicaciones que combinan ilustración artesanal con narrativa visual impactante.",
    },
    {
      icon: Megaphone,
      title: "Publicidad",
      description: "Campañas visuales que generan conexión emocional mediante ilustración auténtica y creativa.",
    },
    {
      icon: Camera,
      title: "Fotografía",
      description:
        "Dirección de arte y retoque con enfoque ilustrativo para transformar imágenes en historias visuales.",
    },
    {
      icon: Combine,
      title: "Síntesis Gráfica",
      description:
        "Transformación de conceptos complejos en visuales claros y memorables mediante ilustración estratégica.",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 data-service-title className="font-display text-4xl md:text-5xl font-black mb-4 text-primary">
            Servicios
          </h2>
          <p data-service-title className="font-body text-foreground/70 max-w-2xl mx-auto text-lg">
            Soluciones creativas donde la ilustración es el puente entre tu visión y la conexión emocional con tu
            audiencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                data-service-card
                className="group relative p-8 bg-white border-2 border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-accent/50"
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div
                  data-service-icon
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-border/30 to-accent/10"
                >
                  <IconComponent className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{service.description}</p>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

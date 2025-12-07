"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Palette, BookOpen, Megaphone, Camera, Combine, Film } from "lucide-react"

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
      description: "Identidades visuales únicas mediante ilustración personalizada.",
    },
    {
      icon: BookOpen,
      title: "Editorial",
      description: "Diagramación y diseño con ilustración artesanal y narrativa visual.",
    },
    {
      icon: Megaphone,
      title: "Publicidad",
      description: "Campañas visuales con ilustración auténtica y creativa.",
    },
    {
      icon: Camera,
      title: "Fotografía",
      description: "Dirección de arte y retoque con enfoque ilustrativo.",
    },
    {
      icon: Combine,
      title: "Síntesis Gráfica",
      description: "Conceptos complejos en visuales claros mediante ilustración estratégica.",
    },
    {
      icon: Film,
      title: "Animación",
      description: "Motion graphics que dan vida a cada una de tus historias.",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            data-service-title
            className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 text-primary"
          >
            Servicios
          </h2>
          <p data-service-title className="font-body text-foreground/70 max-w-2xl mx-auto text-base md:text-lg px-4">
            Soluciones creativas donde la ilustración conecta tu visión con tu audiencia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                data-service-card
                className="group relative p-6 md:p-8 bg-white border-2 border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-accent/50"
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div
                  data-service-icon
                  className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-border/30 to-accent/10"
                >
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>

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

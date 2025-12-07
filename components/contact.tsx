"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos del formulario",
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    })

    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#C3DEEF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 contact-content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#545928] mb-4 sm:mb-6">Trabajemos juntos</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#545928] max-w-2xl mx-auto text-primary px-4">
            Tus ideas merecen trazos que las hagan brillar. Si estás listo para darles forma, trabajemos juntos y
            hagamos que el arte hable por ti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="contact-content space-y-6 sm:space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 creative-shadow shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black text-[#545928] mb-6 sm:mb-8">Información de contacto</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E69D3B] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-[#545928] mb-1 text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:hola@valeorea.com"
                      className="text-[#545928] hover:text-[#E69D3B] transition-colors text-sm sm:text-base break-all"
                    >
                      {"oreahovaleria@gmail.com"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E69D3B] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#545928] mb-1 text-sm sm:text-base">Teléfono</p>
                    <a
                      href="tel:+5491112345678"
                      className="text-[#545928] hover:text-[#E69D3B] transition-colors text-sm sm:text-base"
                    >
                      +52 55 8110 1436
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E69D3B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#545928] mb-1 text-sm sm:text-base">Ubicación</p>
                    <p className="text-[#545928] text-sm sm:text-base">CDMX, México.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <h4 className="text-lg sm:text-xl font-black text-[#545928] mb-3 sm:mb-4">Horario de atención</h4>
              <p className="text-[#545928] text-sm sm:text-base">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-[#545928] text-sm sm:text-base">Respondo consultas en menos de 24 horas</p>
            </div>
          </div>

          <div className="contact-content">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 sm:p-8 creative-shadow space-y-5 sm:space-y-6 shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#545928] mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="border-2 border-[#BCBF5E] focus:border-[#E69D3B] rounded-xl text-[#545928] text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#545928] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="border-2 border-[#BCBF5E] focus:border-[#E69D3B] rounded-xl text-[#545928] text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#545928] mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={10}
                  className="border-2 border-[#BCBF5E] focus:border-[#E69D3B] rounded-xl resize-none text-[#545928] text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#E69D3B] text-white hover:bg-[#D68C2D] font-bold text-base sm:text-lg py-5 sm:py-6 rounded-full creative-shadow"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

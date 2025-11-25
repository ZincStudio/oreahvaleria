"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.from("[data-about-content]", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: "[data-about-content]",
        start: "top 80%",
      },
    })

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      rotateZ: 2,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    })

    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <section id="sobre-mi" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div data-about-content className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-6">Acerca de mí</h2>

            <p className="font-body text-lg text-primary leading-relaxed mb-4">
              Soy ilustradora y diseñadora gráfica apasionada por transformar ideas en creaciones visuales únicas. Mi
              objetivo es colaborar contigo para materializar la visión de tu marca a través del arte, la originalidad y
              la calidad visual sin compromisos.
            </p>

            <p className="font-body text-lg text-primary leading-relaxed">
              Cada proyecto es una oportunidad para contar historias, transmitir emociones y crear conexiones
              significativas con tu audiencia.
            </p>
          </div>

          <div className="flex justify-center">
            <div ref={imageRef} className="relative w-72 h-96 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/yo.jpg"
                alt="Vale Orea - Ilustradora y diseñadora gráfica"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

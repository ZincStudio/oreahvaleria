"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Hero from "@/components/hero"
import BrandDNA from "@/components/brand-dna"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import About from "@/components/about"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Animate elements on scroll
    gsap.utils.toArray("[data-animate]").forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          markers: false,
        },
      })
    })
  }, [])

  return (
    <main className="bg-white text-foreground">
      <Header />
      <Hero />
      <About />
      <BrandDNA />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

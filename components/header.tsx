"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsMobileMenuOpen(false)
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2 md:py-3 lg:py-4 shadow-lg" : "py-3 md:py-4 lg:py-6"
      }`}
      style={{
        backgroundColor: "var(--olive)",
      }}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {/* Logo */}
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0">
            <Image
              src="/images/Logo para web blanco.png"
              alt="Vale Orea Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Brand text */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white">Vale Orea</h1>
            <p className="text-xs md:text-sm lg:text-base font-semibold text-white/90">Ilustrando la creatividad</p>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {["inicio", "adn", "mi-trabajo", "services", "contacto"].map((item, index) => {
            const labels = ["Inicio", "Mi identidad creativa", "Mi trabajo", "Servicios", "Contacto"]
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="font-semibold hover:transition-colors duration-300"
                  style={{
                    color: "white",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--warm-orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {labels[index]}
                </button>
              </li>
            )
          })}
          <li>
            <Link
              href="/aviso-de-privacidad"
              className="font-semibold hover:transition-colors duration-300"
              style={{
                color: "white",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--warm-orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              Aviso de privacidad
            </Link>
          </li>
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          style={{ color: "white" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden backdrop-blur-lg border-t"
          style={{
            backgroundColor: "rgba(84, 89, 40, 0.98)",
            borderColor: "white",
          }}
        >
          <ul className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col gap-3 md:gap-4">
            {["inicio", "adn", "mi-trabajo", "services", "contacto"].map((item, index) => {
              const labels = ["Inicio", "Mi identidad creativa", "Mi trabajo", "Servicios", "Contacto"]
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="font-semibold transition-colors duration-300 w-full text-left py-2"
                    style={{ color: "white" }}
                  >
                    {labels[index]}
                  </button>
                </li>
              )
            })}
            <li>
              <Link
                href="/aviso-de-privacidad"
                className="font-semibold transition-colors duration-300 block py-2"
                style={{ color: "white" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header

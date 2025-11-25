"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 shadow-lg" : "py-6"
      }`}
      style={{
        backgroundColor: "var(--cyan-light)",
      }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo integration with name and selling line */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
            <Image
              src="/images/logo-web-blanco.jpg"
              alt="Vale Orea Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Brand text */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "var(--olive)" }}>
              Vale Orea
            </h1>
            <p className="text-sm md:text-base font-semibold" style={{ color: "#BCBF5E" }}>
              Ilustrando la creatividad
            </p>
          </div>
        </div>
        {/* End logo integration */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["inicio", "adn", "portafolio", "testimonios", "contacto"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="font-semibold hover:transition-colors duration-300 capitalize"
                style={{
                  color: "var(--olive)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--warm-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--olive)")}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          style={{ color: "var(--olive)" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden backdrop-blur-lg border-t"
          style={{
            backgroundColor: "rgba(195, 222, 239, 0.98)",
            borderColor: "var(--olive)",
          }}
        >
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {["inicio", "adn", "portafolio", "testimonios", "contacto"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="font-semibold transition-colors duration-300 capitalize w-full text-left py-2"
                  style={{ color: "var(--olive)" }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header

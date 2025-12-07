"use client"

import { Instagram, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-black mb-2 text-primary">Vale Orea</h3>
            <p className="text-xs md:text-sm font-semibold text-mustard mb-3 md:mb-4 text-secondary-foreground">
              Ilustrando la creatividad
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-primary">
              Transformando ideas en arte visual único, con originalidad, calidad y un toque emocional que conecta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-display font-black mb-3 md:mb-4 text-primary">Enlaces</h4>
            <ul className="space-y-2">
              {["inicio", "mi-identidad-creativa", "mi-trabajo", "servicios", "contacto"].map((item, index) => {
                const labels = ["Inicio", "Mi identidad creativa", "Mi trabajo", "Servicios", "Contacto"]
                return (
                  <li className="text-primary" key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item)
                        if (element) element.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-accent transition-colors text-sm text-primary font-medium"
                    >
                      {labels[index]}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base md:text-lg font-display font-black mb-3 md:mb-4 text-primary">Conecta conmigo</h4>
            <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
              <a
                href="https://www.instagram.com/oreah.mx/profilecard/?igsh=ZDgwcWgxYWMyZ2Ny"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#C3DEEF] to-[#d4e5f0] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
                aria-label="Instagram"
              >
                <Instagram size={20} className="md:hidden text-primary" />
                <Instagram size={22} className="hidden md:block text-primary" />
              </a>
              <a
                href="https://www.behance.net/valeriaoreaho"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#BCBF5E] to-[#c8cb73] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
                aria-label="Behance"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="md:hidden text-primary"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="hidden md:block text-primary"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
              </a>
              <a
                href="mailto:oreahovaleria@gmail.com"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#E69D3B] to-[#eaad54] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
                aria-label="Email"
              >
                <Mail size={20} className="md:hidden text-primary" />
                <Mail size={22} className="hidden md:block text-primary" />
              </a>
            </div>
            <p className="text-xs md:text-sm text-primary">Disponible para proyectos freelance y colaboraciones</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} Vale Orea. Todos los derechos reservados.
            {" · "}
            <Link href="/aviso-de-privacidad" className="hover:text-accent transition-colors underline">
              Aviso de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

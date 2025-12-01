"use client"

import { Instagram, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-2 text-primary">Vale Orea</h3>
            <p className="text-sm font-semibold text-mustard mb-4 text-secondary-foreground">
              Ilustrando la creatividad
            </p>
            <p className="text-sm leading-relaxed text-primary">
              Transformando ideas en arte visual único, con originalidad, calidad y un toque emocional que conecta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-black mb-4 text-primary">Enlaces</h4>
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
            <h4 className="text-lg font-display font-black mb-4 text-primary">Conecta conmigo</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C3DEEF] to-[#d4e5f0] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-primary" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BCBF5E] to-[#c8cb73] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-sm"
                aria-label="Behance"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary"
                >
                  <path d="M20.07 6.35H15v1.33h5.07V6.35z" />
                  <path d="M19.15 15.5c.38-1.25.38-3.23-.63-4.5-.63-.79-1.58-1.18-2.85-1.18-1.28 0-2.3.4-3.05 1.2-1.01 1.05-1.01 2.5-1.01 4.13 0 1.63 0 3.1 1.01 4.13.75.8 1.77 1.2 3.05 1.2 2.35 0 3.7-1.5 4.08-3.13h-2.03c-.25.63-.88 1-.88 1-.25.13-.63.25-1.13.25-1.13 0-1.63-.75-1.75-1.75h6.94c.13-1.13.13-2.35-.75-3.35zm-6.69 1.13c0-.88.5-1.63 1.63-1.63.88 0 1.5.5 1.5 1.63h-3.13z" />
                  <path d="M8.4 12.5c.63-.5.88-1.13.88-1.88 0-.75-.25-1.5-.88-2-1-.88-2.35-.88-3.85-.88H0v11.5h4.55c1.5 0 3-.13 4.08-1.13.75-.63 1.13-1.5 1.13-2.5 0-1-.38-1.75-1.13-2.38-.25-.25-.38-.38-.63-.5.25-.13.5-.38.63-.63zm-5.9-3.13h2.03c1.25 0 1.88.38 1.88 1.38 0 .88-.63 1.25-1.88 1.25H2.5V9.37zm3.4 7.88H2.5v-3.5h3.4c1.38 0 2.03.5 2.03 1.75 0 1.25-.65 1.75-2.03 1.75z" />
                </svg>
              </a>
              <a
                href="mailto:hola@valeorea.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E69D3B] to-[#eaad54] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail size={22} className="text-primary" />
              </a>
            </div>
            <p className="text-sm text-primary">Disponible para proyectos freelance y colaboraciones</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Vale Orea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

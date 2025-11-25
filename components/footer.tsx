"use client"

import { Instagram, Bean as Behance, Mail } from "lucide-react"

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
              {["inicio", "adn", "portafolio", "testimonios", "contacto"].map((item) => (
                <li className="text-primary" key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item)
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="hover:text-accent transition-colors capitalize text-sm text-primary font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
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
                href="https://behance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BCBF5E] to-[#c8cb73] flex items-center justify-center text-primary hover:shadow-lg hover:scale-110 transition-all shadow-sm"
                aria-label="Behance"
              >
                <Behance size={22} className="text-primary" />
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

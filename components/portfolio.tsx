"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PortfolioLightbox from "./portfolio-lightbox"

gsap.registerPlugin(ScrollTrigger)

interface ProjectItem {
  category: string
  title: string
  desc: string
  images: Array<{ src: string; alt: string }>
  thumbnail: string
}

export default function Portfolio() {
  const containerRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    const items = gsap.utils.toArray("[data-portfolio-item]") as any[]

    items.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      })
    })
  }, [])

  const projects: ProjectItem[] = [
    {
      category: "Branding",
      title: "Identidad Visual Completa",
      desc: "Logo, paleta y guía de estilo para marca moderna",
      thumbnail: "/branding-portfolio-design.jpg",
      images: [
        { src: "/abstract-logo.png", alt: "Branding logo" },
        { src: "/color-palette-guide.jpg", alt: "Color palette" },
        { src: "/brand-guidelines-book.jpg", alt: "Brand guidelines" },
      ],
    },
    {
      category: "Síntesis Gráfica",
      title: "Infografía Corporativa",
      desc: "Visualización de datos complejos en diseño accesible",
      thumbnail: "/infographic-design.jpg",
      images: [
        { src: "/corporate-infographic-data-visualization.jpg", alt: "Infographic 1" },
        { src: "/business-data-chart-design.jpg", alt: "Infographic 2" },
      ],
    },
    {
      category: "Editorial",
      title: "Ilustración para Publicaciones",
      desc: "Diseño editorial y ilustración para revistas de moda",
      thumbnail: "/prorrogaperpetua.jpg",
      images: [
        { src: "/prorrogaperpetua.jpg", alt: "La Prórroga Perpetua book cover" },
        { src: "/laespera.jpg", alt: "La Espera sin Término book cover" },
        { src: "/laespera-interior.jpg", alt: "La Espera interior design" },
        { src: "/prorrogaperpetua-interior.jpg", alt: "La Prórroga Perpetua interior design" },
      ],
    },
    {
      category: "Branding",
      title: "Packaging Premium",
      desc: "Diseño de empaque luxury con acabados especiales",
      thumbnail: "/luxury-packaging-design.jpg",
      images: [
        { src: "/luxury-packaging-design-premium-box.jpg", alt: "Packaging 1" },
        { src: "/premium-product-packaging-label.jpg", alt: "Packaging 2" },
      ],
    },
    {
      category: "Síntesis Gráfica",
      title: "Animación Gráfica",
      desc: "Proyecto de motion graphics para redes sociales",
      thumbnail: "/abstract-motion-graphics.png",
      images: [
        { src: "/motion-graphics-animation-frame.jpg", alt: "Motion 1" },
        { src: "/social-media-animation-design.jpg", alt: "Motion 2" },
        { src: "/abstract-motion-graphics.png", alt: "Motion 3" },
      ],
    },
    {
      category: "Editorial",
      title: "Libro Ilustrado",
      desc: "Ilustraciones y diagramación para publicación independiente",
      thumbnail: "/illustrated-book-design.jpg",
      images: [
        { src: "/illustrated-book-cover-design.jpg", alt: "Book 1" },
        { src: "/book-interior-illustration-page.jpg", alt: "Book 2" },
        { src: "/book-layout-design-pages.jpg", alt: "Book 3" },
      ],
    },
  ]

  const handleOpenLightbox = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="py-20 px-6 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4 text-center text-primary">Mi trabajo</h2>

        <p className="font-body text-center mb-16 max-w-2xl mx-auto text-lg text-primary">
          En cada proyecto busco dar forma a ideas que merecen ser contadas con claridad y sensibilidad. Mi trabajo
          reúne ilustraciones creadas con dedicación, respeto por el detalle y un enfoque versátil que se adapta a
          distintos estilos y necesidades.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-portfolio-item
              className="group cursor-pointer"
              onClick={() => handleOpenLightbox(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full font-body text-xs font-semibold uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
                <p className="font-body text-muted">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <PortfolioLightbox
          isOpen={isLightboxOpen}
          images={selectedProject.images}
          projectTitle={selectedProject.title}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </section>
  )
}

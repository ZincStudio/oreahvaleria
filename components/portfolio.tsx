"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PortfolioLightbox from "./portfolio-lightbox"
import { Play } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ProjectItem {
  category: string
  title: string
  desc: string
  detailedDescription?: string
  images: string[]
  thumbnail: string
  video?: string
}

export default function Portfolio() {
  const containerRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("todos")

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
  }, [selectedCategory])

  const projects: ProjectItem[] = [
    {
      category: "identidad",
      title: "Identidad UIC 50 años",
      desc: "Identidad visual creada para conmemorar los 50 años de la Universidad Intercontinental.",
      detailedDescription:
        "Desarrollo de una identidad visual conmemorativa para los 50 años de la Universidad Intercontinental. El diseño parte de formas tipográficas estilizadas que dialogan con la tradición gráfica de la institución, logrando un símbolo versátil y aplicable en entornos digitales y materiales como papelería, pines y plataformas internas.",
      thumbnail: "/images/Letrayóleo_AplicaciónDigital.jpg",
      images: [
        "/images/Letrayóleo_AplicaciónDigital.jpg",
        "/images/Letrayóleo_AplicaciónPapelería.jpg",
        "/images/Letrayóleo_AplicaciónPin.jpg",
      ],
    },
    {
      category: "editorial",
      title: "Ilustración Editorial",
      desc: "Ilustraciones hechas a mano que enriquecen narrativas y vuelven cada portada única.",
      detailedDescription:
        "Serie de portadas ilustradas a mano para libros de poesía, desarrolladas como ejercicio de simulación editorial. Cada pieza parte de técnicas análogas para captar la sensibilidad del texto y traducirla en imágenes que acompañan, complementan y elevan la voz del autor.",
      thumbnail: "/images/prorrogaperpetua.jpg",
      images: [
        "/images/prorrogaperpetua.jpg",
        "/images/OreaHorcasitasValeria_MockupSegundoAutor.jpg",
        "/images/Segundo Mockup_Prorrogaperpetua.jpg",
      ],
    },
    {
      category: "sintesis",
      title: "Síntesis Gráfica",
      desc: "Proyecto que explora la abstracción visual aplicada en productos y materiales físicos.",
      detailedDescription:
        "Este proyecto explora la síntesis gráfica a través del estudio de un animal, llevando su forma desde los primeros bocetos hasta una abstracción limpia y esencial. A partir de este proceso, la ilustración final se aplicó en diversos soportes para demostrar su fuerza visual y su capacidad de adaptación.",
      thumbnail: "/images/Gorra Mockup Oso.jpg",
      images: [
        "/images/Gorra Mockup Oso.jpg",
        "/images/Baja Abstracción (1) Fin Oso.png",
        "/images/Sticker Mockup Oso.jpg",
      ],
    },
    {
      category: "publicidad",
      title: "Campaña 360 Pascual",
      desc: "Una campaña que celebra la herencia, la cercanía y el sabor que ha acompañado a generaciones.",
      detailedDescription:
        "Esta propuesta 360° reúne diferentes puntos de contacto —redes sociales, espacios exteriores y activaciones visuales— para mostrar cómo cada presentación de Boing! forma parte de una misma tradición. La campaña destaca la variedad del portafolio sin perder el hilo que conecta a la marca con su audiencia: calidad, historia y un sabor que permanece. A través de una imagen cálida y familiar, se refuerza la idea de continuidad y pertenencia, invitando a redescubrir lo clásico desde sus distintas versiones.",
      thumbnail: "/images/ParabusMockup.jpg",
      images: ["/images/ParabusMockup.jpg", "/images/RevistaMockup.jpg", "/images/InstagramMockup.jpg"],
    },
    {
      category: "identidad",
      title: "Branding Cumbre Tajín",
      desc: "Identidad que honra la raíz, celebra la cultura y conecta con la experiencia viva del Tajín.",
      detailedDescription:
        "Este proyecto de branding toma los valores y símbolos del Cumbre Tajín para crear una identidad visual aplicada en pulseras, banderas y materiales del festival. Cada pieza busca reflejar la fuerza cultural del lugar y su espíritu ritual, convirtiendo la tradición en una experiencia gráfica memorable.",
      thumbnail: "/images/Pulsera Plástico Mockup.png",
      images: [
        "/images/Pulsera Plástico Mockup.png",
        "/images/Pines Cumbre Tajín.jpg",
        "/images/Bandera Cumbre Tajín.jpg",
      ],
    },
    {
      category: "fotografia",
      title: "Fotografía Bodegón",
      desc: "Composición, luz y atmósfera al servicio de una historia en silencio.",
      detailedDescription:
        "Esta fotografía de bodegón fue creada a partir de la selección y disposición intencional de cada elemento, buscando equilibrar luz, textura y forma para construir una escena que revela la belleza de lo cotidiano. Un ejercicio que pone en práctica la técnica clásica del bodegón, donde cada objeto dialoga con el entorno para dar vida a una imagen armoniosa y expresiva.",
      thumbnail: "/images/Foto editada.jpg",
      images: ["/images/Foto editada.jpg", "/images/Foto original.jpg", "/images/Edicion.jpg"],
    },
    {
      category: "ilustracion",
      title: "Ilustración Botánica",
      desc: "Acuarelas que honran la belleza natural en su estado más puro.",
      detailedDescription:
        "Serie de ilustraciones botánicas realizadas con técnica de acuarela, enfocadas en capturar la forma, color y carácter de distintas flores. Cada pieza fue elaborada con detalle para destacar la esencia orgánica de la planta y posteriormente se integró en el diseño de un cartel cinematográfico, donde la ilustración aporta sensibilidad y vida a la composición final.",
      thumbnail: "/images/gladiola.jpg",
      images: ["/images/gladiola.jpg", "/images/crisantemo.jpg", "/images/Lavanda.jpg"],
    },
    {
      category: "animacion",
      title: "Animación Collage Cineminuto",
      desc: "Animaciones que abren puertas a nuevos horizontes.",
      detailedDescription:
        "A partir de la técnica de collage y la animación en After Effects, se desarrollaron tres piezas promocionales para el festival Cineminuto. Cada composición une elementos análogos y digitales para construir paisajes simbólicos que evocan exploración, movimiento y la búsqueda de nuevas miradas.",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_CDvO58nPpawEkoezNqPZ6Vv42PJy/1fGyd17OpGiZumZKrZ1jtM/public/images/Primer%20Promo%20CM%20Valeria%20Orea%20%281%29%20%281%29.mp4",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_CDvO58nPpawEkoezNqPZ6Vv42PJy/1fGyd17OpGiZumZKrZ1jtM/public/images/Primer%20Promo%20CM%20Valeria%20Orea%20%281%29%20%281%29.mp4",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_CDvO58nPpawEkoezNqPZ6Vv42PJy/1fGyd17OpGiZumZKrZ1jtM/public/images/Primer%20Promo%20CM%20Valeria%20Orea%20%281%29%20%281%29.mp4",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_CDvO58nPpawEkoezNqPZ6Vv42PJy/Az6LOdbOeocrw41VM2Cz8p/public/images/Tele%20y%20monta%C3%B1as%20collage%20%281%29.mp4",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_CDvO58nPpawEkoezNqPZ6Vv42PJy/hUrxXhn6152Cy1ZBOT0vlW/public/images/Tercer%20Collage%20Final.mp4",
      ],
    },
  ]

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "identidad", label: "Identidad Gráfica" },
    { id: "editorial", label: "Editorial" },
    { id: "sintesis", label: "Síntesis Gráfica" },
    { id: "publicidad", label: "Publicidad" },
    { id: "fotografia", label: "Fotografía" },
    { id: "ilustracion", label: "Ilustración" },
    { id: "animacion", label: "Animación" },
  ]

  const filteredProjects =
    selectedCategory === "todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  const handleOpenLightbox = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsLightboxOpen(true)
  }

  return (
    <section id="mi-trabajo" className="py-20 px-6 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="portfolio-title text-4xl md:text-6xl font-black mb-6 text-primary">Mi Trabajo</h2>
          <p className="text-xl text-muted-foreground mb-12">
            En cada proyecto busco dar forma a ideas que merecen ser contadas con claridad y sensibilidad. Mi trabajo
            reúne ilustraciones creadas con dedicación, respeto por el detalle y un enfoque versátil que se adapta a
            distintos estilos y necesidades.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-accent text-white hover:text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-accent hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-portfolio-item
              className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => handleOpenLightbox(project)}
            >
              <div className="relative overflow-hidden bg-gray-100">
                {project.video ? (
                  <div className="relative w-full h-64">
                    <video
                      src={project.video}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E69D3B]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold" style={{ color: "#545928" }}>
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground line-clamp-2">{project.desc}</p>
                <button
                  className="mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-300 w-full"
                  style={{ backgroundColor: "#545928", color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Ver proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <PortfolioLightbox isOpen={isLightboxOpen} project={selectedProject} onClose={() => setIsLightboxOpen(false)} />
      )}
    </section>
  )
}

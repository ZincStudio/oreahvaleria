export default function AvisoDePrivacidad() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-8 text-center" style={{ color: "#545928" }}>
          Aviso de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-black mb-6">
            <strong>Responsable:</strong> Valeria Sofía Orea Horcasitas
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            I. Identidad y Domicilio del Responsable
          </h2>
          <p className="text-black mb-4">
            Valeria Sofía Orea Horcasitas (en adelante, "El Responsable") con domicilio en: Moras 11, Santa Inés,
            Xochimilco, C.P. 16810, Ciudad de México.
          </p>
          <p className="text-black mb-6">
            <strong>Contacto:</strong>
            <br />
            Correo electrónico para solicitudes ARCO y privacidad: oreahovaleria@gmail.com
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            II. Datos Personales Recabados y Finalidades del Tratamiento
          </h2>
          <p className="text-black mb-4">
            El Responsable recabará los siguientes datos personales a través del sitio web de su portafolio, formularios
            de contacto, cotización o comentarios.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "#545928" }}>
            A. Tipos de Datos Personales Recabados
          </h3>
          <ul className="list-disc pl-6 text-black mb-4">
            <li>
              <strong>Datos de identificación y contacto:</strong> Nombre completo, correo electrónico, teléfono
              (opcional), nombre de la empresa (si aplica).
            </li>
            <li>
              <strong>Datos de interacción:</strong> Información enviada en el mensaje o consulta, Dirección IP (para
              fines de seguridad y analíticas web).
            </li>
          </ul>
          <p className="text-black mb-6">
            El Responsable no recaba datos personales sensibles a través de su portafolio web.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: "#545928" }}>
            B. Finalidades del Tratamiento
          </h3>
          <p className="text-black mb-4">
            Los datos personales recabados serán utilizados para las siguientes finalidades primarias (esenciales para
            la relación profesional):
          </p>
          <ul className="list-disc pl-6 text-black mb-4">
            <li>
              <strong>Gestión de Contacto Profesional:</strong> Atender su solicitud, consulta o comentario realizado a
              través del formulario de contacto del portafolio.
            </li>
            <li>
              <strong>Envío de Cotizaciones:</strong> Generar y enviarle presupuestos y propuestas de servicios de
              ilustración, diseño gráfico y proyectos relacionados que haya solicitado.
            </li>
            <li>
              <strong>Provisión de Servicios:</strong> En caso de contratación, utilizar sus datos de contacto para
              iniciar, desarrollar y dar seguimiento al proyecto de ilustración o diseño gráfico solicitado.
            </li>
            <li>
              <strong>Cumplimiento Legal:</strong> Dar cumplimiento a las obligaciones legales derivadas de la relación
              profesional y la legislación fiscal aplicable.
            </li>
          </ul>

          <p className="text-black mb-4">
            Adicionalmente, utilizaremos su información personal para las siguientes finalidades secundarias
            (optativas):
          </p>
          <ul className="list-disc pl-6 text-black mb-4">
            <li>
              Envío periódico de un newsletter o correo informativo sobre nuevas ilustraciones, proyectos destacados o
              servicios profesionales ofrecidos por Valeria Sofía Orea Horcasitas.
            </li>
            <li>
              Realización de análisis estadísticos internos sobre el tráfico y uso del portafolio web para mejorar la
              experiencia del usuario y la visibilidad de los trabajos.
            </li>
          </ul>

          <p className="text-black mb-6">
            <strong>Negativa para Finalidades Secundarias:</strong> Si no desea que sus datos personales sean tratados
            para las finalidades secundarias, puede manifestar su negativa enviando un correo a oreahovaleria@gmail.com
            indicando su nombre completo y la finalidad que desea rechazar. Su negativa no afectará la prestación de los
            servicios principales de cotización o proyecto.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            III. Fundamento Legal
          </h2>
          <p className="text-black mb-6">
            El tratamiento de sus datos personales se realiza conforme a la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás disposiciones jurídicas
            aplicables en México.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            IV. Transferencias de Datos
          </h2>
          <p className="text-black mb-4">
            Sus datos personales no serán transferidos a terceros para fines comerciales sin su consentimiento expreso.
            Las únicas transferencias que se realizarán sin requerir su consentimiento son las previstas en el artículo
            37 de la LFPDPPP, las cuales incluyen:
          </p>
          <ul className="list-disc pl-6 text-black mb-6">
            <li>
              Transferencias a sociedades controladoras, subsidiarias o afiliadas bajo el control común del Responsable.
            </li>
            <li>
              Transferencias cuando la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar en
              interés del titular.
            </li>
            <li>Transferencias cuando sea legalmente exigido por una autoridad competente.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            V. Derechos ARCO y Revocación del Consentimiento
          </h2>
          <p className="text-black mb-4">
            Usted tiene derecho a ejercer los derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos
            ARCO), así como a revocar su consentimiento para el tratamiento de sus datos.
          </p>
          <p className="text-black mb-4">
            Para ejercer cualquiera de estos derechos, deberá presentar la solicitud correspondiente mediante un correo
            electrónico a: oreahovaleria@gmail.com.
          </p>
          <p className="text-black mb-4">La solicitud deberá contener y acompañar lo siguiente:</p>
          <ul className="list-disc pl-6 text-black mb-4">
            <li>Nombre completo del titular.</li>
            <li>
              Copia simple o digital de una identificación oficial (INE, pasaporte u otra que acredite su identidad).
            </li>
            <li>
              Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los
              derechos ARCO.
            </li>
          </ul>
          <p className="text-black mb-6">
            El Responsable le comunicará la respuesta a su solicitud en un plazo máximo de 20 días hábiles a partir de
            la recepción de la misma.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            VI. Cambios al Aviso de Privacidad
          </h2>
          <p className="text-black mb-6">
            El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones. Nos comprometemos a
            mantenerlo informado sobre los cambios a través de una notificación publicada en su sitio web del portafolio
            o mediante un correo electrónico a la dirección de contacto que nos haya proporcionado.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: "#BCBF5E" }}>
            VII. Consentimiento
          </h2>
          <p className="text-black mb-6">
            Al proporcionar sus datos personales, usted otorga su consentimiento para que sean tratados conforme a lo
            señalado en el presente Aviso de Privacidad.
          </p>

          <p className="text-black font-semibold mt-8">Última Actualización: 28 de noviembre de 2025.</p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-full font-semibold transition-all"
            style={{ backgroundColor: "#545928", color: "white" }}
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}

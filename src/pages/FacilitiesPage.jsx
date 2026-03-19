// src/pages/FacilitiesPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Flota from "../assets/Backgrounds/Flota.jpg"

const FacilitiesPage = () => {
  const gallery = [
    { 
      title: 'Silos de Cemento de Alta Capacidad', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSwCF5DD5ivSfbzHglKRldak6UGqQ990ZF0_Sd_-WaMdRC-MTo93RBwoCPzcl2yMLw6GSZ9cynjUX7SOZj-nchtqMx4zVsF38PrTRIAyEFGBEpnFcDrIysjFM263_nB3RN_-5bciHTlO3AYRJ4_4ExVMXewy2rLtU6YfLWzlHmTuMkBWQlVLjoqKUDG7Zmnv9unjrVjImCtYkGUuCGXaZv_KZtrkXomY-hNtVTtdFQLFdiqLHJuYA13dsjtYRsvIUKQx-l3lBdZ3DV' 
    },
    { 
      title: 'Flota de Motohormigoneras', 
      img: Flota 
    }
  ]

  const specs = [
    { title: 'Capacidad de Planta', val: '120m³/hr', icon: 'foundation' },
    { title: 'Flota de Mixers', val: '30+ Unidades', icon: 'local_shipping' },
    { title: 'Alcance de Bomba', val: '42 Metros', icon: 'precision_manufacturing' },
    { title: 'Radio de Servicio', val: '50km', icon: 'map' }
  ]

  // Schema.org para Facilities
  const facilitiesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Instalaciones HormiWhite',
    description: 'Planta de hormigón elaborado con capacidad de 120m³/hora y flota de 25+ motohormigoneras',
    photo: gallery.map(item => ({
      '@type': 'ImageObject',
      contentUrl: item.img,
      description: item.title
    })),
    amenityFeature: specs.map(spec => ({
      '@type': 'LocationFeatureSpecification',
      name: spec.title,
      value: spec.val
    }))
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO 
        title="Instalaciones y Flota"
        description="Conocé nuestra planta automatizada con capacidad de 120m³/hora y flota de 25+ motohormigoneras. Infraestructura líder en Bahía Blanca."
        keywords="planta hormigón Bahía Blanca, motohormigoneras, flota camiones, silos cemento, infraestructura industrial"
        canonical="https://hormiwhite.com/facilities"
        ogImage="https://hormiwhite.com/images/flota-camiones.jpg"
        structuredData={facilitiesStructuredData}
      />
      
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">
        <header className="mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Infraestructura y Eficiencia</span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 leading-tight">Nuestras Instalaciones <br/>& Flota Logística</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-lg">
            Impulsando el crecimiento de Bahía Blanca con infraestructura robusta, plantas de hormigón de alta capacidad y una flota moderna.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" aria-label="Galería de instalaciones">
          {gallery.map((item, i) => (
            <figure key={i} className="relative group overflow-hidden rounded-xl h-80 gallery-item">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{backgroundImage: `url('${item.img}')`}}
                role="img"
                aria-label={item.title}
              ></div>
              <figcaption className="overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity flex items-center justify-center p-6">
                <h2 className="text-slate-900 text-2xl font-bold text-center">{item.title}</h2>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mb-20" aria-label="Especificaciones técnicas">
          <h2 className="text-3xl font-bold mb-8">Especificaciones Técnicas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, i) => (
              <article key={i} className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-xl">
                <div className="bg-primary p-3 rounded-lg w-fit mb-4">
                  <span className="material-symbols-outlined text-slate-900" aria-hidden="true">{spec.icon}</span>
                </div>
                <h3 className="text-lg font-bold">{spec.title}</h3>
                <div className="mt-4 text-2xl font-black text-primary">{spec.val}</div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FacilitiesPage
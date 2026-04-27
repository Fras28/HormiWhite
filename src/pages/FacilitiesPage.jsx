// src/pages/FacilitiesPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Flota from "../assets/Backgrounds/Flota.jpg"
import Almacen from "../assets/Backgrounds/Almacen.png"

const FacilitiesPage = () => {
  const gallery = [
    { title: 'Silos de cemento de alta capacidad', img: Almacen },
    { title: 'Flota de mixers HormiWhite', img: Flota }
  ]

  const specs = [
    { title: 'Plantas operativas', val: '3 plantas', icon: 'factory' },
    { title: 'Flota de mixers', val: '22 unidades', icon: 'local_shipping' },
    { title: 'Bombas telescópicas', val: '2 unidades', icon: 'precision_manufacturing' },
    { title: 'Cobertura', val: 'Bahía Blanca + Ing. White', icon: 'map' }
  ]

  const facilitiesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Instalaciones HormiWhite',
    description: '3 plantas de hormigón elaborado, flota propia de 22 mixers y 2 bombas telescópicas en Bahía Blanca e Ingeniero White',
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
        description="3 plantas, 22 mixers y 2 bombas telescópicas. Conocé la infraestructura propia de HormiWhite en Bahía Blanca e Ingeniero White."
        keywords="planta hormigón Bahía Blanca, mixers, bombas telescópicas, silos cemento, hormigón Ingeniero White"
        canonical="https://hormiwhite.com.ar/facilities"
        ogImage="https://hormiwhite.com.ar/images/flota-camiones.jpg"
        structuredData={facilitiesStructuredData}
      />

      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">
        <header className="mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Infraestructura propia</span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 leading-tight">Nuestras instalaciones <br/>y flota logística</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-lg">
            Operamos 3 plantas de elaboración, 22 mixers con mando remoto universal y 2 bombas telescópicas para
            colocar hormigón con rapidez y precisión en obra. Todo controlado por nuestro laboratorio interno.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" aria-label="Galería de instalaciones">
          {gallery.map((item, i) => (
            <figure key={i} className="relative group overflow-hidden rounded-xl h-80 gallery-item">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.img}')` }}
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
          <h2 className="text-3xl font-bold mb-8">Capacidad operativa</h2>
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

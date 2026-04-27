// src/pages/AboutPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import TimeLine from "../assets/Backgrounds/TimeLine.jpg"

const AboutPage = () => {
  const timeline = [
    { year: '2016', title: 'Fundación de HormiWhite S.A.', desc: 'Constituida el 22 de abril de 2016 en Bahía Blanca con foco en hormigón elaborado para obra civil e industrial.' },
    { year: '2018', title: 'Crecimiento de la flota', desc: 'Incorporamos mixers nuevos con mando remoto universal para acelerar el servicio sin perder calidad de mezcla.' },
    { year: '2021', title: 'Bombeo telescópico propio', desc: 'Sumamos 2 bombas telescópicas para colocar hormigón con rapidez y precisión donde la obra lo requiera.' },
    { year: 'Actualidad', title: '3 plantas operativas y 22 mixers', desc: 'Producción distribuida entre Bahía Blanca e Ingeniero White, con laboratorio propio que valida cada despacho.' }
  ]

  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Nuestra Historia - HormiWhite',
    description: 'Conozca la trayectoria de HormiWhite, hormigón elaborado en Bahía Blanca e Ingeniero White desde 2016.',
    url: 'https://hormiwhite.com.ar/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'HormiWhite S.A.',
      foundingDate: '2016-04-22',
      description: 'Empresa de hormigón elaborado en Bahía Blanca e Ingeniero White',
      event: timeline.map(item => ({
        '@type': 'Event',
        name: item.title,
        startDate: item.year === 'Actualidad' ? '2026' : item.year,
        description: item.desc
      }))
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Nuestra Historia y Trayectoria"
        description="Conocé la historia de HormiWhite. Desde 2016 produciendo hormigón elaborado en Bahía Blanca e Ingeniero White, con flota e infraestructura propias."
        keywords="historia HormiWhite, fundación 2016, planta hormigón Bahía Blanca, Ingeniero White, hormigón elaborado"
        canonical="https://hormiwhite.com.ar/about"
        ogImage="https://hormiwhite.com.ar/images/nosotros-planta.jpg"
        structuredData={aboutStructuredData}
      />

      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-20 flex-1">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <figure className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
              <img
                alt="Planta de HormiWhite en Bahía Blanca - Instalaciones industriales"
                className="w-full h-full object-cover"
                src={TimeLine}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-[#86EFAC] text-[#064e3b] px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 border border-white/20">
              <span className="material-symbols-outlined font-bold text-3xl" aria-hidden="true">verified</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Producción</p>
                <p className="text-lg font-black leading-none">Laboratorio propio</p>
              </div>
            </div>
          </figure>

          <article className="flex flex-col">
            <header className="mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Trayectoria y solidez</span>
              <h1 className="text-4xl lg:text-5xl font-black mt-2 leading-tight">Nuestra Historia</h1>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg">
                Desde 2016 abastecemos hormigón elaborado en Bahía Blanca e Ingeniero White, con flota propia,
                bombas telescópicas y un laboratorio interno que asegura cada metro cúbico.
              </p>
            </header>

            <div className="space-y-0" role="list" aria-label="Línea de tiempo de HormiWhite">
              {timeline.map((item, i, arr) => (
                <div key={i} className="relative pl-10 pb-10 group" role="listitem">
                  {i !== arr.length - 1 && (
                    <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-primary/20"></div>
                  )}
                  <div className="absolute left-0 top-1 size-6 rounded-full border-4 border-background-light dark:border-background-dark bg-primary shadow-[0_0_0_1px_rgba(65,185,65,0.2)]"></div>
                  <div className="flex flex-col">
                    <time className="text-primary font-bold text-lg leading-none mb-1" dateTime={item.year === 'Actualidad' ? '2026' : item.year}>
                      {item.year}
                    </time>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage

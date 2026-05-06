// src/pages/FacilitiesPage.jsx
import React from 'react'
import CountUp from 'react-countup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
import SectionHeading from '../components/ui/SectionHeading'
import Flota from '../assets/Backgrounds/Flota.jpg'
import Almacen from '../assets/Backgrounds/Almacen.png'

const gallery = [
  { title: 'Silos de cemento de alta capacidad', img: Almacen, tag: 'Almacenamiento' },
  { title: 'Flota de mixers HormiWhite', img: Flota, tag: 'Logística' }
]

const specs = [
  { title: 'Plantas operativas', count: 3, suffix: '', label: 'plantas', icon: 'factory', desc: 'Distribuidas para acortar tiempos de entrega.' },
  { title: 'Flota de mixers', count: 22, suffix: '', label: 'mixers', icon: 'local_shipping', desc: 'Mando remoto universal para servicio rápido.' },
  { title: 'Bombas telescópicas', count: 2, suffix: '', label: 'bombas', icon: 'precision_manufacturing', desc: 'Colocación rápida y precisa en obra.' },
  { title: 'Cobertura', count: 100, suffix: '%', label: 'Bahía Blanca + Ing. White', icon: 'map', desc: 'Servicio en todo el cordón industrial.' }
]

const FacilitiesPage = () => {
  const facilitiesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Instalaciones HormiWhite',
    description: '3 plantas, 22 mixers y 2 bombas telescópicas en Bahía Blanca e Ingeniero White',
    photo: gallery.map(item => ({ '@type': 'ImageObject', contentUrl: item.img, description: item.title })),
    amenityFeature: specs.map(spec => ({ '@type': 'LocationFeatureSpecification', name: spec.title, value: `${spec.count}${spec.suffix}` }))
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Instalaciones y Flota"
        description="3 plantas, 22 mixers y 2 bombas telescópicas. Conocé la infraestructura propia de HormiWhite."
        keywords="planta hormigón Bahía Blanca, mixers, bombas telescópicas, silos cemento, hormigón Ingeniero White"
        canonical="https://hormiwhite.com.ar/facilities"
        ogImage="https://hormiwhite.com.ar/images/flota-camiones.jpg"
        structuredData={facilitiesStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1a13] via-[#162619] to-[#0f1a13] py-24 lg:py-32 px-6 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 size-[30rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-emerald-400/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Infraestructura propia"
              title="Capacidad operativa"
              accent="real y disponible"
              subtitle="3 plantas de elaboración, 22 mixers con mando remoto universal y 2 bombas telescópicas. Todo controlado por nuestro laboratorio interno."
              light
            />
          </div>
        </section>

        {/* SPECS — tilt cards */}
        <section className="max-w-7xl mx-auto w-full px-6 py-16 lg:px-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="relative h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-7 shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all overflow-hidden">
                    <div aria-hidden="true" className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl" />
                    <div className="relative">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-primary/30 mb-5">
                        <span className="material-symbols-outlined text-slate-900" aria-hidden="true">{s.icon}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{s.title}</p>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-5xl font-black text-slate-900 dark:text-white tabular-nums leading-none">
                          <CountUp end={s.count} duration={1.6} enableScrollSpy scrollSpyOnce />
                        </span>
                        {s.suffix && <span className="text-2xl font-bold text-primary">{s.suffix}</span>}
                      </div>
                      <p className="text-primary text-sm font-semibold mt-1">{s.label}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GALERÍA — tilt + reveal */}
        <section className="max-w-7xl mx-auto w-full px-6 lg:px-20 pb-24 lg:pb-32" aria-label="Galería de instalaciones">
          <Reveal>
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-8">Recorrido visual</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <TiltCard intensity={5} className="h-full">
                  <figure className="relative h-80 rounded-3xl overflow-hidden ring-1 ring-white/10 group">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/90 text-slate-900 text-[10px] font-bold uppercase tracking-widest">
                        {item.tag}
                      </span>
                      <h4 className="text-2xl font-black mt-3 leading-tight">{item.title}</h4>
                    </figcaption>
                  </figure>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FacilitiesPage

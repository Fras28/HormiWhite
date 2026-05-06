// src/pages/QualityPage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
import SectionHeading from '../components/ui/SectionHeading'
import ControlCalidad from '../assets/Backgrounds/ControlCalidad.jpg'

const steps = [
  { n: '01', title: 'Dosificación controlada', icon: 'factory', desc: 'Medición precisa por peso en planta automatizada para asegurar la mezcla deseada en cada tanda.' },
  { n: '02', title: 'Transporte y mezcla en ruta', icon: 'local_shipping', desc: 'Mixers con mando remoto que mantienen la homogeneidad mientras llegan a obra.' },
  { n: '03', title: 'Ensayos de laboratorio', icon: 'science', desc: 'Tomamos probetas de cada despacho y verificamos compresión y asentamiento internamente.' },
  { n: '04', title: 'Documentación y trazabilidad', icon: 'workspace_premium', desc: 'Registros disponibles del proceso para que tu obra cuente con la trazabilidad que necesita.' }
]

const QualityPage = () => {
  const qualityStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Control de Calidad - HormiWhite',
    description: 'Control de calidad con laboratorio propio en cada etapa.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: steps.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Thing', name: s.title, description: s.desc } }))
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Calidad y Control de Procesos"
        description="Laboratorio propio y control de calidad en cada etapa del proceso. Hormigón elaborado con trazabilidad en Bahía Blanca."
        keywords="calidad hormigón, laboratorio hormigón, control de calidad, Bahía Blanca"
        canonical="https://hormiwhite.com.ar/quality"
        ogImage="https://hormiwhite.com.ar/images/calidad-laboratorio.jpg"
        structuredData={qualityStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* HERO con imagen + glass overlay */}
        <section className="relative overflow-hidden py-24 lg:py-32 px-6 lg:px-20">
          <img alt="Laboratorio de control de calidad de HormiWhite" className="absolute inset-0 h-full w-full object-cover" src={ControlCalidad} loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a13]/95 via-[#162619]/90 to-[#0f1a13]/95" aria-hidden="true" />
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 size-[28rem] rounded-full bg-primary/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Control de procesos"
              title="Calidad validada"
              accent="en cada metro cúbico"
              subtitle="Nuestro laboratorio propio toma muestras y ensaya cada despacho. Trabajamos con procesos auditables para que la obra reciba lo que pidió, siempre."
              light
            />
          </div>
        </section>

        {/* STEPS — numbered glass cards con stagger */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28" aria-label="Proceso de control de calidad">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">Cómo trabajamos</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12 text-lg">
              Cuatro etapas, todas controladas internamente, para que cada despacho que sale de planta llegue a obra como corresponde.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="relative h-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-7 shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all">
                    {/* Número grande translúcido */}
                    <span aria-hidden="true" className="absolute -top-4 -right-2 text-8xl font-black text-primary/5 leading-none select-none">
                      {s.n}
                    </span>
                    <div className="relative">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-primary/30 mb-5">
                        <span className="material-symbols-outlined text-slate-900" aria-hidden="true">{s.icon}</span>
                      </div>
                      <p className="text-primary text-xs font-black uppercase tracking-widest">Paso {s.n}</p>
                      <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mt-1.5">{s.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{s.desc}</p>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Banner final */}
          <Reveal delay={0.2}>
            <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-emerald-500 p-8 md:p-12 shadow-2xl">
              <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-900 text-3xl" aria-hidden="true">verified</span>
                  </div>
                  <div>
                    <p className="text-slate-900/70 text-xs font-black uppercase tracking-widest">Compromiso</p>
                    <h4 className="text-slate-900 text-2xl md:text-3xl font-black mt-1">Cada despacho, validado en laboratorio.</h4>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold shadow-lg whitespace-nowrap"
                >
                  Pedí tu cotización
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </motion.a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default QualityPage

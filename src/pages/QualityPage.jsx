// src/pages/QualityPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import ControlCalidad from "../assets/Backgrounds/ControlCalidad.jpg"


const QualityPage = () => {
  const steps = [
    { title: 'Dosificación Controlada', icon: 'factory', desc: 'Medición precisa en nuestra planta totalmente automatizada.' },
    { title: 'Transporte Especializado', icon: 'local_shipping', desc: 'Monitoreo GPS que asegura la homogeneidad óptima de la mezcla.' },
    { title: 'Ensayos de Laboratorio', icon: 'science', desc: 'Análisis riguroso de compresión y asentamiento para cada tanda.' },
    { title: 'Certificación', icon: 'workspace_premium', desc: 'Documentación oficial de cumplimiento para cada proyecto.' }
  ]

  // Schema.org para Calidad
  const qualityStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Control de Calidad y Normas CIRSOC 201',
    description: 'Certificación CIRSOC 201 garantizada. Laboratorio propio, control de calidad en cada etapa del proceso.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: steps.map((step, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: step.title,
          description: step.desc
        }
      }))
    },
    about: {
      '@type': 'Thing',
      name: 'CIRSOC 201',
      description: 'Norma argentina para estructuras de hormigón'
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO 
        title="Calidad y Certificaciones CIRSOC 201"
        description="Garantía de calidad CIRSOC 201. Laboratorio propio, control en cada etapa. Hormigón elaborado certificado en Bahía Blanca."
        keywords="CIRSOC 201, calidad hormigón, laboratorio hormigón, certificación estructuras, normas IRAM, control de calidad"
        canonical="https://hormiwhite.com/quality"
        ogImage="https://hormiwhite.com/images/calidad-laboratorio.jpg"
        structuredData={qualityStructuredData}
      />
      
      <Header />
      <main className="flex-1">
        <section className="relative w-full overflow-hidden py-20 lg:py-32 bg-slate-900">
          <img 
            alt="Laboratorio de control de calidad de HormiWhite" 
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" 
            src={ControlCalidad}
            loading="eager"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-20">
            <header className="flex flex-col items-start gap-8 lg:max-w-2xl">
              <div className="flex items-center gap-4 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm border border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl font-bold" aria-hidden="true">verified_user</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Certificación CIRSOC 201</span>
              </div>
              <h1 className="text-4xl font-black text-white md:text-6xl">Control de Calidad & <span className="text-primary underline">Normas</span></h1>
              <p className="text-lg text-slate-200">
                Nuestro compromiso con la excelencia asegura que cada metro cúbico cumpla con las más altas regulaciones CIRSOC 201 para seguridad y durabilidad estructural.
              </p>
            </header>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6" aria-label="Proceso de control de calidad">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <article key={i} className="group flex flex-col gap-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-800/40 p-8 hover:border-primary/40 transition-all">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined" aria-hidden="true">{step.icon}</span>
                </div>
                <h2 className="text-xl font-bold">{step.title}</h2>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default QualityPage
// src/pages/AboutPage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import TimeLine from '../assets/Backgrounds/TimeLine.jpg'

const timeline = [
  { year: '2016', title: 'Fundación de HormiWhite S.A.', desc: 'Constituida el 22 de abril de 2016 en Bahía Blanca con foco en hormigón elaborado para obra civil e industrial.', icon: 'flag' },
  { year: '2018', title: 'Crecimiento de la flota', desc: 'Mixers nuevos con mando remoto universal para acelerar el servicio sin perder calidad de mezcla.', icon: 'local_shipping' },
  { year: '2021', title: 'Bombeo telescópico propio', desc: '2 bombas telescópicas para colocar hormigón con rapidez y precisión donde la obra lo requiera.', icon: 'precision_manufacturing' },
  { year: 'Actualidad', title: '3 plantas operativas y 22 mixers', desc: 'Producción distribuida entre Bahía Blanca e Ingeniero White, con laboratorio propio que valida cada despacho.', icon: 'factory' }
]

const AboutPage = () => {
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
        description="Conocé la historia de HormiWhite. Desde 2016 produciendo hormigón elaborado en Bahía Blanca e Ingeniero White."
        keywords="historia HormiWhite, fundación 2016, planta hormigón Bahía Blanca, Ingeniero White, hormigón elaborado"
        canonical="https://hormiwhite.com.ar/about"
        ogImage="https://hormiwhite.com.ar/images/nosotros-planta.jpg"
        structuredData={aboutStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* HERO oscuro con gradient + ambient glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1a13] via-[#162619] to-[#0f1a13] py-24 lg:py-32 px-6 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 -left-32 size-[28rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 size-[24rem] rounded-full bg-emerald-400/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Trayectoria y solidez"
              title="Construyendo Bahía Blanca"
              accent="desde 2016"
              subtitle="Abastecemos hormigón elaborado en Bahía Blanca e Ingeniero White con flota propia, bombas telescópicas y un laboratorio interno que asegura cada metro cúbico."
              light
            />
          </div>
        </section>

        {/* TIMELINE en grid: imagen sticky + cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:sticky lg:top-32" duration={0.8}>
              <figure className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-emerald-400/10 rounded-3xl blur-2xl -z-10" />
                <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl ring-1 ring-white/10">
                  <img
                    alt="Planta de HormiWhite en Bahía Blanca"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={TimeLine}
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">science</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Producción</p>
                    <p className="text-base font-black leading-none mt-1">Laboratorio propio</p>
                  </div>
                </div>
              </figure>
            </Reveal>

            <ol className="relative" aria-label="Línea de tiempo de HormiWhite">
              {/* Línea vertical con gradient */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" aria-hidden="true" />

              {timeline.map((item, i) => (
                <Reveal as="li" key={i} delay={i * 0.1} y={20}>
                  <div className="relative pl-16 pb-12 last:pb-0">
                    {/* Nodo */}
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                      className="absolute left-0 top-0 size-10 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background-light dark:ring-background-dark"
                    >
                      <span className="material-symbols-outlined text-slate-900 text-lg" aria-hidden="true">{item.icon}</span>
                    </motion.div>
                    {/* Card */}
                    <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all">
                      <time
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary"
                        dateTime={item.year === 'Actualidad' ? '2026' : item.year}
                      >
                        {item.year}
                      </time>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{item.desc}</p>
                    </article>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage

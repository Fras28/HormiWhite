// src/pages/QuotePage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const QuotePage = () => {
  const WHATSAPP_NUMBER = '5492914791111'
  const WHATSAPP_MESSAGE = encodeURIComponent('¡Hola! Me gustaría solicitar una cotización de hormigón elaborado para mi obra. ¿Podrían asesorarme?')
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  const quoteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Solicitud de Presupuesto - HormiWhite',
    description: 'Solicitá tu cotización de hormigón elaborado en Bahía Blanca vía WhatsApp.',
    url: 'https://hormiwhite.com.ar/quote',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'HormiWhite S.A.',
      address: { '@type': 'PostalAddress', streetAddress: 'Av. Santiago Dasso 2264', addressLocality: 'Bahía Blanca', addressRegion: 'Buenos Aires', postalCode: '8000', addressCountry: 'AR' },
      telephone: '+5492914791111',
      email: 'ventas@hormiwhite.com.ar',
      openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-13:00',
      priceRange: '$$$'
    }
  }

  const phones = [
    { label: 'Ventas', num: '+54 291 479-1111', tel: '+5492914791111', icon: 'point_of_sale' },
    { label: 'Administración', num: '+54 291 476-3333', tel: '+5492914763333', icon: 'badge' },
    { label: 'Logística', num: '+54 291 449-7925', tel: '+5492914497925', icon: 'route' }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Solicitar Presupuesto de Hormigón"
        description="Cotizá hormigón elaborado por WhatsApp. Asesoramiento personalizado de HormiWhite Bahía Blanca."
        keywords="cotizar hormigón WhatsApp, presupuesto hormigón Bahía Blanca, precio hormigón m3"
        canonical="https://hormiwhite.com.ar/quote"
        ogImage="https://hormiwhite.com.ar/images/cotizacion.jpg"
        structuredData={quoteStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1a13] via-[#162619] to-[#0f1a13] py-20 lg:py-28 px-6 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-primary/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Presupuesto"
              title="Pedí tu cotización"
              accent="en minutos"
              subtitle="Hablá directo con nuestro equipo y recibí asesoramiento personalizado para tu obra."
              light
              align="center"
            />
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* CTA principal — glass card grande */}
            <Reveal className="lg:col-span-3">
              <div className="relative h-full rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-8 lg:p-12 shadow-xl overflow-hidden">
                <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 180 }}
                    className="size-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-primary to-lime-400 flex items-center justify-center shadow-2xl shadow-primary/30 mb-6"
                  >
                    <span className="material-symbols-outlined text-slate-900 text-4xl" aria-hidden="true">forum</span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                    Cotización rápida por <span className="bg-gradient-to-r from-emerald-400 to-primary bg-clip-text text-transparent">WhatsApp</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mt-4">
                    Mandanos los detalles de tu obra (m³, tipo, fecha, dirección) y te respondemos en horario de atención.
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl shadow-green-600/30 transition-all"
                    aria-label="Iniciar cotización por WhatsApp"
                  >
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">chat</span>
                    <span className="text-lg">Iniciar cotización</span>
                  </motion.a>

                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Respuesta inmediata en horario de atención</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Aside */}
            <aside className="lg:col-span-2 flex flex-col gap-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-7 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">location_on</span>
                    Dirección
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-3 font-semibold">Av. Santiago Dasso 2264</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Bahía Blanca, Buenos Aires</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Argentina</p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-7 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">call</span>
                    Teléfonos
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {phones.map(p => (
                      <li key={p.label}>
                        <a href={`tel:${p.tel}`} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors">
                          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-lg" aria-hidden="true">{p.icon}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{p.label}</p>
                            <p className="font-bold text-slate-800 dark:text-slate-200">{p.num}</p>
                          </div>
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true">arrow_forward</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="rounded-3xl border border-primary/30 bg-primary/5 p-7">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">schedule</span>
                    Horario
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-slate-700 dark:text-slate-300">
                    <li className="flex justify-between"><span>Lunes a Viernes</span><span className="font-bold">07:00 – 18:00</span></li>
                    <li className="flex justify-between"><span>Sábados</span><span className="font-bold">08:00 – 13:00</span></li>
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default QuotePage

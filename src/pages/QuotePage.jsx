// src/pages/QuotePage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const QuotePage = () => {
  const WHATSAPP_NUMBER = '5492914791111'
  const WHATSAPP_MESSAGE = encodeURIComponent(
    '¡Hola! Me gustaría solicitar una cotización de hormigón elaborado para mi obra. ¿Podrían asesorarme?'
  )
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  const quoteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Solicitud de Presupuesto - HormiWhite',
    description: 'Solicitá tu cotización de hormigón elaborado en Bahía Blanca vía WhatsApp. Respuesta inmediata.',
    url: 'https://hormiwhite.com.ar/quote',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'HormiWhite S.A.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Santiago Dasso 2264',
        addressLocality: 'Bahía Blanca',
        addressRegion: 'Buenos Aires',
        postalCode: '8000',
        addressCountry: 'AR'
      },
      telephone: '+5492914791111',
      email: 'ventas@hormiwhite.com.ar',
      openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-13:00',
      priceRange: '$$$'
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Solicitar Presupuesto de Hormigón | WhatsApp Directo"
        description="Cotizá hormigón elaborado por WhatsApp. Respuesta inmediata con asesoramiento personalizado. HormiWhite Bahía Blanca."
        keywords="cotizar hormigón WhatsApp, presupuesto hormigón Bahía Blanca, precio hormigón m3, cotización rápida"
        canonical="https://hormiwhite.com.ar/quote"
        ogImage="https://hormiwhite.com.ar/images/cotizacion.jpg"
        structuredData={quoteStructuredData}
      />

      <Header />
      <main className="flex-grow concrete-overlay">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Solicitud de Presupuesto
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Contactanos directamente por WhatsApp y recibí tu cotización personalizada de hormigón elaborado con respuesta inmediata.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <section className="lg:w-3/5 bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-xl shadow-xl border border-primary/5 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl text-green-600" aria-hidden="true">chat</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Cotización rápida por WhatsApp
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto">
                  Nuestro equipo te guiará para obtener tu presupuesto personalizado en minutos.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                aria-label="Iniciar cotización por WhatsApp"
              >
                <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                <span className="text-lg">Iniciar cotización por WhatsApp</span>
              </a>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-green-500 text-base" aria-hidden="true">schedule</span>
                <span>Respuesta inmediata en horario de atención</span>
              </div>
            </section>

            <aside className="lg:w-2/5 flex flex-col gap-8">
              <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">info</span>
                  Información de contacto
                </h2>
                <address className="space-y-6 not-italic">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">location_on</span>
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p>Av. Santiago Dasso 2264, Bahía Blanca</p>
                      <p className="text-sm text-slate-500">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">call</span>
                    <div>
                      <p className="font-semibold">Ventas</p>
                      <a href="tel:+5492914791111" className="hover:text-primary transition-colors">+54 291 479-1111</a>
                      <p className="text-sm text-slate-500 mt-1">Administración: <a href="tel:+5492914763333" className="hover:text-primary">+54 291 476-3333</a></p>
                      <p className="text-sm text-slate-500">Logística: <a href="tel:+5492914497925" className="hover:text-primary">+54 291 449-7925</a></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">mail</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:ventas@hormiwhite.com.ar" className="hover:text-primary transition-colors">ventas@hormiwhite.com.ar</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">schedule</span>
                    <div>
                      <p className="font-semibold">Horario de atención</p>
                      <p>Lun-Vie: 7:00 - 18:00</p>
                      <p>Sáb: 8:00 - 13:00</p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-primary/10 shadow-lg">
                <h3 className="text-lg font-bold mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>3 plantas para acortar tiempos de viaje</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Asesoramiento técnico sin cargo</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Bombas telescópicas para colocación rápida</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Laboratorio propio que valida cada despacho</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default QuotePage

// src/pages/QuotePage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const QuotePage = () => {
  // Número de WhatsApp de la empresa (sin el +)
  const WHATSAPP_NUMBER = '542914791111'
  const WHATSAPP_MESSAGE = encodeURIComponent(
    '¡Hola! Me gustaría solicitar una cotización de hormigón elaborado para mi obra. ¿Podrían asesorarme?'
  )
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  // Schema.org para página de cotización
  const quoteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Solicitud de Presupuesto - HormiWhite',
    description: 'Solicitá tu cotización de hormigón elaborado en Bahía Blanca vía WhatsApp. Respuesta inmediata.',
    url: 'https://hormiwhite.com/quote',
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
        canonical="https://hormiwhite.com/quote"
        ogImage="https://hormiwhite.com/images/cotizacion.jpg"
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
            {/* Sección principal de WhatsApp */}
            <section className="lg:w-3/5 bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-xl shadow-xl border border-primary/5 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl text-green-600" aria-hidden="true">chat</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Cotización Rápida por WhatsApp
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto">
                  Nuestro sistema de automatización te guiará paso a paso para obtener tu presupuesto personalizado en minutos.
                </p>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                aria-label="Iniciar cotización por WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-lg">Iniciar Cotización por WhatsApp</span>
              </a>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-green-500 text-base" aria-hidden="true">schedule</span>
                <span>Respuesta automática inmediata</span>
              </div>
            </section>
            
            {/* Sidebar con información de contacto */}
            <aside className="lg:w-2/5 flex flex-col gap-8">
              <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">info</span>
                  Información de Contacto
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
                      <p className="font-semibold">Teléfono</p>
                      <a href="tel:+5492914791111" className="hover:text-primary transition-colors">+54 291 400-0000</a>
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
                    <span>Cotización inmediata 24/7</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Asesoramiento técnico sin cargo</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Mejores precios del mercado local</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check</span>
                    <span>Flexibilidad de pagos</span>
                  </li>
                </ul>
              </div>

              {/* Badge de WhatsApp Business */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-700 dark:text-green-400">WhatsApp Business</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Atención automatizada con respuesta inmediata</p>
                  </div>
                </div>
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
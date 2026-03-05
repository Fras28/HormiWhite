// src/pages/QuotePage.jsx
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const QuotePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    volumen: '',
    telefono: '',
    obra: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Schema.org para página de cotización
  const quoteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Solicitud de Presupuesto - HormiWhite',
    description: 'Solicitá tu cotización de hormigón elaborado en Bahía Blanca. Respuesta en 24 horas.',
    url: 'https://hormiwhite.com/quote',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'HormiWhite S.A.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mosconi 1655',
        addressLocality: 'Bahía Blanca',
        addressRegion: 'Buenos Aires',
        postalCode: '8000',
        addressCountry: 'AR'
      },
      telephone: '+54-291-400-0000',
      email: 'ventas@hormiwhite.com',
      openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-13:00',
      priceRange: '$$$'
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO 
        title="Solicitar Presupuesto de Hormigón"
        description="Cotizá hormigón elaborado online. Respuesta en 24hs. HormiWhite Bahía Blanca. Presupuesto sin compromiso."
        keywords="cotizar hormigón, presupuesto hormigón Bahía Blanca, precio hormigón m3, solicitar cotización"
        canonical="https://hormiwhite.com/quote"
        ogImage="https://hormiwhite.com/images/cotizacion.jpg"
        structuredData={quoteStructuredData}
      />
      
      <Header />
      <main className="flex-grow concrete-overlay">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">Solicitud de Presupuesto</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Complete el formulario para recibir una cotización personalizada de hormigón elaborado. Respuesta garantizada en 24 horas.
            </p>
          </header>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <section className="lg:w-3/5 bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-xl border border-primary/5">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-bold uppercase tracking-wider text-slate-500">Nombre completo</label>
                    <input 
                      id="nombre"
                      name="nombre"
                      className="w-full rounded-lg border-slate-200 dark:bg-slate-800 p-4 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      type="text" 
                      placeholder="Tu nombre o empresa"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-slate-500">Email</label>
                    <input 
                      id="email"
                      name="email"
                      className="w-full rounded-lg border-slate-200 dark:bg-slate-800 p-4 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      type="email" 
                      placeholder="email@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-bold uppercase tracking-wider text-slate-500">Teléfono</label>
                    <input 
                      id="telefono"
                      name="telefono"
                      className="w-full rounded-lg border-slate-200 dark:bg-slate-800 p-4 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      type="tel" 
                      placeholder="+54 291 400-0000"
                      value={formData.telefono}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volumen" className="text-sm font-bold uppercase tracking-wider text-slate-500">Volumen estimado (m³)</label>
                    <input 
                      id="volumen"
                      name="volumen"
                      className="w-full rounded-lg border-slate-200 dark:bg-slate-800 p-4 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      type="number" 
                      placeholder="0.00"
                      value={formData.volumen}
                      onChange={handleChange}
                      min="1"
                      step="0.1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="obra" className="text-sm font-bold uppercase tracking-wider text-slate-500">Descripción de la obra</label>
                  <textarea 
                    id="obra"
                    name="obra"
                    rows="4"
                    className="w-full rounded-lg border-slate-200 dark:bg-slate-800 p-4 border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" 
                    placeholder="Describa el tipo de obra, ubicación, requerimientos especiales..."
                    value={formData.obra}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  aria-label="Enviar solicitud de cotización"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">send</span> 
                  Enviar Cotización
                </button>
              </form>
            </section>
            
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
                      <p>Mosconi 1655, Bahía Blanca</p>
                      <p className="text-sm text-slate-500">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">call</span>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a href="tel:+542914000000" className="hover:text-primary transition-colors">+54 291 400-0000</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">mail</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:ventas@hormiwhite.com" className="hover:text-primary transition-colors">ventas@hormiwhite.com</a>
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
                    <span>Respuesta en 24 horas garantizada</span>
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
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default QuotePage
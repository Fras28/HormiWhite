// src/pages/HomePage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import bgHome from "../assets/Backgrounds/bgHero.mp4"
import Logistrica from "../assets/Backgrounds/LogisticaIndustrial.jpg"

const HomePage = () => {
  const navigate = useNavigate()

  // Schema.org específico para la página de inicio (WebSite + LocalBusiness)
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'HormiWhite',
        url: 'https://hormiwhite.com',
        description: 'Hormigón elaborado de alta resistencia en Bahía Blanca',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://hormiwhite.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'LocalBusiness',
        name: 'HormiWhite S.A.',
        image: 'https://hormiwhite.com/logo.png',
        '@id': 'https://hormiwhite.com',
        url: 'https://hormiwhite.com',
        telephone: '+54-291-400-0000',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mosconi 1655',
          addressLocality: 'Bahía Blanca',
          addressRegion: 'Buenos Aires',
          postalCode: '8000',
          addressCountry: 'AR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -38.7183,
          longitude: -62.2665
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127'
        }
      }
    ]
  }

  return (
    <div className="flex flex-col pt-8">
      <SEO 
        title="Hormigón Elaborado en Bahía Blanca"
        description="Líderes en hormigón elaborado de alta resistencia. Más de 20 años de experiencia, flota de 25+ motohormigoneras, certificación CIRSOC 201. Cotizá online."
        keywords="hormigón elaborado Bahía Blanca, motohormigonera, construcción, CIRSOC 201, hormigón H30, bombeo de hormigón"
        ogImage="https://hormiwhite.com/images/hero-planta.jpg"
        structuredData={homeStructuredData}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="@container relative">
          <div className="relative flex min-h-[85vh] flex-col items-start justify-center px-6 py-20 lg:px-20 overflow-hidden">
            {/* Video background */}
            <video
              className="absolute inset-0 z-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              
            >
              <source src={bgHome} type="video/mp4" />
            </video>
            {/* Overlay gradient encima del video */}
            <div
              className="absolute inset-0 z-[1]"
              style={{ background: "linear-gradient(rgba(20, 30, 20, 0.7), rgba(55, 65, 81, 0.6))" }}
            ></div>
            <div className="relative z-10 max-w-4xl flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">Líderes en Bahía Blanca</span>
                </div>
                <h1 className="text-white text-5xl font-black leading-tight tracking-tight md:text-7xl">
                  Hormigón Elaborado de <span className="text-primary">Alta Resistencia</span>
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Entrega puntual con nuestra flota de motohormigoneras propias. Calidad certificada y robustez garantizada para cada etapa de su obra.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/quote')} 
                  className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-slate-900 text-lg font-bold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="Solicitar cotización de hormigón"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">local_shipping</span>
                  <span>Cotizar Ahora</span>
                </button>
                <button 
                  onClick={() => navigate('/facilities')} 
                  className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-lg h-14 px-8 border-2 border-white text-white text-lg font-bold backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
                  aria-label="Ver nuestra flota de camiones"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">play_circle</span>
                  <span>Ver Flota</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="px-6 lg:px-20 -mt-16 relative z-20" aria-label="Estadísticas de la empresa">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <article className="flex flex-col gap-4 rounded-xl p-8 bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/20 shadow-xl">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">precision_manufacturing</span>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">Motohormigoneras</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black mt-1">25+</p>
              </div>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </article>
            <article className="flex flex-col gap-4 rounded-xl p-8 bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/20 shadow-xl">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">water_drop</span>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">m³ Mensuales</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black mt-1">15.000+</p>
              </div>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </article>
            <article className="flex flex-col gap-4 rounded-xl p-8 bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/20 shadow-xl">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">verified</span>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">Años de Experiencia</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black mt-1">20+</p>
              </div>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </article>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 lg:px-20 py-24 @container max-w-7xl mx-auto" aria-label="Ventajas competitivas">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight">
                Logística industrial para proyectos <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-8">sin límites</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Contamos con la infraestructura más robusta de Bahía Blanca. Nuestra planta automatizada asegura una mezcla homogénea y precisa, cumpliendo con las normas IRAM más exigentes para obras viales, civiles e industriales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Seguimiento Satelital</span>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Laboratorio Propio</span>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Bombeo en Altura</span>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Atención 24/7</span>
                </div>
              </div>
            </div>
            <figure className="flex-1 w-full h-[400px] rounded-2xl overflow-hidden relative border-4 border-white dark:border-background-dark shadow-2xl">
              <img 
                alt="Planta industrial de HormiWhite produciendo hormigón elaborado en Bahía Blanca" 
                className="w-full h-full object-fill" 
                src={Logistrica}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-20 px-6 lg:px-20" aria-label="Llamado a la acción">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div>
              <h3 className="text-slate-900 dark:text-white text-3xl font-black mb-2">¿Listo para comenzar su obra?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Hable con nuestros ingenieros y reciba asesoramiento técnico especializado.</p>
            </div>
            <button 
              onClick={() => navigate('/quote')} 
              className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-slate-900 text-lg font-bold transition-transform hover:scale-105"
              aria-label="Solicitar presupuesto de hormigón"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
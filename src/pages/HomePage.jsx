// src/pages/HomePage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import HeroShowcase from '../components/HeroShowcase'
import ParallaxStats from '../components/ParallaxStats'
import bgHome from "../assets/Backgrounds/bgHero.mp4"
import Logistrica from "../assets/Backgrounds/LogisticaIndustrial.jpg"

const HomePage = () => {
  const navigate = useNavigate()

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'HormiWhite',
        url: 'https://hormiwhite.com.ar',
        description: 'Hormigón elaborado en Bahía Blanca e Ingeniero White'
      },
      {
        '@type': 'LocalBusiness',
        name: 'HormiWhite S.A.',
        image: 'https://hormiwhite.com.ar/logo.png',
        '@id': 'https://hormiwhite.com.ar',
        url: 'https://hormiwhite.com.ar',
        telephone: '+5492914791111',
        email: 'ventas@hormiwhite.com.ar',
        foundingDate: '2016-04-22',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Santiago Dasso 2264',
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
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' }
        ]
      }
    ]
  }

  return (
    <div className="flex flex-col pt-8">
      <SEO
        title="Hormigón Elaborado en Bahía Blanca"
        description="Hormigón elaborado en Bahía Blanca e Ingeniero White. Flota de 22 mixers, 2 bombas telescópicas y 3 plantas operativas. Laboratorio propio."
        keywords="hormigón elaborado Bahía Blanca, hormigón Ingeniero White, mixer, bombeo de hormigón, HormiWhite"
        ogImage="https://hormiwhite.com.ar/images/hero-planta.jpg"
        structuredData={homeStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* ===== HERO ===== */}
        <div className="@container relative">
          <div className="relative flex min-h-[88vh] flex-col px-6 py-20 lg:px-20 overflow-hidden">
            <video
              className="absolute inset-0 z-0 w-full h-full object-cover"
              autoPlay muted loop playsInline aria-hidden="true"
            >
              <source src={bgHome} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 z-[1]"
              style={{ background: 'linear-gradient(rgba(15, 25, 18, 0.82), rgba(30, 50, 35, 0.55))' }}
            />

            <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-7xl mx-auto w-full">
              {/* Texto */}
              <div className="lg:col-span-7 flex flex-col gap-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    Bahía Blanca · Ingeniero White
                  </span>
                </div>
                <h1 className="text-white text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
                  Hormigón elaborado, <span className="bg-gradient-to-r from-emerald-300 via-primary to-lime-300 bg-clip-text text-transparent">listo para tu obra</span>.
                </h1>
                <p className="text-slate-200/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  Producción propia, flota de 22 mixers y 2 bombas telescópicas. 3 plantas operativas y laboratorio
                  interno que valida cada metro cúbico que sale a obra.
                </p>
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
                    aria-label="Ver nuestras instalaciones y flota"
                  >
                    <span className="material-symbols-outlined" aria-hidden="true">play_circle</span>
                    <span>Ver instalaciones</span>
                  </button>
                </div>
              </div>

              {/* Showcase moderno (cards con tilt 3D + glassmorphism) */}
              <div className="lg:col-span-5 w-full">
                <HeroShowcase />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Parallax stats ===== */}
        <ParallaxStats />

        {/* ===== Logística ===== */}
        <section className="px-6 lg:px-20 py-24 @container max-w-7xl mx-auto" aria-label="Ventajas competitivas">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight">
                Logística industrial para proyectos <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-8">sin límites</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Tres plantas dosificando en simultáneo, mixers con mando remoto universal y bombas telescópicas para
                colocar hormigón donde haga falta. Cada despacho sale validado por nuestro laboratorio interno.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex gap-3"><span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span><span className="font-bold text-slate-800 dark:text-slate-200">Laboratorio propio</span></div>
                <div className="flex gap-3"><span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span><span className="font-bold text-slate-800 dark:text-slate-200">Bombeo telescópico</span></div>
                <div className="flex gap-3"><span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span><span className="font-bold text-slate-800 dark:text-slate-200">Mando remoto en cada mixer</span></div>
                <div className="flex gap-3"><span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span><span className="font-bold text-slate-800 dark:text-slate-200">Cobertura Bahía Blanca e Ing. White</span></div>
              </div>
            </div>
            <figure className="flex-1 w-full h-[400px] rounded-2xl overflow-hidden relative border-4 border-white dark:border-background-dark shadow-2xl">
              <img alt="Planta industrial de HormiWhite" className="w-full h-full object-cover" src={Logistrica} loading="lazy" />
            </figure>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-primary/10 py-20 px-6 lg:px-20" aria-label="Llamado a la acción">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div>
              <h3 className="text-slate-900 dark:text-white text-3xl font-black mb-2">¿Listo para arrancar tu obra?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Hablá con nuestro equipo y recibí asesoramiento técnico antes de cargar el primer metro cúbico.</p>
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

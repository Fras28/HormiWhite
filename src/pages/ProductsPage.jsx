// src/pages/ProductsPage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
import SectionHeading from '../components/ui/SectionHeading'
import Hormigon from '../assets/Backgrounds/Hormigon.jpg'
import Bomba from '../assets/Backgrounds/Bomba.jpg'

const products = [
  {
    title: 'Hormigón elaborado',
    tag: 'H17 a H50',
    img: Hormigon,
    desc: 'Mezclas dosificadas por peso con tecnología automatizada. Resistencia y durabilidad garantizadas para cada estructura.',
    features: ['Dosificación por peso', 'Mezcla homogénea', 'Validado en laboratorio']
  },
  {
    title: 'Bombeo de hormigón',
    tag: 'Bombas telescópicas',
    img: Bomba,
    desc: 'Equipos de última generación para alcanzar alturas y distancias críticas. Colocación rápida y precisa donde la obra lo requiera.',
    features: ['Alcance flexible', 'Operadores experimentados', 'Coordinación con flota propia']
  }
]

const specs = [
  { type: 'H17', mpa: '17 MPa', use: 'Contrapisos, carpetas de nivelación' },
  { type: 'H21', mpa: '21 MPa', use: 'Veredas, losas de uso liviano' },
  { type: 'H25', mpa: '25 MPa', use: 'Estructuras residenciales' },
  { type: 'H30', mpa: '30 MPa', use: 'Estructuras industriales y comerciales' }
]

const ProductsPage = () => {
  const productsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'Product', name: 'Hormigón Elaborado H17-H50', description: 'Hormigón elaborado dosificado por peso', brand: { '@type': 'Brand', name: 'HormiWhite' } },
      { '@type': 'Service', name: 'Bombeo de Hormigón', description: 'Servicio de bombeo telescópico de hormigón', provider: { '@type': 'LocalBusiness', name: 'HormiWhite S.A.' }, areaServed: 'Bahía Blanca y región' }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO
        title="Productos y Servicios de Hormigón"
        description="Hormigón elaborado H17 a H50 y servicio de bombeo telescópico en Bahía Blanca. Cotizá online."
        keywords="hormigón H17, hormigón H30, bombeo de hormigón, dosificación automatizada, Bahía Blanca"
        canonical="https://hormiwhite.com.ar/products"
        ogImage="https://hormiwhite.com.ar/images/productos-hormigon.jpg"
        structuredData={productsStructuredData}
      />

      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1a13] via-[#162619] to-[#0f1a13] py-24 lg:py-32 px-6 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 size-[30rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 -left-32 size-[26rem] rounded-full bg-emerald-400/10 blur-3xl" />
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
              eyebrow="Productos y servicios"
              title="Soluciones en hormigón"
              accent="para cada obra"
              subtitle="Hormigón elaborado de H17 a H50 y bombeo telescópico. Tecnología, control y entrega coordinada para que la obra no se detenga."
              light
            />
          </div>
        </section>

        {/* PRODUCTS — tilt cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28" aria-label="Nuestros productos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <TiltCard intensity={6} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all">
                    {/* Imagen */}
                    <figure className="relative w-full aspect-[16/10] overflow-hidden">
                      <img src={item.img} alt={`${item.title} - HormiWhite`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-slate-900 text-xs font-bold uppercase tracking-widest shadow-lg">
                        {item.tag}
                      </span>
                    </figure>
                    {/* Cuerpo */}
                    <div className="p-7">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{item.desc}</p>
                      <ul className="mt-5 space-y-2">
                        {item.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">check_circle</span>
                            <span className="font-semibold">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                        <span>Más información</span>
                        <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SPECS table */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-24" aria-label="Especificaciones técnicas">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">Especificaciones técnicas</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Resistencia y aplicación recomendada de cada tipo de hormigón.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-12 bg-gradient-to-r from-primary to-emerald-500 text-slate-900">
                <div className="col-span-3 px-6 py-4 text-xs font-black uppercase tracking-widest">Tipo</div>
                <div className="col-span-3 px-6 py-4 text-xs font-black uppercase tracking-widest">Resistencia</div>
                <div className="col-span-6 px-6 py-4 text-xs font-black uppercase tracking-widest">Uso recomendado</div>
              </div>
              {specs.map((row, i) => (
                <motion.div
                  key={row.type}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="grid grid-cols-12 border-t border-slate-200 dark:border-white/5 hover:bg-primary/5 transition-colors"
                >
                  <div className="col-span-3 px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-primary/10 text-primary font-black text-lg">{row.type}</span>
                  </div>
                  <div className="col-span-3 px-6 py-5 font-bold text-slate-700 dark:text-slate-200">{row.mpa}</div>
                  <div className="col-span-6 px-6 py-5 text-slate-600 dark:text-slate-400 text-sm">{row.use}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage

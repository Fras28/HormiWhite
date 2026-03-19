// src/pages/ProductsPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Hormigon from "../assets/Backgrounds/Hormigon.jpg"
import Bomba from "../assets/Backgrounds/Bomba.jpg"

const ProductsPage = () => {
  const products = [
    { 
      title: 'Hormigón Elaborado', 
      tag: 'H17 a H50', 
      img: Hormigon, 
      desc: 'Mezclas dosificadas por peso con tecnología automatizada. Garantizamos resistencia y durabilidad.' 
    },
    { 
      title: 'Bombeo de Hormigón', 
      img: Bomba, 
      desc: 'Equipos de bombeo de última generación para alcanzar alturas y distancias críticas en obra.' 
    }
  ]

  const specs = ['H17', 'H21', 'H25', 'H30']

  // Schema.org para Productos
  const productsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'Hormigón Elaborado H17-H50',
        description: 'Hormigón elaborado de alta resistencia dosificado por peso con tecnología automatizada',
        brand: {
          '@type': 'Brand',
          name: 'HormiWhite'
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'ARS',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: 'HormiWhite S.A.'
          }
        }
      },
      {
        '@type': 'Service',
        name: 'Bombeo de Hormigón',
        description: 'Servicio de bombeo de hormigón con equipos de última generación',
        provider: {
          '@type': 'LocalBusiness',
          name: 'HormiWhite S.A.'
        },
        areaServed: 'Bahía Blanca y región'
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen pt-8">
      <SEO 
        title="Productos y Servicios de Hormigón"
        description="Hormigón elaborado H17 a H50, bombeo de hormigón y servicios de calidad certificada CIRSOC 201 en Bahía Blanca. Cotizá online."
        keywords="hormigón H17, hormigón H30, hormigón H50, bombeo de hormigón, dosificación automatizada, Bahía Blanca, precio hormigón"
        canonical="https://hormiwhite.com/products"
        ogImage="https://hormiwhite.com/images/productos-hormigon.jpg"
        structuredData={productsStructuredData}
      />
      
      <Header />
      <main className="flex flex-1 flex-col px-6 lg:px-40 py-12 max-w-7xl mx-auto w-full">
        <header className="flex flex-col gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Bahía Blanca, Argentina
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-2xl">
            Servicios y Productos de <span className="text-primary">Hormigón</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
            Soluciones robustas y tecnología de vanguardia para la construcción industrial y civil en toda la región.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" aria-label="Nuestros productos">
          {products.map((item, idx) => (
            <article key={idx} className="group flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
              <figure className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img 
                  alt={`${item.title} - HormiWhite Bahía Blanca`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={item.img} 
                  loading="lazy"
                />
                {item.tag && (
                  <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {item.tag}
                  </span>
                )}
              </figure>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h2>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-6" aria-label="Especificaciones técnicas">
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">Especificaciones Técnicas</h2>
          <div className="overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-slate-900 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-sm font-bold uppercase" scope="col">Tipo</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase" scope="col">Resistencia</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase" scope="col">Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {specs.map((type, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-5 font-bold">{type}</td>
                    <td className="px-6 py-5 text-primary font-semibold">{type.slice(1)} MPa</td>
                    <td className="px-6 py-5 text-slate-500 text-sm">Aplicaciones estructurales e industriales</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage
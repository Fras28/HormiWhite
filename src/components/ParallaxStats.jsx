// src/components/ParallaxStats.jsx
// Sección de "capacidad operativa" con scroll-driven parallax (framer-motion).
// Tres capas se mueven a velocidades distintas mientras el usuario scrollea.
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const stats = [
  {
    icon: 'local_shipping',
    value: '22',
    label: 'Mixers',
    desc: 'Camiones hormigoneros con mando remoto universal para servicio rápido sin perder calidad de mezcla.'
  },
  {
    icon: 'precision_manufacturing',
    value: '2',
    label: 'Bombas telescópicas',
    desc: 'Bombas para colocación rápida y precisa del hormigón donde la obra lo requiera.'
  },
  {
    icon: 'factory',
    value: '3',
    label: 'Plantas operativas',
    desc: 'Capacidad distribuida en Bahía Blanca e Ingeniero White para responder con menos tiempos de viaje.'
  },
  {
    icon: 'science',
    value: '100%',
    label: 'Control en laboratorio propio',
    desc: 'Cada tanda se valida con ensayos supervisados por nuestros ingenieros, de fábrica a obra.'
  }
]

const ParallaxStats = () => {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Capas con distintas velocidades para crear profundidad
  const yBack = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [80, -80])
  const yMid = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40])
  const yFront = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -20])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4])

  return (
    <section
      ref={ref}
      aria-label="Capacidad operativa de HormiWhite"
      className="relative isolate overflow-hidden py-24 lg:py-32"
      style={{
        background:
          'linear-gradient(135deg, #1c2a1c 0%, #243424 50%, #1c2a1c 100%)'
      }}
    >
      {/* Capa 1 (fondo lejano): textura de concreto */}
      <motion.div
        style={{ y: yBack }}
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
      >
        <div
          className="w-full h-[140%]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '500px 500px'
          }}
        />
      </motion.div>

      {/* Capa 2 (media): blobs verdes desenfocados */}
      <motion.div
        style={{ y: yMid }}
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-10 -left-20 size-96 rounded-full bg-[#67a844]/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 size-[28rem] rounded-full bg-[#67a844]/20 blur-3xl" />
      </motion.div>

      {/* Capa 3 (frente): contenido */}
      <motion.div
        style={{ y: yFront }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20"
      >
        <motion.header
          style={{ opacity: titleOpacity }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#67a844]/15 border border-[#67a844]/40 text-[#bfe8a4] text-xs font-bold uppercase tracking-widest">
            <span className="size-2 rounded-full bg-[#67a844] animate-pulse" />
            Capacidad operativa real
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black mt-4 leading-tight">
            Infraestructura propia para sostener tu obra <span className="text-[#86d068]">sin cortes</span>.
          </h2>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            Tres plantas, una flota grande de mixers y bombas telescópicas. Producción y logística en la misma mano,
            con laboratorio propio que valida cada despacho.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="relative rounded-2xl p-7 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#67a844]/40 transition-colors"
            >
              <div className="size-12 rounded-xl bg-[#67a844]/20 border border-[#67a844]/30 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[#bfe8a4]" aria-hidden="true">
                  {s.icon}
                </span>
              </div>
              <p className="text-white text-5xl font-black tracking-tight">{s.value}</p>
              <p className="text-[#bfe8a4] text-xs font-bold uppercase tracking-widest mt-1">{s.label}</p>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ParallaxStats

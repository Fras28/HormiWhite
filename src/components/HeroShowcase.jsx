// src/components/HeroShowcase.jsx
// Hero visual moderno: 3 spec-cards en glassmorphism con tilt 3D al mover el mouse,
// contadores animados, grid pattern animado y badges flotantes.
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import CountUp from 'react-countup'

const cards = [
  {
    icon: 'local_shipping',
    value: 22,
    suffix: '',
    label: 'Mixers en flota',
    sub: 'Mando remoto universal',
    accent: 'from-emerald-400/20 to-emerald-600/5',
    delay: 0
  },
  {
    icon: 'factory',
    value: 3,
    suffix: '',
    label: 'Plantas operativas',
    sub: 'Bahía Blanca + Ing. White',
    accent: 'from-lime-400/20 to-lime-600/5',
    delay: 0.15
  },
  {
    icon: 'precision_manufacturing',
    value: 2,
    suffix: '',
    label: 'Bombas telescópicas',
    sub: 'Colocación rápida y precisa',
    accent: 'from-green-400/20 to-green-600/5',
    delay: 0.3
  }
]

const HeroShowcase = () => {
  const wrapRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Tilt 3D según posición del mouse en el contenedor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 90, damping: 14 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 90, damping: 14 })

  const handleMove = (e) => {
    if (reduceMotion) return
    const rect = wrapRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full h-full min-h-[420px] flex items-center justify-center"
      style={{ perspective: '1400px' }}
      aria-hidden="true"
    >
      {/* ====== Fondo: grid pattern animado + glow ====== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <motion.div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '46px 46px'
          }}
          animate={reduceMotion ? {} : { backgroundPosition: ['0px 0px', '46px 46px'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        {/* Glow esmeralda detrás de las cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute bottom-10 right-6 size-48 rounded-full bg-lime-300/20 blur-3xl" />
      </div>

      {/* ====== Stack de cards con tilt 3D ====== */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-md flex flex-col gap-4 px-4"
      >
        {cards.map((c, i) => (
          <motion.article
            key={c.label}
            initial={{ opacity: 0, y: 28, rotateX: -12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: c.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${20 + i * 10}px)`
            }}
            whileHover={{ scale: 1.025, y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
          >
            {/* Glow interno por card */}
            <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${c.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
            {/* Borde superior con shimmer */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative z-10 flex items-center gap-5 p-5 md:p-6">
              {/* Icono */}
              <div className="shrink-0 size-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: '"FILL" 1' }} aria-hidden="true">
                  {c.icon}
                </span>
              </div>

              {/* Valor + label */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-5xl font-black tracking-tight tabular-nums leading-none">
                    <CountUp end={c.value} duration={1.6} delay={c.delay + 0.4} preserveValue />
                  </span>
                  {c.suffix && <span className="text-emerald-300 text-2xl font-bold">{c.suffix}</span>}
                </div>
                <p className="text-white/95 text-sm font-bold uppercase tracking-widest mt-1">{c.label}</p>
                <p className="text-white/55 text-xs mt-1">{c.sub}</p>
              </div>

              {/* Indicador "live" */}
              <div className="shrink-0 flex flex-col items-end gap-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full size-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300/80 text-[10px] font-bold uppercase tracking-widest">Operativo</span>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Card flotante secundaria: laboratorio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative mt-2 flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] backdrop-blur-xl px-4 py-3"
          style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
        >
          <span className="material-symbols-outlined text-emerald-300" aria-hidden="true">science</span>
          <p className="text-white/85 text-sm">
            <span className="font-bold">Laboratorio propio</span> — cada despacho validado por nuestros ingenieros.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroShowcase

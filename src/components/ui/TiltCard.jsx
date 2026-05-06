// src/components/ui/TiltCard.jsx
// Card con tilt 3D al mover el mouse + glow seguidor opcional.
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const TiltCard = ({
  children,
  className = '',
  intensity = 8,
  glow = true,
  ...rest
}) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 110, damping: 14 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 110, damping: 14 })
  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%'])

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className={`relative ${className}`}
      {...rest}
    >
      {glow && !reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity"
          style={{
            background: useTransform([glowX, glowY], ([x, y]) =>
              `radial-gradient(420px circle at ${x} ${y}, rgba(103,168,68,0.18), transparent 60%)`
            )
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

export default TiltCard

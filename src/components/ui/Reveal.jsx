// src/components/ui/Reveal.jsx
// Wrapper liviano para fade-up al entrar en viewport.
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className = '',
  as: Component = 'div',
  once = true,
  duration = 0.65
}) => {
  const reduce = useReducedMotion()
  const MotionComp = motion[Component] || motion.div
  return (
    <MotionComp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionComp>
  )
}

export default Reveal

// src/components/ui/SectionHeading.jsx
// Header de sección con eyebrow chip + título y subtítulo.
// Soporta gradient en parte del título via prop `accent`.
import React from 'react'
import Reveal from './Reveal'

const SectionHeading = ({
  eyebrow,
  title,
  accent,
  subtitle,
  align = 'left',
  light = false,
  className = ''
}) => {
  const alignCls = align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left'
  const titleCls = light ? 'text-white' : 'text-slate-900 dark:text-white'
  const subCls = light ? 'text-slate-200/80' : 'text-slate-600 dark:text-slate-400'

  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal delay={0} y={12}>
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${
            light
              ? 'bg-primary/20 border-primary/40 text-primary'
              : 'bg-primary/10 border-primary/30 text-primary'
          }`}>
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06} y={20}>
        <h2 className={`mt-4 text-4xl md:text-5xl font-black leading-[1.05] tracking-tight ${titleCls}`}>
          {title}
          {accent && (
            <>
              {' '}
              <span className="bg-gradient-to-r from-emerald-300 via-primary to-lime-300 bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12} y={16}>
          <p className={`mt-4 text-lg leading-relaxed ${subCls}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeading

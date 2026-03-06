// src/components/Logo.jsx - Componente SVG Vectorizado
import React from 'react';

const Logo = ({ className = "w-20 sm:w-28 lg:w-32", colorH = "#6b7280", colorW = "#65a30d" }) => {
  return (
    <svg 
      viewBox="0 0 200 120" 
      className={`${className} h-auto drop-shadow-lg`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Forma orgánica del logo sin borde */}
      <path 
        d="M 20 60 
           Q 20 20, 100 15 
           Q 180 10, 180 60 
           Q 180 110, 100 105 
           Q 20 100, 20 60 Z" 
        fill="currentColor"
        className="text-white"
        filter="url(#concrete-texture)"
      />
      
      {/* Sombra interna sutil para efecto de relieve */}
      <path 
        d="M 25 60 
           Q 25 25, 100 20 
           Q 175 15, 175 60 
           Q 175 105, 100 100 
           Q 25 95, 25 60 Z" 
        fill="none"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="2"
      />
      
      {/* Letra H */}
      <path 
        d="M 55 40 
           L 55 80 
           L 70 80 
           L 70 63 
           L 90 63 
           L 90 80 
           L 105 80 
           L 105 40 
           L 90 40 
           L 90 53 
           L 70 53 
           L 70 40 
           Z" 
        fill={colorH}
      />
      
      {/* Letra W */}
      <path 
        d="M 110 40 
           L 125 80 
           L 140 80 
           L 147 58 
           L 154 80 
           L 169 80 
           L 184 40 
           L 169 40 
           L 162 62 
           L 155 40 
           L 145 40 
           L 138 62 
           L 131 40 
           Z" 
        fill={colorW}
      />
      
      {/* Definiciones de filtros para textura de concreto sutil */}
      <defs>
        <filter id="concrete-texture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite in="diffLight" in2="SourceGraphic" operator="in" result="textured" />
          <feBlend in="textured" in2="SourceGraphic" mode="multiply" />
        </filter>
        
        {/* Sombra suave */}
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
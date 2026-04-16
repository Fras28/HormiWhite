// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logotipo.-Hori-nega.png"
import LogoMorton from "../assets/LogoMorton.jpg"

const Footer = () => (
  <footer 
    className="relative py-16 px-6 lg:px-20 overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #d0d0d0 0%, #c0c0c0 25%, #b0b0b0 50%, #c0c0c0 75%, #d0d0d0 100%)',
      backgroundSize: '400% 400%',
      animation: 'concreteShiftFooter 20s ease infinite',
      borderTop: '1px solid rgba(255,255,255,0.2)'
    }}
  >
    {/* Textura de concreto pesado */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px),
          repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px)
        `,
        backgroundSize: '200px 200px, 100% 100%, 100% 100%'
      }}
    />
    
    {/* Efecto de relieve/sombra interna superior */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.05) 100%)'
      }}
    />

    {/* Líneas de estratificación del concreto */}
    <div className="absolute inset-0 pointer-events-none opacity-10" style={{
      background: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,0,0,0.1) 80px, rgba(0,0,0,0.1) 82px)'
    }} />

    <style>{`
      @keyframes concreteShiftFooter {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>

    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Columna 1: Logo y descripción */}
        <div className="col-span-1 md:col-span-2">
          <div 
            className="inline-block p-4 rounded-xl mb-6 transition-transform hover:scale-105"
   
          >
            <img src={Logo} alt="Logo HormiWhite" className="w-40 h-auto drop-shadow-md" />
          </div>
          
          <p 
            className="max-w-sm mb-6 font-medium"
            style={{
              color: '#4a4a4a',
              textShadow: '0 1px 1px rgba(255,255,255,0.3)'
            }}
          >
            Soluciones integrales en hormigón elaborado para la industria de la construcción en el sur argentino.
          </p>
          
          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <span 
              className="text-sm font-semibold"
              style={{ color: '#5a5a5a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
            >
              Seguinos:
            </span>
            <a 
              href="https://www.instagram.com/hormiwhitesa/ "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center size-11 rounded-lg text-white hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden group"
              style={{
                background: 'linear-gradient(145deg, #d0d0d0, #b0b0b0)',
                boxShadow: '4px 4px 8px #909090, -4px -4px 8px #ffffff'
              }}
              aria-label="Instagram HormiWhite"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-5 h-5 relative z-10 text-slate-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h4 
            className="font-bold mb-6 uppercase tracking-wider text-sm"
            style={{
              color: '#3a3a3a',
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            Contacto
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3 items-center group cursor-default">
              <span 
                className="material-symbols-outlined text-lg transition-transform group-hover:scale-110"
                style={{ color: '#65a30d', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                location_on
              </span> 
              <span style={{ color: '#4a4a4a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}>
              Av. Dasso 2264, Bahía Blanca
              </span>
            </li>
        
            <li className="flex gap-1 items-center group cursor-pointer hover:translate-x-1 transition-transform">
              <span 
                className="material-symbols-outlined text-lg transition-transform group-hover:scale-110"
                style={{ color: '#65a30d', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                phone
              </span>
              <span> Ventas:</span> 
              <a 
                href="tel:+5492914791111"
                style={{ color: '#4a4a4a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
                className="hover:text-lime-700 transition-colors"
              >
                +54 291 4791111
              </a>
            </li>
            <li className="flex gap-1 items-center group cursor-pointer hover:translate-x-1 transition-transform">
              <span 
                className="material-symbols-outlined text-lg transition-transform group-hover:scale-110"
                style={{ color: '#65a30d', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                phone
              </span>
              <span> Administración:</span> 
              <a 
                href="tel:+5492914791111"
                style={{ color: '#4a4a4a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
                className="hover:text-lime-700 transition-colors"
              >
                +54 291 4763333
              </a>
            </li>
            <li className="flex gap-1 items-center group cursor-pointer hover:translate-x-1 transition-transform">
              <span 
                className="material-symbols-outlined text-lg transition-transform group-hover:scale-110"
                style={{ color: '#65a30d', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                phone
              </span>
              <span> Logística:</span> 
              <a 
                href="tel:+5492914791111"
                style={{ color: '#4a4a4a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
                className="hover:text-lime-700 transition-colors"
              >
                +54 291 4497925
              </a>
            </li>
            
            <li className="flex gap-3 items-center group cursor-pointer hover:translate-x-1 transition-transform">
              <span 
                className="material-symbols-outlined text-lg transition-transform group-hover:scale-110"
                style={{ color: '#65a30d', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                mail
              </span> 
              <a 
                href="mailto:ventas@hormiwhite.com.ar"
                style={{ color: '#4a4a4a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
                className="hover:text-lime-700 transition-colors"
              >
                ventas@hormiwhite.com.ar
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Legales */}
        <div>
          <h4 
            className="font-bold mb-6 uppercase tracking-wider text-sm"
            style={{
              color: '#3a3a3a',
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            Legales
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link 
                className="transition-all duration-300 hover:translate-x-1 inline-block"
                style={{ 
                  color: '#4a4a4a', 
                  textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                }}
                to="/privacy"
              >
                <span className="hover:text-lime-700 transition-colors relative group">
                  Políticas de Privacidad
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-lime-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </li>
            <li>
              <Link 
                className="transition-all duration-300 hover:translate-x-1 inline-block"
                style={{ 
                  color: '#4a4a4a', 
                  textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                }}
                to="/terms"
              >
                <span className="hover:text-lime-700 transition-colors relative group">
                  Términos y Condiciones
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-lime-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </li>
            <li>
              <a 
                className="transition-all duration-300 hover:translate-x-1 inline-block"
                style={{ 
                  color: '#4a4a4a', 
                  textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                }}
                href="#"
              >
                <span className="hover:text-lime-700 transition-colors relative group">
                  Normas IRAM
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-lime-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Créditos y desarrollo */}
      <div 
        className="mt-16 pt-8 relative"
        style={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 -1px 0 rgba(255,255,255,0.2)'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Créditos fotografía */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-2 text-xs text-center sm:text-left"
            style={{ color: '#5a5a5a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
          >
            <span className="material-symbols-outlined text-sm" style={{ color: '#65a30d' }}>photo_camera</span>
            <span>Fotografías por</span>
            <a 
              href="https://www.instagram.com/reinaldo__o/ "
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline flex items-center gap-1 transition-all hover:scale-105"
              style={{ color: '#65a30d' }}
            >
              Ph Reinaldo Perdono
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p 
            className="text-xs text-center font-medium"
            style={{ color: '#6a6a6a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
          >
            © 2024 HormiWhite S.A. Todos los derechos reservados.
          </p>

          {/* Desarrollado por */}
          <div className="flex items-center gap-3">
            <span 
              className="text-xs font-medium"
              style={{ color: '#5a5a5a', textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}
            >
              Desarrollado por
            </span>
            <a 
              href="https://www.instagram.com/morton.desarrollos/ "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 p-2 rounded-lg"
              aria-label="Morton Soluciones - Desarrollo Web"
            >
              <img 
                src={LogoMorton} 
                alt="Logo Morton Soluciones" 
                className="w-24 h-auto"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
)

export default Footer
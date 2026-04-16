// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logotipo.-Horipng.png"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Productos', path: '/products' },
    { name: 'Flota', path: '/facilities' },
    { name: 'Calidad', path: '/quality' },
    { name: 'Contacto', path: '/quote' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen 
            ? 'shadow-2xl shadow-black/20' 
            : 'shadow-lg shadow-black/10'
        }`}
        style={{
          background: isScrolled || isMenuOpen 
            ? 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 25%, #c0c0c0 50%, #d4d4d4 75%, #e8e8e8 100%)'
            : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%, #f0f0f0 100%)',
          backgroundSize: '400% 400%',
          animation: 'concreteShift 15s ease infinite',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        {/* Textura de concreto overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px),
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)
            `,
            backgroundSize: '200px 200px, 100% 100%, 100% 100%'
          }}
        />
        
        {/* Efecto de relieve/sombra interna */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.05) 100%)'
          }}
        />

        <style>{`
          @keyframes concreteShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <div className="relative z-10 flex items-center justify-between whitespace-nowrap px-6 lg:px-20">
          {/* Logo con efecto de relieve */}
          <Link to="/" className="flex items-center gap-3 z-50 group" onClick={() => setIsMenuOpen(false)}>
            <div 
              className="relative p-2 rounded-lg transition-all duration-300 group-hover:scale-105"
    
            >
              <img src={Logo} alt="Logo HormiWhite" className='w-32 sm:w-28 lg:w-32 h-auto relative z-10 drop-shadow-md' />
              <div className="absolute inset-0 rounded-lg opacity-50"  />
            </div>
          </Link>

          {/* Navegación Desktop con estilo industrial */}
          <nav className="hidden lg:flex flex-1 justify-center gap-8">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative text-sm font-bold tracking-wide uppercase transition-all duration-300 group ${
                  location.pathname === link.path ? 'text-slate-800' : 'text-slate-600 hover:text-slate-800'
                }`}
                style={{
                  textShadow: location.pathname === link.path ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  fontFamily: 'Oswald, sans-serif'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {location.pathname === link.path && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm" />
                  )}
                  {link.name}
                </span>
                
                {/* Línea inferior estilo industrial */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full shadow-sm' : 'w-0 group-hover:w-full'
                  }`} 
                  style={{
                    boxShadow: location.pathname === link.path ? '0 2px 4px rgba(249, 115, 22, 0.4)' : 'none'
                  }}
                />
                
                {/* Efecto hover de relieve */}
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded px-3 py-1 -mx-3 -my-1" style={{
                  background: 'linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.1))',
                  boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.05), inset -2px -2px 4px rgba(255,255,255,0.5)'
                }} />
              </Link>
            ))}
          </nav>

          {/* Acciones Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Instagram con efecto de concreto */}
            <a 
              href="https://www.instagram.com/hormiwhitesa/ "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center size-10 rounded-lg text-white hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden group"
              style={{
                background: 'linear-gradient(145deg, #d0d0d0, #b0b0b0)',
                boxShadow: '4px 4px 8px #a0a0a0, -4px -4px 8px #ffffff'
              }}
              aria-label="Seguir a HormiWhite en Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-5 h-5 relative z-10 text-slate-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Botón Cotizar estilo industrial */}
            <Link 
              to="/quote" 
              className="relative overflow-hidden min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 text-sm font-bold transition-all hover:scale-105 active:scale-95 flex group"
              style={{
                background: 'linear-gradient(145deg, #67a844, #67a844)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.3), inset 1px 1px 2px rgba(255,255,255,0.3)',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '0.05em'
              }}
            >
              <span className="relative z-10 text-white drop-shadow-md">COTIZAR</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }} />
            </Link>
            
            {/* Account con efecto de concreto */}
            <div 
              className="size-10 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 relative group"
              style={{
                background: 'linear-gradient(145deg, #e0e0e0, #c0c0c0)',
                boxShadow: '3px 3px 6px #b0b0b0, -3px -3px 6px #ffffff'
              }}
            >
              <span className="material-symbols-outlined text-slate-600 relative z-10 group-hover:text-slate-800 transition-colors">account_circle</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(0,0,0,0.05))'
              }} />
            </div>
          </div>

          {/* Botón Menú Mobile con efecto de concreto */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 size-12 flex items-center justify-center rounded-lg transition-all duration-300 active:scale-95"
            style={{
              background: isMenuOpen 
                ? 'linear-gradient(145deg, #d0d0d0, #b0b0b0)' 
                : 'linear-gradient(145deg, #e8e8e8, #c8c8c8)',
              boxShadow: isMenuOpen 
                ? 'inset 3px 3px 6px #a0a0a0, inset -3px -3px 6px #ffffff'
                : '4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff'
            }}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 origin-left ${
                isMenuOpen ? 'rotate-45 translate-x-px bg-slate-800' : ''
              }`} style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></span>
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`} style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></span>
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 origin-left ${
                isMenuOpen ? '-rotate-45 translate-x-px bg-slate-800' : ''
              }`} style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menú Mobile Overlay con textura de concreto */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 50%, #c0c0c0 100%)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.3)'
          }}
        >
          {/* Textura de concreto para el menú móvil */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px)
              `
            }}
          />
          
          {/* Líneas de estratificación del concreto */}
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(0,0,0,0.03) 100px, rgba(0,0,0,0.03) 102px)'
          }} />

          <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6">
            <nav className="flex-1 flex flex-col gap-3">
              {links.map((link, index) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`relative flex items-center gap-4 px-5 py-4 rounded-lg text-lg font-bold transition-all duration-300 overflow-hidden group ${
                    location.pathname === link.path 
                      ? 'text-slate-800' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms',
                    fontFamily: 'Oswald, sans-serif',
                    background: location.pathname === link.path 
                      ? 'linear-gradient(145deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))' 
                      : 'linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.02))',
                    boxShadow: location.pathname === link.path 
                      ? 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.1)' 
                      : '4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em'
                  }}
                >
                  <span className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                    location.pathname === link.path ? 'bg-green-500 scale-125 shadow-green-500/50' : 'bg-slate-400 group-hover:bg-green-400'
                  }`}></span>
                  {link.name}
                  
                  {/* Efecto de relieve al hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                  }} />
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-6 border-t-2 border-slate-400/30 relative">
              <a 
                href="https://www.instagram.com/hormiwhitesa/ "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(145deg, #e8e8e8, #d0d0d0)',
                  boxShadow: '3px 3px 6px #b0b0b0, -3px -3px 6px #ffffff'
                }}
              >
                <div className="flex items-center justify-center size-10 rounded-lg text-white shadow-md" style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #ef4444, #db2777)'
                }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-bold text-slate-700">@hormiwhitesa</span>
              </a>

              <Link 
                to="/quote" 
                className="flex items-center justify-center gap-2 w-full py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #f97316, #ea580c)',
                  boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.4)',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                <span className="material-symbols-outlined relative z-10">request_quote</span>
                <span className="relative z-10">Solicitar Cotización</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }} />
              </Link>

              <a 
                href="tel:+5492914791111"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-slate-700 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'linear-gradient(145deg, #e8e8e8, #d0d0d0)',
                  boxShadow: '3px 3px 6px #b0b0b0, -3px -3px 6px #ffffff',
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box'
                }}
              >
                <span className="material-symbols-outlined text-green-600">phone</span>
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
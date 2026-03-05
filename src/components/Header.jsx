// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logosimple.png"

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

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevenir scroll cuando el menú está abierto
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen 
            ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-md'
        } border-b border-primary/10`}
      >
        <div className="flex items-center justify-between whitespace-nowrap px-6 py-4 lg:px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50" onClick={() => setIsMenuOpen(false)}>
            <div className="text-primary">
              <img src={Logo} alt="Logo HormiWhite" className='w-20 sm:w-28 lg:w-32 h-auto' />
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex flex-1 justify-center gap-8">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-semibold transition-colors hover:text-primary relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Acciones Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/hormiwhitesa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center size-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white hover:scale-110 transition-transform shadow-md"
              aria-label="Seguir a HormiWhite en Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Botón Cotizar */}
            <Link 
              to="/quote" 
              className="min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-slate-900 text-sm font-bold transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/30 flex"
            >
              <span>Cotizar</span>
            </Link>
            
            {/* Account */}
            <div className="size-10 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">account_circle</span>
            </div>
          </div>

          {/* Botón Menú Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 size-12 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 origin-left ${
                isMenuOpen ? 'rotate-45 translate-x-px' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 origin-left ${
                isMenuOpen ? '-rotate-45 translate-x-px' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menú Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Panel del menú */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-background-dark shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            {/* Links de navegación */}
            <nav className="flex-1 flex flex-col gap-2">
              {links.map((link, index) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-semibold transition-all ${
                    location.pathname === link.path 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
                  }}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    location.pathname === link.path ? 'bg-primary scale-125' : 'bg-slate-300'
                  }`}></span>
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Acciones del menú mobile */}
            <div className="flex flex-col gap-4 pt-6 border-t border-slate-200 dark:border-primary/10">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/hormiwhitesa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center justify-center size-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-medium">@hormiwhitesa</span>
              </a>

              {/* Botón Cotizar grande */}
              <Link 
                to="/quote" 
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-slate-900 font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined">request_quote</span>
                Solicitar Cotización
              </Link>

              {/* Teléfono rápido */}
              <a 
                href="tel:+542914000000"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary/30 text-slate-700 dark:text-slate-300 font-semibold hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-primary">phone</span>
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
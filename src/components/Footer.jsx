// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logosimple.png"
import LogoMorton from "../assets/LogoMorton.jpg" // Asegúrate de tener esta imagen en assets

const Footer = () => (
  <footer className="border-t border-slate-200 dark:border-primary/10 py-12 px-6 lg:px-20 bg-white dark:bg-background-dark">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {/* Columna 1: Logo y descripción */}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <img src={Logo} alt="Logo HormiWhite" className="w-16 h-auto" />
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold uppercase tracking-tight">
            Hormi<span className="text-primary">White</span>
          </h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
          Soluciones integrales en hormigón elaborado para la industria de la construcción en el sur argentino.
        </p>
        
        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">Seguinos:</span>
          <a 
            href="https://www.instagram.com/hormiwhitesa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white hover:scale-110 transition-transform"
            aria-label="Instagram HormiWhite"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Columna 2: Contacto */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Contacto</h4>
        <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-400 text-sm">
          <li className="flex gap-2">
            <span className="material-symbols-outlined text-primary text-sm">location_on</span> 
            Bahía Blanca, Buenos Aires
          </li>
          <li className="flex gap-2">
            <span className="material-symbols-outlined text-primary text-sm">phone</span> 
            +54 291 400-0000
          </li>
          <li className="flex gap-2">
            <span className="material-symbols-outlined text-primary text-sm">mail</span> 
            ventas@hormiwhite.com
          </li>
        </ul>
      </div>

      {/* Columna 3: Legales */}
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Legales</h4>
        <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-400 text-sm">
          <li><Link className="hover:text-primary transition-colors" to="/privacy">Políticas de Privacidad</Link></li>
          <li><Link className="hover:text-primary transition-colors" to="/terms">Términos y Condiciones</Link></li>
          <li><a className="hover:text-primary transition-colors" href="#">Normas IRAM</a></li>
        </ul>
      </div>
    </div>

    {/* Créditos y desarrollo */}
    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Créditos fotografía */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-500 dark:text-slate-400 text-xs text-center sm:text-left">
          <span className="material-symbols-outlined text-primary text-sm">photo_camera</span>
          <span>Fotografías por</span>
          <a 
            href="https://www.instagram.com/reinaldo__o/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline flex items-center gap-1"
          >
            Ph Reinaldo Perdono
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 text-xs text-center">
          © 2024 HormiWhite S.A. Todos los derechos reservados.
        </p>

        {/* Desarrollado por */}
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 text-xs">Desarrollado por</span>
          <a 
            href="https://www.instagram.com/morton.desarrollos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Morton Soluciones - Desarrollo Web"
          >
            <img 
              src={LogoMorton} 
              alt="Logo Morton Soluciones" 
              className="w-24 h-auto dark:invert"
            />
          </a>
        </div>

      </div>
    </div>
  </footer>
)

export default Footer
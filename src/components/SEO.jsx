// src/components/SEO.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = 'https://hormiwhite.com/og-image.jpg',
  ogType = 'website',
  structuredData = null,
  noindex = false,
  language = 'es-AR'
}) => {
  const siteName = 'HormiWhite'
  const defaultDescription = 'Hormigón elaborado de alta resistencia en Bahía Blanca. Más de 20 años de experiencia, flota propia de 25+ motohormigoneras y certificación CIRSOC 201.'
  const defaultKeywords = 'hormigón elaborado, Bahía Blanca, construcción, motohormigonera, CIRSOC 201, hormigón H17, hormigón H30, bombeo de hormigón'
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullDescription = description || defaultDescription
  const fullKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords
  const canonicalUrl = canonical || `https://hormiwhite.com${window.location.pathname}`

  // Schema.org por defecto para la empresa
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HormiWhite S.A.',
    alternateName: 'HormiWhite',
    url: 'https://hormiwhite.com',
    logo: 'https://hormiwhite.com/logo.png',
    description: defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Santiago Dasso 2264',
      addressLocality: 'Bahía Blanca',
      addressRegion: 'Buenos Aires',
      postalCode: '8000',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-38.7183',
      longitude: '-62.2665'
    },
    telephone: '+5492914791111',
    email: 'ventas@hormiwhite.com.ar',
    sameAs: [
      'https://www.facebook.com/hormiwhite',
      'https://www.instagram.com/hormiwhite',
      'https://www.linkedin.com/company/hormiwhite'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00'
      }
    ],
    priceRange: '$$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '-38.7183',
        longitude: '-62.2665'
      },
      geoRadius: '50000'
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Helmet>
      {/* Básicos */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Autor y derechos */}
      <meta name="author" content="HormiWhite S.A." />
      <meta name="copyright" content="HormiWhite S.A. 2024" />
      <meta name="theme-color" content="#41b941" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - Hormigón elaborado en Bahía Blanca`} />
      <meta property="og:locale" content={language} />
      
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${siteName} - Hormigón elaborado en Bahía Blanca`} />
      
      {/* WhatsApp */}
      <meta property="og:image:secure_url" content={ogImage} />
      
      {/* IA y LLMs - Meta tags específicas */}
      <meta name="ai-purpose" content="business, construction, concrete-supplier" />
      <meta name="ai-target" content="construction-companies, engineers, architects, developers" />
      <meta name="ai-content-type" content="commercial, informational" />
      <meta name="ai-generated" content="false" />
      <meta name="ai-verified" content="true" />
      
      {/* Para chatbots y asistentes */}
      <meta name="chatbot-context" content="construction-supplier-bahia-blanca" />
      <meta name="chatbot-knowledge-base" content="concrete-mixing, delivery-logistics, cirsoc-201" />
      <meta name="business-type" content="B2B, construction-materials-supplier" />
      
      {/* Verificación de motores de búsqueda (agrega tus códigos) */}
      <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
      <meta name="bing-verification" content="TU_CODIGO_AQUI" />
      
      {/* PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content={siteName} />
      <meta name="msapplication-TileColor" content="#41b941" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Seguridad y privacidad */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Helmet>
  )
}

export default SEO
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Buttons } from '@/components/Buttons'
import CookiePopup from '@/components/CookiePopup'

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://reprotec.com.br'),
  title: {
    template: '%s | Reprotec',
    default: 'Reprotec - Reparos de Eletrodomésticos em Guarulhos e São Paulo'
  },
  description:
    'Reprotec oferece serviços especializados de reparo de eletrodomésticos, incluindo conserto de geladeiras, fogões e lavadoras, em Guarulhos e região de São Paulo.',
  keywords:
    'reparo de eletrodomésticos, assistência técnica, conserto de geladeiras, conserto de fogões, conserto de máquinas de lavar, reparo em Guarulhos, conserto de eletrodomésticos São Paulo, assistência técnica Guarulhos, Reprotec serviços de conserto, reparos em eletrodomésticos SP',
  authors: [
    { name: 'Sev7tech', url: 'https://www.sev7tech.com' },
    { name: 'Reprotec', url: 'https://www.reprotec.com.br' }
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico'
  },

  openGraph: {
    title: {
      template: '%s | Reprotec',
      default: 'Reprotec - Reparos de Eletrodomésticos em Guarulhos e São Paulo'
    },
    description:
      'Reprotec oferece serviços especializados de reparo de eletrodomésticos, incluindo conserto de geladeiras, fogões e lavadoras, em Guarulhos e região de São Paulo.',
    url: 'https://reprotec.com.br',
    siteName: 'Reprotec - Reparos de Eletrodomésticos',
    type: 'website',
    images: [
      {
        url: '/assets/imagens/reprotec-logo.png',
        width: 1200,
        height: 630,
        alt: 'Reprotec - Logo'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: '%s | Reprotec',
    description:
      'Reprotec oferece serviços de reparo de eletrodomésticos, como conserto de geladeiras, fogões, lavadoras, entre outros, em Guarulhos, São Paulo.',
    images: '/assets/imagens/reprotec-logo.png',
    site: '@reprotec',
    creator: '@yourtwitterhandle'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${barlow.variable} bg-gray-100 antialiased`}>
        <CookiePopup />
        <Header />
        {children}
        <Buttons.WhatsApp />
        <Footer />
      </body>
    </html>
  )
}

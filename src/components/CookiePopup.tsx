'use client'

import { useEffect, useState } from 'react'

import { Typography } from './Typography'

const CookiePopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false)

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted')

    setPopupVisible(!cookieAccepted || new Date(cookieAccepted) <= new Date())
  }, [])

  const handleAccept = () => {
    const expirationData = new Date()
    expirationData.setFullYear(expirationData.getFullYear() + 1)

    localStorage.setItem('cookieAccepted', expirationData.toISOString())
    setPopupVisible(false)
  }

  if (!isPopupVisible) return null

  return (
    <article className="cookie-container py-4" data-aos="zoom-in-up">
      <div className="mx-auto w-[95%] max-w-[600px] space-y-4 text-center">
        <Typography.Text className="text-white">
          Usamos cookies para melhorar sua experiência. Ao continuar navegando,
          você concorda com nossa{' '}
          <Typography.Link
            href="/politica-privacidade"
            linkTitle="Voce deve está em Consentimento com os cookie do website"
            className="text-white underline hover:text-white"
          >
            política de privacidade.
          </Typography.Link>
        </Typography.Text>
        <button
          onClick={handleAccept}
          className="mx-auto rounded-3xl bg-green-500 px-4 py-1 text-base font-medium"
        >
          Eu aceito
        </button>
      </div>
    </article>
  )
}

export default CookiePopup

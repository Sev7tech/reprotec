'use client'

import { useEffect, useState } from 'react'

import { Typography } from './Typography'

const CookiePopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false)

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted')

    if (!cookieAccepted) return setPopupVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'yes')
    setPopupVisible(false)
  }

  if (!isPopupVisible) return null

  return (
    <article className="overlay fixed inset-0 z-[100]">
      <div className="popup">
        <Typography.Text>
          Usamos cookies para melhorar sua experiência. Ao continuar navegando,
          você concorda com nossa{' '}
          <Typography.Link
            href="/politica-de-privacidade"
            linkTitle="Voce deve está em Consentimento com os cookie do website"
            className="underline"
          >
            Política de Privacidade.
          </Typography.Link>
        </Typography.Text>
        <button onClick={handleAccept} className="buttonBase mt-4 bg-green-500">
          Eu aceito
        </button>
      </div>
    </article>
  )
}

export default CookiePopup

import Link from 'next/link'

import Picture from '../Picture'

export const WhatsApp = () => {
  const buttonTitle = 'Entrar em contato pelo WhatApp'

  return (
    <Link
      href={`https://wa.me/${'phoneNumber'}?text=${encodeURIComponent('message')}`}
      title={buttonTitle}
      className="fixed bottom-4 right-4 z-30 h-12 w-12 rounded-full bg-emerald-500 p-2"
      target="_blank"
    >
      <Picture
        src="/images/icons/whatsapp.svg"
        alt={buttonTitle}
        $w={56}
        $h={56}
      />
    </Link>
  )
}

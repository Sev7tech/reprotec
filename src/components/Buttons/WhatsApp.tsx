import Link from 'next/link'

import Picture from '../Picture'

import { CONFIG } from '@/config'

export const WhatsApp = () => {
  const buttonTitle = 'Entrar em contato pelo WhatApp'

  return (
    <Link
      href={CONFIG.contact.phone.URL}
      title={buttonTitle}
      className="fixed bottom-[2%] right-[2%] z-30 h-12 w-12 rounded-full bg-emerald-400 p-2 md:bottom-3 md:right-3"
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

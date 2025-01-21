import Link from 'next/link'
import React from 'react'

export const CTA2 = () => {
  return (
    <Link
      href="/contato"
      title="Falar com um representante"
      className="buttonBase rounded-3xl bg-midnightBlue duration-300 hover:text-cyan-600 hover:brightness-150"
    >
      Ver todos
    </Link>
  )
}

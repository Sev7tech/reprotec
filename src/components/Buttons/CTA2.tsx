import Link from 'next/link'
import React from 'react'

export const CTA2 = () => {
  return (
    <Link
      href="/contato"
      title="Falar com um representante"
      className="buttonBase bg-green-600 duration-300 hover:brightness-150"
    >
      Entrar em conto
    </Link>
  )
}

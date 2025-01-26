import Link from 'next/link'
import React from 'react'

export const SeeAll = () => {
  return (
    <Link
      href="/servicos"
      title="Falar com um representante"
      className="buttonBase bg-midnightBlue duration-300 hover:text-cyan-600 hover:brightness-150"
    >
      Ver todos
    </Link>
  )
}

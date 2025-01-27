import Link from 'next/link'

export const CTA = () => {
  return (
    <Link
      href="/contato"
      title="Entre em contato e fale com um de nossos especialista"
      className="buttonBase bg-green-700 text-white hover:brightness-125"
    >
      Entrar em contato
    </Link>
  )
}

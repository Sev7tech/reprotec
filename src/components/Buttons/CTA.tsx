import Link from 'next/link'

export const CTA = () => {
  return (
    <Link
      href="/contato"
      title="Entre em contato e fale com um de nossos especialista"
      className="buttonBase bg-green-500 duration-300 hover:bg-green-600"
    >
      Entrar em contato
    </Link>
  )
}

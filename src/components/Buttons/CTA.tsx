import Link from 'next/link'

export const CTA = () => {
  return (
    <Link
      href="/contato"
      title="Entre em contato e fale com um de nossos especialista"
      className="buttonBase bg-sky-500 text-midnightBlue hover:bg-sky-600 hover:text-white"
    >
      Entrar em contato
    </Link>
  )
}

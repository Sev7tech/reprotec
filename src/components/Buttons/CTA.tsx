import Link from 'next/link'

export const CTA = () => {
  return (
    <Link
      href="/contato"
      title="Entre em contato e fale com um de nossos especialista"
      className="buttonBase rounded-2xl bg-green-500 hover:bg-green-600"
    >
      Entrar em contato
    </Link>
  )
}

import Brand from './Brand'
import Picture from './Picture'
import { Typography } from './Typography'

import {
  contactList,
  creditsLinks,
  navigatorLinks,
  servicesLinks
} from '@/constants'
import { IContact, ILink } from '@/types'

const currentYear = new Date().getFullYear()

const linkList = ({
  links,
  className
}: {
  links: ILink[]
  className?: string
}) => {
  return (
    <ul className={className ? className : 'gap8'}>
      {links.map((link) => (
        <li key={link.id}>
          <Typography.Link href={link.href} linkTitle={link.title} isFooterLink>
            {link.children}
          </Typography.Link>
        </li>
      ))}
    </ul>
  )
}

const henderContacts = ({ contacts }: { contacts: IContact[] }) => {
  return (
    <ul className="gap8">
      {contacts.map((contact) => (
        <li className="flex flex-1 items-center gap-2" key={contact.id}>
          <div className="w-7">
            <Picture src={contact.src} alt={contact.alt} $w={20} $h={20} />
          </div>
          <Typography.Link
            href={contact.href}
            linkTitle={contact.title}
            target="_blank"
            isFooterLink
          >
            {contact.children}
          </Typography.Link>
        </li>
      ))}
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 bg-gray-900 py-8">
      <section className="max-container grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-stretch md:gap-14 lg:grid-cols-4">
        <section className="gap16">
          <Brand src="/images/logo-white.png" />
          <Typography.Text className="text-sm text-slate-300">
            Na Reprotec, oferecemos serviços técnicos de reparo eficientes,
            rápidos e personalizados, com foco total na satisfação do cliente.
            Nossa equipe altamente qualificada garante soluções de alta
            qualidade e excelência no atendimento, buscando sempre superar as
            suas expectativas.
          </Typography.Text>
        </section>

        <section className="gap16">
          <Typography.H3 className="text-slate-300">Links Úteis</Typography.H3>
          {linkList({ links: navigatorLinks })}
        </section>

        <section className="gap16">
          <Typography.H3 className="text-slate-300">
            Nossos Serviços
          </Typography.H3>
          {linkList({ links: servicesLinks })}
        </section>
        <section className="gap16">
          <Typography.H3 className="text-slate-300">Fale Conosco</Typography.H3>
          {henderContacts({ contacts: contactList })}
        </section>
      </section>
      <section className="max-container flex flex-col-reverse gap-4 md:flex-row md:justify-between">
        <Typography.Text className="text-sm text-slate-300">
          &copy; {currentYear} Reprotec, todos os direitos reservados.
        </Typography.Text>
        <ul className="gap16 md:flex md:flex-row">
          {creditsLinks.map((link) => (
            <li key={link.id}>
              <Typography.Link
                href={link.href}
                linkTitle={link.title}
                target={link.id! === 3 ? '_blank' : '_self'}
                isFooterLink
              >
                {link.children}
              </Typography.Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  )
}

export default Footer

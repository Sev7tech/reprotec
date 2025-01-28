import Brand from './Brand'
import Picture from './Picture'
import { Typography } from './Typography'

import {
  contactList,
  legalAndCreditsLinks,
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
    <ul className={className ? className : 'gapCol8'}>
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
    <ul className="gapCol8">
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
    <footer className="relative z-40 flex flex-col gap-6 bg-gray-900 py-8">
      <section className="w-95 max-container grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-stretch md:gap-14 lg:grid-cols-3 xl:grid-cols-4">
        <section className="gapCol16">
          <Brand src="/images/logo-white.png" />
          <Typography.Text className="text-sm text-slate-300">
            Reprotec, conserto de eletrodomésticos rápido, eficiente e sob
            medida para você. Qualidade e sua satisfação sempre em primeiro
            lugar!
          </Typography.Text>
        </section>

        <section className="gapCol16">
          <Typography.H3 className="text-slate-300">Links Úteis</Typography.H3>
          {linkList({ links: navigatorLinks })}
        </section>

        <section className="gapCol16">
          <Typography.H3 className="text-slate-300">
            Nossos Serviços
          </Typography.H3>
          {linkList({ links: servicesLinks })}
        </section>
        <section className="gapCol16">
          <Typography.H3 className="text-slate-300">Fale Conosco</Typography.H3>
          {henderContacts({ contacts: contactList })}
        </section>
      </section>
      <section className="max-container w-95 flex flex-col-reverse gap-4 md:flex-row md:justify-between">
        <Typography.Text className="text-sm text-slate-300">
          &copy; {currentYear} Reprotec, todos os direitos reservados.
        </Typography.Text>
        <ul className="gapCol16 md:flex md:flex-row">
          {legalAndCreditsLinks.map((link) => (
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

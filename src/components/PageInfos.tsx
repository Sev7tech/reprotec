import { ReactNode } from 'react'

import Picture from './Picture'
import { Typography } from './Typography'

export interface IPageInfos {
  title: string
  children: ReactNode
  href: string
}

const PageInfos = ({ title, children, href }: IPageInfos) => {
  return (
    <section className="flex flex-col gap-20 md:max-w-[60%] lg:gap-32">
      <h1 className="mainTitle">{title}</h1>

      <ul className="flexCenter gap-1">
        <li>
          <Typography.Link
            href="/"
            linkTitle="Ir para a página home"
            isTextWhite
          >
            Home
          </Typography.Link>
        </li>
        <li className="w-4">
          <Picture
            src="images/icons/arrow-direction.svg"
            alt={`navegar para a pagina ${children}`}
            $w={16}
            $h={16}
          />
        </li>
        <li>
          <Typography.Link
            href={href}
            linkTitle={`Ir para a página ${children}`}
            isTextWhite
          >
            {children}
          </Typography.Link>
        </li>
      </ul>
    </section>
  )
}

export default PageInfos

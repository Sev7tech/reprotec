import { Typography } from './Typography'

import { IPageInfos } from '@/types'

const PageInfos = ({ title, children, href }: IPageInfos) => {
  return (
    <section className="flex flex-col gap-20 md:max-w-[60%] lg:gap-32">
      <h1 className="mainTitle">{title}</h1>

      <ul className="flexCenter gap-1">
        <li>
          <Typography.Link
            href="/"
            linkTitle="Ir para a página Home"
            isTextWhite
          >
            Home
          </Typography.Link>
        </li>
        <li className="w-4">
          <span className="text-lg font-medium text-white">/</span>
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

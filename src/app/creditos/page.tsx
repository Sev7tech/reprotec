import { Metadata } from 'next'

import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import { Typography } from '@/components/Typography'
import { images, imagesCredits, libraryList } from '@/constants'
import { IPageInfos } from '@/types'
import { getDelay } from '@/utils/animation.utils'

export const metadata: Metadata = {
  title: 'Créditos',
  description:
    'Agradecemos a todos os nossos parceiros e colaboradores que contribuem para o sucesso da Reprotec.',
  keywords:
    'créditos, agradecimentos, parceiros, colaboradores, Reprotec, Guarulhos, São Paulo',
  openGraph: {
    title: 'Créditos',
    description:
      'Agradecimentos aos parceiros e colaboradores que fazem a Reprotec ser o que é hoje.',
    url: 'https://reprotec.com.br/creditos'
  },
  twitter: {
    title: 'Créditos',
    description: 'Agradecimentos aos parceiros e colaboradores da Reprotec.'
  }
}

const pageInfos: IPageInfos = {
  title: 'Créditos & Agradecimentos',
  children: 'Creditos',
  href: '/creditos'
}

const Credits = () => {
  return (
    <Containers.PageContainer
      bannerSrc={images.creditos}
      bannerAlt={images.creditos}
      pageInfos={pageInfos}
    >
      <Containers.Wrapper>
        <Typography.Text className="text-black md:text-center">
          Este site, desenvolvido pela{' '}
          <Typography.Link
            href="/https://www.sev7tech.com"
            linkTitle="Descubra como a Sev7tech pode ajudar você"
            target="_blank"
          >
            Sev7tech.com
          </Typography.Link>
          , utiliza imagens e bibliotecas de código aberto que gostaríamos de
          agradecer e creditar abaixo.
        </Typography.Text>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <h2 className="creditsTitle">Images</h2>

        <ul className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {imagesCredits.map((items) => (
            <li
              key={items.id}
              data-aos="fade-up"
              data-aos-delay={getDelay(items.id! + 1)}
            >
              <Cards.ImageCredits {...items} />
            </li>
          ))}
        </ul>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <h2 className="creditsTitle">Bibliotecas & Framework</h2>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {libraryList.map((item) => (
            <li key={item.id} className="relative py-3">
              <Typography.Link
                href={item.href}
                linkTitle={item.title}
                className="absolute w-full"
                target="_blank"
              >
                {item.children}
              </Typography.Link>
            </li>
          ))}
        </ul>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default Credits

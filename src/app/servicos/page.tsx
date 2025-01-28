import { Metadata } from 'next'

import { Buttons } from '@/components/Buttons'
import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images, servicesCardList } from '@/constants'
import { IPageInfos } from '@/types'
import { getDelay } from '@/utils/animation.utils'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Conheça nossos serviços especializados em reparos e manutenção de eletrodomésticos em Guarulhos e Grande São Paulo. Qualidade garantida e rapidez nos consertos.',
  keywords:
    'reparo de eletrodomésticos, conserto de eletrodomésticos, manutenção, assistência técnica, Guarulhos, São Paulo',
  openGraph: {
    title: 'Serviços',
    description:
      'Oferecemos serviços rápidos e eficazes para conserto de eletrodomésticos, com garantia de qualidade em Guarulhos e São Paulo.',
    url: 'https://reprotec.com.br/servicos'
  },
  twitter: {
    title: 'Serviços',
    description:
      'Conheça os serviços da Reprotec para conserto de eletrodomésticos em Guarulhos e São Paulo.'
  }
}

const pageInfos: IPageInfos = {
  title: 'Serviços',
  children: 'Serviços',
  href: '/servicos'
}

const Services = () => {
  return (
    <Containers.PageContainer
      isPageInfos
      bannerSrc={images.banner}
      bannerAlt={images.bannerAlt}
      pageInfos={pageInfos}
    >
      <Containers.Wrapper>
        <div className="gapCol24">
          <div className="lg:px-56">
            <Picture
              src={images.businessPartners}
              alt={images.businessPartnersAlt}
              $w={75}
              $h={6}
              data-aos="fade-up"
            />
          </div>

          <Typography.Text
            data-aos="fade-up"
            className="w-95 text-black xl:w-full"
          >
            Explore nossa ampla variedade de serviços de manutenção, reparo de
            eletrodomésticos. Somos especialistas autorizados pelas marcas
            líderes do mercado, entre elas Medea, Carrier, Springer, Comfee e
            TOSHIBA, estamos trabalhando para fechar mais parcerias para que
            possamos oferecer o melhor serviço. Utilizamos peças originais e
            contamos com uma equipe técnica altamente qualificada, garantindo
            soluções confiáveis e duradouras para residências, comércios e
            indústrias.
          </Typography.Text>
        </div>

        <ul className="servicesList">
          {servicesCardList.map((items) => (
            <li
              key={items.id}
              data-aos="fade-up"
              data-aos-delay={getDelay(items.id!)}
            >
              <Cards.ServicesCard {...items} isSeoTitle />
            </li>
          ))}
        </ul>

        <div className="gapCol24">
          <Typography.Text data-aos="fade-up">
            Fale com a gente agora mesmo! Nossa equipe está pronta para ajudar
            você a encontrar a solução perfeita para sua casa ou empresa.
            Oferecemos atendimento personalizado e serviços sob medida, sempre
            com o respaldo das melhores marcas do mercado, como Medea, Carrier,
            Springer, Comfee e TOSHIBA. Confie na nossa experiência para
            garantir que seus equipamentos funcionem com total eficiência e
            segurança. Estamos aqui para cuidar do seu conforto!
          </Typography.Text>
          <div className="mx-auto">
            <Buttons.CTA2 />
          </div>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default Services

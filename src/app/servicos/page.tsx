import { Buttons } from '@/components/Buttons'
import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images, servicesCardList } from '@/constants'
import { IPageInfos } from '@/types'

const pageInfos: IPageInfos = {
  title: 'Serviços',
  children: 'Serviços',
  href: '/servicos'
}

const Services = () => {
  return (
    <Containers.PageContainer
      isPageInfos
      bannerSrc="/images/about-section.jpg"
      bannerAlt="Banner Image"
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
            />
          </div>

          <Typography.Text>
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
            <li key={items.id}>
              <Cards.ServicesCard {...items} />
            </li>
          ))}
        </ul>

        <div className="gapCol24">
          <Typography.Text>
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

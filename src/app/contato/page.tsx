import { Metadata } from 'next'

import { Containers } from '@/components/Container'
import ContactForm from '@/components/Form/ContactForm'
import { images } from '@/constants'
import { IPageInfos } from '@/types'
import { Typography } from '@/components/Typography'
import ContactInformation from '@/components/ContactInformation'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Reprotec para mais informações sobre reparos de eletrodomésticos em Guarulhos e São Paulo. Estamos prontos para ajudar!',
  keywords:
    'contato, reparo de eletrodomésticos, atendimento, Guarulhos, São Paulo, assistência técnica',
  openGraph: {
    title: 'Contato',
    description:
      'Entre em contato com a Reprotec e saiba como podemos ajudar no conserto de seus eletrodomésticos em Guarulhos e São Paulo.',
    url: 'https://reprotec.com.br/contato'
  },
  twitter: {
    title: 'Contato',
    description:
      'Entre em contato com a Reprotec para mais informações sobre reparos de eletrodomésticos.'
  }
}

const pageInfos: IPageInfos = {
  title: 'Entre em contato conosco',
  children: 'Contato',
  href: '/contato'
}

const Contact = () => {
  return (
    <Containers.PageContainer
      bannerSrc={images.banner}
      bannerAlt={images.bannerAlt}
      pageInfos={pageInfos}
    >
      <Containers.Wrapper className="form-pages">
        <div className="form-container" data-aos="fade-up-left">
          <ContactForm />
        </div>

        <div className="gapCol24 lg:w-[70%]">
          <div className="gapCol16">
            <h2 className="titleH2" data-aos="fade-up">
              Entre em Contato Conosco
            </h2>
            <Typography.Text data-aos="fade-up">
              Estamos aqui para ajudar! Se você tem alguma dúvida ou precisa
              agendar um serviço de manutenção ou reparo, nossa equipe está
              pronta para atendê-lo com rapidez e eficiência. Preencha o
              formulário abaixo ou entre em contato através dos nossos canais e
              responderemos o mais breve possível.
            </Typography.Text>

            <ContactInformation />
          </div>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default Contact

import Link from 'next/link'

import { Containers } from '@/components/Container'
import ContactForm from '@/components/Form/ContactForm'
import Picture from '@/components/Picture'
import { images } from '@/constants'
import { IPageInfos } from '@/types'
import { Typography } from '@/components/Typography'

const pageInfos: IPageInfos = {
  title: 'Entre em contato conosco',
  children: 'Contato',
  href: '/contato'
}

const Contact = () => {
  return (
    <Containers.PageContainer
      bannerSrc="/images/about-section.jpg"
      bannerAlt="Banner"
      pageInfos={pageInfos}
    >
      <Containers.Wrapper>
        <div className="form-pages">
          <div className="form-container">
            <ContactForm />
          </div>

          <div className="gapCol24 lg:w-[70%]">
            <div className="gapCol16">
              <Typography.H2>Entre em Contato Conosco</Typography.H2>
              <Typography.Text>
                Estamos aqui para ajudar! Se você tem alguma dúvida ou precisa
                agendar um serviço de manutenção ou reparo, nossa equipe está
                pronta para atendê-lo com rapidez e eficiência. Preencha o
                formulário abaixo ou entre em contato através dos nossos canais
                e responderemos o mais breve possível.
              </Typography.Text>
            </div>

            <div className="flex gap-8">
              <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                <Picture
                  src={images.callCenter}
                  alt={images.callCenterAlt}
                  $w={56}
                  $h={56}
                />
              </div>

              <div className="flex flex-col">
                <h4 className="smallTitle">Tem uma pergunta?</h4>
                <Link
                  href={'contact'}
                  title="Entre em contato com o atendimento Reprotec"
                  target="_blank"
                  className="text-base font-medium"
                >
                  +55 11 2483-2924
                </Link>
              </div>
            </div>

            <div>
              <h4 className="smallTitle">Horario de atendimento</h4>
              <p className="font-medium">Segunda a Sexta: 08:00h - 18:00h</p>
            </div>

            <div>
              <h4 className="smallTitle">
                Reprotec-Assistência Técnica Autorizada
              </h4>
              <Link
                href={'mapa'}
                title="Veja no mapa"
                className="text-base font-medium"
                target="_blank"
              >
                Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep:
                07240-000
              </Link>
            </div>
          </div>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default Contact

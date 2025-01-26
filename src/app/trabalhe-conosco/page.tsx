import { Metadata } from 'next'

import { Containers } from '@/components/Container'
import WorkForm from '@/components/Form/WorkForm'
import { Typography } from '@/components/Typography'
import { IPageInfos } from '@/types'
import { images } from '@/constants'
import ContactInformation from '@/components/ContactInformation'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco',
  description:
    'Junte-se à nossa equipe! Veja as vagas abertas e faça parte da Reprotec, empresa especializada em em Guarulhos e São Paulo.',
  keywords:
    'trabalhe conosco, empregos, vagas, eletrônicos, conserto de eletrodomésticos, Guarulhos, São Paulo',

  openGraph: {
    title: 'Trabalhe Conosco',
    description:
      'A Reprotec está com vagas abertas. Junte-se à nossa equipe de especialistas em reparo de eletrodomésticos!',
    url: 'https://reprotec.com.br/trabalhe-conosco'
  },
  twitter: {
    title: 'Trabalhe Conosco',
    description:
      'Junte-se à Reprotec e faça parte da nossa equipe de reparo de eletrodomésticos em Guarulhos e São Paulo.'
  }
}

const pageInfos: IPageInfos = {
  title: 'Trabalhe conosco',
  children: 'Trabalhe conosco',
  href: '/trabalhe-conosco'
}

const WorkWithUs = () => {
  return (
    <Containers.PageContainer
      bannerSrc={images.banner}
      bannerAlt={images.bannerAlt}
      pageInfos={pageInfos}
    >
      <Containers.Wrapper className="form-pages">
        <div className="form-container">
          <WorkForm />
        </div>
        <div className="gapCol16 lg:w-[70%]">
          <h2 className="titleH2">Trabalhe Conosco - Reprotec</h2>
          <Typography.Text>
            Quer fazer parte de uma equipe referência em reparo e manutenção de
            eletrodomésticos? Na Reprotec, cuidamos de geladeiras, máquinas de
            lavar, micro-ondas, fogões, ar condicionados e muito mais.
            Trabalhamos com grandes marcas como Medea, Carrier, Springer, Comfee
            e TOSHIBA, oferecendo tecnologia de ponta e excelência.
          </Typography.Text>
          <Typography.Text>
            Buscamos pessoas proativas, apaixonadas por resolver problemas e que
            queiram crescer conosco. Envie seu currículo e venha fazer parte do
            time Reprotec!
          </Typography.Text>
          <Typography.Text>
            Não encontrou uma vaga aberta? Envie seu currículo mesmo assim.
            Estamos sempre em busca de talentos!
          </Typography.Text>

          <ContactInformation isCallCenter={false} />
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default WorkWithUs

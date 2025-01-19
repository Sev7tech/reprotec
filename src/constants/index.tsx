import { IContact, ILink } from '@/types'

export const navigatorLinks: ILink[] = [
  {
    id: 1,
    children: 'Home',
    href: '/',
    title: 'Ir para a página home'
  },
  {
    id: 2,
    children: 'Sobre nós',
    href: '/sobre-nos',
    title: 'Ir para a página Sobre nós'
  },
  {
    id: 3,
    children: 'Serviços',
    href: '/serviços',
    title: 'Ir para a página de serviços'
  },
  {
    id: 4,
    children: 'Trabalhe conosco',
    href: '/trabalhe-conosco',
    title: 'Ir para a página de trabalhe conosco'
  },
  {
    id: 5,
    children: 'Contato',
    href: '/',
    title: 'Ir para a página de contato'
  }
]

export const servicesLinks: ILink[] = [
  {
    id: 1,
    children: 'Geladeira',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de geladeiras'
  },
  {
    id: 2,
    children: 'Micro-ondas',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de micro-ondas'
  },
  {
    id: 3,
    children: 'Máquina de Lavar',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de máquinas de lavar'
  },
  {
    id: 4,
    children: 'Fogão',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de fogões'
  },
  {
    id: 5,
    children: 'Ar Condicionado',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de ar condicionado'
  },
  {
    id: 6,
    children: 'Forno Elétrico',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de fornos elétricos'
  },
  {
    id: 7,
    children: 'Freezer',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de freezers'
  },
  {
    id: 8,
    children: 'Adega',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de adegas'
  },
  {
    id: 9,
    children: 'Cooktop',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de cooktops'
  },
  {
    id: 10,
    children: 'Coifa',
    href: '/servicos',
    title: 'Conheça nosso serviço de reparo e manutenção de coifas'
  }
]

export const creditsLinks: ILink[] = [
  {
    id: 1,
    children: 'Créditos',
    href: '/creditos',
    title: 'Detalhes sobre os créditos do site'
  },
  {
    id: 2,
    children: 'Privacidade',
    href: '/politica-privacidade',
    title: 'Leia nossa política de privacidade'
  },
  {
    id: 3,
    children: 'Sev7Tech',
    href: 'https://www.sev7tech.com',
    title: 'Desenvolvido pela Sev7Tech'
  }
]

export const contactList: IContact[] = [
  {
    id: 1,
    src: '/images/icons/map-point.svg',
    alt: 'Ícone de localização',
    href: 'https://www.google.com/maps?q=Avenida+Venturosa,+111+-+Jd.+Cumbica+-+Guarulhos+-+07240-000',
    title: 'Veja nossa localização no mapa',
    children: 'Ver endereço no map'
  },
  {
    id: 2,
    src: '/images/icons/email.svg',
    alt: 'Ícone de email',
    href: 'mailto:atendimento@reprotec.com.br',
    title: 'Envie um e-mail para atendimento@reprotec.com.br',
    children: 'atendimento@reprotec.com.br'
  },
  {
    id: 3,
    src: '/images/icons/phone.svg',
    alt: 'Ícone de telefone',
    href: 'tel:+551124832924',
    title: 'Ligue para +55 11 2483-2924',
    children: '+55 11 2483-2924'
  }
]

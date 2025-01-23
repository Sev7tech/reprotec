import {
  IContact,
  IImagesCredits,
  ILink,
  IOurDifferentials,
  IServiceCard
} from '@/types'

// images for the website
export const images = {
  homeBanner: '/images/home-banner.jpg',
  homeBannerAlt: 'Casal feliz em casa, com eletrodomésticos funcionando bem',

  aboutSection: '/images/about-section.jpg',
  aboutSectionAlt: 'Imagem de uma família feliz em casa',

  geladeria: '/images/services/geladeira.jpg',
  geladeiraAlt: 'Manutenção de geladeira',

  microondas: '/images/services/microondas.jpg',
  microondasAlt: 'Manutenção de micro-ondas',

  maquinaLavar: '/images/services/maquina-lavar.jpg',
  maquinaLavarAlt: 'Manutenção de máquina de lavar',

  fogao: '/images/services/fogao.jpg',
  fogaoAlt: 'Manutenção de fogão',

  arcondicionado: '/images/services/arcondicionado.jpg',
  arcondicionadoAlt: 'Manutenção de ar condicionado',

  fornoEletrico: '/images/services/fono-eletrico.jpg',
  fornoEletricoAlt: 'Manutenção de forno elétrico',

  freezer: '/images/services/freezer.webp',
  freezerAlt: 'Manutenção de freezer',

  adega: '/images/services/adega.webp',
  adegaAlt: 'Manutenção de adega',

  coifa: '/images/services/coifa.jpg',
  coifaAlt: 'Manutenção de coifa',

  callCenter: '/images/call-center.png',
  callCenterAlt: 'Imagem de um call center',

  certificate: '/images/icons/certificate.svg',
  certificateAlt: 'Ícone de certificado de qualidade',

  house: '/images/icons/house.svg',
  houseAlt: 'Ícone de casa | serviço a domicilio',

  user: '/images/icons/users.svg',
  userAlt: 'Ícone de usuário | profissionais qualificados',

  businessPartners: '/images/parceiros.png',
  businessPartnersAlt: 'Imagem de parceiros comerciais',

  banner: '/images/banner.jpg',
  bannerAlt: 'Pessoas em confraternização em uma casa aconchegante'
}

export const navigatorLinks: ILink[] = [
  {
    id: 1,
    children: 'Home',
    href: '/',
    title: 'Ir para a página home'
  },
  // {
  //   id: 2,
  //   children: 'Sobre nós',
  //   href: '/sobre-nos',
  //   title: 'Ir para a página Sobre nós'
  // },
  {
    id: 2,
    children: 'Serviços',
    href: '/servicos',
    title: 'Ir para a página de serviços'
  },
  {
    id: 3,
    children: 'Trabalhe conosco',
    href: '/trabalhe-conosco',
    title: 'Ir para a página de trabalhe conosco'
  },
  {
    id: 4,
    children: 'Contato',
    href: '/contato',
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
    children: 'Fogão & Cooktop',
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

export const OurDifferentialsList: IOurDifferentials[] = [
  {
    id: 1,
    src: images.certificate,
    alt: images.certificateAlt,
    title: 'Peças Originais',
    text: 'Utilizamos peças originais de fábrica, assegurando qualidade e durabilidade no reparo de eletrodomésticos. Garantimos a melhor manutenção para seu aparelho.'
  },
  {
    id: 2,
    src: images.user,
    alt: images.userAlt,
    title: 'Equipe Qualificados',
    text: 'Contamos com técnicos especializados que passam por treinamentos contínuos, garantindo reparos de alta qualidade e segurança para todos os eletrodomésticos.'
  },
  {
    id: 3,
    src: images.house,
    alt: images.houseAlt,
    title: 'Atendimento Domiciliar',
    text: 'Atendemos residências e empresas em Guarulhos SP e região, oferecendo serviços de reparo e manutenção de eletrodomésticos com eficiência qualidade.'
  }
]

export const servicesCardList: IServiceCard[] = [
  {
    id: 1,
    src: images.geladeria,
    alt: images.geladeiraAlt,
    cardTitle: 'Geladeira',
    text: 'A Reprotec oferece manutenção e conserto de geladeiras com técnicos especializados. Realizamos serviços como troca de gás refrigerante, reparos no motor e solução de vazamentos, utilizando peças original, para garantir o funcionamento perfeito do seu equipamento. Confie em quem entende de refrigeração!',
    children: 'Geladeira',
    href: '/contact',
    title: 'Entre em contato para serviço de geladeira'
  },
  {
    id: 2,
    src: images.microondas,
    alt: images.microondasAlt,
    cardTitle: 'Micro-ondas',
    text: ' Na Reprotec, realizamos reparos e manutenção de micro-ondas com eficiência e rapidez. Nossa equipe especializada atua em problemas como falhas no aquecimento, defeitos no painel digital e troca de componentes. Garantimos qualidade e segurança no conserto do seu aparelho. Agende agora mesmo!',
    children: 'Micro-ondas',
    href: '/contact',
    title: 'Entre em contato para serviço de micro-ondas'
  },
  {
    id: 3,
    src: images.maquinaLavar,
    alt: images.maquinaLavarAlt,
    cardTitle: 'Máquina de Lavar',
    text: 'Somos referência em manutenção e conserto de máquinas de lavar roupas. Solucionamos vazamentos, problemas no motor e defeitos em painéis eletrônicos das principais marcas do mercado. Com atendimento rápido e peças original, devolvemos a funcionalidade ao seu eletrodoméstico.',
    children: 'Máquina de Lavar',
    href: '/contact',
    title: 'Entre em contato para serviço de máquina de lavar'
  },
  {
    id: 4,
    src: images.fogao,
    alt: images.fogaoAlt,
    cardTitle: 'Fogão & Cooktop',
    text: 'A Reprotec é especialista em reparos de fogões e cooktops, oferecendo serviços como conserto de queimadores, ajustes de válvulas e troca de ignitores. Atendemos modelos a gás ou elétricos com rapidez e segurança, garantindo uma cozinha em pleno funcionamento.',
    children: 'Fogão & Cooktop',
    href: '/contact',
    title: 'Entre em contato para serviço de fogão e cooktop'
  },
  {
    id: 5,
    src: images.arcondicionado,
    alt: images.arcondicionadoAlt,
    cardTitle: 'Ar Condicionado',
    text: 'Oferecemos manutenção e conserto de ar-condicionado para ambientes residenciais e comerciais. Trabalhamos com recarga de gás, limpeza, reparos técnicos e substituição de peças, assegurando máxima eficiência e conforto térmico. Entre em contato para atendimento especializado!',
    children: 'Ar Condicionado',
    href: '/contact',
    title: 'Entre em contato para serviço de ar condicionado'
  },
  {
    id: 6,
    src: images.fornoEletrico,
    alt: images.fornoEletricoAlt,
    cardTitle: 'Forno Elétrico',
    text: 'A Reprotec é especializada em reparos de fornos elétricos, oferecendo soluções para problemas como aquecimento insuficiente, defeitos no termostato e falhas no painel eletrônico. Trabalhamos com agilidade e utilizamos peças originais para garantir o melhor desempenho e durabilidade do seu forno. Confie na nossa expertise para manter seu forno em perfeito funcionamento!',
    children: 'Forno Elétrico',
    href: '/contact',
    title: 'Entre em contato para serviço de forno elétrico'
  },
  {
    id: 7,
    src: images.freezer,
    alt: images.freezerAlt,
    cardTitle: 'Freezer',
    text: 'A Reprotec oferece manutenção e conserto de freezers para modelos verticais e horizontais. Realizamos reparos no compressor, solução de vazamentos e ajustes no sistema de refrigeração, sempre utilizando peças originais. Garantimos o desempenho ideal do seu freezer, mantendo seus alimentos sempre conservados. Agende já!',
    children: 'Freezer',
    href: '/contact',
    title: 'Entre em contato para serviço de freezer'
  },
  {
    id: 8,
    src: images.adega,
    alt: images.adegaAlt,
    cardTitle: 'Adega',
    text: 'A Reprotec é especialista em manutenção de adegas climatizadas. Realizamos reparos em sistemas de refrigeração, falhas no termostato e ajustes técnicos, garantindo que seus vinhos fiquem na temperatura ideal. Conte com nossa experiência para preservar a qualidade e conservação dos seus vinhos. Agende agora!',
    children: 'Adega',
    href: '/contact',
    title: 'Entre em contato para serviço de adega'
  },
  {
    id: 9,
    src: images.coifa,
    alt: images.coifaAlt,
    cardTitle: 'Coifa',
    text: 'A Reprotec é especializada em manutenção e conserto de coifas. Realizamos reparos em motores, filtros e ventilação, garantindo a eficiência do exaustor. Atendemos modelos residenciais e comerciais, mantendo sua cozinha livre de fumaça e odores. Agende agora!',
    children: 'Coifa',
    href: '/contact',
    title: 'Entre em contato para serviço de coifa'
  }
]

// Credits for the images used in the website
export const imagesCredits: IImagesCredits[] = [
  {
    id: 1,
    src: images.homeBanner,
    alt: images.homeBannerAlt,
    href1:
      'https://www.freepik.com/free-photo/joyful-couple-dancing-singing-breakfast-kitchen-wearing-pajamas-carefree-wife-husband-laughing-having-fun-funny-enjoying-life-authentic-married-people-positive-happy-relation_18065596.htm#fromView=image_search_similar&page=4&position=31&uuid=493235c9-da66-499d-a93d-bcae19ba6c32&query=Cozinha+mobiliada+com+familia+feliz',
    linkTitle1: '',
    link1: 'DC Studio',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 2,
    src: images.geladeria,
    alt: images.geladeiraAlt,
    href1:
      'https://www.freepik.com/free-photo/woman-red-holding-foul-food_1246413.htm#from_view=detail_alsolike',
    linkTitle1: '',
    link1: 'Bearfotos',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 3,
    src: images.microondas,
    alt: images.microondasAlt,
    href1:
      'https://www.freepik.com/free-photo/casual-girl-using-microwave-heat-cup_1868083.htm#fromView=search&page=1&position=3&uuid=4ebaa063-8277-42c3-a562-966173ce4689&query=microondas+midea',
    linkTitle1: '',
    link1: 'Freepik',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 4,
    src: images.maquinaLavar,
    alt: images.maquinaLavarAlt,
    href1:
      'https://www.freepik.com/free-photo/side-view-man-working-as-plumber_64644843.htm#fromView=image_search_similar&page=1&position=7&uuid=9967ed68-48ba-4379-a453-2353c82edab7&query=M%C3%A1quina+de+Lavar+quebrada',
    linkTitle1: '',
    link1: 'Freepik',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 5,
    src: images.fogao,
    alt: images.fogaoAlt,
    href1:
      'https://www.freepik.com/free-photo/side-view-young-woman-tasting-soup-from-ladle-kitchen_3579186.htm#fromView=search&page=1&position=23&uuid=4eec2330-b077-45c2-9ae8-ece5f8f5ef74&query=cozinhando+no+fog%C3%A3o',
    linkTitle1: '',
    link1: 'Freepik',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 6,
    src: images.arcondicionado,
    alt: images.arcondicionadoAlt,
    href1:
      'https://www.freepik.com/free-photo/young-man-woman-sitting-table-working-laptop-co-working-office_6891589.htm#fromView=search&page=5&position=4&uuid=fd65b5aa-c93f-4ecc-b79c-1003851401df&query=Air+Conditioning',
    linkTitle1: '',
    link1: 'Teksomolika',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 7,
    src: images.fornoEletrico,
    alt: images.fornoEletricoAlt,
    href1:
      'https://www.freepik.com/free-photo/man-putting-raw-salmon-steak-into-oven_2975996.htm#fromView=search&page=1&position=15&uuid=01051630-0768-40ae-8fb4-5b658577af16&query=forno+el%C3%A9trico',
    linkTitle1: '',
    link1: 'Rawpixel.com',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 8,
    src: images.freezer,
    alt: images.freezerAlt,
    href1:
      'https://www.midea.com.br/freezer-horizontal-4-funcoes-branco-295l-midea/p?skuId=31',
    linkTitle1: 'Midea',
    link1: '',
    href2: 'https://www.midea.com.br',
    link2: 'Midea',
    linkTitle2: 'Freepik'
  },
  {
    id: 9,
    src: images.adega,
    alt: images.adegaAlt,
    href1:
      'https://www.midea.com.br/adega-de-vinhos-climatizada-midea-34-garrafas/p',
    linkTitle1: '',
    link1: 'Medea',
    href2: 'https://www.midea.com.br/',
    link2: 'Midea',
    linkTitle2: 'Medea'
  },
  {
    id: 10,
    src: images.coifa,
    alt: images.coifaAlt,
    href1:
      'https://www.freepik.com/free-photo/empty-modern-room-with-furniture_20521185.htm#fromView=search&page=2&position=26&uuid=5ea95af5-a11e-4323-87d7-479748ea85d6&query=coifa',
    linkTitle1: '',
    link1: 'Freepik',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 10,
    src: images.aboutSection,
    alt: images.aboutSectionAlt,
    href1:
      'https://www.freepik.com/free-photo/group-friends-preparing-meal-kitchen_13853143.htm#fromView=search&page=3&position=16&uuid=82a409de-65f0-460d-b4b3-3685275914b8&query=familia+em+confraterniza%C3%A7%C3%A3o+na+cozinha+mobiliada',
    linkTitle1: '',
    link1: 'Freepik',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  },
  {
    id: 11,
    src: images.callCenter,
    alt: images.callCenterAlt,
    href1:
      'https://www.freepik.com/free-ai-image/young-woman-telemarketer-agent-corporate-operator-concept_122457096.htm#fromView=image_search_similar&page=1&position=2&uuid=38f448a9-90d4-4b11-b28e-ddc78fe064bb&query=cal+center',
    linkTitle1: '',
    link1: 'Kues1',
    href2: 'https://www.freepik.com/',
    link2: 'Freepik',
    linkTitle2: 'Freepik'
  }
]
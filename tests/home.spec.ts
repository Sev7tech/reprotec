import { expect, test } from '@playwright/test'

const titles = [
  {
    id: 1,
    title: 'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
  },
  { id: 2, title: 'Nossos Serviços' },
  { id: 3, title: 'Explore Nossos Serviços' },
  { id: 4, title: 'Geladeira' },
  { id: 5, title: 'Micro-ondas' },
  { id: 6, title: 'Máquina de Lavar' },
  { id: 7, title: 'Fogão & Cooktop' },
  { id: 8, title: 'Ar Condicionado' },
  { id: 9, title: 'Forno Elétrico' },
  { id: 10, title: 'Sobre' },
  { id: 11, title: 'Porque nos escolher?' },
  { id: 12, title: 'Nossos Diferencial' },
  { id: 13, title: 'Peças Originais' },
  { id: 14, title: 'Equipe Qualificados' },
  { id: 15, title: 'Atendimento Domiciliar' },
  { id: 16, title: 'Entre em Contato Conosco' },
  { id: 17, title: 'Agende a visita com um dos nossos especialistas' },
  { id: 18, title: 'Tem uma pergunta?' },
  { id: 19, title: 'Horario de atendimento' },
  { id: 20, title: 'Reprotec-Assistência Técnica Autorizada' }
]

const texts = [
  {
    id: 1,
    text: 'Na Reprotec, somos especializados em reparos de eletrodomésticos, oferecendo qualidade e eficiência. '
  },
  {
    id: 2,
    text: ' Conte com a experiência e a credibilidade de marcas líderes para garantir o funcionamento perfeito dos seus equipamentos.'
  },
  {
    id: 3,
    text: 'A Reprotec oferece manutenção e conserto de geladeiras com técnicos especializados.'
  },
  {
    id: 4,
    text: 'Na Reprotec, realizamos reparos e manutenção de micro-ondas.'
  },
  {
    id: 5,
    text: 'referência em manutenção e conserto de máquinas de lavar roupas.'
  },
  {
    id: 6,
    text: 'A Reprotec é especialista em reparos de fogões e cooktops, oferecendo serviços como '
  },
  {
    id: 7,
    text: 'Oferecemos manutenção e conserto de ar-condicionado para ambientes residenciais e comerciais.'
  },
  {
    id: 8,
    text: 'A Reprotec é especializada em reparos de fornos elétricos, '
  },
  {
    id: 9,
    text: 'manutenção de eletrodomésticos em Guarulhos e região.'
  },
  {
    id: 10,
    text: 'Reprotec é a escolha certa para soluções rápidas e de alta qualidade. Como assistência técnica autorizada das marcas Midea, Carrier, Springer, Comfee e Toshiba,'
  },
  {
    id: 11,
    text: ' buscamos constantemente a inovação e a satisfação total de nossos clientes. Para isso, investimos em parcerias com fornecedores de confiança, garantindo que você receba o melhor serviço da região'
  },
  {
    id: 12,
    text: 'Assim como uma família reunida, acreditamos que eletrodomésticos em pleno funcionamento são essenciais para momentos inesquecíveis no seu lar. '
  },
  {
    id: 13,
    text: 'Se você busca uma assistência técnica de confiança para seus eletrodomésticos em Guarulhos e região, a Reprotec é a escolha ideal.'
  },
  {
    id: 14,
    text: 'Utilizamos peças originais de fábrica, assegurando qualidade e durabilidade no reparo de eletrodomésticos. '
  },
  {
    id: 15,
    text: 'Contamos com técnicos especializados que passam por treinamentos contínuos, '
  },
  {
    id: 16,
    text: 'Atendemos residências e empresas em Guarulhos SP e região, oferecendo serviços de reparo e manutenção'
  },
  {
    id: 17,
    text: '+55 11 2483-2924'
  },
  {
    id: 18,
    text: 'Segunda a Sexta: 08:00h - 18:00h'
  },
  {
    id: 19,
    text: 'Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep: 07240-000'
  }
]

test.describe('Tests for Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(
      /Reprotec - Reparos de Eletrodomésticos em Guarulhos e São Paulo/
    )
  })

  titles.forEach((item) => {
    test(`Should have title ${item.title} - ${item.id}`, async ({ page }) => {
      await expect(
        page
          .getByRole('main')
          .getByRole('heading', { name: item.title, exact: true })
      ).toBeVisible()
    })
  })

  texts.forEach((item) => {
    test(`Should have text ${item.text} - ${item.id}`, async ({ page }) => {
      await expect(page.getByRole('main').getByText(item.text)).toBeVisible()
    })
  })
})

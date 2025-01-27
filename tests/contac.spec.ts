import { expect, Locator, test } from '@playwright/test'

import { CONFIG } from '@/config'

const bannerLinks = [
  {
    id: 1,
    linkTitle: 'Ir para a página Home',
    href: '/',
    pageTitle:
      'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
  },
  {
    id: 2,
    linkTitle: 'Ir para a página Contato',
    href: '/contato',
    pageTitle: 'Entre em contato conosco'
  }
]

const contactInfo = [
  {
    id: 1,
    title: 'Tem uma pergunta?',
    children: '+55 11 2483-2924',
    url: CONFIG.contact.phone.URL
  },
  {
    id: 2,
    title: 'Reprotec-Assistência Técnica Autorizada',
    children:
      'Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep: 07240-000',
    url: CONFIG.contact.address
  },
  {
    id: 3,
    title: 'Horario de atendimento',
    children: 'Segunda a Sexta: 08:00h - 18:00h'
  }
]

let selector: Locator

test.describe('Tests for Contato page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contato')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Contato | Reprotec/)
  })

  test('Should have banner title', async ({ page }) => {
    await expect(
      page.locator('.mainTitle').getByText('Entre em contato conosco')
    ).toBeVisible()
  })

  bannerLinks.forEach((item) => {
    test(`Link banner Should navigate to the correct page - id ${item.id}`, async ({
      page
    }) => {
      selector = page.getByRole('link', { name: item.linkTitle, exact: true })

      await expect(selector).toHaveAttribute('href', item.href)
      await selector.click()

      await expect(
        page.locator('.mainTitle').getByText(item.pageTitle)
      ).toBeVisible()
    })
  })

  test('Should have a section title', async ({ page }) => {
    await expect(
      page.locator('.titleH2').getByText('Fale com o Suporte da Reprotec')
    ).toBeVisible()
  })

  test('Should have a section text', async ({ page }) => {
    await expect(
      page.getByText(
        'Preencha o formulário abaixo ou entre em contato através dos nossos canais e responderemos o mais breve possível.'
      )
    ).toBeVisible()
  })

  contactInfo.forEach((item) => {
    test(`Should have contact infos - ${item.id}`, async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: item.title, exact: true })
      ).toBeVisible()

      if (item.url) {
        await expect(
          page.getByRole('link', { name: item.children, exact: true })
        ).toHaveAttribute('href', item.url)
      }
    })
  })
})

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
    linkTitle: 'Ir para a página Trabalhe Conosco',
    href: '/trabalhe-conosco',
    pageTitle: 'Trabalhe Conosco'
  }
]

const contactInfo = [
  {
    id: 1,
    title: 'Reprotec-Assistência Técnica Autorizada',
    children:
      'Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep: 07240-000',
    url: CONFIG.contact.address
  },
  {
    id: 2,
    title: 'Horario de atendimento',
    children: 'Segunda a Sexta: 08:00h - 18:00h'
  }
]

const pageTexts = [
  {
    id: 1,
    text: 'Quer fazer parte de uma equipe referência em reparo e manutenção de eletrodomésticos? Na Reprotec'
  },
  {
    id: 2,
    text: 'apaixonadas por resolver problemas e que queiram crescer conosco'
  },
  {
    id: 3,
    text: 'Envie seu currículo mesmo assim. Estamos sempre em busca de talentos!'
  }
]

let selector: Locator

test.describe('Tests for Work with us page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/trabalhe-conosco')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Trabalhe Conosco | Reprotec/)
  })

  test('Should have banner title', async ({ page }) => {
    await expect(
      page.locator('.mainTitle').getByText('Trabalhe conosco')
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
      page.locator('.titleH2').getByText('Trabalhe Conosco - Reprotec')
    ).toBeVisible()
  })

  pageTexts.forEach((item) => {
    test(`Should have a section text ${item.id}`, async ({ page }) => {
      await expect(page.getByText(item.text)).toBeVisible()
    })
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

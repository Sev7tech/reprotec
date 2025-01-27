import { expect, Locator, test } from '@playwright/test'

import { servicesCardList } from '@/constants'

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
    linkTitle: 'Ir para a página Serviços',
    href: '/servicos',
    pageTitle: 'Serviços'
  }
]

let selector: Locator

test.describe('Tests for Service page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/servicos')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Serviços | Reprotec/)
  })

  test('Should have banner title', async ({ page }) => {
    await expect(page.locator('.mainTitle').getByText('Serviços')).toBeVisible()
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

  test('Should have text', async ({ page }) => {
    await expect(
      page.getByText(
        'pelas marcas líderes do mercado, entre elas Medea, Carrier, Springer, Comfee e TOSHIBA'
      )
    ).toBeVisible()
  })

  servicesCardList.forEach((item, index) => {
    test(`Should have cards title ${item.cardTitle}`, async ({ page }) => {
      const cardItem = page.locator('li > article').nth(index)

      await expect(cardItem.locator('img')).toHaveAttribute('alt', item.alt)

      await expect(
        cardItem.getByRole('heading', { name: item.cardTitle })
      ).toBeVisible()

      await expect(cardItem.getByText(item.text.slice(0, 50))).toBeVisible()

      await expect(cardItem.locator('a')).toHaveAttribute('href', item.href)
      await expect(cardItem.locator('a')).toHaveAttribute('title', item.title)
    })
  })

  test('Should have a button to go to contact', async ({ page }) => {
    selector = page.getByRole('link', { name: 'Entrar em conto' })

    await expect(selector).toHaveAttribute('href', '/contato')
    await expect(selector).toHaveAttribute(
      'title',
      'Falar com um representante'
    )

    await selector.click()

    await expect(
      page.getByRole('heading', {
        name: 'Entre em contato conosco',
        exact: true
      })
    ).toBeVisible()
  })
})

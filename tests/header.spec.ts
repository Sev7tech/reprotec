import { expect, Locator, test } from '@playwright/test'

import { navigatorLinks } from '@/constants'

let selector: Locator

test.describe('Tests for Header', () => {
  const titles = [
    {
      id: 1,
      title: 'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
    },
    {
      id: 2,
      title: 'Serviços'
    },
    {
      id: 3,
      title: 'Trabalhe conosco'
    },
    {
      id: 4,
      title: 'Entre em contato conosco'
    }
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Header links redirection', async ({ page }) => {
    for (const link of navigatorLinks) {
      selector = page.locator('header').getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)
      await selector.click()
      await expect(
        page.getByRole('banner').getByRole('heading', {
          name: titles[link.id! - 1].title
        })
      ).toBeVisible()
    }
  })

  test('Header Should have, logo and fale conosco', async ({ page }) => {
    selector = page
      .locator('header')
      .getByRole('link', { name: 'Logo da Reprotec | empresa de' })

    await expect(selector).toHaveAttribute('href', '/')

    await selector.click()

    expect(
      page.getByRole('banner').getByRole('heading', {
        name: 'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
      })
    ).toBeVisible()

    selector = page.getByRole('link', { name: 'Falar com um atendente' })

    await expect(selector).toHaveAttribute('href', 'https://wa.me/551124832924')
  })
})

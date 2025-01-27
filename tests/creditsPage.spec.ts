import { test, expect, Locator } from '@playwright/test'

import { libraryList } from '@/constants'

let selector: Locator

const titles = [
  {
    id: 1,
    title: 'Créditos & Agradecimentos'
  },
  {
    id: 2,
    title: 'Images'
  },
  {
    id: 3,
    title: 'Bibliotecas & Framework'
  }
]

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
    linkTitle: 'Ir para a página Creditos',
    href: '/creditos',
    pageTitle: 'Créditos & Agradecimentos'
  }
]

test.describe('Tests for Credit page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/creditos')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Créditos | Reprotec/)
  })

  bannerLinks.forEach((item) => {
    test(`Link banner Should navigate to the correct page - id ${item.id}`, async ({
      page
    }) => {
      selector = page
        .getByRole('main')
        .getByRole('link', { name: item.linkTitle })

      await expect(selector).toHaveAttribute('href', item.href)
      await selector.click()
      await expect(page.getByText(item.pageTitle)).toBeVisible()
    })
  })

  titles.forEach((item) => {
    test(`Should haveTitle ${item.title} - ${item.id}`, async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: item.title, exact: true })
      ).toBeVisible()
    })
  })

  test('Should have message visible', async ({ page }) => {
    await expect(
      page.getByText(
        'desenvolvido pela Sev7tech.com, utiliza imagens e bibliotecas de código'
      )
    ).toBeVisible()
  })

  test('library links redirection', async ({ page }) => {
    for (const link of libraryList) {
      selector = page.getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)
    }
  })
})

import test, { expect, Locator } from '@playwright/test'

import {
  contactList,
  legalAndCreditsLinks,
  navigatorLinks,
  servicesLinks
} from '@/constants'

let selector: Locator

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

const legalAndCreditPagesTitles = [
  {
    id: 1,
    title: 'Créditos & Agradecimentos'
  },
  {
    id: 2,
    title: 'Política de Privacidade'
  }
]

const currentYear = new Date().getFullYear()

test.describe('Test for footer', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.addInitScript(() => {
      const expirationDate = new Date()
      expirationDate.setFullYear(expirationDate.getFullYear() + 1)
      localStorage.setItem('cookieAccepted', expirationDate.toISOString())
    })

    await page.goto('/')
  })

  test('Should have a logo', async ({ page }) => {
    selector = page
      .getByRole('contentinfo')
      .getByRole('link', { name: 'Logo da Reprotec | empresa de' })

    await expect(selector).toHaveAttribute('href', '/')

    selector.click()

    await expect(
      page.getByRole('heading', {
        name: 'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
      })
    ).toBeVisible()
  })

  test('Should have texts', async ({ page }) => {
    await expect(
      page
        .getByRole('contentinfo')
        .getByText(
          'Reprotec, conserto de eletrodomésticos rápido, eficiente e sob medida para você. Qualidade'
        )
    ).toBeVisible()

    await expect(
      page
        .getByRole('contentinfo')
        .getByText(`© ${currentYear} Reprotec, todos os direitos reservados.`)
    ).toBeVisible()
  })

  navigatorLinks.forEach((link, index) => {
    test(`Should have quick link ${link.children}`, async ({ page }) => {
      selector = page.locator('footer').getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)
      await selector.click()
      await expect(
        page.getByRole('banner').getByRole('heading', {
          name: titles[index].title
        })
      ).toBeVisible()
    })
  })

  servicesLinks.forEach((link) => {
    test(`Should have link to service page - ${link.children}`, async ({
      page
    }) => {
      selector = page.locator('footer').getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)
      await selector.click()
      await expect(
        page.getByRole('banner').getByRole('heading', {
          name: 'Serviços'
        })
      ).toBeVisible()
    })
  })

  contactList.forEach((link) => {
    test(`Should have link to contact - ${link.children}`, async ({ page }) => {
      selector = page.locator('footer').getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)
    })
  })

  legalAndCreditsLinks.forEach((link, index) => {
    test(`Should have link to service page - ${link.children}`, async ({
      page
    }) => {
      selector = page.locator('footer').getByRole('link', { name: link.title })
      await expect(selector).toHaveAttribute('href', link.href)
      await expect(selector).toHaveText(link.children as string)

      if (index <= 1) {
        await selector.click()
        await expect(
          page.getByRole('heading', {
            name: legalAndCreditPagesTitles[index].title
          })
        ).toBeVisible()
      }
    })
  })
})

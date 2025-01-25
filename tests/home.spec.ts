import { expect, test } from '@playwright/test'

test.describe('Tests for Home page', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.addInitScript(() => {
      localStorage.setItem('cookieAccepted', 'yes')
    })

    await page.goto('/')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(
      /Reprotec - Reparos de Eletrodomésticos em Guarulhos e São Paulo/
    )
  })
})

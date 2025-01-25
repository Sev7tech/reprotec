import { expect, test } from '@playwright/test'

test.describe('Tests for Service page', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.addInitScript(() => {
      localStorage.setItem('cookieAccepted', 'yes')
    })

    await page.goto('/servicos')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Serviços | Reprotec/)
  })
})

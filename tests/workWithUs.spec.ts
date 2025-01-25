import { expect, test } from '@playwright/test'

test.describe('Tests for Work with us page', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.addInitScript(() => {
      localStorage.setItem('cookieAccepted', 'yes')
    })

    await page.goto('/trabalhe-conosco')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Trabalhe Conosco | Reprotec/)
  })
})

import { expect, test } from '@playwright/test'

test.describe('Tests for Contato page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contato')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Contato | Reprotec/)
  })
})

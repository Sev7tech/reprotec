import { expect, test } from '@playwright/test'

test.describe('Tests for cookiePopup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Should have visible CookiePopup', async ({ page }) => {
    const cookiePopup = page.locator('.cookie-container')

    await expect(cookiePopup).toBeVisible()

    await expect(cookiePopup).toHaveText(
      'Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.Eu aceito'
    )

    const cookiePopupLink = cookiePopup.getByRole('link', {
      name: 'Voce deve está em Consentimento com os cookie do website'
    })

    await expect(cookiePopupLink).toHaveAttribute(
      'href',
      '/politica-privacidade'
    )

    await cookiePopupLink.click()

    await expect(
      page.getByRole('heading', { name: 'política de privacidade' })
    ).toBeVisible()
  })

  test('Should show CookiePopup after a year (cookie expiration)', async ({
    page,
    context
  }) => {
    const cookiePopup = page.locator('.cookie-container')

    await expect(cookiePopup).toBeVisible()

    const button = cookiePopup.locator('button')

    await button.click()

    await expect(cookiePopup).not.toBeVisible()

    await context.addInitScript(() => {
      const expirationDate = new Date()
      expirationDate.setFullYear(expirationDate.getFullYear() + 1)
      localStorage.setItem('cookieAccepted', expirationDate.toISOString())
    })

    await page.reload()

    await expect(cookiePopup).not.toBeVisible()

    await context.addInitScript(() => {
      const expiredDate = new Date()
      expiredDate.setFullYear(expiredDate.getFullYear() - 1)
      localStorage.setItem('cookieAccepted', expiredDate.toISOString())
    })

    await page.reload()

    await expect(cookiePopup).toBeVisible()

    await expect(cookiePopup).toHaveText(
      'Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.Eu aceito'
    )
  })
})

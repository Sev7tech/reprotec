import test, { expect } from '@playwright/test'

test('Should have visible CookiePopup', async ({ page }) => {
  await page.goto('/')

  const cookiePopup = page.locator('.popup')

  await expect(cookiePopup).toBeVisible()

  await expect(cookiePopup).toHaveText(
    'Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.Eu aceito'
  )

  const cookiePopupLink = cookiePopup.getByRole('link', {
    name: 'Voce deve está em Consentimento com os cookie do website'
  })

  await expect(cookiePopupLink).toHaveAttribute('href', '/politica-privacidade')

  await cookiePopupLink.click()

  await expect(
    page.getByRole('heading', { name: 'Política de Privacidade' })
  ).toBeVisible()
})

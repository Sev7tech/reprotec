import { expect, test } from '@playwright/test'

test.describe('Tests for the Not Found page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/not-found')
  })

  test('Not Found page should have a title', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Opa! Parece que essa página precisa de '
      })
    ).toBeVisible()
  })

  test('Should have a test', async ({ page }) => {
    await expect(
      page.getByText(' preocupe, estamos aqui para consertar isso. Que')
    ).toBeVisible()
  })

  test('Should have a button to go to home', async ({ page }) => {
    const selector = page.getByRole('link', {
      name: 'Voltar para a página inicial'
    })

    await selector.click()

    await expect(
      page.getByRole('heading', {
        name: 'Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações'
      })
    ).toBeVisible()
  })
})

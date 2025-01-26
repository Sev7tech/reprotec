import test, { expect } from '@playwright/test'

test.describe('Test for Privacy Policy page', () => {
  const titles = [
    {
      id: 1,
      title: 'Política de Privacidade'
    },
    {
      id: 2,
      title: '1. Quem somos'
    },
    {
      id: 3,
      title: '2. Dados que coletamos'
    },
    {
      id: 4,
      title: '3. Finalidade da coleta de dados'
    },
    {
      id: 5,
      title: '4. Compartilhamento de dados'
    },
    {
      id: 6,
      title: '5. Uso de cookies'
    },
    {
      id: 7,
      title: '6. Direitos do usuário'
    },
    {
      id: 8,
      title: '7. Segurança dos dados'
    },
    {
      id: 9,
      title: '8. Contato'
    },
    {
      id: 1,
      title: '9. Atualizações da política'
    }
  ]

  const texts = [
    {
      id: 1,
      text: 'Última atualização:  27/01/2025'
    },
    {
      id: 2,
      text: 'com a Lei Geral de Proteção de Dados (LGPD).'
    },
    {
      id: 3,
      text: 'atuando exclusivamente no Brasil. Nosso objetivo é facilitar a comunicação '
    },
    {
      id: 4,
      text: 'Coletamos os seguintes dados dos usuários:'
    },
    {
      id: 5,
      text: '(coletados via formulário de contato ou agendamento).'
    },
    {
      id: 6,
      text: 'Dados de navegação: Informações sobre '
    },
    {
      id: 7,
      text: 'Dados enviados via currículo: Nome completo, e-mail, '
    },
    {
      id: 8,
      text: 'Cookies e tecnologias similares: Dados de cookies'
    },
    {
      id: 9,
      text: 'Os dados coletados são utilizados para:'
    },
    {
      id: 10,
      text: ' experiência do usuário no site, adaptando-o às suas preferências.'
    },
    {
      id: 11,
      text: ' informações, responder dúvidas e confirmar agendamentos.'
    },
    {
      id: 12,
      text: 'site para identificar oportunidades de melhoria.'
    },
    {
      id: 13,
      text: 'Currículos: Dados contidos nos currículos são usados '
    },
    {
      id: 14,
      text: 'té [insira o prazo, ex.: 6 meses ou 1 ano] após o envio, sendo posteriormente excluídos'
    },
    {
      id: 15,
      text: 'tráfego com o Google Analytics, onde as informações são processadas de forma anônima.'
    },
    {
      id: 16,
      text: ' Além disso, o site usa cookies do Google Analytics para fins estatísticos.'
    },
    {
      id: 17,
      text: 'Consentimento: Estamos implementando um sistema de consentimento (pop-up)'
    },
    {
      id: 18,
      text: ' usuários do nosso site têm os seguintes direitos:'
    },
    {
      id: 19,
      text: 'Solicitar a exclusão de seus dados pessoais.'
    },
    {
      id: 20,
      text: 'Retirar o consentimento para o uso de cookies.'
    },
    {
      id: 21,
      text: 'Corrigir informações incorretas.'
    },
    {
      id: 22,
      text: 'e proteção, como criptografia, para garantir que os dados coletados sejam armazenados com segurança.'
    },
    {
      id: 23,
      text: 'seus dados pessoais, entre em contato conosco pelos seguintes meios:'
    },
    {
      id: 2,
      text: 'E-mail: atendimento@reprotec.com.br'
    },
    {
      id: 2,
      text: 'Telefone: +55 11 2483-2924'
    },
    {
      id: 2,
      text: 'Podemos atualizar esta Política de Privacidade periodicamente.'
    }
  ]

  test.beforeEach(async ({ page, context }) => {
    await context.addInitScript(() => {
      localStorage.setItem('cookieAccepted', 'yes')
    })

    await page.goto('/politica-privacidade')
  })

  test('Should have title', async ({ page }) => {
    await expect(page).toHaveTitle(/Política de Privacidade | Reprotec/)
  })

  titles.forEach((item) => {
    test(`Should have title ${item.title} - ${item.id}`, async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: item.title })
      ).toBeVisible()
    })
  })

  texts.forEach((item) => {
    test(`Should have text ${item.text} - ${item.id}`, async ({ page }) => {
      await expect(page.getByText(item.text)).toBeVisible()
    })
  })
})

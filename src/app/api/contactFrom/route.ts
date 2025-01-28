import { NextRequest, NextResponse } from 'next/server'

import sendForm from '@/utils/form.utils'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const whatsApp = formData.get('whatsapp') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const subject = 'Contato Recebido - Site Reprotec'

    const html = `
      <h1>Olá, equipe Reprotec!</h1>
      <p>Recebemos um novo contato do site. Seguem os dados:</p>
      <p><strong>Nome: </strong>${firstName}</p>
      <p><strong>Sobrenome: </strong>${lastName}</p>
      <p><strong>Link do WhatsApp: </strong> <a href="https://wa.me/55${whatsApp}">Click aqui para conversar no WhatsApp</a></p>
      <p><strong>Telefone: </strong>+55 ${whatsApp}</p>
      <p><strong>E-mail: </strong>${email}</p>
      <p><strong>Mensagem: </strong>${message}</p>
      <p>Atenciosamente,</p>
      <p>Equipe Reprotec.</p>
    `

    const emailInfo = await sendForm({
      subject,
      html
    })

    return NextResponse.json(
      {
        message: 'Form send success!',
        emailInfo
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Form not Send',
        details: error
      },
      { status: 500 }
    )
  }
}

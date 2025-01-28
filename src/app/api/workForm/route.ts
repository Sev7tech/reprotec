import { NextRequest, NextResponse } from 'next/server'

import sendForm from '@/utils/form.utils'

export async function POST(req: NextRequest) {
  try {
    if (req.method === 'POST') {
      const formData = await req.formData()

      const firstName = formData.get('firstName') as string
      const lastName = formData.get('lastName') as string
      const whatsApp = formData.get('whatsapp') as string
      const email = formData.get('email') as string
      const file = formData.get('file') as File

      const subject = 'Candidatura Recebida - Site Reprotec'

      const html = `
        <h1>Olá, equipe Reprotec!</h1>
        <p>Recebemos uma nova candidatura de emprego no site. Seguem os dados:</p>
        <p><strong>Nome: </strong>${firstName}</p>
        <p><strong>Sobrenome: </strong>${lastName}</p>
        <p><strong>Link do WhatsApp: </strong> <a href="https://wa.me/55${whatsApp}">Click aqui para conversar no WhatsApp</a></p>
        <p><strong>Telefone: </strong>+55 ${whatsApp}</p>
        <p><strong>E-mail: </strong>${email}</p>
        <p><strong>currículo: </strong>${file}</p>
        <p>Atenciosamente,</p>
        <p>Equipe Reprotec.</p>
      `

      const buffer = Buffer.from(await file.arrayBuffer())

      const attachments = [
        {
          filename: file?.name || 'curriculo.pdf',
          content: buffer,
          contentType: 'application/pdf'
        }
      ]

      const emailInfo = await sendForm({
        subject,
        html,
        attachments
      })

      return NextResponse.json(
        { message: 'Email send success!', emailInfo },
        { status: 200 }
      )
    } else {
      return NextResponse.json({ error: 'Invalid method' }, { status: 405 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Form not send', details: error },
      { status: 500 }
    )
  }
}

'use server'

import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { ISendForm } from '@/types'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
} as SMTPTransport.Options)

async function sendForm(formData: ISendForm) {
  const { subject, html, attachments } = formData
  const info = await transporter.sendMail({
    from: `Site Reprotec: <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject,
    html,
    attachments: attachments || []
  })

  return info
}

export default sendForm

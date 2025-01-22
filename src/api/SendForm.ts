'use server'

import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { ISendForm } from '@/types'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE !== 'development',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
} as SMTPTransport.Options)

async function sendForm({ subject, text, html }: ISendForm) {
  try {
    const info = await transporter.sendMail({
      from: `Site Reprotec: <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject,
      text,
      html
    })

    return info
  } catch (error) {
    return alert(error)
  } finally {
    transporter.close()
  }
}

export default sendForm

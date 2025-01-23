'use server'

import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { ISendForm } from '@/types'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'testsapi765@gmail.com',
    pass: 'itdqbxcacptemtfv'
  }
})

async function sendForm(formData: ISendForm) {
  const { subject, text, html } = formData
  const info = await transporter.sendMail({
    from: '"Site Reprotec:" <testsapi765@gmail.com>',
    to: 'reprotec4@gmail.com',
    subject,
    text,
    html
  })

  return info
}

export default sendForm

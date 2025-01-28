import { ReactNode } from 'react'

interface IImage {
  id?: number
  src: string
  alt: string
}

interface ILink {
  id?: number
  children: ReactNode
  href: string
  title: string
}

interface IContact extends IImage, ILink {}

interface IServiceCard extends IImage, ILink {
  cardTitle: string
  text: string
  isSeoTitle?: boolean
}

interface IImagesCredits extends IImage {
  link1: string
  href1: string
  linkTitle1: string
  link2: string
  href2: string
  linkTitle2: string
}

interface IOurDifferentials extends IImage {
  title: string
  text: string
}

interface ISendForm {
  subject: string
  text?: string
  html: string
  attachments?: Array<{
    filename: string
    content: Buffer | string
    contentType: string
  }>
}

interface IPageInfos {
  title: string
  children: ReactNode
  href: string
}

export type {
  IImage,
  ILink,
  IContact,
  IServiceCard,
  IImagesCredits,
  IOurDifferentials,
  ISendForm,
  IPageInfos
}

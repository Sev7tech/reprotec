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
}

interface IImagesCredits extends IImage {
  link1: string
  href1: string
  linkTitle1: string
  link2: string
  href2: string
  linkTitle2: string
}

export type { IImage, ILink, IContact, IServiceCard, IImagesCredits }

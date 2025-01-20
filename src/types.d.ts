import { ReactNode } from 'react'

interface IImage {
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

export type { IImage, ILink, IContact, IServiceCard }

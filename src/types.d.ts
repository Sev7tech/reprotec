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

export type { IImage, ILink, IContact }

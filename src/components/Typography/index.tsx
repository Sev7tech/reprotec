import { ReactNode } from 'react'

import CustomLink from './CustomLinks'
import Text from './Text'

export interface ITypographyBase {
  children: ReactNode
}

export const Typography = {
  Link: CustomLink,
  Text
}

import { ReactNode } from 'react'

import CustomLink from './CustomLinks'
import Text from './Text'
import H3 from './H3'
import H2 from './H2'
import { H1 } from './H1'

export interface ITypographyBase {
  children: ReactNode
  className?: string
}

export const Typography = {
  Link: CustomLink,
  Text,
  H1,
  H2,
  H3
}

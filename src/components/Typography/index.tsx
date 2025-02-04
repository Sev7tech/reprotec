import { ReactNode } from 'react'

import CustomLink from './CustomLinks'
import Text from './Text'
import H3 from './H3'
import H2 from './H2'
import { BlueTitle } from './BlueTitle'

export interface ITypographyBase {
  children: ReactNode
  className?: string
  'data-aos'?: string
}

export const Typography = {
  Link: CustomLink,
  Text,
  H2,
  H3,
  BlueTitle
}

import { ReactNode } from 'react'

import { CTA } from './CTA'
import { ToggleMenu } from './ToggleMenu'
import { CTA2 } from './CTA2'
import { CallCenter } from './CallCenter'

export interface IButtons {
  children: ReactNode
}

export const Buttons = {
  ToggleMenu,
  CTA,
  CTA2,
  CallCenter
}

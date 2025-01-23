import { ReactNode } from 'react'

import { Input } from './Input'
import { InputGroup } from './InputGroup'
import { Label } from './Label'
import { MaskedInputComponent } from './PhoneMask'

export interface IFormElements {
  children: ReactNode
  className?: string
}

export const checkInputHasError = (
  fieldName: string,
  touched: any,
  errors: any
): boolean => {
  return errors[fieldName] && touched[fieldName]
}

export const FormElement = {
  InputGroup,
  Input,
  Label,
  MaskedInputComponent
}

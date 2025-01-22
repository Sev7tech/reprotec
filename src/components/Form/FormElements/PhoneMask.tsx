import { FieldProps } from 'formik'
import { InputMask } from '@react-input/mask'

import { checkInputHasError } from '.'

interface IMaskedInputProps extends FieldProps {
  name: string
  className?: string
  type: string
  id: string
}

export const MaskedInputComponent = ({
  className,
  field,
  form,
  ...props
}: IMaskedInputProps) => {
  const hasError = checkInputHasError(field.name, form.touched, form.errors)

  return (
    <>
      <InputMask
        {...field}
        {...props}
        mask="(__) _____-____"
        replacement={{ _: /\d/ }}
        className={`input-style ${className} ${hasError ? 'input-error' : ''}`}
        placeholder="(99) 99999-9999"
      />
      {hasError && (
        <span className="message-error">
          {form.errors[field.name] as string}
        </span>
      )}
    </>
  )
}

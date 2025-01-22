import { FieldProps } from 'formik'

import { checkInputHasError } from '.'

interface IInputProps extends FieldProps {
  name: string
  className?: string
  type: string
  id: string
  isTextarea?: boolean
  isCheckBox?: boolean
}

export const Input = ({
  className,
  field,
  form,
  isTextarea = false,
  isCheckBox = false,
  ...props
}: IInputProps) => {
  const hasError = checkInputHasError(field.name, form.touched, form.errors)

  return (
    <>
      {isTextarea ? (
        <textarea
          {...field}
          {...props}
          className={`input-style h-24 w-full resize-none pt-2 md:h-40 ${className} ${hasError ? 'input-error' : ''}`}
        />
      ) : (
        <input
          {...field}
          {...props}
          className={`input-style ${isCheckBox ? 'h-[16px] w-[16px]' : 'w-full'} ${className} ${hasError ? 'input-error' : ''}`}
        />
      )}

      {hasError && (
        <span
          className={`${isCheckBox ? 'absolute -bottom-3' : 'static'} message-error`}
        >
          {form.errors[field.name] as string}
        </span>
      )}
    </>
  )
}

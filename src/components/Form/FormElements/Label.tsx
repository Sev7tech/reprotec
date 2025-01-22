import { IFormElements } from '.'

interface ILabel extends IFormElements {
  htmlFor: string
}

export const Label = ({ htmlFor, children, className }: ILabel) => {
  return (
    <label
      className={`text-base font-semibold ${className ? className : 'text-black'}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

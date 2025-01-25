import { ITypographyBase } from '.'

interface IText extends ITypographyBase {
  className?: string
}

const Text = ({ children, className }: IText) => {
  return (
    <p
      className={`text-lg font-normal ${className ? className : 'text-black'}`}
    >
      {children}
    </p>
  )
}

export default Text

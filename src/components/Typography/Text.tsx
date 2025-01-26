import { ITypographyBase } from '.'

interface IText extends ITypographyBase {
  className?: string
}

const Text = ({ children, className, ...rest }: IText) => {
  return (
    <p
      className={`text-lg font-normal ${className ? className : 'text-black'}`}
      {...rest}
    >
      {children}
    </p>
  )
}

export default Text

import { ITypographyBase } from '.'

interface IH3 extends ITypographyBase {
  className?: string
}

const H3 = ({ children, className }: IH3) => {
  return (
    <h3
      className={`text-2xl font-bold ${className ? className : 'text-black'}`}
    >
      {children}
    </h3>
  )
}

export default H3

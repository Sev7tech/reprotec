import { ITypographyBase } from '.'

const H2 = ({ children, ...rest }: ITypographyBase) => {
  return (
    <h2
      className="flex items-center text-xl font-semibold text-sky-600"
      {...rest}
    >
      <span className="mr-1 border-b-8 border-sky-600"></span> {children}
    </h2>
  )
}

export default H2

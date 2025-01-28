import { ITypographyBase } from '.'

export const BlueTitle = ({ children, ...rest }: ITypographyBase) => {
  return (
    <h2
      className="flex items-center text-xl font-bold tracking-wide text-primaryBlue/80"
      {...rest}
    >
      <div className="mr-2 w-6 border-b-2 border-primaryBlue/80"></div>{' '}
      {children}
    </h2>
  )
}

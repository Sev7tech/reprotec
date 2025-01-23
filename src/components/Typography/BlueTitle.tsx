import { ITypographyBase } from '.'

export const BlueTitle = ({ children }: ITypographyBase) => {
  return (
    <h2 className="flex items-center text-xl font-semibold text-cyan-600">
      <div className="mr-2 w-6 border-b-2 border-cyan-600"></div> {children}
    </h2>
  )
}

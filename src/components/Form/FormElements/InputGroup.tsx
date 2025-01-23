import { IFormElements } from '.'

export const InputGroup = ({ children, className }: IFormElements) => {
  return (
    <div className={`relative ${className ? className : 'gapCol8'}`}>
      {children}
    </div>
  )
}

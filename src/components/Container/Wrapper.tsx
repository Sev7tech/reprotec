import { ReactNode } from 'react'

type IWrapper = {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <section className="custom-section mx-auto px-4">
      <div className={`max-container flex flex-col gap-14 ${className}`}>
        {children}
      </div>
    </section>
  )
}

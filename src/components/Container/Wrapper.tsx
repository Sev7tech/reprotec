import { ReactNode } from 'react'

type IWrapper = {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <section className="custom-section mx-auto">
      <div
        className={`max-container flex w-screen flex-col gap-14 px-4 ${className}`}
      >
        {children}
      </div>
    </section>
  )
}

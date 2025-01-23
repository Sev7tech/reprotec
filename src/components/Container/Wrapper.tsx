import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="custom-section mx-auto px-4">
      <div className="max-container flex flex-col gap-14">{children}</div>
    </section>
  )
}

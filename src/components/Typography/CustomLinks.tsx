import Link from 'next/link'

import { ITypographyBase } from '.'

interface ICustomLink extends ITypographyBase {
  href: string
  linkTitle: string
  target?: string
  isFooterLink?: boolean
}

const CustomLink = ({
  href,
  linkTitle,
  children,
  target,
  isFooterLink
}: ICustomLink) => {
  return (
    <Link
      className={
        isFooterLink
          ? 'text-base font-normal text-slate-200 hover:brightness-100'
          : 'text-lg font-semibold text-black hover:text-sky-600'
      }
      href={href}
      title={linkTitle}
      aria-label={linkTitle}
      target={target}
    >
      {children}
    </Link>
  )
}

export default CustomLink

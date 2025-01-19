import Link from 'next/link'

import { ITypographyBase } from '.'

interface ICustomLink extends ITypographyBase {
  href: string
  linkTitle: string
  target?: string
  isFooterLink?: boolean
  onClick?: () => void
  isTextWhite?: boolean
}

const CustomLink = ({
  href,
  linkTitle,
  children,
  target,
  isFooterLink,
  onClick,
  isTextWhite
}: ICustomLink) => {
  return (
    <Link
      className={`py-2 ${
        isFooterLink
          ? 'text-base font-normal text-slate-200 hover:text-sky-600 hover:brightness-105'
          : isTextWhite
            ? 'text-lg font-semibold text-white hover:text-sky-600'
            : 'text-lg font-semibold text-black hover:text-sky-600'
      } `}
      href={href}
      title={linkTitle}
      aria-label={linkTitle}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default CustomLink

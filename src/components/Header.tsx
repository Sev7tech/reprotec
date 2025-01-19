'use client'

import { memo, useState } from 'react'

import Brand from './Brand'
import { Typography } from './Typography'
import { Buttons } from './Buttons'

import { navigatorLinks } from '@/constants'

const Header = memo(() => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="fixed top-0 z-[1001] w-full bg-midnightBlue">
      <div className="max-container flexBetween relative py-4">
        <Brand src="/images/logo-white.png" />
        <nav
          className={`${menuOpen ? 'translate-x-0 bg-black/90 opacity-100' : '-translate-x-full opacity-0 lg:translate-x-0 lg:lg:opacity-100'} fixed left-0 top-[64px] h-dvh w-full px-4 lg:static lg:h-auto lg:w-auto lg:bg-transparent`}
          role="navigation"
          aria-label={'mainNavigation'}
        >
          <ul className="gap16 lg:flexRow pt-4 lg:space-x-4 lg:p-0">
            {navigatorLinks.map((link) => (
              <li key={link.id}>
                <Typography.Link
                  href={link.href}
                  linkTitle={link.title}
                  onClick={() => toggleMenu()}
                  isHeader
                >
                  {link.children}
                </Typography.Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flexBetween gap-4">
          <Buttons.ToggleMenu
            onClick={() => toggleMenu()}
            isMenuOpen={menuOpen}
          />
        </div>
      </div>
    </header>
  )
})

export default Header

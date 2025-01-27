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
    <header className="fixed top-0 z-50 w-full bg-midnightBlue">
      <div className="max-container flexBetween w-95 relative py-4 md:py-2">
        <Brand src="/images/logo-white.png" />
        <nav
          className={`${menuOpen ? 'translate-x-0 bg-blue-950 opacity-100' : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'} mainNav`}
          role="navigation"
          aria-label={'mainNavigation'}
        >
          <ul className="gapCol24 lg:flexRow pt-4 lg:space-x-4 lg:p-0">
            {navigatorLinks.map((link) => (
              <li key={link.id}>
                <Typography.Link
                  href={link.href}
                  linkTitle={link.title}
                  onClick={() => toggleMenu()}
                  isTextWhite
                >
                  {link.children}
                </Typography.Link>
              </li>
            ))}
            <li className="flexCenter">
              <Buttons.CallCenter isMobile />
            </li>
          </ul>
        </nav>
        <div className="flexBetween gap-4">
          <Buttons.CallCenter isMobile={false} />
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

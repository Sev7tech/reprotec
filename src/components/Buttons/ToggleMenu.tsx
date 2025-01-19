import { memo } from 'react'

type menuToggle = {
  onClick: () => void
  isMenuOpen: boolean
}

export const ToggleMenu = memo(({ onClick, isMenuOpen }: menuToggle) => {
  return (
    <div
      id="hamburger"
      className="flexEnd cursor-pointer flex-col gap-2 rounded-md lg:hidden"
      onClick={onClick}
    >
      <span
        className={`relative h-[3.5px] w-8 bg-white transition-transform duration-300 ${isMenuOpen ? 'top-[10px] -translate-y-2 rotate-45' : ''}`}
      ></span>
      <span
        className={`relative h-[3.5px] bg-white transition-transform duration-300 ${isMenuOpen ? 'bottom-[2px] w-8 -translate-y-2 -rotate-45' : 'w-6'}`}
      ></span>
    </div>
  )
})

'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect } from 'react'

import { initializeAOS } from '@/utils/animation.utils'

export default function Provider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initializeAOS()
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}

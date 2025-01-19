import Image from 'next/image'
import { ReactNode } from 'react'

import { IImage } from '@/types'

export interface BannerProps extends IImage {
  children: ReactNode
}

const Banner = ({ children, src, alt }: BannerProps) => {
  return (
    <section role="banner" className="banner flexCenter">
      <Image
        src={src}
        alt={alt}
        aria-label={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
        className="z-0 object-cover object-center"
        style={{
          objectFit: 'cover'
        }}
      />
      <div className="overlay absolute"></div>
      <section className="max-container flexCenter z-10 text-center">
        {children}
      </section>
    </section>
  )
}
export default Banner

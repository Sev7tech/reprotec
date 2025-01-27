import React from 'react'

import Picture from '../Picture'
import { Typography } from '../Typography'

import { IImagesCredits } from '@/types'

const ImageCredits = ({
  src,
  alt,
  link1,
  href1,
  linkTitle1,
  link2,
  href2,
  linkTitle2
}: IImagesCredits) => {
  return (
    <article className="w-full overflow-hidden rounded-xl duration-300 hover:scale-105">
      <Picture src={src} alt={alt} $w={600} $h={400} />
      <div className="bg-sky-100 p-4">
        <div className="container-flex">
          <Typography.H3>Autor:</Typography.H3>
          <Typography.Link href={href1} linkTitle={linkTitle1}>
            {link1}
          </Typography.Link>
        </div>
        <div className="container-flex">
          <Typography.H3>Banco de imagem: </Typography.H3>
          <Typography.Link href={href2} linkTitle={linkTitle2}>
            {link2}
          </Typography.Link>
        </div>
      </div>
    </article>
  )
}

export default ImageCredits

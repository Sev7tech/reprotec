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
    <article className="w-full">
      <Picture src={src} alt={alt} $w={300} $h={400} />
      <div>
        <Typography.H3>Autor:</Typography.H3>
        <Typography.Link href={href1} linkTitle={linkTitle1}>
          {link1}
        </Typography.Link>
      </div>
      <div>
        <Typography.H3>Banco de imagem</Typography.H3>
        <Typography.Link href={href2} linkTitle={linkTitle2}>
          {link2}
        </Typography.Link>
      </div>
    </article>
  )
}

export default ImageCredits

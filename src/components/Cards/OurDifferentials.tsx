import Picture from '../Picture'
import { Typography } from '../Typography'

import { IOurDifferentials } from '@/types'

export const OurDifferentials = ({
  src,
  alt,
  title,
  text
}: IOurDifferentials) => {
  return (
    <article className="gapCol16 w-full rounded-2xl bg-midnightBlue p-4 duration-300 hover:scale-105 hover:brightness-110">
      <div className="mx-auto h-[80px] w-[80px]">
        <Picture src={src} alt={alt} $w={80} $h={80} />
      </div>
      <div className="gapCol16 text-white">
        <Typography.H3 className="text-center">{title}</Typography.H3>
        <Typography.Text className="text-white">{text}</Typography.Text>
      </div>
    </article>
  )
}

import Picture from '../Picture'
import { Typography } from '../Typography'

import { IServiceCard } from '@/types'

const ServicesCard = ({
  src,
  alt,
  cardTitle,
  text,
  href,
  title,
  children
}: IServiceCard) => {
  return (
    <article className="overflow-hidden rounded-xl bg-primaryBlue shadow-lg duration-300 hover:scale-105 hover:brightness-105">
      <Picture src={src} alt={alt} $w={580} $h={400} />
      <div className="gapCol16 p-4">
        <Typography.H3 className="text-white">{cardTitle}</Typography.H3>
        <Typography.Text className="text-white">{text}</Typography.Text>
        <Typography.Link href={href} linkTitle={title} isTextWhite>
          entrar em contato <span className="text-for-seo">{children}</span>
        </Typography.Link>
      </div>
    </article>
  )
}

export default ServicesCard

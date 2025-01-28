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
  children,
  isSeoTitle = false
}: IServiceCard) => {
  const Title = isSeoTitle ? (
    <h2 className="text-2xl font-bold text-white">{cardTitle}</h2>
  ) : (
    <Typography.H3 className="text-white">{cardTitle}</Typography.H3>
  )

  return (
    <article className="mx-auto w-full max-w-[95%] overflow-hidden rounded-xl bg-primaryBlue shadow-lg duration-300 hover:scale-105 hover:brightness-105 md:max-w-[600px]">
      <Picture
        src={src}
        alt={alt}
        $w={580}
        $h={400}
        className="w-full rounded-t-xl object-cover"
      />
      <div className="flex flex-col gap-4 p-4">
        {Title}
        <Typography.Text className="text-sm text-white sm:text-base">
          {text}
        </Typography.Text>
        <Typography.Link href={href} linkTitle={title} isTextWhite>
          entrar em contato <span className="text-for-seo">{children}</span>
        </Typography.Link>
      </div>
    </article>
  )
}

export default ServicesCard

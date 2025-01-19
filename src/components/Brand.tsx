import Link from 'next/link'

import Picture from './Picture'

type BrandProps = {
  src: string
}

const Brand = ({ src }: BrandProps) => {
  const title = 'Logo da Reprotec | empresa de reparo de eletrodomésticos'
  return (
    <Link
      href="/"
      title={title}
      aria-label={title}
      style={{
        width: '180px'
      }}
    >
      <Picture src={src} alt={title} $w={56} $h={10} />
    </Link>
  )
}

export default Brand

import Image from 'next/image'

interface PictureProps {
  src: string
  alt: string
  /** width as $w number type */
  $w: number
  /** height as $h number type */
  $h: number
  className?: string
}

const Picture = ({ src, alt, $w, $h, className }: PictureProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        aspectRatio: `${$w} / ${$h}`,
        overflow: 'hidden'
      }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        aria-label={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={70}
        loading="eager"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
        role="img"
      />
    </div>
  )
}

export default Picture

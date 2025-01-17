import Image from 'next/image'

interface PictureProps {
  src: string
  alt: string
  /** width as $w number type */
  $w: number
  /** height as $h number type */
  $h: number
}

const Picture = ({ src, alt, $w, $h }: PictureProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: `${$w} / ${$h}`,
        overflow: 'hidden'
      }}
    >
      <Image
        src={src}
        alt={alt}
        aria-label={alt}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        quality={70}
        loading="eager"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}

export default Picture

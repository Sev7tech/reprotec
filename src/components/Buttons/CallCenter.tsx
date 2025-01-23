import Picture from '../Picture'
import { Typography } from '../Typography'

import { images } from '@/constants'

type CallCenterProps = {
  isMobile: boolean
}

export const CallCenter = ({ isMobile = true }: CallCenterProps) => (
  <Typography.Link
    href="/"
    linkTitle="Falar com um atendente Reprotec"
    className={`${isMobile ? 'flexCenter bg-cyan-500 md:hidden' : 'md:flexCenter hidden'} gap-2 rounded-3xl p-2 duration-300 hover:bg-cyan-500 hover:text-white`}
    isTextWhite
  >
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <Picture
        src="/images/icons/call_center.svg"
        alt={images.callCenterAlt}
        $w={40}
        $h={40}
      />
    </div>
    Fale Conosco
  </Typography.Link>
)

import Picture from '../Picture'
import { Typography } from '../Typography'

import { CONFIG } from '@/config'
import { images } from '@/constants'

type CallCenterProps = {
  isMobile: boolean
}

export const CallCenter = ({ isMobile = true }: CallCenterProps) => (
  <Typography.Link
    href={CONFIG.contact.phone.URL}
    linkTitle="Falar com um atendente Reprotec"
    className={`border-midnightBlue/10 duration-200 ${isMobile ? 'bg-cyan-500 px-14 md:hidden' : 'md:flexCenter hidden'} gap-2 rounded-3xl border-2 p-2 hover:border-blue-900 hover:text-white`}
    isTextWhite
    target="_blank"
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

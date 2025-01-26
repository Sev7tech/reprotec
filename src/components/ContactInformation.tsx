import Link from 'next/link'

import Picture from './Picture'

import { images } from '@/constants'
import { CONFIG } from '@/config'

type ContactInfoProp = {
  isCallCenter?: boolean
}

const ContactInformation = ({ isCallCenter = true }: ContactInfoProp) => {
  return (
    <section className="gapCol16">
      <div className={isCallCenter ? 'flex gap-8' : 'hidden'}>
        <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
          <Picture
            src={images.callCenter}
            alt={images.callCenterAlt}
            $w={56}
            $h={56}
          />
        </div>

        <div className="flex flex-col">
          <h4 className="smallTitle">Tem uma pergunta?</h4>
          <Link
            href={CONFIG.contact.phone.URL}
            title="Entre em contato com o atendimento Reprotec"
            target="_blank"
            className="contact-information-text"
          >
            {CONFIG.contact.phone.children}
          </Link>
        </div>
      </div>
      <div>
        <h4 className="smallTitle">Horario de atendimento</h4>
        <p className="contact-information-text">
          Segunda a Sexta: 08:00h - 18:00h
        </p>
      </div>
      <div>
        <h4 className="smallTitle">Reprotec-Assistência Técnica Autorizada</h4>
        <Link
          href={CONFIG.contact.address}
          title="Veja no mapa"
          className="contact-information-text"
          target="_blank"
        >
          Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep: 07240-000
        </Link>
      </div>
    </section>
  )
}

export default ContactInformation

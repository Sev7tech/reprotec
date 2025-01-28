'use client'

import { useState } from 'react'

import { Typography } from './Typography'

import { CONFIG } from '@/config'

interface IPopup {
  isContactForm: boolean
  isError: boolean
}

const Popup = ({ isContactForm, isError }: IPopup) => {
  const [isPopupCosed, setIsPopupClosed] = useState(false)

  const handleClosed = () => setIsPopupClosed(!isPopupCosed)

  const message1 = isContactForm
    ? 'entrar em contato com a Reprotec! Sua mensagem foi recebida com sucesso.'
    : 'se candidatar ao serviço da Reprotec! Sua candidatura foi recebida com sucesso.'

  const message2 = isContactForm
    ? 'entrará em contato com você para dar continuidade ao seu atendimento.'
    : 'nossa equipe avaliará sua candidatura e entrará em contato com você para mais informações sobre o processo.'

  return (
    <article
      className={isPopupCosed ? 'hidden' : 'overlay fixed z-50'}
      onClick={handleClosed}
    >
      <div className="popup">
        <span className="close-popup" onClick={handleClosed} role="button">
          X
        </span>
        {isError ? (
          <>
            <Typography.Text>
              <strong>Erro ao enviar o formulário 😞</strong>
            </Typography.Text>
            <Typography.Text>
              Houve um problema ao enviar seus dados. Por favor, tente novamente
              mais tarde. Se o problema persistir, você também pode entrar em
              contato através do WhatsApp no número{' '}
              <strong>{CONFIG.contact.phone.children}.</strong>
            </Typography.Text>
            <Typography.Text>
              Atenciosamente,
              <br />
              <strong>Equipe Reprotec</strong>
            </Typography.Text>
          </>
        ) : (
          <>
            <Typography.Text>{`Obrigado por ${message1}`}</Typography.Text>
            <Typography.Text>{`Em breve, nossa equipe ${message2}`}</Typography.Text>
            <Typography.Text>
              Atenciosamente,
              <br />
              <strong>Equipe Reprotec</strong>
            </Typography.Text>
          </>
        )}
      </div>
    </article>
  )
}

export default Popup

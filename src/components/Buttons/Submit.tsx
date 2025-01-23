type SubmitProps = {
  isSending: boolean
}

export const Submit = ({ isSending }: SubmitProps) => {
  return (
    <button
      type="submit"
      className="SubmitButton"
      title="click aqui para enviar o formulário"
    >
      {isSending ? 'Enviando...' : 'Enviar'}
    </button>
  )
}

'use client'

import { Field, Formik } from 'formik'
import { memo, useState } from 'react'
import * as Yup from 'yup'

import { FormElement } from './FormElements'
import { Typography } from '../Typography'
import { Buttons } from '../Buttons'
import Popup from '../Popup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, 'O nome deve ter no mínimo 2 caracteres.')
    .required('Campo obrigatório'),
  lastName: Yup.string()
    .trim()
    .min(2, 'O sobrenome deve ter no mínimo 2 caracteres.')
    .required('Campo obrigatório.'),
  whatsapp: Yup.string()
    .trim()
    .matches(
      /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/,
      'Número inválido, deve ser um telefone.'
    )
    .required('Campo obrigatório.'),
  email: Yup.string()
    .trim()
    .email('E-mail inválido.')
    .required('Campo obrigatório.'),
  message: Yup.string()
    .trim()
    .min(10, 'Descreva sua mensagem para que possamos te ajudar.')
    .required('Campo obrigatório.'),
  terms: Yup.boolean()
    .oneOf([true], 'Você tem que aceitar os termos para proseguir.')
    .required('Campo obrigatório.')
})

const ContactForm = memo(() => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [isSubmitError, setISsubmitError] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          whatsapp: '',
          email: '',
          message: '',
          terms: false
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const formData = new FormData()

          formData.append('firstName', values.firstName)
          formData.append('lastName', values.lastName)
          formData.append('whatsapp', values.whatsapp)
          formData.append('email', values.email)
          formData.append('message', values.message)

          try {
            await fetch('/api/contactForm', {
              method: 'POST',
              body: formData
            })
          } catch {
            setISsubmitError(true)
          } finally {
            setIsPopupVisible(true)
            resetForm()
            setSubmitting(false)
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="gapCol8 w-full rounded-2xl bg-primaryBlue/10 p-4"
          >
            <FormElement.InputGroup>
              <FormElement.Label htmlFor="firstName">
                Primeiro Nome*
              </FormElement.Label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                component={FormElement.Input}
              />
            </FormElement.InputGroup>

            <FormElement.InputGroup>
              <FormElement.Label htmlFor="lastName">
                Sobrenome*
              </FormElement.Label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                component={FormElement.Input}
              />
            </FormElement.InputGroup>

            <FormElement.InputGroup>
              <FormElement.Label htmlFor="whatsapp">
                WhatsApp*
              </FormElement.Label>
              <Field
                type="text"
                name="whatsapp"
                id="whatsapp"
                component={FormElement.MaskedInputComponent}
              />
            </FormElement.InputGroup>

            <FormElement.InputGroup>
              <FormElement.Label htmlFor="email">Email*</FormElement.Label>
              <Field
                type="email"
                name="email"
                id="email"
                component={FormElement.Input}
              />
            </FormElement.InputGroup>

            <FormElement.InputGroup>
              <FormElement.Label htmlFor="message">Mensagem*</FormElement.Label>
              <Field
                type="textarea"
                name="message"
                id="message"
                component={FormElement.Input}
                isTextarea
              />
            </FormElement.InputGroup>

            <FormElement.InputGroup className="flex place-items-baseline gap-2">
              <Field
                type="checkbox"
                name="terms"
                id="terms"
                component={FormElement.Input}
                isCheckBox
              />

              <FormElement.Label htmlFor="terms">
                Eu concordo com a{' '}
                <Typography.Link
                  href="/politica-privacidade"
                  linkTitle="Ler Politica de privacidade"
                  className="underline"
                >
                  política de privacidade
                </Typography.Link>
              </FormElement.Label>
            </FormElement.InputGroup>

            <Buttons.Submit isSending={isSubmitting} />
          </form>
        )}
      </Formik>
      {isPopupVisible && <Popup isContactForm isError={isSubmitError} />}
    </>
  )
})

export default ContactForm

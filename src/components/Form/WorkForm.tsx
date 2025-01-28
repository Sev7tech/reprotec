'use client'

import { Field, Formik } from 'formik'
import { memo, useState } from 'react'
import * as Yup from 'yup'

import { FormElement } from './FormElements'
import { Typography } from '../Typography'
import { Buttons } from '../Buttons'
import Popups from '../Popup'

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
  file: Yup.mixed<File>()
    .test('Size file', 'O arquivo pode ter no máximo 2MB.', (value) => {
      return value && value.size <= 2 * 1024 * 1024
    })
    .required('Campo obrigatório.'),
  terms: Yup.boolean()
    .oneOf([true], 'Você tem que aceitar os termos para proseguir.')
    .required('Campo obrigatório.')
})

const WorkForm = memo(() => {
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
          file: null,
          terms: false
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const formData = new FormData()

          formData.append('firstName', values.firstName)
          formData.append('lastName', values.lastName)
          formData.append('whatsapp', values.whatsapp)
          formData.append('email', values.email)
          formData.append('file', values.file!)

          try {
            await fetch('/api/workForm', {
              method: 'POST',
              body: formData
            })
          } catch {
            setISsubmitError(true)
          } finally {
            setIsPopupVisible(true)
            resetForm()
            setIsPopupVisible(true)
            setSubmitting(false)
          }
        }}
      >
        {({ handleSubmit, values, isSubmitting }) => (
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
              <Field name="file">
                {({ field, form }: any) => (
                  <>
                    <input
                      className="hidden"
                      type="file"
                      id="file"
                      accept=".pdf"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        const file = event.currentTarget.files?.[0]
                        form.setFieldValue(field.name, file)
                      }}
                    />
                    <FormElement.Label
                      htmlFor="file"
                      className="mt-4 w-[200px] cursor-pointer overflow-hidden rounded-md bg-midnightBlue p-2 text-center text-white"
                    >
                      {!values.file
                        ? 'Anexar Currículo (PDF)*'
                        : `arquivo ${field.value.name}`}
                    </FormElement.Label>
                    <span className="message-error">
                      {form.errors[field.name] as string}
                    </span>
                  </>
                )}
              </Field>
            </FormElement.InputGroup>

            <FormElement.InputGroup className="flex place-items-baseline gap-2">
              <Field
                type="checkbox"
                name="terms"
                id="terms"
                component={FormElement.Input}
                isCheckBox={true}
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
      {isPopupVisible && (
        <Popups isContactForm={false} isError={isSubmitError} />
      )}
    </>
  )
})

export default WorkForm

import React from "react"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  StyledProposalInput,
  ErrorValidation,
} from "../Proposal.styles"
import { Formik, ErrorMessage, Form } from "formik"
import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(70, "*Too Long!")
    .required(""),
  email: Yup.string()
    .email("*Invalid email")
    .required("*Required"),
  number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
})

export const Form3 = ({ setStep, formData, setFormData }) => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      message: "",
    }}
    onSubmit={(values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-demo", ...values }),
      })
        .then(() => {
          alert("Success")
          actions.resetForm()
        })
        .catch(() => {
          alert("Error")
        })
        .finally(() => actions.setSubmitting(false))
    }}
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const errors = {}
      if (!values.name) {
        errors.name = "Name Required"
      }
      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = "Valid Email Required"
      }
      if (!values.message) {
        errors.message = "Message Required"
      }
      return errors
    }}
  >
    {() => (
      <Form name="contact-demo" data-netlify={true}>
        <label htmlFor="name">Name: </label>
        <StyledProposalInput name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email: </label>
        <StyledProposalInput name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="message">Message: </label>
        <StyledProposalInput name="message" component="textarea" />
        <ErrorMessage name="message" />

        <button type="submit">Send</button>
      </Form>
    )}
  </Formik>
)

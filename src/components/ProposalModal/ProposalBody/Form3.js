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
    initialValues={{ fullName: "", email: "" }}
    validate={values => {
      const errors = {}
      if (!values.fullName) {
        errors.fullName = "Required"
      } else if (values.fullName.length <= 1) {
        errors.fullName = "must be at least 2 characters"
      }
      if (!values.email) {
        errors.email = "Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      }
      return errors
    }}
    onSubmit={data => {
      console.log(data)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-form",
          ...data,
        }),
      })
        .then(() => {
          alert("send")
        })
        .catch(error => alert(error))
    }}
  >
    <Form
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <StyledProposalInput type="hidden" name="form-name" />
      <StyledProposalInput type="hidden" name="bot-field" />

      <label htmlFor="fullName">Full name:</label>
      <StyledProposalInput name="fullName" type="text" />
      <ErrorMessage name="fullName" />
      <br />
      <label htmlFor="email">Email</label>
      <StyledProposalInput name="email" type="text" />
      <ErrorMessage name="email" />
      <br />

      <br />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
)

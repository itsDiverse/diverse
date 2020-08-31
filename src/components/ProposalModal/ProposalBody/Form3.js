import React from "react"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  StyledProposalInput,
  ErrorValidation,
} from "../Proposal.styles"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
      website: "",
      name: "",
      email: "",
      number: "",
    }}
    validationSchema={FormSchema}
    onSubmit={(values, actions) => {
      setFormData({ ...formData, ...values })
      setStep(4)
    }}
  >
    {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <StyledProposalForm>
        <StyledProposalLabel>
          What’s your website?
          <StyledProposalInput
            type="string"
            name="website"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="website" />
        </ErrorValidation>
        <StyledProposalLabel>
          What’s your name?
          <StyledProposalInput
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="name" />
        </ErrorValidation>
        <StyledProposalLabel>
          What’s your email?
          <StyledProposalInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="email" />
        </ErrorValidation>
        <StyledProposalLabel>
          What’s your number?
          <StyledProposalInput
            type="string"
            name="number"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="number" />
        </ErrorValidation>
        <StyledProposalButton type="submit" onClick={handleSubmit}>
          SEND MY FREE PROPOSAL
        </StyledProposalButton>
      </StyledProposalForm>
    )}
  </Formik>
)

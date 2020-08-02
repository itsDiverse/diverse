import React from "react"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  StyledProposalInput,
} from "../Proposal.styles"
import { Formik, Field, Form, ErrorMessage } from "formik"
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

export const Form3 = () => (
  <Formik
    initialValues={{
      website: "",
      name: "",
      email: "",
      number: "",
    }}
    validationSchema={FormSchema}
    onSubmit={async values => {
      await new Promise(r => setTimeout(r, 500))
      alert(JSON.stringify(values, null, 2))
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <StyledProposalForm onSubmit={handleSubmit}>
        <StyledProposalLabel>
          What’s your website?
          <StyledProposalInput
            type="url"
            name="website"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="website" />
        </StyledProposalLabel>
        <StyledProposalLabel>
          What’s your name?
          <StyledProposalInput
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            valid={touched.name && !errors.name}
            error={touched.name && errors.name}
          />
          <div style={{ fontSize: "10px", marginTop: "-10px" }}>
            <ErrorMessage name="name" />
          </div>
        </StyledProposalLabel>
        <StyledProposalLabel>
          What’s your email?
          <StyledProposalInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            valid={touched.email && !errors.email}
            error={touched.email && errors.email}
          />
          <div style={{ fontSize: "10px", marginTop: "-10px" }}>
            <ErrorMessage name="email" />
          </div>
        </StyledProposalLabel>
        <StyledProposalLabel>
          What’s your number?
          <StyledProposalInput
            type="number"
            name="number"
            onChange={handleChange}
            onBlur={handleBlur}
            valid={touched.number && !errors.number}
            error={touched.number && errors.number}
          />
          <div style={{ fontSize: "10px", marginTop: "-10px" }}>
            <ErrorMessage name="number" />
          </div>
        </StyledProposalLabel>
        <StyledProposalButton type="submit" onClick={handleSubmit}>
          SEND MY FREE PROPOSAL
        </StyledProposalButton>
      </StyledProposalForm>
    )}
  </Formik>
)

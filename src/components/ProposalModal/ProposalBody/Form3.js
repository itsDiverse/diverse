import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  StyledProposalInput,
} from "../Proposal.styles"
export const Form3 = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={values => {
      const errors = {}
      if (!values.email) {
        errors.email = "*Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <StyledProposalForm onSubmit={handleSubmit}>
        <StyledProposalLabel>
          What’s your website?
          <StyledProposalInput
            type="text"
            name="text"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.text && touched.text && errors.text}
        </StyledProposalLabel>
        <StyledProposalLabel>
          What’s your Name?
          <StyledProposalInput
            type="text"
            name="text"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.text && touched.text && errors.text}
        </StyledProposalLabel>
        <StyledProposalLabel>
          What’s your Email?
          <StyledProposalInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div style={{ marginTop: "-10px", fontSize: "10px", color: "white" }}>
            {errors.email && touched.email && errors.email}
          </div>
        </StyledProposalLabel>

        <StyledProposalLabel>
          What’s your number?
          <StyledProposalInput
            type="number"
            name="number"
            value={values.number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.number && touched.number && errors.number}
        </StyledProposalLabel>
        <StyledProposalButton type="submit" disabled={isSubmitting}>
          SEND MY FREE PROPOSAL
        </StyledProposalButton>
      </StyledProposalForm>
    )}
  </Formik>
)

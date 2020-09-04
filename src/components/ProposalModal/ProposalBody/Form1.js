import React from "react"
import { Formik, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  ErrorValidation,
} from "../Proposal.styles"
import SelectOwn from "../ProposalBody/select"

const FormSchema = Yup.object().shape({
  goals: Yup.string().required("*Required"),
  advertise: Yup.string().required("*Required"),
})
const optionsGoals = [
  { value: "conversation", label: "Get more conversions" },
  { value: "leads", label: "Get more phone leads" },
  { value: "lowCostConversion", label: "Lower cost per conversion" },
  { value: "all", label: "All of the above" },
  { value: "other", label: "Other..." },
]
const optionsAdvertise = [
  { value: "nationally", label: "Nationally" },
  { value: "locally", label: "Locally" },
  { value: "internationally", label: "Internationally" },
  { value: "other", label: "Other..." },
]

export const Form1 = ({ setStep, formData, setFormData }) => (
  <Formik
    initialValues={{
      goals: formData.goals || "",
      advertise: formData.advertise || "",
    }}
    validationSchema={FormSchema}
    onSubmit={(values, actions) => {
      setFormData({ ...formData, ...values })
      setStep(2)
    }}
  >
    {({
      setFieldValue,
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => (
      <Form
        onSubmit={handleSubmit}
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact Form2"
        style={{ textAlign: "center" }}
      >
        <StyledProposalLabel>
          What are your goals?
          <SelectOwn
            value={values.goals}
            type="string"
            name="goals"
            onChange={option => setFieldValue("goals", option)}
            onBlur={handleBlur}
            options={optionsGoals}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="goals" />
        </ErrorValidation>
        <StyledProposalLabel>
          Where do you advertise?
          <SelectOwn
            value={values.advertise}
            type="string"
            name="advertise"
            onChange={option => setFieldValue("advertise", option)}
            onBlur={handleBlur}
            options={optionsAdvertise}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="advertise" />
        </ErrorValidation>
        <StyledProposalButton type="submit" onClick={handleSubmit}>
          CONTINUE
        </StyledProposalButton>
      </Form>
    )}
  </Formik>
)

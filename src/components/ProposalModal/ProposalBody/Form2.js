import React from "react"
import { Formik, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import {
  StyledProposalInput,
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  ErrorValidation,
} from "../Proposal.styles"
import SelectOwn from "../ProposalBody/select"

const FormSchema = Yup.object().shape({
  sell: Yup.string().required("*Required"),
  spend: Yup.string().required("*Required"),
})
const optionsSell = [
  { value: "leads", label: "Leads" },
  { value: "dales", label: "Sales" },
  { value: "both", label: "Both, I sell service and a product" },
  { value: "notSure", label: "Not sure" },
]
const optionsSpend = [
  { value: "0-1000", label: "$0 - $1,000" },
  { value: "1001-5000", label: "$1,001 - $5,000" },
  { value: "5001-25000", label: "$5,001 - $25,000" },
  { value: "25000-100000", label: "$25,001 - $100,000" },
  { value: "more", label: "$100,001+" },
]

export const Form2 = ({ setStep, formData, setFormData }) => (
  <Formik
    initialValues={{
      sell: formData.sell || "",
      spend: formData.spend || "",
    }}
    validationSchema={FormSchema}
    onSubmit={(values, actions) => {
      setFormData({ ...formData, ...values })
      setStep(3)
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
        onSubmit="submit"
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact Form3"
        style={{ textAlign: "center" }}
      >
        <StyledProposalInput type="hidden" name="bot-field" />
        <StyledProposalInput
          type="hidden"
          name="form-name"
          value="Contact Form3"
        />
        <StyledProposalLabel>
          Do you want leads or sales?
          <SelectOwn
            value={values.sell}
            type="string"
            name="sell"
            onChange={option => setFieldValue("sell", option)}
            onBlur={handleBlur}
            options={optionsSell}
            autofocus
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="sell" />
        </ErrorValidation>
        <StyledProposalLabel>
          What's your monthly PPC ad spend?
          <SelectOwn
            value={values.spend}
            type="string"
            name="spend"
            onChange={option => setFieldValue("spend", option)}
            onBlur={handleBlur}
            options={optionsSpend}
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="spend" />
        </ErrorValidation>
        <StyledProposalButton type="submit" onClick={handleSubmit}>
          LAST STEP
        </StyledProposalButton>
      </Form>
    )}
  </Formik>
)

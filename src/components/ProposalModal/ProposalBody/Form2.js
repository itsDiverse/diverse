import React from "react"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import {
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
  { value: "5000-25000", label: "$5,000 - $25,000" },
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
      <StyledProposalForm>
        <StyledProposalLabel>
          Do you want leads or sales?
          <SelectOwn
            value={values.sell.value}
            type="string"
            name="sell"
            onChange={option => setFieldValue("sell", option.value)}
            onBlur={handleBlur}
            options={optionsSell}
            autofocus
          />
        </StyledProposalLabel>
        <ErrorValidation>
          <ErrorMessage name="sell" />
        </ErrorValidation>
        <StyledProposalLabel>
          Current monthly marketing budget?
          <SelectOwn
            value={values.spend.value}
            type="string"
            name="spend"
            onChange={option => setFieldValue("spend", option.value)}
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
      </StyledProposalForm>
    )}
  </Formik>
)

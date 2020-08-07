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
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
  { value: "option4", label: "Option4" },
]
const optionsSpend = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
  { value: "option4", label: "Option4" },
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
          Do you want leads or sell?
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
          What's your current monthly ad spend?
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
      </StyledProposalForm>
    )}
  </Formik>
)

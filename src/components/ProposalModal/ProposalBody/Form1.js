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
  goals: Yup.string().required("*Required"),
  advertise: Yup.string().required("*Required"),
})
const optionsGoals = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
  { value: "option4", label: "Option4" },
]
const optionsAdvertise = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
  { value: "option4", label: "Option4" },
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
      <StyledProposalForm>
        <StyledProposalLabel>
          Do you want leads or goals?
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
          What's your current monthly ad advertise?
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
      </StyledProposalForm>
    )}
  </Formik>
)

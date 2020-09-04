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

export const Form3 = ({ setStep, formData, setFormData }) => (
  <form
    data-netlify-honeypot="bot-field"
    data-netlify="true"
    name="contact"
    style={{ textAlign: "center" }}
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <StyledProposalLabel>
      What’s your website?
      <StyledProposalInput type="string" name="website" />
    </StyledProposalLabel>
    <ErrorValidation>
      <ErrorMessage name="website" />
    </ErrorValidation>
    <StyledProposalLabel>
      What’s your name?
      <StyledProposalInput type="text" name="name" />
    </StyledProposalLabel>
    <ErrorValidation>
      <ErrorMessage name="name" />
    </ErrorValidation>
    <StyledProposalLabel>
      What’s your email?
      <StyledProposalInput type="email" name="email" />
    </StyledProposalLabel>
    <ErrorValidation>
      <ErrorMessage name="email" />
    </ErrorValidation>
    <StyledProposalLabel>
      What’s your number?
      <StyledProposalInput type="string" name="number" />
    </StyledProposalLabel>
    <ErrorValidation>
      <ErrorMessage name="number" />
    </ErrorValidation>
    <StyledProposalButton type="submit">
      SEND MY FREE PROPOSAL
    </StyledProposalButton>
  </form>
)

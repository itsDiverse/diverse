import React from "react"
import {
  StyledProposalForm,
  label,
  StyledProposalButton,
  input,
  ErrorValidation,
} from "../Proposal.styles"
import { Formik, ErrorMessage, Form } from "formik"
import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const Form3 = ({ setStep, formData, setFormData }) => (
  <form
    method="POST"
    data-netlify-honeypot="bot-field"
    data-netlify="true"
    name="Contact Form 1"
    style={{ textAlign: "center" }}
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <label>
      What’s your website?
      <input type="string" name="website" />
    </label>

    <label>
      What’s your name?
      <input type="text" name="name" />
    </label>

    <label>
      What’s your email?
      <input type="email" name="email" />
    </label>

    <label>
      What’s your number?
      <input type="string" name="number" />
    </label>

    <StyledProposalButton type="submit">
      SEND MY FREE PROPOSAL
    </StyledProposalButton>
  </form>
)

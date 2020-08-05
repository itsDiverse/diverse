import React from "react"
import { Form1 } from "./Form1"
import { Form2 } from "./Form2"
import { Form3 } from "./Form3"
import { Form4 } from "./Form4"
import { Footer3 } from "../ProposalFooter/Footer3"
import { StyledProposalBody } from "../Proposal.styles"

export const ProposalBody = ({ step, setStep, formData, setFormData }) => {
  return (
    <StyledProposalBody>
      {step === 1 && (
        <Form1
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 2 && (
        <Form2
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <>
          {/*Este form on submit deberia: 
            setFormData()
            enviarEmail con formData()
          */}
          <Form3
            setStep={setStep}
            setFormData={setFormData}
            formData={formData}
          />
          <Footer3 />
        </>
      )}

      {step === 4 && <Form4 onSubmit={() => setStep(1)} />}
    </StyledProposalBody>
  )
}

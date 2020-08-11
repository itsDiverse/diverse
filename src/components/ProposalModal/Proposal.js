import React from "react"

import { ProposalHeader } from "./ProposalHeader"
import { ProposalBody } from "./ProposalBody"
import { ProposalFooter } from "./ProposalFooter"
import {
  StyledClose,
  StyledContentWrapper,
  StyledProposalContainer,
} from "./Proposal.styles"

export const Proposal = () => {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({})

  return (
    <StyledContentWrapper>
      <StyledProposalContainer>
        {step !== 4 && <ProposalHeader step={step} setStep={setStep} />}
        <ProposalBody
          step={step}
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
        <ProposalFooter step={step} />
        {step !== 4 && <StyledClose to="/">Close</StyledClose>}
      </StyledProposalContainer>
    </StyledContentWrapper>
  )
}

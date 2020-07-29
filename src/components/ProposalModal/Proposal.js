import React from "react"
import { ProposalHeader } from "./ProposalHeader"
import { ProposalBody } from "./ProposalBody"
import { ProposalFooter } from "./ProposalFooter"
import {
  StyledContentWrapper,
  StyledProposalContainer,
  StyledProposalContent,
} from "./Proposal.styles"

export const Proposal = () => {
  const [step, setStep] = React.useState(1)
  return (
    <StyledContentWrapper>
      <StyledProposalContainer>
        <ProposalHeader step={step} />
        <ProposalBody step={step} setStep={setStep} />
        <ProposalFooter step={step} />
      </StyledProposalContainer>
    </StyledContentWrapper>
  )
}

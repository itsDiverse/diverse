import React from "react"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
} from "../Proposal.styles"
import SelectOwn from "../ProposalBody/select"

export const Form2 = ({ onSubmit, ads, setAds, spends, setSpends }) => (
  <StyledProposalForm>
    <StyledProposalLabel>
      Do you want leads or sell?
      <SelectOwn />
    </StyledProposalLabel>
    <StyledProposalLabel>
      What's your current monthly ad spend?
      <SelectOwn />
    </StyledProposalLabel>
    <StyledProposalButton onClick={onSubmit}>LAST STEP</StyledProposalButton>
  </StyledProposalForm>
)

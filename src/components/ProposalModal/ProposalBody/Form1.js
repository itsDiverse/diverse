import React from "react"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
} from "../Proposal.styles"
import SelectOwn from "./select"

export const Form1 = ({
  onSubmit,
  goals,
  setGoals,
  advertise,
  setAdvertise,
}) => (
  <StyledProposalForm>
    <StyledProposalLabel>
      What are your goals?
      <SelectOwn />
    </StyledProposalLabel>
    <StyledProposalLabel>
      Where do you advertise?
      <SelectOwn />
    </StyledProposalLabel>
    <StyledProposalButton onClick={onSubmit}>CONTINUE</StyledProposalButton>
  </StyledProposalForm>
)

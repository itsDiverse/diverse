import React from "react"
import {
  StyledProposalForm,
  StyledProposalSelect,
  StyledProposalLabel,
  StyledProposalButton,
} from "../Proposal.styles"
import IndexPage from "./Select"
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
      <IndexPage />
    </StyledProposalLabel>
    <StyledProposalLabel>
      Where do you advertise?
      <StyledProposalSelect
        defaultValue={advertise}
        onChange={event => setAdvertise(event.target.value)}
      >
        <option value="choose" disabled>
          choose
        </option>
        <option value="ad1">advertise 1</option>
        <option value="ad2">advertise 2</option>
      </StyledProposalSelect>
    </StyledProposalLabel>
    <StyledProposalButton
      disabled={goals === "choose" || advertise === "choose"}
      onClick={onSubmit}
    >
      CONTINUE
    </StyledProposalButton>
  </StyledProposalForm>
)

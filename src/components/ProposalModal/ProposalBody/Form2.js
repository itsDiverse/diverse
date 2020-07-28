import React from "react"
import {
  StyledProposalForm,
  StyledProposalSelect,
  StyledProposalLabel,
  StyledProposalButton,
} from "../Proposal.styles"

export const Form2 = ({ onSubmit, ads, setAds, spends, setSpends }) => (
  <StyledProposalForm>
    <StyledProposalLabel>
      Do you want leads or sell?
      <StyledProposalSelect
        defaultValue={ads}
        onChange={event => setAds(event.target.value)}
      >
        <option value="choose" disabled>
          choose
        </option>
        <option value="ad1">Ad 1</option>
        <option value="ad2">Ad 2</option>
      </StyledProposalSelect>
    </StyledProposalLabel>
    <StyledProposalLabel>
      What's your current monthly ad spend?
      <StyledProposalSelect
        defaultValue={spends}
        onChange={event => setSpends(event.target.value)}
      >
        <option value="choose" disabled>
          choose
        </option>
        <option value="spend1">Spend 1</option>
        <option value="spend2">Spend 2</option>
      </StyledProposalSelect>
    </StyledProposalLabel>
    <StyledProposalButton onClick={onSubmit}>LAST STEP</StyledProposalButton>
  </StyledProposalForm>
)

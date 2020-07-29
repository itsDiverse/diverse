import React from "react"
import {
  StyledProposalForm,
  StyledProposalButton,
  StyledProposalText,
  StyledProposalTextContainer,
} from "../Proposal.styles"
export const Form4 = ({ onSubmit }) => (
  <StyledProposalForm>
    <StyledProposalTextContainer>
      <StyledProposalText>Thanks for your proposal request.</StyledProposalText>
      <StyledProposalText>
        We will review your information and send your proposal to the provided
        email address.{" "}
      </StyledProposalText>
    </StyledProposalTextContainer>
    <StyledProposalButton style={{ marginTop: "50px" }} onClick={onSubmit}>
      CLOSE WINDOW
    </StyledProposalButton>
  </StyledProposalForm>
)

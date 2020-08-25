import React from "react"
import { Link } from "gatsby"
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
        We will review your information and send <br />
        your proposal to the provided email address.{" "}
      </StyledProposalText>
    </StyledProposalTextContainer>
    <Link to="/" tabIndex="-1">
      <StyledProposalButton>CLOSE WINDOW</StyledProposalButton>
    </Link>
  </StyledProposalForm>
)

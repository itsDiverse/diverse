import React from "react"
import { Footer3 } from "../ProposalFooter/Footer3"
import {
  StyledProposalForm,
  StyledProposalLabel,
  StyledProposalButton,
  StyledProposalInput,
} from "../Proposal.styles"
export const Form3 = ({
  onSubmit,
  web,
  setWeb,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
}) => (
  <StyledProposalForm>
    <StyledProposalLabel>
      What’s your website?
      <StyledProposalInput
        type="text"
        value={web}
        onChange={event => setWeb(event.target.value)}
      />
    </StyledProposalLabel>
    <StyledProposalLabel>
      What’s your Name?
      <StyledProposalInput
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </StyledProposalLabel>
    <StyledProposalLabel>
      What’s your Email?
      <StyledProposalInput
        type="text"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
    </StyledProposalLabel>
    <StyledProposalLabel>
      What’s your number?
      <StyledProposalInput
        type="text"
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
    </StyledProposalLabel>
    <StyledProposalButton onClick={onSubmit}>
      SEND MY FREE PROPOSAL
    </StyledProposalButton>
  </StyledProposalForm>
)

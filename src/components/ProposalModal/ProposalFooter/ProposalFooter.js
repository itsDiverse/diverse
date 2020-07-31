import React from "react"
import { Footer1 } from "./Footer1"
import { Footer2 } from "./Footer2"
import { StyledProposalFooter } from "../Proposal.styles"

export const ProposalFooter = ({ step }) => (
  <StyledProposalFooter>
    {step === 1 && <Footer1 />}
    {step === 2 && <Footer2 />}
  </StyledProposalFooter>
)

import React, { useState } from "react"
import { Footer1 } from "./Footer1"
import { Footer2 } from "./Footer2"
import { Footer3 } from "./Footer3"
import { StyledProposalFooter } from "../Proposal.styles"

export const ProposalFooter = ({ step }) => (
  <StyledProposalFooter>
    {step === 1 && <Footer1 />}
    {step === 2 && <Footer2 />}
    {step === 3 && <Footer3 />}
  </StyledProposalFooter>
)

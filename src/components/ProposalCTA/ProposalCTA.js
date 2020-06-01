import React from "react"
import { Button } from "../Button"
import {
  StyledProposalTitle,
  StyledProposalSubheading,
  StyledButtonRow,
  StyledButtonDescription,
} from "./ProposalCTA.styles"

import { IconWhitePage } from "../icons"

export const ProposalCTA = () => (
  <Button primary>
    <StyledButtonRow>
      <IconWhitePage size={25}></IconWhitePage>
      <StyledButtonDescription>
        <StyledProposalTitle>Get A Free Proposal</StyledProposalTitle>
        <StyledProposalSubheading>
          Tailored to your company's needs.
        </StyledProposalSubheading>
      </StyledButtonDescription>
    </StyledButtonRow>
  </Button>
)

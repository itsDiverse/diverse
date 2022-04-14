import React from "react"
import { Button } from "../Button"
import {
  StyledProposalTitle,
  StyledButtonRow,
  StyledButtonDescription,
} from "./ProposalCTA.styles"

import { IconWhitePage } from "../Icons"

export const ProposalCTA = () => (
  <Button primary>
    <StyledButtonRow>
      <IconWhitePage size={25}></IconWhitePage>
      <StyledButtonDescription>
        <StyledProposalTitle>REQUEST A DEMO</StyledProposalTitle>
      </StyledButtonDescription>
    </StyledButtonRow>
  </Button>
)

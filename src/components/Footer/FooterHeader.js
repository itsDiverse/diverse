import React from "react"
import {
  StyledFooterHeader,
  StyledDescription,
  StyledDropwdownArea,
  StyledGroup,
  StyledRow,
} from "./FooterHeader.styles"

import { Button } from "../Button"
import { VideoCTA } from "../VideoCTA"

const OurServicesDropdown = ({ expanded, onSetExpanded }) => (
  <div onClick={onSetExpanded}>
    {expanded ? "-" : "+"} OUR SERVICES - We combine services to make sales
    processes.
  </div>
)

const OurServicesVideo = () => (
  <StyledGroup>
    <VideoCTA icon />
  </StyledGroup>
)

export const FooterHeader = () => {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <StyledFooterHeader>
      <StyledRow>
        <OurServicesDropdown
          expanded={expanded}
          onSetExpanded={() => setExpanded(!expanded)}
        />
        <OurServicesVideo />
      </StyledRow>
      <StyledDropwdownArea visible={expanded}>
        <h1>here dropdowns</h1>
      </StyledDropwdownArea>
    </StyledFooterHeader>
  )
}

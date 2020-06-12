import React from "react"
import {
  StyledFooterHeader,
  StyledDropwdownArea,
  StyledRow,
  StyledDropdDownContent,
  StyledSection,
  StyledSectionTitle,
  StyledSubsection,
  StyledSubsectionItems,
  StyledSectionColumn,
  StyledItemTitle,
  StyledSubsectionTitle,
} from "./FooterHeader.styles"

import { VideoCTA } from "../VideoCTA"
import { footerData } from "./Footer.data"

const OurServicesDropdown = ({ expanded, onSetExpanded }) => (
  <div onClick={onSetExpanded}>
    {expanded ? "-" : "+"} OUR SERVICES - We combine services to make sales
    processes.
  </div>
)

const OurServicesVideo = () => <VideoCTA button withSpace />

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
        <StyledDropdDownContent>
          {footerData.map(section => (
            <StyledSection>
              <StyledSectionTitle>{section.title}</StyledSectionTitle>
              <StyledSectionColumn>
                {section.items.map(subsection => (
                  <StyledSubsection>
                    <StyledSubsectionTitle>
                      {subsection.title}
                    </StyledSubsectionTitle>
                    <StyledSubsectionItems>
                      {subsection.items.map(item => (
                        <StyledItemTitle>{item.title}</StyledItemTitle>
                      ))}
                    </StyledSubsectionItems>
                  </StyledSubsection>
                ))}
              </StyledSectionColumn>
            </StyledSection>
          ))}
        </StyledDropdDownContent>
      </StyledDropwdownArea>
    </StyledFooterHeader>
  )
}

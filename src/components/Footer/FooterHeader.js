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
  StyledSectionRow,
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
              <StyledSectionRow elements={section.items.length}>
                {section.items.map(subsection => (
                  <StyledSubsection>
                    <StyledSubsectionTitle>
                      {subsection.title}
                    </StyledSubsectionTitle>
                    <StyledSubsectionItems elements={subsection.items.length}>
                      {subsection.items.map(item => (
                        <StyledItemTitle>{item.title}</StyledItemTitle>
                      ))}
                    </StyledSubsectionItems>
                  </StyledSubsection>
                ))}
              </StyledSectionRow>
            </StyledSection>
          ))}
        </StyledDropdDownContent>
      </StyledDropwdownArea>
    </StyledFooterHeader>
  )
}

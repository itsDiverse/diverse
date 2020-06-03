import React from "react"
import {
  StyledFooterHeader,
  StyledDropwdownArea,
  StyledRow,
  StyledDropdDownContent,
  StyledService,
  StyledServiceSection,
  StyledServiceTitle,
  StyledDropDownItemsContainer,
  StyledDropDownItem,
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
            <StyledService key={section.title}>
              <StyledServiceTitle>{section.title}</StyledServiceTitle>
              {section.items.map(subsection => (
                <div key={subsection.title}>
                  <StyledServiceSection>
                    {subsection.title}
                  </StyledServiceSection>
                  <StyledDropDownItemsContainer>
                    {subsection.items.map(item => (
                      <StyledDropDownItem key={item.title}>
                        {item.title}
                      </StyledDropDownItem>
                    ))}
                  </StyledDropDownItemsContainer>
                </div>
              ))}
            </StyledService>
          ))}
        </StyledDropdDownContent>
      </StyledDropwdownArea>
    </StyledFooterHeader>
  )
}

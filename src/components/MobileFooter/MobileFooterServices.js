import React from "react"
import {
  StyledMobileFooterServices,
  StyledServiceTitle,
  StyledServiceSection,
  StyledDropdDownContent,
  StyledService,
} from "./MobileFooterServices.styles"
import {
  StyledDropDownItemsContainer,
  StyledDropDownItem,
} from "./MobileFooter.styles"

import { footerData } from "../Footer/Footer.data"
import { DropDown } from "../DropDown"

export const MobileFooterServices = () => (
  <StyledMobileFooterServices>
    <DropDown
      icon_expand="+"
      icon_expanded="-"
      title="OUR SERVICES"
      subtitle="We combine services to create profitable sales processes."
    >
      <StyledDropdDownContent>
        {footerData.map(section => (
          <StyledService key={section.title}>
            <StyledServiceTitle>{section.title}</StyledServiceTitle>
            {section.items.map(subsection => (
              <div key={subsection.title}>
                <StyledServiceSection>{subsection.title}</StyledServiceSection>
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
    </DropDown>
  </StyledMobileFooterServices>
)

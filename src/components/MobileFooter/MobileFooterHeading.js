import React from "react"

import {
  StyledMobileFooterHeading,
  StyledParagraph,
  StyledImg,
} from "./MobileFooterHeading.styles"
import LogoFooter from "../../images/diverseLogoFooter.svg"

export const MobileFooterHeading = () => (
  <StyledMobileFooterHeading>
    <object type="image/svg+xml" data={LogoFooter} aria-label="logo">
      <StyledImg src={LogoFooter} alt="logo" />
    </object>
    <StyledParagraph>
      We develop multi-channel sales processes to help businesses attract,
      close, and retain customers.
    </StyledParagraph>
  </StyledMobileFooterHeading>
)

import React from "react"

import {
  StyledMobileFooterHeading,
  StyledParagraph,
  StyledImg,
} from "./MobileFooterHeading.styles"
import Logo from "../../images/diverseLogo.svg"

export const MobileFooterHeading = () => (
  <StyledMobileFooterHeading>
    <StyledImg src={Logo} alt="logo" />
    <StyledParagraph>
      We develop multi-channel sales processes to help businesses attract,
      close, and retain customers.
    </StyledParagraph>
  </StyledMobileFooterHeading>
)

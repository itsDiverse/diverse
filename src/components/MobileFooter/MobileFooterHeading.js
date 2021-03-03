import React from "react"
import { Link } from "gatsby"

import {
  StyledMobileFooterHeading,
  StyledParagraph,
  StyledImg,
} from "./MobileFooterHeading.styles"
import LogoFooter from "../../images/diverseLogoFooter.svg"

export const MobileFooterHeading = () => (
  <StyledMobileFooterHeading>
    <Link to="/">
      <StyledImg src={LogoFooter} alt="logo" />
    </Link>

    <StyledParagraph>
      We develop multi-channel sales processes to help businesses attract,
      close, and retain customers.
    </StyledParagraph>
  </StyledMobileFooterHeading>
)

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
      We deliver the most impactful sales messages through Personalized-Visual™ communication.
    </StyledParagraph>
  </StyledMobileFooterHeading>
)

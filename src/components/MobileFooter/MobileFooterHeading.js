import React from "react"

import {
  StyledMobileFooterHeading,
  StyledParagraph,
} from "./MobileFooterHeading.styles"
import { Brand } from "../Brand"

export const MobileFooterHeading = () => (
  <StyledMobileFooterHeading>
    <Brand />
    <StyledParagraph>
      We develop multi-channel sales processes to help businesses attract,
      close, and retain customers.
    </StyledParagraph>
  </StyledMobileFooterHeading>
)

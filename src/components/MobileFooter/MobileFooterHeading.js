import React from "react"
import { Brand } from "../Brand"

import {
  StyledMobileFooterHeading,
  StyledParagraph,
  StyledGrayRow,
} from "./MobileFooterHeading.styles"

import { VideoCTA } from "../VideoCTA"

export const MobileFooterHeading = () => (
  <StyledMobileFooterHeading>
    <Brand size={40} />
    <StyledParagraph>
      We develop multi-channel sales processes to help businesses attract,
      close, and retain customers.
    </StyledParagraph>
    <StyledGrayRow>
      <VideoCTA button />
    </StyledGrayRow>
  </StyledMobileFooterHeading>
)

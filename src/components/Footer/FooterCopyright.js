import React from "react"

import {
  StyledCopyright,
  StyledLanguage,
  StyledMark,
} from "./FooterCopyright.styles.js"

export const FooterCopyright = () => (
  <StyledCopyright>
    <StyledLanguage>English</StyledLanguage>
    <StyledMark>
      Copyright © [Current Year] Diverse Marketing. All Rights Reserved. • Do
      not sell my information
    </StyledMark>
  </StyledCopyright>
)

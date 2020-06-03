import React from "react"

import {
  StyledCopyright,
  StyledLanguage,
  StyledMark,
} from "./MobileFooterCopyright.styles.js"

export const MobileFooterCopyright = () => (
  <StyledCopyright>
    <StyledMark>
      Copyright © [Current Year] Diverse Marketing. All Rights Reserved. Do not
      sell my information
    </StyledMark>
    <StyledLanguage>English</StyledLanguage>
  </StyledCopyright>
)

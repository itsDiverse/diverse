import React from "react"

import {
  StyledCopyright,
  StyledLanguage,
  StyledMark,
} from "./MobileFooterCopyright.styles.js"
import { IconGlobe } from "../../Icons"

export const MobileFooterCopyright = () => (
  <StyledCopyright>
    <StyledMark>
      Copyright © {new Date().getFullYear()} Diverse Marketing. All Rights
      Reserved.
    </StyledMark>
    <StyledLanguage>
      <IconGlobe size={12} color="#707070" />
      English
    </StyledLanguage>
  </StyledCopyright>
)

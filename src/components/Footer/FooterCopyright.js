import React from "react"

import {
  StyledCopyright,
  StyledLanguage,
  StyledMark,
} from "./FooterCopyright.styles.js"
import { IconGlobe } from "../Icons"

export const FooterCopyright = () => (
  <StyledCopyright>
    <StyledLanguage>
      <IconGlobe size={16} color="#707070" />
      English
    </StyledLanguage>
    <StyledMark>
      Copyright © {new Date().getFullYear()} Diverse Marketing. All Rights
      Reserved.
    </StyledMark>
  </StyledCopyright>
)

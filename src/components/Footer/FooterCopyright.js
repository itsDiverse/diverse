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
      <IconGlobe size={20} color="#707070" />
      English
    </StyledLanguage>
    <StyledMark>
      Copyright © [Current Year] Diverse Marketing. All Rights Reserved. • Do
      not sell my information
    </StyledMark>
  </StyledCopyright>
)

import React from "react"

import { FooterSections } from "./FooterSections"
import { FooterCerts } from "./FooterCerts"
import { FooterCopyright } from "./FooterCopyright"

import { StyledFooterWrapper, StyledFooter } from "./Footer.styles"

export const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooter>
      <FooterSections />
      {/* <FooterCerts /> */}
      <FooterCopyright />
    </StyledFooter>
  </StyledFooterWrapper>
)

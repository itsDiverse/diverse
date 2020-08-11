import React from "react"

import { FooterSections } from "./FooterSections"
import { FooterCerts } from "./FooterCerts"
import { FooterCopyright } from "./FooterCopyright"

import { StyledFooter } from "./Footer.styles"

export const Footer = () => (
  <StyledFooter>
    <FooterSections />
    <FooterCerts />
    <FooterCopyright />
  </StyledFooter>
)

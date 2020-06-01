import React from "react"
import { FooterHeader } from "./FooterHeader"
import { FooterSections } from "./FooterSections"
import { FooterCerts } from "./FooterCerts"
import { FooterCopyright } from "./FooterCopyright"

import { StyledFooter } from "./Footer.styles"

const Footer = () => (
  <StyledFooter>
    <FooterHeader />
    <FooterSections />
    <FooterCerts />
    <FooterCopyright />
  </StyledFooter>
)

export default Footer

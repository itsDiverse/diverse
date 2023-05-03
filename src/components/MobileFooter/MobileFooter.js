import React from "react"
//import { MobileFooterServices } from "./MobileFooterServices"
import { MobileFooterHeading } from "./MobileFooterHeading"
import { MobileFooterSections } from "./MobileFooterSections"
import { MobileFooterCerts } from "./MobileFooterCerts"
import { MobileFooterCopyright } from "./MobileFooterCopyright"

import { StyledMobileFooter } from "./MobileFooter.styles"

export const MobileFooter = () => (
  <StyledMobileFooter>
    <MobileFooterHeading />
    <MobileFooterSections />
    {/* <MobileFooterCerts /> */}
    <MobileFooterCopyright />
  </StyledMobileFooter>
)

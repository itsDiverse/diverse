import React from "react"

import { StyledCerts } from "./MObileFooterCerts.styles"
import art1 from "../../images/art1.png"
import art2 from "../../images/art2.png"
import art3 from "../../images/art3.png"
import art4 from "../../images/art4.png"

export const MobileFooterCerts = () => (
  <StyledCerts>
    <img src={art4} />
    <img src={art3} />
    <img src={art2} />
  </StyledCerts>
)

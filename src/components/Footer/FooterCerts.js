import React from "react"

import { StyledCerts } from "./FooterCerts.styles"
import art1 from "../../images/art1.png"
import art2 from "../../images/art2.png"
import art3 from "../../images/art3.png"
import art4 from "../../images/art4.png"

export const FooterCerts = () => (
  <StyledCerts>
    <img src={art4} alt="" />
    <img src={art3} alt="" />
    <img src={art2} alt="" />
    <img src={art1} alt="" />
  </StyledCerts>
)

import React from "react"
import { StyledBrandRow, StyledBrandName } from "./Brand.styles"
import { IconApp } from "../Icons"

const Brand = ({ size = 32 }) => (
  <StyledBrandRow>
    <IconApp size={size}></IconApp>
    <StyledBrandName size={size}>diverse</StyledBrandName>
  </StyledBrandRow>
)

export default Brand

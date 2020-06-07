import React from "react"

import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./Switch.styles"

export const Switch = () => (
  <CheckBoxWrapper>
    <CheckBox id="checkbox" type="checkbox" />
    <CheckBoxLabel htmlFor="checkbox" />
  </CheckBoxWrapper>
)

import React from "react"

import {
  StyledDropDown,
  StyledDrodDownContainer,
  StyledTitles,
  StyledTitle,
  StyledSubtitle,
  StyledIcon,
  StyledRow,
} from "./DropDown.styles"

export const DropDown = ({ icon, title, subtitle, children }) => {
  const [show, setShow] = React.useState(false)

  return (
    <StyledDropDown onClick={() => setShow(!show)}>
      <StyledRow>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledTitles>
          {title && <StyledTitle>{title}</StyledTitle>}
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </StyledTitles>
      </StyledRow>
      <StyledDrodDownContainer show={show}>{children}</StyledDrodDownContainer>
    </StyledDropDown>
  )
}

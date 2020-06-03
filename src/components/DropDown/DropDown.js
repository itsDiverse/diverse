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

export const DropDown = ({
  icon_expand,
  icon_expanded,
  title,
  subtitle,
  children,
}) => {
  const [show, setShow] = React.useState(false)

  return (
    <StyledDropDown>
      <StyledRow onClick={() => setShow(!show)}>
        <StyledIcon>{show ? icon_expanded : icon_expand}</StyledIcon>
        <StyledTitles>
          {title && <StyledTitle>{title}</StyledTitle>}
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </StyledTitles>
      </StyledRow>
      <StyledDrodDownContainer show={show}>{children}</StyledDrodDownContainer>
    </StyledDropDown>
  )
}

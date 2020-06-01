import styled from "styled-components"

export const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledIcon = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  color: #707070;
`
export const StyledTitles = styled.div`
  flex-direction: column;
  flex: 1;
  flex-grow: 15;
`

export const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #707070;
`
export const StyledSubtitle = styled.p`
  font-weight: normal;
  font-size: 10px;
  color: #707070;
`
export const StyledDrodDownContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

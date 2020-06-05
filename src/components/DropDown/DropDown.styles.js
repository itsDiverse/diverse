import styled from "styled-components"

export const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const StyledIcon = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  color: #707070;
  text-align: left;
  user-select: none;
`
export const StyledTitles = styled.div`
  flex-direction: column;
  flex: 1;
  flex-grow: 15;
  user-select: none;
`

export const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #707070;
  user-select: none;
`
export const StyledSubtitle = styled.p`
  font-weight: normal;
  font-size: 11.5px;
  line-height: 113.1%;
  color: #707070;
  user-select: none;
`
export const StyledDrodDownContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  user-select: none;
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

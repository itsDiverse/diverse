import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import { fadeinout } from "../animations"

export const StyledFooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  border-bottom: 2px solid #f2f2f2;
  border-top: 2px solid #f2f2f2;
  padding: 40px 20px;
`

export const StyledDropwdownArea = styled.div`
  flex: 1;
  display: ${({ visible }) => (visible ? "flex;" : "none;")};
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  align-items: center;
`

export const StyledDropdDownContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  animation: ${fadeinout} 1s linear forwards;
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledSectionTitle = styled(props => <Link {...props} />)`
  padding: 5px 0px;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #195bb6;
  padding: 20px 0px 11px 0px;
`

export const StyledSectionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 35px;
`

export const StyledSubsection = styled.div`
  padding-top: 5px;
`

export const StyledSubsectionTitle = styled(props => <Link {...props} />)`
  font-family: NovaBold;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #707070;
`

export const StyledSubsectionItems = styled.div`
  padding-top: 3px;
  column-count: ${({ elements }) =>
    elements > 5 ? Math.ceil(elements / 5) : 1};
`

export const StyledItemTitle = styled(props => <Link {...props} />)`
  display: flex;
  flex: 1;
  font-family: NovaReg;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 18px;
  color: #707070;
`

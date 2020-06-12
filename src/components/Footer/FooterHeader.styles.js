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
  flex-direction: row;
  justify-content: space-between;
  animation: ${fadeinout} 1s linear forwards;
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const StyledSection = styled.div``

export const StyledSectionTitle = styled(props => <Link {...props} />)`
  padding: 5px 0px;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #195bb6;
  padding: 5px 0px;
`

export const StyledSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledSubsection = styled.div`
  padding: 8px 0px;
`

export const StyledSubsectionTitle = styled(props => <Link {...props} />)`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #707070;
  padding: 5px 0px;
`

export const StyledSubsectionItems = styled.div``

export const StyledItemTitle = styled(props => <Link {...props} />)`
  display: flex;
  flex: 1;
  font-weight: normal;
  font-size: 12px;
  color: #707070;
  padding: 5px 0px;
`

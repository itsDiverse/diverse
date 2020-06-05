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
export const StyledDescription = styled.h4``

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  align-items: center;
`

export const StyledDropwdownArea = styled.div`
  flex: 1;
  display: ${({ visible }) => (visible ? "flex;" : "none;")};
`
export const StyledDropdDownContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  animation: ${fadeinout} 1s linear forwards;
`
export const StyledService = styled.div`
  padding: 10px 10px;
  color: #707070;
`

export const StyledServiceTitle = styled(props => <Link {...props} />)`
  padding: 5px 0px;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #195bb6;
`
export const StyledServiceSection = styled(props => <Link {...props} />)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: #707070;
`
export const StyledDropDownItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  flex: 1;
`
export const StyledDropDownItem = styled(props => <Link {...props} />)`
  display: flex;
  flex: 1;
  font-weight: normal;
  font-size: 12px;
  color: #707070;
  padding: 3px 0px;
`

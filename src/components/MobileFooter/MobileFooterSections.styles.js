import styled from "styled-components"
//import { Button } from "../Button"
import { StyledDropDown } from "../DropDown/DropDown.styles"
import { Link } from "gatsby"

export const StyledMobileFooterSections = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  ${StyledDropDown} {
    width: 100%;
    padding: 20px 0px;
    border-bottom: 1px solid #f2f2f2;
  }
`
export const StyledButtonsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`
export const StyledButtonsCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
`

export const StyledGetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 0px;
`

export const StyledPhoneNumber = styled.div`
  font-size: 12px;
  margin-bottom: 7px;
  color: #707070;
  span {
    text-transform: uppercase;
    font-weight: 800;
    color: #195bb6;
  }
`
export const StyledSmallDivider = styled.div`
  width: 50%;
  margin: 15px auto;
  border-bottom: 1px solid #f2f2f2;
`
export const StyledButtonText = styled(Link)`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #ffffff;
  padding: 0px;
  margin: 2px;
  text-decoration: none;
`
export const StyledCTARow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const StyledSectionSocialMedia = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 7px;
  color: #707070;
`

export const StyledSectionSocialMediaIcons = styled.div`
  svg:first-child {
    margin-right: 10px;
    margin-left: 5px;
  }
  opacity: 0.4 !important;
`

import styled from "styled-components"
//import { Button } from "../Button"
import { StyledDropDown } from "../DropDown/DropDown.styles"

export const StyledMobileFooterSections = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${StyledDropDown} {
    padding: 20px;
    border-bottom: 1px solid #f2f2f2;
  }
`
export const StyledButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
`
export const StyledButtonsCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
export const StyledButtonText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #ffffff;
  padding: 0px;
  margin: 2px;
`
export const StyledCTARow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`

import styled from "styled-components"
import { Link } from "gatsby"

export const StyledMobileFooter = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledDropDownItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 25px;
  flex: 1;
`
export const StyledDropDownItem = styled(Link)`
  display: flex;
  flex: 1 1 50%;
  font-weight: normal;
  font-size: 16px;
  color: #707070;
  padding: 10px 0px;
  text-decoration: none;

  > label {
    margin-left: 5px;
    background: #195bb6;
    color: #fff;
    padding: 3px 8px;
    border-radius: 20px;
    align-items: center;
    font-size: 11px;
    border: none;
    display: inline;
  }
`

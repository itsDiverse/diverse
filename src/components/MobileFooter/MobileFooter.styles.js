import styled from "styled-components"

export const StyledMobileFooter = styled.div`
  padding: 20px;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex;

  flex-direction: column;
`

export const StyledDropDownItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0px;
  flex: 1;
`
export const StyledDropDownItem = styled.div`
  display: flex;
  flex: 1 1 50%;
  font-weight: normal;
  font-size: 12px;
  color: #707070;
  padding: 3px 0px;
`

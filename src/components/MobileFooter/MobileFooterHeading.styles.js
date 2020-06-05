import styled from "styled-components"

export const StyledMobileFooterHeading = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex;

  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  width: 100%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  flex: 1;

  flex-direction: column;
  padding: 20px 0px 0px;
`
export const StyledGrayRow = styled.div`
  padding: 15px 15px;
  margin: 10px -20px 0px;
  background: #fbfbfb;
  font-size: 15px;
  align-items: center;
  justify-content: space-evenly;
`

export const StyledParagraph = styled.p`
  font-weight: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: #707070;
  padding: 10px 58px 0px 12px;
`

import styled from "styled-components"

export const StyledCTAText = styled.p`
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
`
export const StyledGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: inherit;

  ${StyledCTAText} {
    margin-left: ${({ withSpace }) => (withSpace ? "40px" : "15px")};
    font-weight: 600;
    font-size: 14.5px;
    line-height: 18px;
    color: #4b4b4b;
  }
`
export const StyledButtonText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`

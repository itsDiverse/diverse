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
    font-size: inherit;
    color: inherit;
    span {
      margin-left: ${({ withSpace }) => (withSpace ? "20px" : "2px")};
      font-size: inherit;
    }
  }
`
export const StyledButtonText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`

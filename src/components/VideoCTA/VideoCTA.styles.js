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
    margin-left: 10px;
  }
`

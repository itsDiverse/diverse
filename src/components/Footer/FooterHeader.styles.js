import styled from "styled-components"

export const StyledFooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  border-bottom: 2px solid #f2f2f2;
  border-top: 2px solid #f2f2f2;
  padding: 40px 20px;
`
export const StyledDescription = styled.h4``

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${StyledDescription} {
    margin-left: 10px;
  }
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`

export const StyledDropwdownArea = styled.div`
  background: red;
  flex: 1;
  display: ${({ visible }) => (visible ? "flex;" : "none;")};
`

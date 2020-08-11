import styled from "styled-components"

export const StyledBrandRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`
export const StyledBrandName = styled.div`
  text-transform: uppercase;
  margin-left: 15px;
  margin-top:10px;
  font-size: ${({ size }) => (size ? `${size / 2.2}px;` : "16px;")}
  font-weight: 800;
  font-family:NovaReg;
  letter-spacing: 4.0px;
  `

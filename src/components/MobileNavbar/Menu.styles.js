import styled, { keyframes } from "styled-components"

const fadeinout = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`

export const StyledMenu = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-flow: column;
  height: 100%;
  background: white;
  animation: ${fadeinout} 1s linear forwards;
`

export const StyledMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`

export const StyledMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  padding: 8px 32px;
  margin: 27px 0px;
  border-radius: 0px 50px 50px 0px;
  background: #0e52a4;
  color: white;
  font-size: 18px;
  font-weight: 800;
`

import styled from "styled-components"
import { fadeinout } from "../animations"

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  animation: ${fadeinout} 1s linear forwards;
  padding: 0px;
  margin: 0px;
  flex: 1 1 88vh;
`

export const StyledMenuFooter = styled.div`
  height: 70px;
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

import styled from "styled-components"

export const MobileNavBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow: 0 1px 4px 1px #eee;
  padding: 10px 20px;
  flex-grow: 0;
`
export const MenuIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

export const StyledBrandRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`
export const StyledBrandName = styled.h2`
  text-transform: uppercase;
  margin-left: 10px;
`

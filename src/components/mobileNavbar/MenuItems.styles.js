import styled from "styled-components"

export const StyledMenuItems = styled.div`
  margin: 0px 35px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const StyledMenuItem = styled.div`
  padding: 25px 0px;
  border-bottom: 1px solid #e6e6e682;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const StyledIconWrapper = styled.div`
  width: 60px;
  text-align: center;
`

export const StyledIconNavigator = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
  &:after {
    content: " > ";
  }
`

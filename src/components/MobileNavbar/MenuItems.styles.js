import styled from "styled-components"

export const StyledMenuItems = styled.div`
  margin: 0px 35px;
  display: flex;
  flex-direction: column;
  flex: 1 1;
`

export const StyledMenuItem = styled.div`
  padding: 25px 0px;
  border-bottom: 1px solid #e6e6e682;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  color: ${({ title }) => (title === "Login" ? "#195BB6;" : "#4B4B4B;")}
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    font-size: inherit; 
    color: inherit; 

  }
`
export const StyledIconWrapper = styled.div`
  width: ${({ title }) => (title === "Login" ? "15px;" : "60px;")}
  text-align: center;
  display: flex;
`

export const StyledIconNavigator = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
  &:after {
    content: " > ";
  }
`

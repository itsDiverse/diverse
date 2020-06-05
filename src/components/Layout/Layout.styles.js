import styled from "styled-components"

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
`

export const StyledLayoutMain = styled.div`
  
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  {
    max-width: 1600px;  
    width: 1400px;  
    padding: 20px; 
    margin: auto; 
  }
}
`

import styled from "styled-components"

//this is one of the components that could be shared among
//desktop and footer with media queries.
export const StyledCerts = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 35px 0px;

  img {
    height: 35px;
  }
`

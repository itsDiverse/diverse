import styled from "styled-components"

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 0px;
`

export const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex: 1;
`
export const StyledSectionPhrase = styled.p`
  max-width: 400px;
  font-size: 18px;
  color: #707070;
  font-weight: normal;
  margin-bottom: 10px;
`
export const StyledSectionColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 25px;

  h4 {
    font-size: 20;
    font-weight: bold;
    color: #707070;
    padding-bottom: 10px;
  }

  h5 {
    padding-bottom: 10px;
    font-size: 18;
    font-weight: medium;
    color: #707070;
  }
`
export const StyledSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-content: flex-start;
`
export const StyledSectionRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

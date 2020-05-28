import styled from "styled-components"

export const StyledMenuFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0px;
  margin-top: 20px;
  box-shadow: 0px -2px 10px 0 #ddd;
`

export const StyledButton = styled.div`
  background: ${({ color }) => color};
  padding: 10px 25px;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "6px")};
  display: flex;
  align-items: center;
  color: ${({ color }) => (color === "blue" ? "white" : "black")};
  font-size: 2rem;
  font-weight: 800;
`
export const StyledFooterSepearator = styled.div`
  font-size: 2rem;
  color: #ccc;
  font-weight: 800;
`

export const StyledButtonRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`
export const StyledButtonDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`

export const StyledProposalTitle = styled.h2`
  color: white;
  font-size: 1rem;
`
export const StyledProposalSubheading = styled.h4`
  color: white;
  font-size: 0.5rem;
`

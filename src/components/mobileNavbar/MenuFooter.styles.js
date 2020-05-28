import styled from "styled-components"

export const StyledMenuFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0px -2px 10px 0 #ddd;
  padding: 15px;
`
export const StyledCallOrTextFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`
export const StyledCallToActionFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`

export const StyledButton = styled.div`
  background: ${({ primary }) => (primary ? "#195BB6;" : "#EBEDF0;")};
  color: ${({ primary }) => (primary ? "#FFF;" : "#4B4B4B;")};
  padding: 8px 25px;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "6px")};
  display: flex;
  align-items: center;
  font-size: 13.5px;
`
export const StyledSquaredButton = styled.div`
  background: ${({ primary }) => (primary ? "#195BB6;" : "#EBEDF0;")};
  color: ${({ primary }) => (primary ? "#FFF;" : "#4B4B4B;")};
  padding: 14px 25px;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "6px")};
  display: flex;
  align-items: center;
  font-size: 13.5px;
  width: 60px;
  height: 45px;
`

export const StyledFooterSepearator = styled.div`
  font-size: 1rem;
  color: #ccc;
  font-weight: 800;
`

export const StyledButtonRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
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

import styled from "styled-components"

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#195BB6;" : "#EBEDF0;")};
  color: ${({ primary }) => (primary ? "#FFF;" : "#4B4B4B;")};
  padding: ${({ small }) => (small ? "5px 15px;" : "8px 25px;")};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "6px")};
  display: flex;
  align-items: center;
  font-size: 13.5px;
  border: none;
  display: ${({ inline }) => (inline ? "inline" : "block")};
`

export const SquaredButton = styled.button`
  background: ${({ primary }) => (primary ? "#195BB6;" : "#EBEDF0;")};
  color: ${({ primary }) => (primary ? "#FFF;" : "#4B4B4B;")};
  padding: 14px 25px;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "6px")};
  display: flex;
  align-items: center;
  font-size: 13.5px;
  width: 60px;
  height: 45px;
  border: none;
`

export const GetFreeProposalButton = styled.button`
  width: 250px;
  height: 43px;
  font-size: 13.5px;
  background: #195bb6;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.9;
    background: #fff;
    color: #195bb6;
    outline: none;
    text-shadow: none;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`

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

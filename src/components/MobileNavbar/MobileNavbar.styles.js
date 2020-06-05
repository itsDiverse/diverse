import styled from "styled-components"

export const StyledMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MobileNavBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow: 0 1px 4px 1px #eee;
  padding: 10px 20px;
  align-items: center;
  flex-grow: 0;
`

export const StyledIconBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.25rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.25rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#4B4B4B" : "#4B4B4B")};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(5px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

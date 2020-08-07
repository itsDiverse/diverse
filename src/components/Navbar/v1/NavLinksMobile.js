import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const NavLink = styled(Link)`
  padding: 5px;
  flex: 0 0 auto;
  display: inline-block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: 0.8;
    color: #616161;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`
const NavSeparator = styled.span`
  flex: 0 0 auto;
  width: 70%;
  height: 0.05rem;
  margin: 0 0.9375rem;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 2px 4px 1px #eee;
  opacity: 0.35;
  color: #555555;
`

const NavLinksMobile = () => (
  <Wrapper>
    <NavLink to="/"> HOME</NavLink>
    <NavSeparator />
    <NavLink to="index.js">HOW WE WORK</NavLink>
    <NavSeparator />
    <NavLink to="/">OUR SERVICES</NavLink>
    <NavSeparator />
    <NavLink to="/">CONTACT US</NavLink>
  </Wrapper>
)

export default NavLinksMobile

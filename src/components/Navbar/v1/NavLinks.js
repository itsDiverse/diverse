import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavSeparator from "./NavSeparator"

const Wrapper = styled.nav`
  margin-top: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NovaSemi;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 18px;
`

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  color: #757575;
  &:hover,
  &:focus {
    opacity: 0.8;
    color: #969696;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`

const NavLinks = () => (
  <Wrapper>
    <NavLink to="/">Home</NavLink>
    <NavSeparator />
    <NavLink to="/#work">How We Work</NavLink>
    <NavSeparator />
    <NavLink to="/#services">Our Services</NavLink>
    <NavSeparator />
    <NavLink to="/#contact">Contact Us</NavLink>
  </Wrapper>
)

export default NavLinks

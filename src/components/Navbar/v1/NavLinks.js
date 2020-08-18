import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavSeparator from "./NavSeparator"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NovaReg;
  font-weight: 600;
  font-size: 15.5px;
  line-height: 18px;
`

const NavLink = styled(Link)`
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

const NavLinks = () => (
  <Wrapper>
    <NavLink to="/">Home</NavLink>
    <NavSeparator />
    <NavLink to="/index_v2/">How We Work</NavLink>
    <NavSeparator />
    <NavLink to="/index_v3/">Our Services</NavLink>
    <NavSeparator />
    <NavLink to="/index_v4">Contact Us</NavLink>
  </Wrapper>
)

export default NavLinks

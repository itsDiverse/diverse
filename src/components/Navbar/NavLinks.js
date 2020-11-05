import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import NavSeparator from "./NavSeparator"

const Wrapper = styled.nav`
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

const HashLink = styled(AnchorLink)`
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
    <HashLink to="/#work">How We Work</HashLink>
    <NavSeparator />
    <HashLink to="/#services">Our Services</HashLink>
    <NavSeparator />
    <NavLink to="/comingSoon/">Contact Us</NavLink>
  </Wrapper>
)

export default NavLinks

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 10px;
  margin: 1.5rem 0;
`

const NavLink = styled(Link)`
  font-family: NovaReg;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 5px 0px;
  width: 100%;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  padding-left: 2rem;
  flex: 0 0 auto;
  display: inline-block;
  line-height: 2.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  sletter-spacing: 0.015em;
  color: currentColor;
  &:hover,
  &:focus {
    background: #195bb6;
    color:#fff !important;
    border: 0px transparent;
    outline: none;
    border-style: none;
  
`

const NavLinksMobile = () => (
  <Wrapper>
    <NavLink
      to="/"
      activeClassName="active"
      activeStyle={{
        color: "#195bb6",
        borderTop: "3px solid #195bb6",
        borderBottom: "3px solid #195bb6",
      }}
    >
      {" "}
      HOME
    </NavLink>

    <NavLink
      activeStyle={{
        color: "#195bb6",
        borderTop: "3px solid #195bb6",
        borderBottom: "3px solid #195bb6",
      }}
      to="/#work"
    >
      HOW WE WORK
    </NavLink>

    <NavLink
      activeStyle={{
        color: "#195bb6",
        borderTop: "3px solid #195bb6",
        borderBottom: "3px solid #195bb6",
      }}
      to="/#services"
    >
      OUR SERVICES
    </NavLink>

    <NavLink
      activeStyle={{
        color: "#195bb6",
        borderTop: "3px solid #195bb6",
        borderBottom: "3px solid #195bb6",
      }}
      to="/#contact"
    >
      CONTACT US
    </NavLink>
  </Wrapper>
)

export default NavLinksMobile

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 3.75rem;
`

const NavLink = styled(Link)`
  margin: 2px;
  padding-left: 1.5rem !important;
  width: 100%;
  padding: 6px;
  flex: 0 0 auto;
  display: inline-block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: sleec 0.025rem;
  color: currentColor;
  border-radius: 2px;
  &:hover,
  &:focus {
    color: #195bb6;
    transform: scale(1.1);
    border: 0px transparent;
    outline: none;
    border-style: none;
  }
  &:active {
    transform: scale(0.95);
  }
`
const NavSeparator = styled.span`
  flex: 0 0 auto;
  width: 70%;
  height: 0.05rem;
  margin: 0;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 2px 4px 1px #eee;
  opacity: 0.35;
  color: #555555;
`

const NavLinksMobile = () => (
  <Wrapper>
    <NavLink
      to="/index_v1/"
      activeClassName="active"
      activeStyle={{ color: "#fff", background: "#195bb6" }}
    >
      {" "}
      HOME
    </NavLink>
    <NavSeparator />
    <NavLink
      activeStyle={{ color: "#fff", background: "#195bb6" }}
      to="/index_v2/"
    >
      HOW WE WORK
    </NavLink>
    <NavSeparator />
    <NavLink activeStyle={{ color: "#fff", background: "#195bb6" }} to="/">
      OUR SERVICES
    </NavLink>
    <NavSeparator />
    <NavLink activeStyle={{ color: "#fff", background: "#195bb6" }} to="/">
      CONTACT US
    </NavLink>
  </Wrapper>
)

export default NavLinksMobile

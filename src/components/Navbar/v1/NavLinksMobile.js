import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 2rem 0;
`

const NavLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  margin: 2px;
  width: 100%;
  padding: 6px;
  padding-left: 1rem;
  flex: 0 0 auto;
  display: inline-block;
  line-height: 2.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: sleec 0.025rem;
  color: currentColor;
  border-radius: 2px;
  &:hover,
  &:focus {
    color: #195bb6;
    border: 0px transparent;
    outline: none;
    border-style: none;
  }
  ...active {
    background: linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%);
    color: "#fff";
  }
  @media (max-width: 768px) {
    font-size: 14px;
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
      to="/"
      activeClassName="active"
      activeStyle={{
        color: "#fff",
        background:
          "linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%)",
      }}
    >
      {" "}
      HOME
    </NavLink>
    <NavSeparator />
    <NavLink
      activeStyle={{
        color: "#fff",
        background:
          "linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%)",
      }}
      to="/#work"
    >
      HOW WE WORK
    </NavLink>
    <NavSeparator />
    <NavLink
      activeStyle={{
        color: "#fff",
        background:
          "linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%)",
      }}
      to="/#services"
    >
      OUR SERVICES
    </NavLink>
    <NavSeparator />
    <NavLink
      activeStyle={{
        color: "#fff",
        background:
          "linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%)",
      }}
      to="/#contact"
    >
      CONTACT US
    </NavLink>
  </Wrapper>
)

export default NavLinksMobile

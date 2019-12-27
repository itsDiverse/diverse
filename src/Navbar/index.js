import React, { Component } from "react"
import styled from "styled-components"
import diverseLogo from "../images/diverseLogo.svg"

const NavbarEl = styled.nav`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 14px;
`

const Logo = styled.span`
  padding-top: 1rem;
  font-weight: bold;
  font-size: 18px;
`

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <Logo><img src={diverseLogo} alt="Diverse Company Logo" width="100px" /></Logo>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    )
  }
}

export default Navbar
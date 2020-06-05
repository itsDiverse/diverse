import React, { Component } from "react"
import styled from "styled-components"
import { Brand } from "../../Brand"

const NavbarEl = styled.nav`
  display: flex;
  max-width: 1040px;
  min-width: 1040px;
  padding-top: 1rem;
  align-items: center;
  margin: auto;
`
const SignIn = styled.span`
  color: rgba(126, 126, 126, 1);
  margin: 0 0 0 2rem;
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
        <Brand size={50} />
        <NavbarList>{children}</NavbarList>
        <SignIn>Sign in 🡢</SignIn>
      </NavbarEl>
    )
  }
}

export default Navbar

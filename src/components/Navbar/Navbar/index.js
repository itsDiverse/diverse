import React, { Component } from "react"
import styled from "styled-components"
import { Brand } from "../../Brand"
import { IconArrowRight } from "../../Icons"

const NavbarEl = styled.nav`
  display: flex;
  max-width: 1040px;
  min-width: 1040px;
  padding-top: 1rem;
  align-items: center;
  margin: auto;
`
const SignIn = styled.button`
  color: rgba(126, 126, 126, 1);
  margin: 0 0 0 2rem;
  font-weight: 500;
  font-size: 14.5px;
  line-height: 18px;
  /* identical to box height */
  text-align: center;
  color: #969696;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
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
        <SignIn>
          Sign in <IconArrowRight />
        </SignIn>
      </NavbarEl>
    )
  }
}

export default Navbar

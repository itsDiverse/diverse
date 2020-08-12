import React, { PureComponent } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import rem from "../../../utils/rem"
import { navbarHeight } from "../../../utils/sizes"
import { mobile } from "../../../utils/media"
import NavLinks from "./NavLinks"
import { Logo } from "./logo"
import MobileNavbar from "./MobileNavbar"

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  font-size: ${rem(15)};
  font-weight: 500;
  background: white;
  transition: background 400ms ease-out;
  color: #555555;

  a {
    text-decoration: none;
  }
`

const NormalNavbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${rem(20)};
  ${mobile(css`
    display: none;
  `)}
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  width: 166px;
  height: 43px;

  background: #ffffff;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #195bb6;
  font-weight: bold;
  &:hover,
  &:focus {
    opacity: 0.9;
    background: #195bb6;
    color: #ffffff;
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`

const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  display: inline-block;
  vertical-align: center;
  margin-right: 0;
  color: currentColor;
`

class NavBar extends PureComponent {
  render() {
    const { onMobileNavToggle, isMobileNavFolded } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Wrapper aria-label="navbar">
            <NormalNavbar>
              <StartWrapper aria-label="logo">
                <LogoLink>
                  <Logo />
                </LogoLink>
              </StartWrapper>
              <NavLinks aria-label="links" />
              <EndWrapper>
                <Link
                  tabIndex="-1"
                  to="/modalPopUp"
                  state={{
                    modal: true,
                  }}
                >
                  <Button>GET A PROPOSAL</Button>
                </Link>
              </EndWrapper>
            </NormalNavbar>

            <MobileNavbar
              isMobileNavFolded={isMobileNavFolded}
              onMobileNavToggle={onMobileNavToggle}
            />
          </Wrapper>
        )}
      />
    )
  }
}

export default NavBar

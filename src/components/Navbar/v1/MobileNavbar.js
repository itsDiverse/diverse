import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"

import rem from "../../../utils/rem"
import { navbarHeight } from "../../../utils/sizes"
import { mobile } from "../../../utils/media"
import NavLinksMobile from "./NavLinksMobile"
import NavSeparator from "./NavSeparator"
import NavButton from "./NavButton"
import { LogoMobile } from "./logoMobile"
import { SlideIn } from "../../animations"
import { IconMobileNavbarV1 } from "../../../components/Icons/IconMobileNavbar_v1"
import { IconCloseMobileNavbarV1 } from "../../../components/Icons/IconCloseMobileNavbar_v1"
import { Brand } from "../../Brand"

const Wrapper = styled.div`
  background: #fff;
  display: none;
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)};
`

const SecondaryMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0 !important;
  ${p =>
    p.open
      ? css`
          max-width: 250px;
          animation: ${SlideIn} 0.27s linear forwards;
          min-height: 100vh;
          box-shadow: 0 0 0 151vh rgba(0, 0, 0, 0.8);
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 0rem;
  user-select: none;
  overflow-x: hidden;
  overflow-y: scroll;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 247, 247, 1) 50%,
    rgba(229, 229, 229, 1) 81%
  );

  color: #55555;
  font-weight: bold;
`

const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  margin-left: 0.75rem;
  display: inline-block;
  vertical-align: center;
  color: currentColor;
  outline: none;
`

const IconWrapper = styled.div`
  transition: transform 0.1s;
  color: #195bb6;
  background: white-smoke;
  &:focus {
    color: #ffffff;
  }
  ${p =>
    p.rotate &&
    css`
      transform-origin: 50% 55%;
      transform: rotate(180deg);
    `}
`
const IconWrapperClose = styled.div`
  margin-top: -1rem;
  margin-right: 1.5rem;
  height: 20px;
  transition: transform 0.1s;
  color: #195bb6;
  background: white-smoke;
  &:focus {
    color: #ffffff;
  }
  &:active {
    background: transparent;
  }
`

const Button = styled.button`
  align-self: center;
  height: 43px;
  background: #fff;
  box-sizing: border-box;
  border: 3px solid #195bb6;
  border-color: #195bb6;
  border-radius: 5px;
  color: #195bb6;
  font-size: 13.5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
  font-weight: bold;
  padding: 0 1.5rem;
  margin-left: 1rem;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.95);
  }
`

const PrimaryMenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0rem;
  margin-left: 0.75rem;
  margin-right: 0px;
`

const NavLinksContainer = styled.div`
  width: 100% !important;
  padding-left: 0.75rem;
`
const SecondaryMenuItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  margin-left: -0.5rem;
`

const MobileNavbar = props => {
  const { isMobileNavFolded, onMobileNavToggle } = props

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
        <Wrapper>
          <LogoLink>
            <LogoMobile />
          </LogoLink>
          <Link tabIndex="-1" to="/">
            <Button autoFocus={true}>GET A PROPOSAL</Button>
          </Link>
          <Wrapper>
            <NavButton aria-label="dropdown" onClick={onMobileNavToggle}>
              <IconWrapper>
                <IconMobileNavbarV1 />
              </IconWrapper>
            </NavButton>
          </Wrapper>

          <SecondaryMenu open={!isMobileNavFolded}>
            <PrimaryMenuItem>
              <Brand size="30" />
              <IconWrapperClose
                onClick={onMobileNavToggle}
                close={isMobileNavFolded}
              >
                <IconCloseMobileNavbarV1 />
              </IconWrapperClose>
            </PrimaryMenuItem>
            <NavLinksContainer
              onClick={onMobileNavToggle}
              close={isMobileNavFolded}
            >
              <NavLinksMobile />
            </NavLinksContainer>
            <NavSeparator />
            <SecondaryMenuItem>
              <Link
                tabIndex="-1"
                to="/modalPopUp"
                state={{
                  modal: false,
                }}
              >
                <Button>GET A PROPOSAL</Button>
              </Link>
            </SecondaryMenuItem>
          </SecondaryMenu>
        </Wrapper>
      )}
    />
  )
}

export default MobileNavbar

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"

import rem from "../../utils/rem"
import { navbarHeight } from "../../utils/sizes"
import { mobile } from "../../utils/media"

import NavLinksMobile from "./NavLinksMobile"
import NavSeparator from "./NavSeparator"
import NavButton from "./NavButton"
import IconApp from "../../images/iconApp2.svg"
import { IconMobileNavbarV1 } from "../Icons/IconMobileNavbar_v1"
import { IconCloseMobileNavbarV1 } from "../Icons/IconCloseMobileNavbar_v1"
import { ModalLink } from "../ModalLink"
import Logo from "../../images/diverseLogo.svg"

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
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
  min-height: 100vh;
  max-width: 270px;
  min-width: 270px;

  ${props =>
    props.open
      ? css`
          right: 0;
          display: block;
        `
      : css`
          right: -300px;
          display: none;
        `}

  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 0rem;
  user-select: none;
  overflow-x: hidden;
  overflow-y: scroll;
  background: rgba(247, 247, 247, 1);
  color: #555555;
  font-weight: bold;
  z-index: 10;
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
  margin-top: 0.75rem;
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
  font-size: 13px;
  font-weight: bold;
  padding: 0 1.5rem;
  cursor: pointer;
  margin-left: 1.2rem;
  &:hover,
  &:focus {
    outline: none;
    background: #195bb6;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
`

const PrimaryMenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin-left: 0.75rem;
  margin-right: 0px;
`
const BrandSecondaryMenuWrapper = styled.div`
  padding-top: 3rem;
`

const NavLinksContainer = styled.div`
  width: 100% !important;
  padding-left: 0rem;
`
const SecondaryMenuItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  margin-left: -1rem;
`

const Overlay = styled.div`
  opacity: ${({ open }) => (open ? 1 : 0)};
  display: ${({ open }) => (open ? "block" : "none")};
  transition: all 2s ease;
  background: rgb(0 0 0 / 72%);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
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
            <object type="image/svg+xml" data={IconApp}>
              <img src={IconApp} alt="logo" />
            </object>
          </LogoLink>
          <ModalLink tabIndex="-1" to="/freeProposal/">
            <Button>GET A PROPOSAL</Button>
          </ModalLink>
          <Wrapper>
            <NavButton
              aria-label="mobile navbar"
              onClick={onMobileNavToggle}
              active={!isMobileNavFolded}
            >
              <IconWrapper>
                <IconMobileNavbarV1 />
              </IconWrapper>
            </NavButton>
          </Wrapper>

          <SecondaryMenu open={!isMobileNavFolded}>
            <PrimaryMenuItem>
              <BrandSecondaryMenuWrapper>
                <object type="image/svg+xml" data={Logo} aria-label="logo" />
              </BrandSecondaryMenuWrapper>
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
              <ModalLink tabIndex="-1" to="/freeProposal/">
                <Button>GET A PROPOSAL</Button>
              </ModalLink>
            </SecondaryMenuItem>
          </SecondaryMenu>
          <Overlay open={!isMobileNavFolded} onClick={onMobileNavToggle} />
        </Wrapper>
      )}
    />
  )
}

export default MobileNavbar

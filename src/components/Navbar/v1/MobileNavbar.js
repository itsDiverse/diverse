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
  left: 55%;
  right: 0 !important;
  ${p =>
    p.open
      ? css`
          animation: ${SlideIn} 0.27s linear forwards;
          min-height: 100vh;
          box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.8);
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 1rem;
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
  border-radius: 5px;
  color: #55555;
  font-weight: bold;
  @media (max-width: 768px) {
    left: 25%;
    overflow-y: scroll;
  }
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
  margin-right: 1rem;
  transition: transform 0.1s;
  color: #195bb6;
  background: white-smoke;
  &:focus {
    color: #ffffff;
  }
`

const Button = styled.button`
  align-self: center;
  width: 166px;
  height: 43px;
  background: #fff;
  box-sizing: border-box;
  border: 3px solid #195bb6;
  border-color: #195bb6;
  border-radius: 5px;
  color: #195bb6;
  font-size: 13.5px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.95);
  }
`

const PrimaryMenuItem = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0rem;
  margin-left: 0.75rem;
  margin-right: 0px;
  @media (max-width: 768px) {
    margin-left: 0.25rem;
  }
`
const SecondaryMenuItem = styled.div`
  // padding-right: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 0.75rem;
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
              <Link
                tabIndex="-1"
                to="/modalPopUp"
                state={{
                  modal: false,
                }}
              >
                <Brand />
              </Link>
              <IconWrapperClose
                onClick={onMobileNavToggle}
                close={isMobileNavFolded}
              >
                <IconCloseMobileNavbarV1 />
              </IconWrapperClose>
            </PrimaryMenuItem>
            <NavLinksMobile />
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

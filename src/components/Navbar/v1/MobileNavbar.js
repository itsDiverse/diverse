import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import rem from "../../../utils/rem"
import { navbarHeight } from "../../../utils/sizes"
import { mobile } from "../../../utils/media"
import NavLinksMobile from "./NavLinksMobile"
import Social from "./Social"
import NavSeparator from "./NavSeparator"
import NavButton from "./NavButton"
import { LogoMobile } from "./logoMobile"

const Wrapper = styled.div`
  display: none;
  box-shadow: 0 1px 4px 1px #eee;
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)};
`

const SecondaryMenu = styled.div`
  position: absolute;
  top: 0;
  left: 6.125rem;
  right: 0 !important;
  ${p =>
    p.open
      ? css`
          height: 100vh;
          box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
          overflow: scroll;
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
  border-radius: 2px;
  color: #55555;
  font-weight: bold;
`

const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  padding-top: 0.25rem;
  display: inline-block;
  vertical-align: center;
  margin-left: 0.25rem;
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

const Button = styled.button`
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

const SecondaryMenuItem = styled.div`
  // padding-right: 1.25rem;
  margin-top: 2rem;
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
          <Link
            tabIndex="-1"
            to="/modalPopUp"
            state={{
              modal: false,
            }}
          >
            <Button autoFocus={true}>GET A PROPOSAL</Button>
          </Link>
          <Wrapper>
            <NavButton onClick={onMobileNavToggle} active={!isMobileNavFolded}>
              <IconWrapper rotate={!isMobileNavFolded}>
                <FontAwesomeIcon icon={faChevronDown} />
              </IconWrapper>
            </NavButton>
          </Wrapper>

          <SecondaryMenu open={!isMobileNavFolded}>
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

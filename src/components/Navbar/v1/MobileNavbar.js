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
  top: 4.125rem;
  left: 1.125rem;
  right: 0;
  ${p =>
    p.open
      ? css`
          height: 91vh;
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  transition: height 0.2s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
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
`

const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  display: inline-block;
  vertical-align: center;
  margin-left: 1.25rem;
  color: currentColor;
`

const IconWrapper = styled.div`
  transition: transform 0.1s;

  color: #555555;
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
  margin-right: 5px;
  background: #ffffff;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #195bb6;
  font-weight: bold;
  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`

const SecondaryMenuItem = styled.div`
  // padding-right: 1.25rem;
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
            to="/modalPopUp"
            state={{
              modal: true,
            }}
          >
            <Button>GET A PROPOSAL</Button>
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
              <Social />
            </SecondaryMenuItem>
          </SecondaryMenu>
        </Wrapper>
      )}
    />
  )
}

export default MobileNavbar

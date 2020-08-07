import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import rem from "../../../utils/rem"
import { navbarHeight } from "../../../utils/sizes"
import { mobile } from "../../../utils/media"
import NavLinks from "./NavLinks"
import Social from "./Social"
import NavSeparator from "./NavSeparator"
import NavButton from "./NavButton"
import { Logo } from "./logo"

const Wrapper = styled.div`
  display: none;

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)}
`

const SecondaryMenu = styled.div`
  position: absolute;
  top: 3.125rem;
  left: 0;
  right: 0;
  ${p =>
    p.open
      ? css`
          height: 3.125rem;
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  background: #cecece;
  color: #868686;
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
  margin-right: 3rem;
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
  margin-right: 30px;
  margin-left: 30px;
  background: #ffffff;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #195bb6;
  font-weight: bold;
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
            <Logo />
          </LogoLink>
          <Button>GET A PROPOSAL</Button>
          <Wrapper>
            <NavButton onClick={onMobileNavToggle} active={!isMobileNavFolded}>
              <IconWrapper rotate={!isMobileNavFolded}>
                <FontAwesomeIcon icon={faChevronDown} />
              </IconWrapper>
            </NavButton>
          </Wrapper>

          <SecondaryMenu open={!isMobileNavFolded}>
            <NavLinks />
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

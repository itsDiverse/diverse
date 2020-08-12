import React from "react"
import { IconInstagram, IconFacebook } from "../../Icons"

import {
  StyledDropDownItemsContainer,
  StyledDropDownItem,
} from "./MobileFooter.styles"

import {
  StyledMobileFooterSections,
  StyledButtonsRow,
  StyledButtonsCol,
  StyledPhoneNumber,
  StyledGetInTouch,
  StyledSmallDivider,
  StyledButtonText,
  StyledCTARow,
  StyledSectionSocialMedia,
  StyledSectionSocialMediaIcons,
} from "./MobileFooterSections.styles"

import { DropDown } from "../../DropDown"
import { Button } from "../../Button"
import { ProposalCTA } from "../../ProposalCTA"
const GetInTouch = () => (
  <StyledButtonsCol>
    <StyledButtonsRow>
      <Button rounded primary small>
        <StyledButtonText>CALL US</StyledButtonText>
      </Button>
      <Button rounded primary small>
        <StyledButtonText>TEXT US</StyledButtonText>
      </Button>
      <Button rounded primary small>
        <StyledButtonText> EMAIL US</StyledButtonText>
      </Button>
    </StyledButtonsRow>
    <StyledSmallDivider />
    <StyledCTARow>
      <ProposalCTA />
    </StyledCTARow>
  </StyledButtonsCol>
)

export const MobileFooterSections = () => (
  <StyledMobileFooterSections>
    <DropDown icon_expand="+" icon_expanded="-" title="OUR COMPANY">
      <StyledDropDownItemsContainer>
        <StyledDropDownItem to="/"> About Us</StyledDropDownItem>
        <StyledDropDownItem to="/"> Privacy Policy</StyledDropDownItem>
        <StyledDropDownItem to="/"> Free Proposal</StyledDropDownItem>
        <StyledDropDownItem to="/"> Terms</StyledDropDownItem>
        <StyledDropDownItem to="/">
          {" "}
          Careers <label>HIRING</label>
        </StyledDropDownItem>
      </StyledDropDownItemsContainer>
    </DropDown>

    <DropDown icon_expand="+" icon_expanded="-" title="RESOURCES">
      <StyledDropDownItemsContainer>
        <StyledDropDownItem to="/"> FAQs</StyledDropDownItem>
        <StyledDropDownItem to="/"> Blog</StyledDropDownItem>
        <StyledDropDownItem to="/"> Client Login</StyledDropDownItem>
      </StyledDropDownItemsContainer>
    </DropDown>

    <DropDown icon_expand="+" icon_expanded="-" title="GET IN TOUCH">
      <StyledGetInTouch>
        <StyledPhoneNumber>
          Phone Number: <span>(833)-Diverse</span>
        </StyledPhoneNumber>
        <StyledSectionSocialMedia>
          Social Profiles:
          <StyledSectionSocialMediaIcons>
            <a
              href="https://twitter.com/gatsbyjs"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on facebook"
            >
              <IconFacebook size={20} />
            </a>
            <a
              href="https://instagram.com/gatsbyjs"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on instagram"
            >
              <IconInstagram size={20} />
            </a>
          </StyledSectionSocialMediaIcons>
        </StyledSectionSocialMedia>
        <GetInTouch />
      </StyledGetInTouch>
    </DropDown>
  </StyledMobileFooterSections>
)

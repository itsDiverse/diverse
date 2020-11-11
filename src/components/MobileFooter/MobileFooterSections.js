import React from "react"
import { IconInstagram, IconFacebook } from "../Icons"
import { ModalLink } from "../ModalLink"

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

import { DropDown } from "../DropDown"
import { Button } from "../Button"
import { ProposalCTA } from "../ProposalCTA"
const GetInTouch = () => (
  <StyledButtonsCol>
    {/* <StyledButtonsRow>
      <Button rounded primary small>
        <StyledButtonText to="/comingSoon/">CALL US</StyledButtonText>
      </Button>
      <Button rounded primary small>
        <StyledButtonText to="/comingSoon/">TEXT US</StyledButtonText>
      </Button>
      <Button rounded primary small>
        <StyledButtonText to="/comingSoon/"> EMAIL US</StyledButtonText>
      </Button>
    </StyledButtonsRow> */}
    <StyledSmallDivider />
    <StyledCTARow>
      <ModalLink to="/freeProposal/">
        <ProposalCTA />
      </ModalLink>
    </StyledCTARow>
  </StyledButtonsCol>
)

export const MobileFooterSections = () => (
  <StyledMobileFooterSections>
    <DropDown icon_expand="+" icon_expanded="-" title="OUR COMPANY">
      <StyledDropDownItemsContainer>
        <StyledDropDownItem to="/comingSoon/"> About Us</StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/">
          {" "}
          Privacy Policy
        </StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/">
          {" "}
          Free Proposal
        </StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/"> Terms</StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/">
          {" "}
          Careers <label>HIRING</label>
        </StyledDropDownItem>
      </StyledDropDownItemsContainer>
    </DropDown>

    <DropDown icon_expand="+" icon_expanded="-" title="RESOURCES">
      <StyledDropDownItemsContainer>
        <StyledDropDownItem to="/comingSoon/"> FAQs</StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/"> Blog</StyledDropDownItem>
        <StyledDropDownItem to="/comingSoon/"> Client Login</StyledDropDownItem>
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
              href="https://www.facebook.com/meetDiverse"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on facebook"
            >
              <IconFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/meetDiverse"
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

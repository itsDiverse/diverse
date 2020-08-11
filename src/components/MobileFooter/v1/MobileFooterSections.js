import React from "react"

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
} from "./MobileFooterSections.styles"

import { DropDown } from "../../DropDown"
import { Button } from "../../Button"
import { ProposalCTA } from "../../ProposalCTA"
import { Link } from "gatsby"
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
        <StyledDropDownItem to="/"> Careers</StyledDropDownItem>
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
        <StyledPhoneNumber>Social Profiles: </StyledPhoneNumber>
        <GetInTouch></GetInTouch>
      </StyledGetInTouch>
    </DropDown>
  </StyledMobileFooterSections>
)

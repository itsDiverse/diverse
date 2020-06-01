import React from "react"

import {
  StyledDropDownItemsContainer,
  StyledDropDownItem,
} from "./MobileFooter.styles"

import { StyledMobileFooterSections } from "./MobileFooterSections.styles"

import { DropDown } from "../DropDown"

const GetInTouch = () => (
  <div>
    <Button rounded primary>
      CALL US
    </Button>
    <Button rounded primary>
      TEXT US
    </Button>
    <Button rounded primary>
      EMAIL US
    </Button>
    <Divisor></Divisor>
    <Button proposal />
  </div>
)

export const MobileFooterSections = () => (
  <>
    <StyledMobileFooterSections>
      <DropDown icon="+" title="OUR COMPANY">
        <StyledDropDownItemsContainer>
          <StyledDropDownItem>About Us</StyledDropDownItem>
          <StyledDropDownItem>Privacy Policy</StyledDropDownItem>
          <StyledDropDownItem>Free Proposal</StyledDropDownItem>
          <StyledDropDownItem>Terms</StyledDropDownItem>
          <StyledDropDownItem>Careers</StyledDropDownItem>
        </StyledDropDownItemsContainer>
      </DropDown>
    </StyledMobileFooterSections>
    <StyledMobileFooterSections>
      <DropDown icon="+" title="RESOURCES">
        <StyledDropDownItemsContainer>
          <StyledDropDownItem>FAQs</StyledDropDownItem>
          <StyledDropDownItem>Blog</StyledDropDownItem>
          <StyledDropDownItem>Client Login</StyledDropDownItem>
        </StyledDropDownItemsContainer>
      </DropDown>
    </StyledMobileFooterSections>
    <StyledMobileFooterSections>
      <DropDown icon="+" title="GET IN TOUCH">
        <GetInTouch></GetInTouch>
      </DropDown>
    </StyledMobileFooterSections>
  </>
)

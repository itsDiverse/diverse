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
} from "./MobileFooterSections.styles"

import { DropDown } from "../DropDown"
import { Button } from "../Button"
import { ProposalCTA } from "../ProposalCTA"

const GetInTouch = () => (
  <StyledButtonsCol>
    <StyledButtonsRow>
      <Button rounded primary small>
        CALL US
      </Button>
      <Button rounded primary small>
        TEXT US
      </Button>
      <Button rounded primary small>
        EMAIL US
      </Button>
    </StyledButtonsRow>
    <StyledSmallDivider />
    <ProposalCTA />
  </StyledButtonsCol>
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
        <StyledGetInTouch>
          <StyledPhoneNumber>
            Phone Number: <span>(833)-Diverse</span>
          </StyledPhoneNumber>
          <StyledPhoneNumber>Social Profiles: </StyledPhoneNumber>
          <GetInTouch></GetInTouch>
        </StyledGetInTouch>
      </DropDown>
    </StyledMobileFooterSections>
  </>
)

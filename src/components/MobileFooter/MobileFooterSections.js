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

import { DropDown } from "../DropDown"
import { Button } from "../Button"
import { ProposalCTA } from "../ProposalCTA"
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
        <StyledDropDownItem>
          <Link>About Us</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Privacy Policy</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Free Proposal</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Terms</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Careers</Link>
        </StyledDropDownItem>
      </StyledDropDownItemsContainer>
    </DropDown>

    <DropDown icon_expand="+" icon_expanded="-" title="RESOURCES">
      <StyledDropDownItemsContainer>
        <StyledDropDownItem>
          <Link>FAQs</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Blog</Link>
        </StyledDropDownItem>
        <StyledDropDownItem>
          <Link>Client Login</Link>
        </StyledDropDownItem>
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

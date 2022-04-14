import React from "react"
import { IconInstagram, IconFacebook } from "../Icons"
import { ModalLink } from "../ModalLink"

import {
  StyledDropDownItemsContainer,
  StyledDropDownItem,
} from "./MobileFooter.styles"

import {
  StyledMobileFooterSections,
  //StyledButtonsRow,
  StyledButtonsCol,
  StyledPhoneNumber,
  StyledGetInTouch,
  StyledSmallDivider,
  //StyledButtonText,
  StyledCTARow,
  StyledSectionSocialMedia,
  StyledSectionSocialMediaIcons,
} from "./MobileFooterSections.styles"

import { DropDown } from "../DropDown"
//import { Button } from "../Button"
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
               <StyledDropDownItem to="/freeProposal/">
                 {" "}
                 Demo Request
               </StyledDropDownItem>

               <StyledDropDownItem to="/comingSoon/">
                 {" "}
                 Careers <label>HIRING</label>
               </StyledDropDownItem>
               <StyledDropDownItem to="/privacy/">
                 {" "}
                 Privacy Policy
               </StyledDropDownItem>
             </StyledDropDownItemsContainer>
           </DropDown>

           <DropDown icon_expand="+" icon_expanded="-" title="RESOURCES">
             <StyledDropDownItemsContainer>
               <StyledDropDownItem
                 to=""
                 href="https://www.facebook.com/meetDiverse"
                 target="_blank"
               >
                 {" "}
                 Reviews
               </StyledDropDownItem>
               <StyledDropDownItem to="https://clients.meetdiverse.com/wp-admin">
                 {" "}
                 Client Login
               </StyledDropDownItem>
               <StyledDropDownItem
                 to="#"
                 onClick={e => {
                   window.location.href =
                     "mailto:support@meetdiverse.com?Subject=Diverse%20Website%20Submission"
                   e.preventDefault()
                 }}
               >
                 {" "}
                 Email Us
               </StyledDropDownItem>
             </StyledDropDownItemsContainer>
           </DropDown>

           <DropDown icon_expand="+" icon_expanded="-" title="GET IN TOUCH">
             <StyledGetInTouch>
               <StyledSectionSocialMedia>
                 <StyledSectionSocialMediaIcons>
                   <a
                     href="https://www.facebook.com/meetDiverse"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Find us on facebook"
                   >
                     <IconFacebook size={20} />
                   </a>
                 </StyledSectionSocialMediaIcons>
               </StyledSectionSocialMedia>
               <StyledPhoneNumber href="tel:+18333483773">
                 Give Us A Call: <span>1-833-DIVERSE</span>
               </StyledPhoneNumber>
               <GetInTouch />
             </StyledGetInTouch>
           </DropDown>
         </StyledMobileFooterSections>
       )

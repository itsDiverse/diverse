import React from "react"
import LogoFooter from "../../images/diverseLogoFooter.svg"
import { IconFacebook } from "../Icons"

import {
  StyledLink,
  StyledSection,
  StyledSectionContainer,
  StyledSectionColumns,
  StyledSectionLeft,
  StyledSectionRight,
  StyledSectionPhrase,
  StyledSectionButton,
  StyledSectionSocialMedia,
  StyledSectionTitle,
  StyledSectionSubtitleSmall,
  StyledSectionSubtitle,
  StyledLinkBrand,
} from "./FooterSections.styles"

export const FooterSections = () => (
         <StyledSection>
           <StyledSectionContainer>
             <StyledSectionLeft>
               <StyledLinkBrand to="/">
                 <img src={LogoFooter} alt="logo" />
               </StyledLinkBrand>
               <StyledSectionPhrase>
                 We deliver the most impactful sales messages through
                 Personalized-Visual™ communication.
               </StyledSectionPhrase>
               <StyledLink to="/freeProposal/" state={{ modal: true }}>
                 <StyledSectionButton>REQUEST A DEMO</StyledSectionButton>
               </StyledLink>
             </StyledSectionLeft>
             <StyledSectionRight>
               <StyledSectionColumns>
                 <StyledSectionTitle>COMPANY</StyledSectionTitle>
                 <StyledSectionSubtitle
                   to="/freeProposal/"
                   state={{ modal: true }}
                 >
                   Demo Request
                 </StyledSectionSubtitle>
                 <StyledSectionSubtitle to="/comingSoon/">
                   Careers <label>HIRING</label>
                 </StyledSectionSubtitle>
                 <StyledSectionSubtitle to="/privacy/">
                   Privacy Policy
                 </StyledSectionSubtitle>
               </StyledSectionColumns>
               <StyledSectionColumns>
                 <StyledSectionTitle>RESOURCES</StyledSectionTitle>
                 <StyledSectionSubtitle
                   to=""
                   href="https://www.facebook.com/meetDiverse/reviews/"
                   target="_blank"
                   rel="noreferrer"
                 >
                   Reviews
                 </StyledSectionSubtitle>
                 <StyledSectionSubtitle to="https://app.meetdiverse.com">
                   Client Login
                 </StyledSectionSubtitle>
                 <StyledSectionSubtitle
                   to="#"
                   onClick={e => {
                     window.location.href =
                       "mailto:support@meetdiverse.com?Subject=Diverse%20Website%20Submission"
                     e.preventDefault()
                   }}
                 >
                   Email Us
                 </StyledSectionSubtitle>
               </StyledSectionColumns>
               <StyledSectionColumns>
                 <StyledSectionTitle>GET IN TOUCH</StyledSectionTitle>
                 <StyledSectionSubtitleSmall>
                   Give Us A Call:
                 </StyledSectionSubtitleSmall>
                 <StyledSectionSubtitle to="" href="tel:+18333483773">
                   <span>1-833-DIVERSE</span>
                 </StyledSectionSubtitle>
                 <StyledSectionSocialMedia>
                   <a
                     href="https://www.facebook.com/meetDiverse"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Find us on facebook"
                   >
                     <IconFacebook size={20} />
                   </a>{" "}
                 </StyledSectionSocialMedia>
               </StyledSectionColumns>
             </StyledSectionRight>
           </StyledSectionContainer>
         </StyledSection>
       )

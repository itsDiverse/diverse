import React from "react"
import { Brand } from "../Brand"
import { DarkModeSelector } from "../DarkModeSelector"
import {
  StyledSection,
  StyledSectionContainer,
  StyledSectionColumns,
  StyledSectionLeft,
  StyledSectionRight,
  StyledSectionPhrase,
  StyledSectionSocialMedia,
  StyledSectionTitle,
  StyledSectionSubtitle,
  StyledSectionSubtitleSmall,
} from "./FooterSections.styles"
import { IconInstagram, IconFacebook } from "../Icons"
export const FooterSections = () => (
  <StyledSection>
    <Brand size={50}></Brand>
    <StyledSectionContainer>
      <StyledSectionLeft>
        <StyledSectionPhrase>
          We develop multi-channel sales processes to help businesses attract,
          close, and retain customers.
        </StyledSectionPhrase>
        <DarkModeSelector />
      </StyledSectionLeft>
      <StyledSectionRight>
        <StyledSectionColumns>
          <StyledSectionTitle>COMPANY</StyledSectionTitle>
          <StyledSectionSubtitle>About Us</StyledSectionSubtitle>
          <StyledSectionSubtitle>Free Proposal</StyledSectionSubtitle>
          <StyledSectionSubtitle>Careers</StyledSectionSubtitle>
          <StyledSectionSubtitle>Privacy Policy</StyledSectionSubtitle>
          <StyledSectionSubtitle>Terms</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>RESOURCES</StyledSectionTitle>
          <StyledSectionSubtitle>FAQs</StyledSectionSubtitle>
          <StyledSectionSubtitle>Client Login</StyledSectionSubtitle>
          <StyledSectionSubtitle>Blog</StyledSectionSubtitle>
          <StyledSectionSubtitle>Example Link</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>GET IN TOUCH</StyledSectionTitle>
          <StyledSectionSubtitle>Contact Us</StyledSectionSubtitle>
          <StyledSectionSubtitle>Live Chat</StyledSectionSubtitle>
          <StyledSectionSocialMedia>
            <IconFacebook size={20} />
            <IconInstagram size={20} />
          </StyledSectionSocialMedia>
          <StyledSectionSubtitleSmall>Call Or Text:</StyledSectionSubtitleSmall>
          <StyledSectionSubtitle>
            <span>(833)-DIVERSE</span>
          </StyledSectionSubtitle>
        </StyledSectionColumns>
      </StyledSectionRight>
    </StyledSectionContainer>
  </StyledSection>
)

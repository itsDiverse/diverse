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
          <StyledSectionSubtitle to="/">About Us</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Free Proposal</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Careers</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Privacy Policy</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Terms</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>RESOURCES</StyledSectionTitle>
          <StyledSectionSubtitle to="/">FAQs</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Client Login</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Blog</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Example Link</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>GET IN TOUCH</StyledSectionTitle>
          <StyledSectionSubtitle to="/">Contact Us</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Live Chat</StyledSectionSubtitle>
          <StyledSectionSocialMedia>
            <IconFacebook size={20} />
            <IconInstagram size={20} />
          </StyledSectionSocialMedia>
          <StyledSectionSubtitleSmall>Call Or Text:</StyledSectionSubtitleSmall>
          <StyledSectionSubtitle to="/">
            <span>(833)-DIVERSE</span>
          </StyledSectionSubtitle>
        </StyledSectionColumns>
      </StyledSectionRight>
    </StyledSectionContainer>
  </StyledSection>
)

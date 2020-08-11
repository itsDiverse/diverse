import React from "react"
import { Link } from "gatsby"
import { Brand } from "../../Brand"
import { IconInstagram, IconFacebook } from "../../Icons"

import {
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
} from "./FooterSections.styles"

export const FooterSections = () => (
  <StyledSection>
    <StyledSectionContainer>
      <StyledSectionLeft>
        <Brand size={50}></Brand>
        <StyledSectionPhrase>
          We develop multi-channel sales processes to help businesses attract,
          close, and retain customers.
        </StyledSectionPhrase>
        <Link to="/modalPopUp/" state={{ modal: true }}>
          <StyledSectionButton to="/modalPopUp/">
            GET A FREE PROPOSAL
          </StyledSectionButton>
        </Link>
      </StyledSectionLeft>
      <StyledSectionRight>
        <StyledSectionColumns>
          <StyledSectionTitle>COMPANY</StyledSectionTitle>
          <StyledSectionSubtitle to="/">About Us</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Free Proposal</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">
            Careers <label>HIRING</label>
          </StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Privacy Policy</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>RESOURCES</StyledSectionTitle>
          <StyledSectionSubtitle to="/">FAQs</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Client Login</StyledSectionSubtitle>
          <StyledSectionSubtitle to="/">Blog</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>GET IN TOUCH</StyledSectionTitle>
          <StyledSectionSubtitle to="/">Contact Us</StyledSectionSubtitle>
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

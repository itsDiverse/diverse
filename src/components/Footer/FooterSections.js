import React from "react"
import LogoFooter from "../../images/diverseLogoFooter.svg"
import { IconInstagram, IconFacebook } from "../Icons"

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
          We develop multi-channel sales processes to help businesses attract,
          close, and retain customers.
        </StyledSectionPhrase>
        <StyledLink to="/freeProposal/" state={{ modal: true }}>
          <StyledSectionButton>GET A FREE PROPOSAL</StyledSectionButton>
        </StyledLink>
      </StyledSectionLeft>
      <StyledSectionRight>
        <StyledSectionColumns>
          <StyledSectionTitle>COMPANY</StyledSectionTitle>
          <StyledSectionSubtitle to="/freeProposal/" state={{ modal: true }}>
            Free Proposal
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
          <StyledSectionSubtitle to="/comingSoon/">
            Client Login
          </StyledSectionSubtitle>
          <StyledSectionSubtitle to="/comingSoon/">Blog</StyledSectionSubtitle>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <StyledSectionTitle>GET IN TOUCH</StyledSectionTitle>
          <StyledSectionSocialMedia>
            <a
              href="https://www.facebook.com/meetDiverse"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on facebook"
            >
              <IconFacebook size={20} />
            </a>{" "}
            <a
              href="https://www.instagram.com/meetdiverse/"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on instagram"
            >
              <IconInstagram size={20} />
            </a>
          </StyledSectionSocialMedia>
          <StyledSectionSubtitleSmall>
            Give Us A Call:
          </StyledSectionSubtitleSmall>
          <StyledSectionSubtitle to="" href="tel:8333483773">
            <span>(833)-DIVERSE</span>
          </StyledSectionSubtitle>
        </StyledSectionColumns>
      </StyledSectionRight>
    </StyledSectionContainer>
  </StyledSection>
)

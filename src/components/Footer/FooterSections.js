import React from "react"

import {
  StyledSection,
  StyledSectionContainer,
  StyledSectionColumns,
  StyledSectionLeft,
  StyledSectionRight,
  StyledSectionPhrase,
} from "./FooterSections.styles"

export const FooterSections = () => (
  <StyledSection>
    <h1>LogoHere</h1>
    <StyledSectionContainer>
      <StyledSectionLeft>
        <StyledSectionPhrase>
          We develop multi-channel sales processes to help businesses attract,
          close, and retain customers.
        </StyledSectionPhrase>
        <div>darkmode selector</div>
      </StyledSectionLeft>
      <StyledSectionRight>
        <StyledSectionColumns>
          <h4>COMPANY</h4>
          <h5>About Us</h5>
          <h5>Free Proposal</h5>
          <h5>Careers</h5>
          <h5>Privacy Policy</h5>
          <h5>Terms</h5>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <h4>RESOURCES</h4>
          <h5>FAQs</h5>
          <h5>Client Login</h5>
          <h5>Blog</h5>
          <h5>Example Link</h5>
        </StyledSectionColumns>
        <StyledSectionColumns>
          <h4>GET IN TOUCH</h4>
          <h5>Contact Us</h5>
          <h5>Live Chat</h5>
          <h5>F I</h5>
          <h6>Call Or Text:</h6>
          <h5>(833)-DIVERSE</h5>
        </StyledSectionColumns>
      </StyledSectionRight>
    </StyledSectionContainer>
  </StyledSection>
)

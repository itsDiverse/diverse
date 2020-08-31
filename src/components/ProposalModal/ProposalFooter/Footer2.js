import React from "react"
import {
  StyledFooterContainer,
  StyledFooterContent,
  StyledFooterTitleStepTwo,
  StyledFooterCardSection,
  StyledFooterCardSectionImg,
  StyledFooterCardSectionText,
  StyledNameStrong,
} from "../Proposal.styles"
import { TestimonialImg } from "./testimonials"

export const Footer2 = () => (
  <div>
    <StyledFooterContainer>
      <StyledFooterTitleStepTwo>
        "Diverse is absolutely excellent, and true professionals at their craft.
        <br />
        They are a valued team member to CTC and what we are doing.
        <br />
        Thank you Diverse for always going the extra mile."
      </StyledFooterTitleStepTwo>
      <StyledFooterContent>
        <StyledFooterCardSection>
          <StyledFooterCardSectionImg>
            <TestimonialImg />
          </StyledFooterCardSectionImg>
          <StyledFooterCardSectionText>
            <StyledNameStrong>Brandom Livingston</StyledNameStrong>
            <br />
            President - Coast to Coast Title & Escrow
          </StyledFooterCardSectionText>
        </StyledFooterCardSection>
      </StyledFooterContent>
    </StyledFooterContainer>
  </div>
)

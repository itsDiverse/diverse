import React from "react"

import {
  StyledMenuFooter,
  StyledButton,
  StyledFooterSepearator,
  StyledProposalTitle,
  StyledProposalSubheading,
  StyledButtonRow,
  StyledButtonDescription,
} from "./MenuFooter.styles"

import { IconPhone, IconWhitePage } from "../icons"

const ProposalCTA = () => (
  <StyledButton color="blue">
    <StyledButtonRow>
      <IconWhitePage size={25}></IconWhitePage>
      <StyledButtonDescription>
        <StyledProposalTitle>Get A Free Proposal</StyledProposalTitle>
        <StyledProposalSubheading>
          Tailored to your company's needs.
        </StyledProposalSubheading>
      </StyledButtonDescription>
    </StyledButtonRow>
  </StyledButton>
)
const CallOrTextFooter = () => (
  <StyledMenuFooter>
    <StyledButton color="#ebe8e8"> X </StyledButton>
    <StyledButton rounded={true} color="blue">
      CALL
    </StyledButton>
    <StyledFooterSepearator> or </StyledFooterSepearator>
    <StyledButton rounded={true} color="blue">
      TEXT
    </StyledButton>
  </StyledMenuFooter>
)
const CallToActionFooter = () => (
  <StyledMenuFooter>
    <StyledButton color="#ebe8e8">
      <IconPhone size={15} color={"#4b4b4b"} />
    </StyledButton>
    <ProposalCTA></ProposalCTA>
  </StyledMenuFooter>
)

const MenuFooter = selectedMenu => {
  console.log("selected menu ", selectedMenu)
  if (selectedMenu === "Services") return <CallOrTextFooter />
  else return <CallToActionFooter></CallToActionFooter>
}

export default MenuFooter

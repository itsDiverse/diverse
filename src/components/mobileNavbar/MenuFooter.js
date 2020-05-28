import React from "react"

import {
  StyledMenuFooter,
  StyledButton,
  StyledSquaredButton,
  StyledFooterSepearator,
  StyledProposalTitle,
  StyledProposalSubheading,
  StyledButtonRow,
  StyledButtonDescription,
  StyledCallOrTextFooter,
  StyledCallToActionFooter,
} from "./MenuFooter.styles"

import { IconPhone, IconWhitePage } from "../icons"

const ProposalCTA = () => (
  <StyledButton primary>
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
const CallOrTextFooter = ({ onCancelPhone }) => (
  <StyledCallOrTextFooter>
    <StyledSquaredButton onClick={onCancelPhone}>X</StyledSquaredButton>
    <StyledButton rounded={true} primary>
      CALL
    </StyledButton>
    <StyledFooterSepearator> or </StyledFooterSepearator>
    <StyledButton rounded={true} primary>
      TEXT
    </StyledButton>
  </StyledCallOrTextFooter>
)
const CallToActionFooter = ({ onClickTelephone }) => (
  <StyledCallToActionFooter>
    <StyledSquaredButton onClick={onClickTelephone}>
      <IconPhone size={15} color={"#4b4b4b"} />
    </StyledSquaredButton>
    <ProposalCTA></ProposalCTA>
  </StyledCallToActionFooter>
)

const MenuFooter = selectedMenu => {
  const [telephone, setTelephone] = React.useState(false)
  return (
    <StyledMenuFooter>
      {telephone ? (
        <CallOrTextFooter
          onCancelPhone={() => setTelephone(false)}
        ></CallOrTextFooter>
      ) : (
        <CallToActionFooter
          onClickTelephone={() => setTelephone(true)}
        ></CallToActionFooter>
      )}
    </StyledMenuFooter>
  )
}

export default MenuFooter

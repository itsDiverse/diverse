import React from "react"

import {
  StyledMenuFooter,
  StyledFooterSepearator,
  StyledProposalTitle,
  StyledProposalSubheading,
  StyledButtonRow,
  StyledButtonDescription,
  StyledCallOrTextFooter,
  StyledCallToActionFooter,
} from "./MenuFooter.styles"
import { Button, SquaredButton } from "../Button"
import { IconPhone, IconWhitePage } from "../icons"

const ProposalCTA = () => (
  <Button primary>
    <StyledButtonRow>
      <IconWhitePage size={25}></IconWhitePage>
      <StyledButtonDescription>
        <StyledProposalTitle>Get A Free Proposal</StyledProposalTitle>
        <StyledProposalSubheading>
          Tailored to your company's needs.
        </StyledProposalSubheading>
      </StyledButtonDescription>
    </StyledButtonRow>
  </Button>
)
const CallOrTextFooter = ({ onCancelPhone }) => (
  <StyledCallOrTextFooter>
    <SquaredButton onClick={onCancelPhone}>X</SquaredButton>
    <Button rounded={true} primary>
      CALL
    </Button>
    <StyledFooterSepearator> or </StyledFooterSepearator>
    <Button rounded={true} primary>
      TEXT
    </Button>
  </StyledCallOrTextFooter>
)
const CallToActionFooter = ({ onClickTelephone }) => (
  <StyledCallToActionFooter>
    <SquaredButton onClick={onClickTelephone}>
      <IconPhone size={15} color={"#4b4b4b"} />
    </SquaredButton>
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

import React from "react"

import {
  StyledMenuFooter,
  StyledFooterSepearator,
  StyledCallOrTextFooter,
  StyledCallToActionFooter,
} from "./MenuFooter.styles"
import { Button, SquaredButton } from "../Button"
import { IconPhone } from "../Icons"
import { ProposalCTA } from "../ProposalCTA"

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

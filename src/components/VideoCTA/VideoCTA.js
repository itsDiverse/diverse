import React from "react"
import { Button } from "../Button"
import { IconPlay, IconArrowRight } from "../Icons"
import { StyledCTAText, StyledGroup, StyledButtonText } from "./VideoCTA.styles"

export const VideoCTA = ({ icon, noAction, button }) => (
  <StyledGroup>
    {icon ? <IconPlay size={20} /> : null}
    {button ? (
      <Button primary rounded small>
        <StyledButtonText>VIDEO</StyledButtonText>
      </Button>
    ) : null}
    <StyledCTAText>
      How Diverse Works {noAction ? "" : <IconArrowRight />}
    </StyledCTAText>
  </StyledGroup>
)

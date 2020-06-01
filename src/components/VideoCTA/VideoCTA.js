import React from "react"
import { Button } from "../Button"
import { IconPlay } from "../Icons"
import { StyledCTAText, StyledGroup } from "./VideoCTA.styles"

export const VideoCTA = ({ icon, button }) => (
  <StyledGroup>
    {icon ? <IconPlay size={20} /> : null}
    {button ? (
      <Button primary rounded>
        Video
      </Button>
    ) : null}
    <StyledCTAText> How Diverse Works ></StyledCTAText>
  </StyledGroup>
)

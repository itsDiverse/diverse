import React from "react"
import {
  StyledComingWrapper,
  StyledHeading,
  StyledTitle,
  StyledVideoContainer,
  StyledVideo,
} from "./ComingSoon.styles"

export default props => (
  <StyledComingWrapper>
    <StyledHeading>THIS PAGE IS NEAR PUBLICATION</StyledHeading>
    <StyledTitle>
      Please Check Back <br />
      At A Later Date
    </StyledTitle>
    <StyledVideoContainer>
      <StyledVideo id="Video0" poster="" autoPlay playsInline muted loop>
        <source src={props.videos.comingSoon} type="video/webm"></source>
        <source src={props.videos.comingSoon} type="video/mp4"></source>
      </StyledVideo>
    </StyledVideoContainer>
  </StyledComingWrapper>
)

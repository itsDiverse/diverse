import React from "react"
import {
  StyledContentWrapper,
  GetFreeProposalButtonWhite,
} from "./Module23.styles"

import { ModalLink } from "../../ModalLink"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div id="work" className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              <div className="video-container">
                {props.theme.video ? (
                  <video
                    id="Video23"
                    preload="yes"
                    poster=""
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{ outline: "none" }}
                  >
                    <source
                      src={props.videos.cubesVideo}
                      type="video/webm"
                    ></source>
                    <source
                      src={props.videos.cubesVideo}
                      type="video/mp4"
                    ></source>
                  </video>
                ) : (
                  <div />
                )}
              </div>
            </div>
            <div className="title-section">
              <p className="heading-section">{props.data.heading}</p>
              <h2>{props.data.title}</h2>
              <p className="subtitle-section">{props.data.text}</p>
              <div className="powerful-tools-btn">
                {props.data.singleButton && (
                  <ModalLink to="/freeProposal/">
                    <GetFreeProposalButtonWhite to="/freeProposal/">
                      {props.data.singleButton}
                    </GetFreeProposalButtonWhite>
                  </ModalLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

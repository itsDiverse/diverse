import React from "react"
import {
  StyledContentWrapper,
  GetFreeProposalButtonWhite,
} from "./Module23.styles"
import { Link } from "gatsby"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              <div className="video-container">
                {props.theme.video ? (
                  <video
                    id="Video16v"
                    poster=""
                    autoPlay
                    playsInline
                    muted
                    loop
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
                  <Link to="/modalPopUp/" state={{ modal: true }}>
                    <GetFreeProposalButtonWhite to="/modalPopUp/">
                      {props.data.singleButton}
                    </GetFreeProposalButtonWhite>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

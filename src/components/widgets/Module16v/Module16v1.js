import React from "react"

import { StyledContentWrapper } from "./Module16v.styles"
import { GetFreeProposalButton } from "../../Button"
import { Link } from "gatsby"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper powerful-tools-wrapper">
      <div className="container-lg">
        <div className="powerfultoolssection">
          <div className="powerful-tools-section">
            <div className="powerful-title-section">
              <p>{props.data.heading}</p>
              <h1>{props.data.title}</h1>
              <p>{props.data.text}</p>
              <div className="powerful-tools-btn">
                {props.data.textLeft && (
                  <a
                    href={props.data.linkLeft}
                    className="common-button get_started_btn common-Link"
                  >
                    {props.data.textLeft}
                  </a>
                )}
                {props.data.textRight && (
                  <a
                    href={props.data.linkRight}
                    className="common-button contact_sales_btn common-Link"
                  >
                    {props.data.textRight}
                  </a>
                )}
                {props.data.singleButton && (
                  <Link to="/modalPopUp/" state={{ modal: true }}>
                    <GetFreeProposalButton to="/modalPopUp/">
                      {props.data.singleButton}
                    </GetFreeProposalButton>
                  </Link>
                )}
              </div>
            </div>
            <div className="video-container">
              <div className="actualVideo">
                {props.theme.video ? (
                  <video
                    className="js-actual-video"
                    id="Video16v"
                    poster=""
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={props.videos.cubeVideo}
                      type="video/webm"
                    ></source>
                    <source
                      src={props.videos.cubeVideo}
                      type="video/mp4"
                    ></source>
                  </video>
                ) : (
                  <img
                    className="js-actual-video"
                    src={props.images.image16v}
                    alt={props.images.image16vAlt}
                  ></img>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

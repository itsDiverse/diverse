import React from "react"

import { StyledContentWrapper } from "./Module16v.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper powerful-tools-wrapper">
      <div className="container-lg">
        <div className="powerfultoolssection">
          <div className="powerful-tools-section">
            <div className="powerful-title-section">
              <h2>Lorem Ipsum performance</h2>
              <p>
                Radar for Fraud Teams helps you fine-tune how Radar operates,
                get fraud insights on suspicious charges, and assess your fraud
                management performance from a unified dashboard.
              </p>
              <div className="powerful-tools-btn">
                <a
                  href="#"
                  className="common-button get_started_btn common-Link"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="common-button contact_sales_btn common-Link"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="fraud-teams-media">
              <div className="fraudteams_video-container">
                <div className="fraudteams_video">
                  <div className="fraud-Video">
                    <video
                      muted=""
                      playsinline=""
                      autoplay=""
                      webkit-playsinline=""
                      loop=""
                      id="demovideo"
                      poster=""
                      preload="metadata"
                    >
                      <source
                        src={props.videos.sample2}
                        type="video/mp4"
                      ></source>
                      <source
                        src={props.videos.sample2}
                        type="video/ogg"
                      ></source>
                    </video>
                    <div className="actualVideo">
                      <video
                        className="js-actual-video"
                        id="Video1"
                        poster=""
                        autoplay="true"
                        loop
                      >
                        <source
                          src={props.videos.sample2}
                          type="video/webm"
                        ></source>
                        <source
                          src={props.videos.sample2}
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

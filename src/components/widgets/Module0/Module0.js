import React from "react"
import { StyledContentWrapper, StyledBrandsWrapper } from "./Module0.styles"
import { Link } from "gatsby"
import { GetFreeProposalButton } from "../../Button"
import { StyledBrandLogos } from "./brands"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="title-section">
              <p className="heading-section">{props.data.heading}</p>
              <h1>{props.data.title}</h1>
              <p className="subtitle-section">{props.data.text}</p>
              <div className="powerful-tools-btn">
                {props.data.singleButton && (
                  <Link to="/modalPopUp/" state={{ modal: true }}>
                    <GetFreeProposalButton to="/modalPopUp/">
                      {props.data.singleButton}
                    </GetFreeProposalButton>
                  </Link>
                )}
              </div>
              <StyledBrandsWrapper>
                <StyledBrandLogos />
              </StyledBrandsWrapper>
            </div>
            <div className="video-container">
              {props.theme.video ? (
                <video id="Video16v" poster="" autoPlay muted loop>
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
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

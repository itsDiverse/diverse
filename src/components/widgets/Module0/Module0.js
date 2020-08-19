import React from "react"
import { StyledContentWrapper } from "./Module0.styles"
import { Link } from "gatsby"
import { GetFreeProposalButton } from "../../Button"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              {props.theme.video ? (
                <video id="Video0" poster="" autoPlay playsInline muted loop>
                  <source
                    src={props.videos.cubePipesVideo}
                    type="video/webm"
                  ></source>
                  <source
                    src={props.videos.cubePipesVideo}
                    type="video/mp4"
                  ></source>
                </video>
              ) : (
                <div />
              )}
            </div>
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
              <div className="brands-wrapper">
                <img src={props.images.brands} alt={props.images.brandsAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

import React from "react"
import { StyledContentWrapper } from "./Module0.styles"

import { GetFreeProposalButton } from "../../Button"
import { ModalLink } from "../../ModalLink"
import Brands from "../../../images/Module0/brands.svg"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              <video
                id="Video0"
                preload="yes"
                autoPlay="autoplay"
                playsInline
                muted
                loop
                style={{ outline: "none" }}
              >
                <source
                  src={props.videos.cubePipesVideo}
                  type="video/mp4"
                ></source>
                <source
                  src={props.videos.cubePipesVideo1}
                  type="video/m4v"
                ></source>
                <source
                  src={props.videos.cubePipesVideo2}
                  type="video/webm"
                ></source>
              </video>
            </div>
            <div className="title-section">
              <p className="heading-section">{props.data.heading}</p>
              <h1>{props.data.title}</h1>
              <p className="subtitle-section">{props.data.text}</p>
              <div className="powerful-tools-btn">
                {props.data.singleButton && (
                  <ModalLink to="/freeProposal/">
                    <GetFreeProposalButton to="/freeProposal/">
                      {props.data.singleButton}
                    </GetFreeProposalButton>
                  </ModalLink>
                )}
              </div>
            </div>
          </div>
          <div className="brands-wrapper">
            <img src={Brands} alt={props.images.brandsAlt} />
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

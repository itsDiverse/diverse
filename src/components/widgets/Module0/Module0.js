import React from "react"
import { StyledContentWrapper } from "./Module0.styles"

import { GetFreeProposalButton } from "../../Button"
import { ModalLink } from "../../ModalLink"
import { useMediaQuery } from "react-responsive"
import Brands from "../../../images/Module0/brands.svg"

export default props => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" })
  return (
    <StyledContentWrapper theme={props.theme}>
      <div className="content-wrapper">
        <div className="container-lg">
          <div className="toolssection">
            <div className="tools-section">
              <div className="video-container">
                {props.theme.video && !isTabletOrMobile ? (
                  <video
                    id="Video0"
                    preload="none"
                    poster=""
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{ outline: "none" }}
                  >
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
                  <div className="image-container">
                    <img
                      src={props.images.pipesImage}
                      alt={props.images.pipesImageAlt}
                    />
                  </div>
                )}
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
}

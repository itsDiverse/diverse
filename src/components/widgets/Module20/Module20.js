import React from "react"

import { StyledContentWrapper } from "./Module20.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="save-time-on-reviews">
        <div className="container-lg">
          <div className="save-time-on-reviews-title">
            <h3>{props.data.title}</h3>
            <p>{props.data.subtitle}</p>
          </div>
        </div>
        <div className="feature patterns">
          <div className="container-lg">
            <div className="patterns-content">
              <div className="patterns-left-content">
                <h3>{props.data.left.title}</h3>
                <p>{props.data.left.text}</p>
              </div>
              <div className="patterns-right-content">
                <div className="image-container">
                  <img
                    src={props.images.imgRight}
                    alt={props.images.imgRightAlt}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature networks">
          <div className="container-lg">
            <div className="networks-content">
              <div className="networks-left-content">
                <h3>{props.data.right.title}</h3>
                <p>{props.data.right.text}</p>
              </div>
              <div className="networks-right-content">
                <div className="image-container">
                  <img
                    src={props.images.imgLeft}
                    alt={props.images.imgLeftAlt}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

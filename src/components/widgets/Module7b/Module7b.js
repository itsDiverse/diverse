import React from "react"
import { StyledContentWrapper } from "./Module7b.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="platform-management-section">
          <div className="platform-management-left-content">
            <img
              src={props.images.section2Title}
              alt={props.images.section2TitleAlt}
            />
            <h2 className="uppercase-text">{props.data.title2}</h2>
            <p>{props.data.paragraph3}</p>
            <p>{props.data.paragraph4}</p>
          </div>
          <div className="platform-management-right-content laptop">
            <span className="shadow"></span>
            <div className="screen"></div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

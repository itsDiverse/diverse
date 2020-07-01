import React from "react"
import { StyledContentWrapper } from "./Module7a.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="international-support">
          <div className="international-support-left-content">
            <img
              src={props.images.section3Title}
              alt={props.images.section3TitleAlt}
            />
            <h2 className="uppercase-text">{props.data.title3}</h2>
            <p className="common-BodyText">
              {props.data.text.before}{" "}
              <a href={props.data.text.link1.url} className="common-Link">
                {props.data.text.link1.text}
              </a>{" "}
              {props.data.text.between1}{" "}
              <a href={props.data.text.link2.url} className="common-Link">
                {props.data.text.link2.text}
              </a>{" "}
              {props.data.text.between2}
              <a
                href={props.data.text.link3.url}
                className="js-features-list-trigger"
              >
                {props.data.text.link3.text}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                  <path d="M6 4V0H4v4H0v2h4v4h2V6h4V4H6z"></path>
                </svg>
              </a>
            </p>
          </div>
          <div className="international-support-right-content">
            <aside></aside>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

import React from "react"
// import "./Module9.module.css"

import { StyledContentWrapper } from "./Module9.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="payments-stack-section">
        <div className="container-lg">
          {props.theme.heading && (
            <div className="payments-stack-section-intro">
              <h2 className="section-title">{props.data.title}</h2>
              <p className="section-desc">{props.data.subtitle}</p>
            </div>
          )}
          <div className="platform-diagram diagram">
            <div className="diagram-apps diagram-section animated fadeInLeft ">
              <a
                href={props.data.link1}
                className="diagram-product diagram-product-radar"
              ></a>
            </div>
            <div className="diagram-apps-content diagram-content animated fadeInRight">
              <h4 className="uppercase-text diagram-title">
                {props.data.title1}
              </h4>
              <p className="diagram-desc">{props.data.text1}</p>
            </div>
            <div className="diagram-platforms diagram-section animated delay-06s left15 fadeInLeft">
              <a
                href={props.data.link2}
                className="diagram-product diagram-product-payments"
              ></a>
            </div>
            <div className="diagram-platforms-content diagram-content animated delay-06s right15 fadeInRight">
              <h4 className="uppercase-text diagram-title">
                {props.data.title2}
              </h4>
              <p className="diagram-desc">{props.data.text2}</p>
            </div>
            <div className="diagram-infra diagram-section js-diagram animated fadeInLeft delay-03s left10">
              <a
                href={props.data.link3}
                className="diagram-product diagram-product-connect"
              ></a>
            </div>
            <div className="diagram-infra-content diagram-content js-diagram-explanation animated fadeInRight delay-03s right10">
              <h4 className="uppercase-text diagram-title">
                {props.data.title3}
              </h4>
              <p className="diagram-desc">{props.data.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

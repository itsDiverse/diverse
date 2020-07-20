import React from "react"
//import "./Module6.module.css"

import { StyledContentWrapper } from "./Module6.styles.js"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="process-section">
        <div className="container-lg">
          <div className="process-content-section">
            <div className="process-content-title">
              <h2 className="section-title uppertext">{props.data.title}</h2>
              <p className="section-desc">{props.data.subtitle}</p>
            </div>
          </div>
          <ul className="timeline">
            <li className="line"></li>
            <li className="timeline-step">
              <div className="icon-container submit">
                <figure className="icon submit"></figure>
              </div>
              <p>
                {props.data.text1}
                <br></br>
                <span className="step-no">{props.data.step1}</span>
              </p>
            </li>
            <li className="timeline-step sign-documents">
              <div className="icon-container documents-bank-account">
                <figure className="icon documents"></figure>
              </div>
              <p>
                {props.data.text2}
                <br></br>
                <span className="step-no">{props.data.step2}</span>
              </p>
            </li>
            <li className="timeline-step">
              <div className="icon-container incorporation">
                <figure className="icon incorporation"></figure>
              </div>
              <p>
                {props.data.text3}
                <br></br>
                <span className="step-no">{props.data.step3}</span>
              </p>
            </li>
            <li className="timeline-step">
              <div className="icon-container tax-id">
                <figure className="icon tax-id"></figure>
              </div>
              <p>
                {props.data.text4}
                <br></br>
                <span className="step-no">{props.data.step4}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

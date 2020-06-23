import React from "react"
//import "./Module6.module.css"

import { StyledContentWrapper } from "./Module6.styles.js"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div class="content-wrapper">
      <div class="process-section">
        <div class="container-lg">
          <div class="process-content-section">
            <div class="process-content-title">
              <h2 class="section-title uppertext">{props.data.title}</h2>
              <p class="section-desc">{props.data.subtitle}</p>
            </div>
          </div>
          <ul class="timeline">
            <li class="line"></li>
            <li class="timeline-step">
              <div class="icon-container submit">
                <figure class="icon submit"></figure>
              </div>
              <p>
                {props.data.text1}
                <br></br>
                <span class="step-no">{props.data.step1}</span>
              </p>
            </li>
            <li class="timeline-step sign-documents">
              <div class="icon-container documents-bank-account">
                <figure class="icon documents"></figure>
              </div>
              <p>
                {props.data.text2}
                <br></br>
                <span class="step-no">{props.data.step2}</span>
              </p>
            </li>
            <li class="timeline-step">
              <div class="icon-container incorporation">
                <figure class="icon incorporation"></figure>
              </div>
              <p>
                {props.data.text3}
                <br></br>
                <span class="step-no">{props.data.step3}</span>
              </p>
            </li>
            <li class="timeline-step">
              <div class="icon-container tax-id">
                <figure class="icon tax-id"></figure>
              </div>
              <p>
                {props.data.text4}
                <br></br>
                <span class="step-no">{props.data.step4}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

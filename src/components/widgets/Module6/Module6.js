import React from "react"
//import "./Module6.module.css"

import { StyledContentWrapper } from "./Module6.styles.js"

export default props => (
  <StyledContentWrapper images={props.images}>
    <div class="content-wrapper">
      <div class="process-section">
        <div class="container-lg">
          <div class="process-content-section">
            <div class="process-content-title">
              <h2 class="section-title uppertext">What’s the process?</h2>
              <p class="section-desc">
                With Stripe Atlas, your company can be set up within days. We
                help with all the paperwork.
              </p>
            </div>
          </div>
          <ul class="timeline">
            <li class="line"></li>
            <li class="timeline-step">
              <div class="icon-container submit">
                <figure class="icon submit"></figure>
              </div>
              <p>
                Submit your application<br></br>
                <span class="step-no">Step 1</span>
              </p>
            </li>
            <li class="timeline-step sign-documents">
              <div class="icon-container documents-bank-account">
                <figure class="icon documents"></figure>
              </div>
              <p>
                Sign documents and access your bank account<br></br>
                <span class="step-no">Step 2</span>
              </p>
            </li>
            <li class="timeline-step">
              <div class="icon-container incorporation">
                <figure class="icon incorporation"></figure>
              </div>
              <p>
                Your company is formed in Delaware
                <br></br>
                <span class="step-no">Step 3</span>
              </p>
            </li>
            <li class="timeline-step">
              <div class="icon-container tax-id">
                <figure class="icon tax-id"></figure>
              </div>
              <p>
                Receive a tax ID number from the IRS<br></br>
                <span class="step-no">Step 4</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

import React from "react"
//import "./Module6.module.css"
import { data } from "../../../data"

import { StyledContentWrapper } from "./Module6.styles.js"

export default props => (
  <StyledContentWrapper>
    <div className="content-wrapper">
      <div className="process-section">
        <div className="container-lg">
          <div className="process-content-section">
            <div className="process-content-title">
              <h2 className="section-title uppertext">{data.module6.title}</h2>
              <p className="section-desc">{data.module6.subtitle}</p>
            </div>
          </div>
          <ul className="timeline">
            <li className="line"></li>
            <li className="timeline-step">
              <div className="icon-container submit">
                <figure className="icon submit"></figure>
              </div>
              <p>
                Submit your application
                <span className="step-no">Step 1</span>
              </p>
            </li>
            <li className="timeline-step sign-documents">
              <div className="icon-container documents-bank-account">
                <figure className="icon documents"></figure>
              </div>
              <p>
                Sign documents and access your bank account
                <span className="step-no">Step 2</span>
              </p>
            </li>
            <li className="timeline-step">
              <div className="icon-container incorporation">
                <figure className="icon incorporation"></figure>
              </div>
              <p>
                Your company is formed in Delaware - USA
                <span className="step-no">Step 3</span>
              </p>
            </li>
            <li className="timeline-step">
              <div className="icon-container tax-id">
                <figure className="icon tax-id"></figure>
              </div>
              <p>
                Receive a tax ID number from the IRS
                <span className="step-no">Step 4</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

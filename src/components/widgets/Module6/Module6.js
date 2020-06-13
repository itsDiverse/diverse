import React from "react"
import "./Module6.module.css"

export default props => (
  <>
    <div styleName="content-wrapper">
      <div styleName="process-section">
        <div styleName="container-lg">
          <div styleName="process-content-section">
            <div styleName="process-content-title">
              <h2 styleName="section-title uppertext">What’s the process?</h2>
              <p styleName="section-desc">
                With Stripe Atlas, your company can be set up within days. We
                help with all the paperwork.
              </p>
            </div>
          </div>
          <ul styleName="timeline">
            <li styleName="line"></li>
            <li styleName="timeline-step">
              <div styleName="icon-container submit">
                <figure styleName="icon submit"></figure>
              </div>
              <p>
                Submit your application
                <span styleName="step-no">Step 1</span>
              </p>
            </li>
            <li styleName="timeline-step sign-documents">
              <div styleName="icon-container documents-bank-account">
                <figure styleName="icon documents"></figure>
              </div>
              <p>
                Sign documents and access your bank account
                <span styleName="step-no">Step 2</span>
              </p>
            </li>
            <li styleName="timeline-step">
              <div styleName="icon-container incorporation">
                <figure styleName="icon incorporation"></figure>
              </div>
              <p>
                Your company is formed in Delaware
                <span styleName="step-no">Step 3</span>
              </p>
            </li>
            <li styleName="timeline-step">
              <div styleName="icon-container tax-id">
                <figure styleName="icon tax-id"></figure>
              </div>
              <p>
                Receive a tax ID number from the IRS
                <span styleName="step-no">Step 4</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

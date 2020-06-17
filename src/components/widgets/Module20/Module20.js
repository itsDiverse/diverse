import React from "react"
import "./Module20.module.css"
import payments from "./images/related-payments.jpg"
import session from "./images/session.jpg"

import { StyledContentWrapper } from "./Module20.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="save-time-on-reviews">
        <div className="container-lg">
          <div className="save-time-on-reviews-title">
            <h3>Save time on manual reviews</h3>
            <p>
              Improve your ability to detect fraud patterns and take action
              quickly. Stripe’s optimized workflows slash the time it takes to
              review payments.
            </p>
          </div>
        </div>
        <div className="feature patterns">
          <div className="container-lg">
            <div className="patterns-content">
              <div className="patterns-left-content">
                <h3>BUST HIDDEN NETWORKS OF FRAUDSTERS</h3>
                <p>
                  Prevent common fraud patterns like card testing by evaluating
                  payments holistically rather than in isolation. We use device
                  fingerprinting and identity resolution to help you catch
                  repeat fraudsters.
                </p>
              </div>
              <div className="patterns-right-content">
                <div className="image-container">
                  <img src={payments} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature networks">
          <div className="container-lg">
            <div className="networks-content">
              <div className="networks-left-content">
                <h3>
                  CATCH SOPHISTICATED FRAUDSTERS WITH ADVANCED FRAUD INSIGHTS
                </h3>
                <p>
                  Fraudulent purchases often look atypical in comparison to
                  legitimate ones. Our fraud insights make it easy to perform
                  manual reviews. For example, you can compare the geolocated IP
                  address and the credit card address, or look at how behavioral
                  information like time to checkout compares with legitimate
                  buyers for your business.
                </p>
              </div>
              <div className="networks-right-content">
                <div className="image-container">
                  <img src={session}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

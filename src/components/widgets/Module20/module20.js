import React from "react"
import "./Module20.module.css"

export default props => (
  <div styleName="content-wrapper">
    <div styleName="save-time-on-reviews">
      <div styleName="container-lg">
        <div styleName="save-time-on-reviews-title">
          <h3>Save time on manual reviews</h3>
          <p>
            Improve your ability to detect fraud patterns and take action
            quickly. Stripe’s optimized workflows slash the time it takes to
            review payments.
          </p>
        </div>
      </div>
      <div styleName="feature patterns">
        <div styleName="container-lg">
          <div styleName="patterns-content">
            <div styleName="patterns-left-content">
              <h3>BUST HIDDEN NETWORKS OF FRAUDSTERS</h3>
              <p>
                Prevent common fraud patterns like card testing by evaluating
                payments holistically rather than in isolation. We use device
                fingerprinting and identity resolution to help you catch repeat
                fraudsters.
              </p>
            </div>
            <div styleName="patterns-right-content">
              <div styleName="image-container">
                <img src="images/related-payments.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div styleName="feature networks">
        <div styleName="container-lg">
          <div styleName="networks-content">
            <div styleName="networks-left-content">
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
            <div styleName="networks-right-content">
              <div styleName="image-container">
                <img src="images/session.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

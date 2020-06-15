import React from "react"
import "./Module11a.module.css"
import sharing from "./images/sharing.svg"
import charityWater from "./images/charity-water.png"
import route from "./images/route.svg"

export default props => (
  <div styleName="content-wrapper">
    <div styleName="container-lg">
      <div styleName="b2c-marketplaces">
        <div styleName="marketplaces-title-section">
          <img src={sharing} />
          <h3>B2C marketplaces</h3>
          <p>
            Marketplaces connect consumers with what they want: rides, food,
            accommodation, and more. Your payments should meet the same high
            standards as your product experience: with just a tap, Stripe helps
            sellers on your marketplace get paid.
          </p>
        </div>
      </div>
    </div>
    <div styleName="container-xl">
      <div styleName="marketplaces-gallery-section-wrapper">
        <div styleName="marketplaces-gallery-section">
          <div styleName="marketplaces-gallery-photo"></div>
          <div styleName="marketplaces-gallery-content">
            <div styleName="marketplaces-quote-wrapper">
              <div styleName="marketplaces-quote Quote--lyft">
                <h2>
                  <a href="#">
                    <img
                      src={charityWater}
                      width="237"
                      height="30"
                      alt="Lyft logo"
                    />
                  </a>
                </h2>
                <p>
                  charity: water optimized their mobile and web donation flows
                  with Stripe so they can focus on what really matters: bringing
                  clean water to every person on the planet. Using Stripe, they
                  also built a new monthly giving program, which makes it even
                  easier for subscribers to donate throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div styleName="container-xl">
      <div styleName="marketplaces-gallery-bottom-content">
        <div styleName="marketplaces-gallery-bottom-content-left">
          <figure styleName="marketplaces-gallery-routing">
            <img src={route} width="72" height="72" alt="3 arrows spreading" />
          </figure>
          <p>
            Payments for marketplaces used to be hard: accounting for seller
            earnings, paying out multiple parties, managing 1099-Ks, tax
            reporting, and regulatory compliance. Marketplaces shouldn’t have to
            build all that from scratch, so we made{" "}
            <a styleName="common-link" href="#">
              Stripe Connect
            </a>{" "}
            to provide all the tools you need to run a multi-sided marketplace.
          </p>
        </div>
        <div styleName="marketplaces-gallery-bottom-content-right">
          <p>
            Integrating Connect means always having access to state-of-the-art
            technology. Attract and retain more sellers with instant payouts,
            accept payments across all channels, and expand to 30+ countries
            with a single integration.
          </p>
          <ul>
            <li>
              <a styleName="link-arrow common-link" href="#">
                Learn more about Stripe for marketplaces
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

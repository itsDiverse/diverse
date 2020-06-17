import React from "react"
//import style from "./Module11.module.css"
//import sharing from "./images/sharing.svg"
//import lyft from "./images/lyft.png"
//import route from "./images/route.svg"

import { StyledContentWrapper } from "./Module11.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="b2c-marketplaces">
          <div className="marketplaces-title-section">
            <img src={props.images.iconFirst} />
            <h3>B2C marketplaces</h3>
            <p>
              Marketplaces connect consumers with what they want: rides, food,
              accommodation, and more. Your payments should meet the same high
              standards as your product experience: with just a tap, Stripe
              helps sellers on your marketplace get paid.
            </p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="marketplaces-gallery-section-wrapper">
          <div className="marketplaces-gallery-section">
            <div className="marketplaces-gallery-photo"></div>
            <div className="marketplaces-gallery-content">
              <div className="marketplaces-quote-wrapper">
                <div className="marketplaces-quote Quote--lyft">
                  <h2>
                    <a href="#">
                      <img
                        src={props.images.bannerLogo}
                        width="64"
                        height="46"
                        alt="Lyft logo"
                      />
                    </a>
                  </h2>
                  <p>
                    With over 700,000 drivers providing nearly one million rides
                    per day, Lyft uses Stripe to power payments at scale. Lyft
                    also partnered with Stripe to build Express Pay, a
                    first-of-its-kind feature that allows drivers to cash out
                    whenever they want, instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="marketplaces-gallery-bottom-content">
          <div className="marketplaces-gallery-bottom-content-left">
            <figure className="marketplaces-gallery-routing">
              <img
                src={props.images.iconSecond}
                width="72"
                height="72"
                alt="3 arrows spreading"
              />
            </figure>
            <p>
              Payments for marketplaces used to be hard: accounting for seller
              earnings, paying out multiple parties, managing 1099-Ks, tax
              reporting, and regulatory compliance. Marketplaces shouldn’t have
              to build all that from scratch, so we made{" "}
              <a className="common-link" href="#">
                Stripe Connect
              </a>{" "}
              to provide all the tools you need to run a multi-sided
              marketplace.
            </p>
          </div>
          <div className="marketplaces-gallery-bottom-content-right">
            <p>
              Integrating Connect means always having access to state-of-the-art
              technology. Attract and retain more sellers with instant payouts,
              accept payments across all channels, and expand to 30+ countries
              with a single integration.
            </p>
            <ul>
              <li>
                <a className="link-arrow common-link" href="#">
                  Learn more about Stripe for marketplaces
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

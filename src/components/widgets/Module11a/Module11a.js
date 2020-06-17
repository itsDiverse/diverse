import React from "react"
//import "./Module11a.module.css"

import { StyledContentWrapper } from "./Module11a.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="b2c-marketplaces">
          <div className="marketplaces-title-section">
            <img src={props.images.m11aIcon1} />
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
                        src={props.images.m11aBannerLogo}
                        width="237"
                        height="30"
                        alt="Lyft logo"
                      />
                    </a>
                  </h2>
                  <p>
                    charity: water optimized their mobile and web donation flows
                    with Stripe so they can focus on what really matters:
                    bringing clean water to every person on the planet. Using
                    Stripe, they also built a new monthly giving program, which
                    makes it even easier for subscribers to donate throughout
                    the year.
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
                src={props.images.m11aIcon2}
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

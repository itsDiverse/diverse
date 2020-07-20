import React from "react"

import { StyledContentWrapper } from "./Module22.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="container-lg">
      <div className="customer-help-payment">
        <div className="payment_slider payment_slider-columns-container payment_slider_horizontal">
          <div className="Carousel js-carousel payment_slider_carousel">
            <div className="slider_item ">
              <div className="web_nav web_nav--default">
                <div className="web_nav_bar">
                  <div className="web_nav_stoplight"></div>
                  <div className="web_nav_navigation">
                    <div className="web_nav_lock">
                      <span className="icon_nav  icon_nav_lock">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 14"
                          className="Helm_fill--slate6"
                        >
                          <rect y="6" width="10" height="8" rx="2" ry="2" />
                          <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                        </svg>
                      </span>
                    </div>
                    <div className="web_nav_address"></div>
                  </div>
                </div>
                <div className="web_nav_content">
                  <img
                    src={props.images.sliderImg1}
                    alt={props.images.sliderImg1Alt}
                  ></img>
                </div>
              </div>
            </div>
            <div className="slider_item">
              <div className="web_nav web_nav--default">
                <div className="web_nav_bar">
                  <div className="web_nav_stoplight"></div>
                  <div className="web_nav_navigation">
                    <div className="web_nav_lock">
                      <span className="icon_nav icon_nav_lock ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 14"
                          className="Helm_fill--slate6"
                        >
                          <rect y="6" width="10" height="8" rx="2" ry="2" />
                          <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                        </svg>
                      </span>
                    </div>
                    <div className="web_nav_address"></div>
                  </div>
                </div>
                <div className="web_nav_content">
                  <img
                    src={props.images.sliderImg2}
                    alt={props.images.sliderImg2Alt}
                  ></img>
                </div>
              </div>
            </div>
            <div className="slider_item ">
              <div className="web_nav web_nav--default">
                <div className="web_nav_bar">
                  <div className="web_nav_stoplight"></div>
                  <div className="web_nav_navigation">
                    <div className="web_nav_lock">
                      <span className="icon_nav  icon_nav_lock ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 14"
                          className="Helm_fill--slate6"
                        >
                          <rect y="6" width="10" height="8" rx="2" ry="2" />
                          <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                        </svg>
                      </span>
                    </div>
                    <div className="web_nav_address"></div>
                  </div>
                </div>
                <div className="web_nav_content">
                  <img
                    src={props.images.sliderImg3}
                    alt={props.images.sliderImg3Alt}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="payment_slider_slider js-slider">
            <div className="payment_slider_slider-indicator js-slider-indicator"></div>
          </div>
          <div className="payment_slider_columns slider_item_columns">
            <div className="payment_slider_column slider_item_column">
              <div className="slider_nav_content">
                <div className="slider_nav_content_title">
                  <h2 className="title-h2">Set up payments and payouts</h2>
                </div>
                <div className="slider_nav_content_paragraph">
                  <p className="text-p-desc">
                    Onboard your customers quickly with{" "}
                    <a className="link-a" href={props.data.link1}>
                      Stripe Connect
                    </a>
                    . We help collect bank information, verify IDs, and offer
                    underwriting and{" "}
                    <a className="link-a" href={props.data.link2}>
                      KYC
                    </a>{" "}
                    support.
                  </p>
                </div>
              </div>
            </div>
            <div className="payment_slider_column slider_item_column">
              <div className="slider_nav_content">
                <div className="slider_nav_content_title">
                  <h2 className="title-h2">Provide optimized checkout flows</h2>
                </div>
                <div className="slider_nav_content_paragraph">
                  <p className="text-p-desc">
                    Let your customers accept credit and debit cards, ACH, and
                    dozens of popular payment methods like Apple Pay with{" "}
                    <a className="link-a" href={props.data.link3}>
                      Stripe Payments
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="payment_slider_column slider_item_column">
              <div className="slider_nav_content">
                <div className="slider_nav_content_title">
                  <h2 className="title-h2">View and manage payments</h2>
                </div>
                <div className="slider_nav_content_paragraph">
                  <p className="text-p-desc">
                    Give your customers access to Stripe’s{" "}
                    <a className="link-a" href={props.data.link4}>
                      full-featured dashboard
                    </a>{" "}
                    or build your own customized reporting experience inside
                    your platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

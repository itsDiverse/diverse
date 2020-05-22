import React, { useEffect } from "react"
import style from "../../styles/module22.module.css"

export default props => {
  return (
    <section>
      <div className={"containerLg"}>
        <div className={style.customerHelpPayment}>
          <div
            className={[
              style.payment_slider,
              style.payment_sliderColumnsContainer,
              style.payment_slider_horizontal,
            ].join(" ")}
          >
            <div
              className={[
                style.Carousel,
                style.jsCarousel,
                style.payment_slider_carousel,
              ].join(" ")}
            >
              <div className={style.slider_item}>
                <div
                  className={[style.web_nav, style.web_nav_default].join(" ")}
                >
                  <div className={style.web_nav_bar}>
                    <div className={style.web_nav_stoplight}></div>
                    <div className={style.web_nav_navigation}>
                      <div className={style.web_nav_lock}>
                        <span
                          className={[style.icon_nav, style.icon_nav_lock].join(
                            " "
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 14"
                            className={style.Helm_fillSlate6}
                          >
                            <rect y="6" width="10" height="8" rx="2" ry="2" />
                            <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                          </svg>
                        </span>
                      </div>
                      <div className={style.web_nav_address}></div>
                    </div>
                  </div>
                  <div className={style.web_nav_content}>
                    <img src="images/slider-img-1.jpg" />
                  </div>
                </div>
              </div>
              <div className={style.slider_item}>
                <div
                  className={[style.web_nav, style.web_navDefault].join(" ")}
                >
                  <div className={style.web_nav_bar}>
                    <div className={style.web_nav_stoplight}></div>
                    <div className={style.web_nav_navigation}>
                      <div className={style.web_nav_lock}>
                        <span
                          className={[style.icon_nav, style.icon_nav_lock].join(
                            " "
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 14"
                            className={style.Helm_fillSlate6}
                          >
                            <rect y="6" width="10" height="8" rx="2" ry="2" />
                            <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                          </svg>
                        </span>
                      </div>
                      <div className={style.web_nav_address}></div>
                    </div>
                  </div>
                  <div className={style.web_nav_content}>
                    <img src="images/slider-img-2.jpg" />
                  </div>
                </div>
              </div>
              <div className={style.slider_item}>
                <div
                  className={[style.web_nav, style.web_navDefault].join(" ")}
                >
                  <div className={style.web_nav_bar}>
                    <div className={style.web_nav_stoplight}></div>
                    <div className={style.web_nav_navigation}>
                      <div className={style.web_nav_lock}>
                        <span
                          className={[style.icon_nav, style.icon_nav_lock].join(
                            " "
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 14"
                            className={style.Helm_fillSlate6}
                          >
                            <rect y="6" width="10" height="8" rx="2" ry="2" />
                            <path d="M1,8V4A4,4,0,0,1,9,4V8M7,7V4A2,2,0,0,0,3,4V7" />
                          </svg>
                        </span>
                      </div>
                      <div className={style.web_nav_address}></div>
                    </div>
                  </div>
                  <div className={style.web_nav_content}>
                    <img src="images/slider-img-3.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={[style.payment_slider_slider, style.jsSlider].join(
                " "
              )}
            >
              <div
                className={[
                  style.payment_slider_sliderIndicator,
                  style.jsSliderIndicator,
                ].join(" ")}
              ></div>
            </div>
            <div
              className={[
                style.payment_slider_columns,
                style.slider_item_columns,
              ].join(" ")}
            >
              <div
                className={[
                  style.payment_slider_column,
                  style.slider_item_column,
                ].join(" ")}
              >
                <div className={style.slider_nav_content}>
                  <div className={style.slider_nav_content_title}>
                    <h2 className={style.titleH2}>
                      Set up payments and payouts
                    </h2>
                  </div>
                  <div className={style.slider_nav_content_paragraph}>
                    <p className={style.textPDesc}>
                      Onboard your customers quickly with{" "}
                      <a className={style.linkA} href="#">
                        Stripe Connect
                      </a>
                      . We help collect bank information, verify IDs, and offer
                      underwriting and{" "}
                      <a className={style.linkA} href="#">
                        KYC
                      </a>{" "}
                      support.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={[
                  style.payment_slider_column,
                  style.slider_item_column,
                ].join(" ")}
              >
                <div className={style.slider_nav_content}>
                  <div className={style.slider_nav_content_title}>
                    <h2 className={style.titleH2}>
                      Provide optimized checkout flows
                    </h2>
                  </div>
                  <div className={style.slider_nav_content_paragraph}>
                    <p className={style.textPdesc}>
                      Let your customers accept credit and debit cards, ACH, and
                      dozens of popular payment methods like Apple Pay with{" "}
                      <a className={style.linkA} href="#">
                        Stripe Payments
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={[
                  style.payment_slider_column,
                  style.slider_item_column,
                ].join(" ")}
              >
                <div className={style.slider_nav_content}>
                  <div className={style.slider_nav_content_title}>
                    <h2 className={style.titleH2}>View and manage payments</h2>
                  </div>
                  <div className={style.slider_nav_content_paragraph}>
                    <p className={style.textPdesc}>
                      Give your customers access to Stripe’s{" "}
                      <a className={style.linkA} href="#">
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
    </section>
  )
}

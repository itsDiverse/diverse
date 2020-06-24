import React from "react"
import { StyledContentWrapper } from "./Module5.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="footer-with-card-section-wrapper">
        <section className="footer-with-card-section">
          <div className="container-xl">
            <div className="footer-cards">
              <div className="footer-cards-wrapper">
                <a href={props.data.linkLeft}>
                  <span className="footer-cards-icon">
                    <svg
                      viewBox="0 0 111 111"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <image
                          href={props.images.m5Image1}
                          height="110"
                          width="110"
                        />
                      </g>
                    </svg>
                  </span>
                  <h3 className="link-arrow">{props.data.titleLeft}</h3>
                  <p>{props.data.textLeft}</p>
                </a>
              </div>
              <div className="footer-cards-wrapper">
                <a href={props.data.linkRight}>
                  <span className="footer-cards-icon">
                    <svg
                      viewBox="0 0 111 111"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <image
                          href={props.images.m5Image2}
                          height="110"
                          width="110"
                        />
                      </g>
                    </svg>
                  </span>
                  <h3 className="link-arrow">{props.data.titleRight}</h3>
                  <p>{props.data.textRight}</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="get-in-touch-section">
          <div className="container-lg">
            <div className="get-in-touch-content-wrapper">
              <div className="get-in-touch-content">
                <h2>{props.data.title}</h2>
                <h3>{props.data.subtitle}</h3>
              </div>
              <div className="get-in-touch-btn">
                <a
                  className="btn-left btn-default"
                  href={props.data.buttonLinkLeft}
                >
                  {props.data.buttonLeft}
                </a>
                <a
                  className="btn-right btn-default"
                  href={props.data.buttonLinkRight}
                >
                  {props.data.buttonRight}
                </a>
              </div>
            </div>
            <p>{props.data.text}</p>
          </div>
        </section>
      </div>
    </div>
  </StyledContentWrapper>
)

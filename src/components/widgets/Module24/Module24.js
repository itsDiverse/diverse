import React from "react"
import { StyledContentWrapper } from "./Module24.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              <svg
                width="565"
                height="990"
                viewBox="0 0 565 990"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                link="http://www.w3.org/1999/xlink"
              >
                <rect width="565" height="990" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0"
                      transform="translate(-0.000403721) scale(0.000799367 0.000456204)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="1252"
                    height="2192"
                  />
                </defs>
              </svg>
            </div>
            <div className="title-section">
              <p className="heading-section">{props.data.heading}</p>
              <h2>{props.data.title}</h2>
              <p className="subtitle-section">{props.data.text}</p>

              <div className="services-container">
                <div className="services-title">Marketing & Writing </div>
                <div className="services-wrapper">
                  <div className="services-left">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                  <div className="services-right">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="services-container">
                <div className="services-title">Graphics & Design</div>
                <div className="services-wrapper">
                  <div className="services-left">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                  <div className="services-right">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="services-container">
                <div className="services-title">Video & Animation</div>
                <div className="services-wrapper">
                  <div className="services-left">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                  <div className="services-right">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="services-container">
                <div className="services-title">Programming & Tech </div>
                <div className="services-wrapper">
                  <div className="services-left">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                  <div className="services-right">
                    <ul className="services-list">
                      <li>PPC & SEO</li>
                      <li>Writing/Copy Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)
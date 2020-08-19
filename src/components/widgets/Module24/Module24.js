import React from "react"
import { StyledContentWrapper } from "./Module24.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="toolssection">
          <div className="tools-section">
            <div className="video-container">
              {props.theme.video ? (
                <video id="Video24" poster="" autoPlay playsInline muted loop>
                  <source
                    src={props.videos.cubesObjects}
                    type="video/webm"
                  ></source>
                  <source
                    src={props.videos.cubesObjects}
                    type="video/mp4"
                  ></source>
                </video>
              ) : (
                <div />
              )}
            </div>
            <div id="services" className="title-section">
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
                <div>
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

/* eslint-disable react/jsx-no-target-blank */
import React from "react"

import { StyledContentWrapper } from "./Module10.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="solutions-rooted-section">
        <div className="container-lg">
          {props.theme.heading && (
            <div className="section-intro">
              <h2 className="section-title">{props.data.title}</h2>
              <p className="section-desc">{props.data.subtitle}</p>
            </div>
          )}
          <div className="solutions-rooted-content">
            <div className="rooted-content-left">
              <div className="rooted-box rooted-box-documentation">
                <figure aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                  >
                    <g fill="none" transform="translate(-.196 .1)">
                      <image href={props.images.icon1} height="20" width="23" />
                    </g>
                  </svg>
                </figure>
                <h4 className="rooted-title">{props.data.title1}</h4>
                <p className="rooted-desc">
                  {props.data.text1.link.before}{" "}
                  <a href={props.data.text1.link.url} className="common-link">
                    {props.data.text1.link.text}
                  </a>{" "}
                  {props.data.text1.link.after}
                </p>
              </div>
              <div className="rooted-box rooted-box-oss">
                <figure aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(-.488 .268)"
                    >
                      <image href={props.images.icon2} height="20" width="23" />
                    </g>
                  </svg>
                </figure>
                <h4 className="rooted-title">{props.data.title2}</h4>
                <p className="rooted-desc">
                  {props.data.text2.link.before}{" "}
                  <a href={props.data.text2.link.url} className="common-link">
                    {props.data.text2.link.text}
                  </a>
                  {props.data.text2.link.after}
                </p>
              </div>
              <div className="rooted-box rooted-box-works-with">
                <figure aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                  >
                    <g fill="none" transform="translate(.512 -.615)">
                      <image href={props.images.icon3} height="20" width="23" />
                    </g>
                  </svg>
                </figure>
                <h4 className="rooted-title">{props.data.title3}</h4>
                <p className="rooted-desc">
                  {props.data.text3.link.before}{" "}
                  <a href={props.data.text3.link.url} className="common-link">
                    {props.data.text3.link.text}
                  </a>{" "}
                  {props.data.text3.link.after}
                </p>
              </div>
            </div>
            <div className="rooted-content-right">
              <aside className="engineering-scale common-Card">
                <div className="cover"></div>
                <h2 className="engineering-scale-title">
                  {props.data.box.title}
                </h2>
                <p className="engineering-scale-desc">
                  {props.data.box.text.before}{" "}
                  <span className="u-italic">{props.data.box.text.italic}</span>
                  {props.data.box.text.after}
                </p>
                <a
                  href={props.data.box.text.link}
                  target="_blank"
                  className="btn-engineering btn-common"
                  data-analytics-action="visit_increment"
                  data-analytics-source="increment_cta"
                >
                  {props.data.box.text.button}
                </a>
              </aside>
            </div>
          </div>
        </div>
        {props.theme.backgroundLayout && (
          <div className="common-Grid anchorBottom">
            <div className="backgroundContainer">
              <div className="grid">
                <div className="background"></div>
              </div>
            </div>
            <div className="backgroundlineContainer">
              <div className="grid">
                <div className="linebg"></div>
                <div className="linebg"></div>
                <div className="linebg"></div>
                <div className="linebg"></div>
                <div className="linebg"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </StyledContentWrapper>
)

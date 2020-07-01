import React from "react"

import { StyledContentWrapper } from "./Module10.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div class="content-wrapper">
      <div class="solutions-rooted-section">
        <div class="container-lg">
          {props.theme.heading && (
            <div class="section-intro">
              <h2 class="section-title">{props.data.title}</h2>
              <p class="section-desc">{props.data.subtitle}</p>
            </div>
          )}
          <div class="solutions-rooted-content">
            <div class="rooted-content-left">
              <div class="rooted-box rooted-box-documentation">
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
                <h4 class="rooted-title">{props.data.title1}</h4>
                <p class="rooted-desc">
                  {props.data.text1.link.before}{" "}
                  <a href={props.data.text1.link.url} class="common-link">
                    {props.data.text1.link.text}
                  </a>{" "}
                  {props.data.text1.link.after}
                </p>
              </div>
              <div class="rooted-box rooted-box-oss">
                <figure aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      transform="translate(-.488 .268)"
                    >
                      <image href={props.images.icon2} height="20" width="23" />
                    </g>
                  </svg>
                </figure>
                <h4 class="rooted-title">{props.data.title2}</h4>
                <p class="rooted-desc">
                  {props.data.text2.link.before}{" "}
                  <a href={props.data.text2.link.url} class="common-link">
                    {props.data.text2.link.text}
                  </a>
                  {props.data.text2.link.after}
                </p>
              </div>
              <div class="rooted-box rooted-box-works-with">
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
                <h4 class="rooted-title">{props.data.title3}</h4>
                <p class="rooted-desc">
                  {props.data.text3.link.before}{" "}
                  <a href={props.data.text3.link.url} class="common-link">
                    {props.data.text3.link.text}
                  </a>{" "}
                  {props.data.text3.link.after}
                </p>
              </div>
            </div>
            <div class="rooted-content-right">
              <aside class="engineering-scale common-Card">
                <div class="cover"></div>
                <h2 class="engineering-scale-title">{props.data.box.title}</h2>
                <p class="engineering-scale-desc">
                  {props.data.box.text.before}{" "}
                  <span class="u-italic">{props.data.box.text.italic}</span>
                  {props.data.box.text.after}
                </p>
                <a
                  href={props.data.box.text.button.link}
                  target="_blank"
                  class="btn-engineering btn-common"
                  data-analytics-action="visit_increment"
                  data-analytics-source="increment_cta"
                >
                  {props.data.box.text.button}
                </a>
              </aside>
            </div>
          </div>
        </div>
        {props.theme.background && (
          <div class="common-Grid anchorBottom">
            <div class="backgroundContainer">
              <div class="grid">
                <div class="background"></div>
              </div>
            </div>
            <div class="backgroundlineContainer">
              <div class="grid">
                <div class="linebg"></div>
                <div class="linebg"></div>
                <div class="linebg"></div>
                <div class="linebg"></div>
                <div class="linebg"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </StyledContentWrapper>
)

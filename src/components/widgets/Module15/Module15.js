import React from "react"
//import "./Module15.module.css"

import { StyledContentWrapper } from "./Module15.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="idc-callout">
        <div className="container-xl">
          <div className="callout-card">
            <img
              src={props.images.m15Image}
              alt={props.images.m15ImageAlt}
            ></img>
            <div className="callout-content">
              <span>
                {props.data.text.before}
                <a href={props.data.text.link.url}>
                  {props.data.text.link.text}
                </a>{" "}
                {props.data.text.after}{" "}
              </span>
            </div>
          </div>
        </div>
        {props.theme.backgroundLayout && (
          <div className="common-idc-grid">
            <div className="backgroundContainer">
              <div className="grid">
                <div className="background"></div>
              </div>
            </div>
            <div className="idcbgContainer">
              <div className="grid">
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </StyledContentWrapper>
)

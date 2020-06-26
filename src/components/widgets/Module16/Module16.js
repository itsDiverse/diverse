import React, { useEffect } from "react"
import $ from "jquery"

import { StyledContentWrapper } from "./Module16.styles"

export default props => {
  useEffect(() => {
    if ($) {
      /*
      TODO: dynamo is a jquery plugin lets find a way to use it. 
      $("#container1").dynamo({
        speed: 500,
        delay: 3000,
        lines: ["for your", "to", "for your", "to"],
        callback: function() {
          console.log("callback works!")
        },
      })
      $("#container2").dynamo({
        speed: 500,
        delay: 3000,
        lines: [
          "marketing campaign",
          "expand your inventory",
          "next hire",
          "manage cash flows",
        ],
        callback: function() {
          console.log("callback works!")
        },
      })*/
    }
  }, [])

  return (
    <StyledContentWrapper theme={props.theme} data={props.data}>
      <div class="content-wrapper">
        <div class="get-funding-section">
          <div class="container-lg">
            <div class="get-funding-content-wrapper">
              <div class="get-funding-content">
                <div class="get-funding-title-section">
                  <figure>
                    <span>
                      <img
                        className="img-icon"
                        src={props.images.icon}
                        alt={props.images.iconAlt}
                      />
                    </span>
                  </figure>
                  <h2>{props.data.topTitle}</h2>
                  <span class="background-blue">{props.data.topSpan}</span>
                </div>
                <div class="get-funding-text-rotate">
                  <h2>
                    {props.data.title.first}{" "}
                    <span id="container1">{props.data.title.second}</span>
                  </h2>
                  <h2>
                    <span id="container2">{props.data.title.third}</span>
                  </h2>
                </div>
                <div class="get-funding-content-bottom">
                  <p class="common-text">{props.data.subtitle}</p>
                  <div class="get-funding-content-bottom-btn">
                    <a href={props.data.button.left.url} class="start_now">
                      {props.data.button.left.text}
                    </a>
                    <a href={props.data.button.right.url} class="learn_more">
                      {props.data.button.right.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentWrapper>
  )
}

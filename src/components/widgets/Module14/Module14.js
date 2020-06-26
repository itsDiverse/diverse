import React from "react"
//import "./Module14.module.css"

import { StyledContentWrapper } from "./Module14.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="going-about-20-minutes">
        <div className="container-lg">
          <div className="going-about-20-minutes-box">
            <div className="left-box-content about-minutes-title">
              <h2>{props.data.title}</h2>
              <p>{props.data.subtitle}</p>
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <image
                            href={props.images.m14Icon1}
                            width="50"
                            height="50"
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>{props.data.text.title1}</h3>
                  <p>{props.data.text.paragraph1}</p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <figure className="devices-dashboard loaded">
                <div className="ground">
                  <div className="shadow"></div>
                </div>
                <div className="laptop">
                  <div className="device"></div>
                  <div className="controls"></div>
                  <div className="screen country-IN"></div>
                </div>
              </figure>
            </div>
          </div>
          <div className="going-about-20-minutes-box">
            <div className="left-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <image
                            href={props.images.m14Icon2}
                            width="50"
                            height="50"
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>{props.data.text.title2}</h3>
                  <p>{props.data.text.paragraph2} </p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <image
                            href={props.images.m14Icon3}
                            width="50"
                            height="50"
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>{props.data.text.title3}</h3>
                  <p>
                    {props.data.text.paragraph3}{" "}
                    <a className="common-link" href={props.data.text.link.url}>
                      {props.data.text.link.text}
                    </a>{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="going-about-20-minutes-box">
            <div className="left-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <image
                        href={props.images.m14Icon4}
                        width="50"
                        height="50"
                      />
                    </svg>
                  </figure>
                  <h3>{props.data.text.title4}</h3>
                  <p>{props.data.text.paragraph4}</p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <image
                            href={props.images.m14Icon5}
                            width="50"
                            height="50"
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>{props.data.text.title5}</h3>
                  <p>{props.data.text.paragraph5}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

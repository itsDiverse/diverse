import React from "react"

import { StyledContentWrapper } from "./Module11.styles"

export default props => (
  <StyledContentWrapper images={props.images} theme={props.theme}>
    <div className="content-wrapper">
      <div className="container-lg">
        <div className="b2c-marketplaces">
          <div className="marketplaces-title-section">
            <img
              src={props.images.m11Icon1}
              alt={props.images.m11Icon1Alt}
            ></img>
            <h3>{props.data.title}</h3>
            <p>{props.data.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="marketplaces-gallery-section-wrapper">
          <div className="marketplaces-gallery-section">
            <div className="marketplaces-gallery-photo"></div>
            <div className="marketplaces-gallery-content">
              <div className="marketplaces-quote-wrapper">
                <div className="marketplaces-quote Quote--lyft">
                  <h2>
                    <a href={props.data.linkBoxLogo}>
                      <img
                        src={props.images.m11BannerLogo}
                        alt={props.images.m11BannerLogoAlt}
                      ></img>
                    </a>
                  </h2>
                  <p>{props.data.textBox}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="marketplaces-gallery-bottom-content">
          <div className="marketplaces-gallery-bottom-content-left">
            <figure className="marketplaces-gallery-routing">
              <img
                src={props.images.m11Icon2}
                width="72"
                height="72"
                alt={props.images.m11Icon2Alt}
              ></img>
            </figure>
            <p>
              {props.data.textLeft.before}{" "}
              <a className="common-link" href={props.data.textLeft.link.url}>
                {props.data.textLeft.link.text}
              </a>{" "}
              {props.data.textLeft.after}
            </p>
          </div>
          <div className="marketplaces-gallery-bottom-content-right">
            <p>{props.data.textRight}</p>
            <ul>
              <li>
                <a
                  className="link-arrow common-link"
                  href={props.data.linkEnd.url}
                >
                  {props.data.linkEnd.text}/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

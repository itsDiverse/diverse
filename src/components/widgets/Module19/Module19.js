import React from "react"
import { StyledContentWrapper } from "./Module19.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} data={props.data}>
    <div className="content-wrapper">
      {props.theme.backgroundLayout && (
        <div className="background-container">
          <div className="background-large">
            <div className="background-part bp1"></div>
            <div className="background-part bp2"></div>
            <div className="background-part bp3"></div>
            <div className="background-part bp4"></div>
            <div className="background-part bp5"></div>
            <div className="background-part bp6"></div>
            <div className="background-part bp7"></div>
            <div className="background-part bp8"></div>
            <div className="background-part bp9"></div>
            <div className="background-part bp10"></div>
            <div className="background-part bp11"></div>
            <div className="background-part bp12"></div>
            <div className="background-part bp13"></div>
            <div className="gradient"></div>
            <div className="background-part below"></div>
            <div className="dots"></div>
          </div>
        </div>
      )}
      {props.theme.heading && (
        <div className="container banner-container">
          <div className="banner-wrapper">
            <h1 className="banner-title">{props.data.title}</h1>
            <p className="banner-intro">{props.data.subtitle}</p>
          </div>
        </div>
      )}
      <section className="services-section">
        <div className="container-lg">
          <div className="row">
            <div className="services-box">
              <a href={props.data.box1.link}>
                <div className="services-innercontainer">
                  <div className="services-icon sales">
                    <span>
                      <img
                        src={props.images.imgBox1}
                        alt={props.images.imgBox1Alt}
                        width="52"
                        height="52"
                      ></img>
                    </span>
                  </div>
                  <div className="services-content-wrapper">
                    <div className="services-content">
                      <h2 className="services-title">
                        {props.data.box1.title}
                      </h2>
                      <p className="services-desc">{props.data.box1.text}</p>
                    </div>
                    <div className="services-footer">
                      <span className="services-footer-text text-blue">
                        {props.data.box1.footerText}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="services-box">
              <a href={props.data.box2.link}>
                <div className="services-innercontainer">
                  <div className="services-icon sales">
                    <span>
                      <img
                        src={props.images.imgBox2}
                        alt={props.images.imgBox2Alt}
                        width="52"
                        height="52"
                      ></img>
                    </span>
                  </div>
                  <div className="services-content-wrapper">
                    <div className="services-content">
                      <h2 className="services-title">
                        {props.data.box2.title}
                      </h2>
                      <p className="services-desc">{props.data.box2.text}</p>
                    </div>
                    <div className="services-footer">
                      <span className="services-footer-text text-blue">
                        {props.data.box2.footerText}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="services-box">
              <a href={props.data.box3.link}>
                <div className="services-innercontainer">
                  <div className="services-icon sales">
                    <span>
                      <img
                        src={props.images.imgBox3}
                        alt={props.images.imgBox3Alt}
                        width="52"
                        height="52"
                      ></img>
                    </span>
                  </div>
                  <div className="services-content-wrapper">
                    <div className="services-content">
                      <h2 className="services-title">
                        {props.data.box3.title}
                      </h2>
                      <p className="services-desc">{props.data.box3.text}</p>
                    </div>
                    <div className="services-footer">
                      <span className="services-footer-text text-blue">
                        {props.data.box3.footerText}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container join-us-section">
        <div className="inner-col">
          <div className="inner-col-wrapper join-us-content">
            <h3 className="join-us-title">{props.data.leftContent.title}</h3>
            <p className="join-us-desc">
              {props.data.leftContent.text}{" "}
              <strong>{props.data.leftContent.textStrong}</strong>
            </p>
          </div>
          <div className="inner-col-wrapper join-us-content">
            <h3 className="join-us-title">{props.data.rightContent.title}</h3>
            <p className="join-us-desc">
              {props.data.rightContent.text}{" "}
              <a href={props.data.rightContent.link.url} className="mail-link">
                {props.data.rightContent.link.text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

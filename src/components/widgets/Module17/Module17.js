import React from "react"
import { StyledContentWrapper } from "./Module17.styles"

export default props => (
  <StyledContentWrapper
    theme={props.theme}
    data={props.data}
    images={props.images}
  >
    <div className="content-wrapper">
      <main>
        <div className="services-section-title">
          <div className="container-lg">
            <div className="row">
              <div className="services-section-title-content">
                <span>
                  <img
                    className="img-icon-top"
                    src={props.images.iconTitle}
                    alt={props.images.iconTitleAlt}
                  />
                </span>
                <h2>{props.data.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="services-section">
          <div className="container-lg">
            <div className="row">
              <div className="services-box">
                <a href={props.data.box1.link}>
                  <div className="services-innercontainer">
                    <div className="services-icon sales">
                      <span>
                        <img
                          className="img-icon-top"
                          src={props.images.box1.iconTop1}
                          alt={props.images.box1.iconTop1Alt}
                        />
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
                        <span className="services-footer-icon">
                          <img
                            className="img-icon-bottom"
                            src={props.images.box1.iconBottom1}
                            alt={props.images.box1.iconButtom1Alt}
                          />
                        </span>
                        <span className="services-footer-text text-blue">
                          {props.data.box1.footer}
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
                          className="img-icon-top"
                          src={props.images.box2.iconTop2}
                          alt={props.images.box2.iconTop2Alt}
                        />
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
                        <span className="services-footer-icon">
                          <img
                            className="img-icon-bottom"
                            src={props.images.box2.iconBottom2}
                            alt={props.images.box2.iconButtom2Alt}
                          />
                        </span>
                        <span className="services-footer-text text-blue">
                          {props.data.box2.footer}
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
                          className="img-icon-top"
                          src={props.images.box3.iconTop3}
                          alt={props.images.box3.iconTop3Alt}
                        />
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
                        <span className="services-footer-icon">
                          <img
                            className="img-icon-bottom"
                            src={props.images.box3.iconBottom3}
                            alt={props.images.box3.iconButtom3Alt}
                          />
                        </span>
                        <span className="services-footer-text text-blue">
                          {props.data.box3.footer}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </StyledContentWrapper>
)

import React from "react"
//import style from "./Module13.module.css"
import { StyledContentWrapper } from "./Module13.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="listing-card-section">
        <div className="container-lg">
          <div className="listing-card-wrapper">
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productNavIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.title}</h3>
                  <p>Create and manage recurring invoices and subscriptions.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      SCA-Ready
                    </div>
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Radar</h3>
                  <p>Fight fraud with the strength of the Stripe network.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.icon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Sigma</h3>
                  <p>Your business data at your fingertips.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productNavIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.title}</h3>
                  <p>Create and manage recurring invoices and subscriptions.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      SCA-Ready
                    </div>
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Radar</h3>
                  <p>Fight fraud with the strength of the Stripe network.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.icon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Sigma</h3>
                  <p>Your business data at your fingertips.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productNavIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.title}</h3>
                  <p>Create and manage recurring invoices and subscriptions.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      SCA-Ready
                    </div>
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.productIcon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Radar</h3>
                  <p>Fight fraud with the strength of the Stripe network.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href="#">
                <img
                  src={props.images.icon}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>Sigma</h3>
                  <p>Your business data at your fingertips.</p>
                  <div className="listing-card-badges">
                    <div className="background-green text-white listing-card-badge">
                      Popular
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

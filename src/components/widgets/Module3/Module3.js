import React from "react"
//import "./Module3.module.css"

import { StyledContentWrapper } from "./Module3.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <section className="container-lg">
        <div className="corporate-card-section">
          <div className="corporate-card-column">
            <div className="corporate-card-icon">
              <img src={props.images.m3Icon1} alt={props.images.m3Icon1alt} />
            </div>
            <div className="corporate-card-content">
              <h3>{props.data.title1}</h3>
              <p>{props.data.text1}</p>
            </div>
          </div>
          <div className="corporate-card-column">
            <div className="corporate-card-icon">
              <img src={props.images.m3Icon2} alt={props.images.m3Icon2alt} />
            </div>
            <div className="corporate-card-content">
              <h3>{props.data.title2}</h3>
              <p>{props.data.text2}</p>
            </div>
          </div>
          <div className="corporate-card-column">
            <div className="corporate-card-icon">
              <img src={props.images.m3Icon3} alt={props.images.m3Icon3alt} />
            </div>
            <div className="corporate-card-content">
              <h3>{props.data.title3}</h3>
              <p>{props.data.text3}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </StyledContentWrapper>
)

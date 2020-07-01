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
              <a href={props.data.box1.url}>
                <img
                  src={props.images.imageBox1}
                  alt={props.images.imageBox3Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box1.title}</h3>
                  <p>{props.data.box1.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box1.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box1.btnLeft}
                      </div>
                    )}
                    {props.data.box1.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box1.btnRight}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href={props.data.box2.url}>
                <img
                  src={props.images.imageBox2}
                  alt={props.images.imageBox2Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box2.title}</h3>
                  <p>{props.data.box2.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box2.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box2.btnLeft}
                      </div>
                    )}
                    {props.data.box2.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box2.btnRight}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href={props.data.box3.url}>
                <img
                  src={props.images.imageBox3}
                  alt={props.images.imageBox3Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box3.title}</h3>
                  <p>{props.data.box3.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box3.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box3.btnLeft}
                      </div>
                    )}
                    {props.data.box3.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box3.btnRight}
                      </div>
                    )}
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

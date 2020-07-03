import React from "react"
import { StyledContentWrapper } from "./QuadBox.styles"

export default props => (
  <StyledContentWrapper data={props.data} theme={props.theme}>
    <div className="wrapper">
      <div className="contentContainer">
        {props.theme.heading && (
          <div className="headerBox">
            {props.theme.headingLogo && (
              <img
                src={props.images.diverseLogo}
                alt="Diverse Company Logo"
                width="200px"
              />
            )}
            <h2 className="heading">{props.data.title}</h2>
            <h3 className="heading">{props.data.subtitle}</h3>
          </div>
        )}

        <div className="quadBoxContainer">
          <div className="quadBox">
            <div className="quadBoxLeft">
              <span className="quadBoxLeftSkew"></span>
              <span className="imageContainer">
                <img
                  src={props.images.imageQuadBox1}
                  alt="Diverse Company Logo"
                />
              </span>
            </div>

            <div className="quadBoxText">
              <h1>{props.data.box1.title}</h1>
              <p>{props.data.box1.text}</p>
            </div>
          </div>

          <div className="quadBox">
            <div className="quadBoxLeft">
              <span className="quadBoxLeftSkew"></span>
              <span className="imageContainer">
                <img
                  src={props.images.imageQuadBox2}
                  alt="Diverse Company Logo"
                />
              </span>
            </div>

            <div className="quadBoxText">
              <h1>{props.data.box2.title}</h1>
              <p>{props.data.box2.text}</p>
            </div>
          </div>

          <div className="quadBox">
            <div className="quadBoxLeft">
              <span className="quadBoxLeftSkew"></span>
              <span className="imageContainer">
                <img
                  src={props.images.imageQuadBox3}
                  alt="Diverse Company Logo"
                />
              </span>
            </div>

            <div className="quadBoxText">
              <h1>{props.data.box3.title}</h1>
              <p>{props.data.box3.text}</p>
            </div>
          </div>

          <div className="quadBox">
            <div className="quadBoxLeft">
              <span className="quadBoxLeftSkew"></span>
              <span className="imageContainer">
                <img
                  src={props.images.imageQuadBox4}
                  alt="Diverse Company Logo"
                />
              </span>
            </div>

            <div className="quadBoxText">
              <h1>{props.data.box4.title}</h1>
              <p>{props.data.box4.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

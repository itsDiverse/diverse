import React from "react"
import { StyledContentWrapper } from "./Module7.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="compliance-section">
        <div className="container-lg">
          <div className="compliance-title">
            <img
              src={props.images.section1Title}
              alt={props.images.section1TitleAlt}
            />
            <h2 className="uppercase-text">{props.data.title1}</h2>
          </div>
          <div className="compliance-content-wrapper">
            <div className="compliance-content">
              <div className="compliance-left-content">
                <p>
                  {props.data.paragraph1.text.before}{" "}
                  <a
                    href={props.data.paragraph1.text.link1.url}
                    className="common-link"
                  >
                    {props.data.paragraph1.text.link1.text}
                  </a>{" "}
                  {props.data.paragraph1.text.between}
                  <a
                    href={props.data.paragraph1.text.link2.url}
                    className="common-link"
                  >
                    {" "}
                    {props.data.paragraph1.text.link2.text}{" "}
                  </a>
                  {props.data.paragraph1.text.after}
                </p>
                <p>{props.data.paragraph2.text}</p>
              </div>
              <div className="compliance-right-content">
                <h3>{props.data.bulletList.title}</h3>
                <ul>
                  <li>{props.data.bulletList.item1}</li>
                  <li>{props.data.bulletList.item2}</li>
                  <li>{props.data.bulletList.item3}</li>
                  <li>{props.data.bulletList.item4}</li>
                  <li>{props.data.bulletList.item5}</li>
                  <li>{props.data.bulletList.item6}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

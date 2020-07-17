import React from "react"
import Sky from "react-sky"
import myImage from "../../../images/triangle.png"
import myImage2 from "../../../images/square.png"
import myImage3 from "../../../images/circle.png"
import { StyledContentWrapper } from "./Module16v.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <Sky
      images={{
        0: myImage,
        1: myImage2,
        2: myImage3,
      }}
      how={10} /* Pass the number of images Sky will render chosing randomly */
      time={20} /* time of animation */
      size={"25px"} /* size of the rendered images */
      background={""} /* color of background */
    />
    <div className="content-wrapper powerful-tools-wrapper">
      <div className="container-lg">
        <div className="powerfultoolssection">
          <div className="powerful-tools-section">
            <div className="powerful-title-section">
              <h2>{props.data.title}</h2>
              <p>{props.data.text}</p>
              <div className="powerful-tools-btn">
                {props.data.textLeft && (
                  <a
                    href={props.data.linkLeft}
                    className="common-button get_started_btn common-Link"
                  >
                    {props.data.textLeft}
                  </a>
                )}
                {props.data.textRight && (
                  <a
                    href={props.data.linkRight}
                    className="common-button contact_sales_btn common-Link"
                  >
                    {props.data.textRight}
                  </a>
                )}
              </div>
            </div>
            <div className="video-container">
              <div className="actualVideo">
                {props.theme.video ? (
                  <video
                    className="js-actual-video"
                    id="Video1"
                    poster=""
                    autoplay=""
                    muted
                    loop
                  >
                    <source
                      src={props.videos.sample2}
                      type="video/webm"
                    ></source>
                    <source
                      src={props.videos.sample2}
                      type="video/mp4"
                    ></source>
                  </video>
                ) : (
                  <img
                    className="js-actual-video"
                    src={props.images.image16v}
                    alt={props.images.image16vAlt}
                  ></img>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

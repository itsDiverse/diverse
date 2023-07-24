import React from "react"
import { StyledContentWrapper } from "./Module24.styles"
import { useMediaQuery } from "react-responsive"

export default props => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" })
  return (
    <StyledContentWrapper theme={props.theme} images={props.images}>
      <div id="work" className="content-wrapper">
        <div className="container-lg">
          <div className="toolssection">
            <div className="tools-section">
              <div className="video-container">
                {props.theme.video && isTabletOrMobile ? (
                  <div className="image-container">
                    <img
                      src={props.images.cubeObjects}
                      alt={props.images.cubeObjectsAlt}
                    />
                  </div>
                ) : (
                  <video
                    id="Video24"
                    preload="yes"
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{ outline: "none" }}
                  >
                    <source
                      src={props.videos.cubesObjects}
                      type="video/mp4"
                    ></source>
                    <source
                      src={props.videos.cubesObjects1}
                      type="video/m4v"
                    ></source>
                    <source
                      src={props.videos.cubesObjects2}
                      type="video/webm"
                    ></source>
                  </video>
                )}
              </div>
              <div id="services" className="title-section">
                <p className="heading-section">{props.data.heading}</p>
                <h2>{props.data.title}</h2>
                <p className="subtitle-section">{props.data.text1}</p>
                <p className="subtitle-section">{props.data.text2}</p>
                <p className="subtitle-section">{props.data.text3}</p>
                <div className="services-container">
                  <div className="services-title">
                    {props.data.marketingServices.title}
                  </div>
                  <div className="services-wrapper">
                    <div className="services-left">
                      <ul className="services-list">
                        <li>{props.data.marketingServices.service1}</li>
                        {/* <li>{props.data.marketingServices.service2}</li> */}
                      </ul>
                    </div>
                    {/* <div className="services-right">
                      <ul className="services-list">
                        <li>{props.data.marketingServices.service3}</li>
                        <li>{props.data.marketingServices.service4}</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentWrapper>
  )
}

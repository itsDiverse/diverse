import React, { useEffect } from "react"
//import style from "./Module4.module.css"
import $ from "jquery"

import { StyledContentWrapper } from "./Module4.styles"

export default props => {
  useEffect(() => {
    $(document).ready(function() {
      $(".fraudteams_video_toggle").on("click", function(e) {
        $(".fraudteams_video_toggle").toggleClass(
          "fraudteams_video_toggle--playing"
        )
        $(".powerfultoolssection").toggleClass("fraudteams--video-playing")
        $(".powerful-tools-wrapper").toggleClass("visible")
        var video = document.getElementById("Video1")
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
        e.preventDefault()
      })
      $(".fraudteams_video_toggle").hover(function() {
        $(".Helm-Tooltip").toggleClass("Helm-Tooltip--shown")
      })
      $(document).click(function(e) {
        if ($(e.target).is(".visible")) {
          var video = document.getElementById("Video1")
          video.pause()
          $(".fraudteams_video").addClass("video_plaing")
          $(".powerful-tools-wrapper").toggleClass("visible")
          $(".fraudteams_video_toggle").toggleClass(
            "fraudteams_video_toggle--playing"
          )
          $(".powerfultoolssection").toggleClass("fraudteams--video-playing")
        }
      })
    })
  }, [])
  return (
    <StyledContentWrapper theme={props.theme}>
      <div className="content-wrapper powerful-tools-wrapper">
        <div className="container-lg">
          <div className="powerfultoolssection">
            <div className="powerful-tools-section">
              <div className="powerful-title-section">
                <h2>Powerful tools for fraud professionals</h2>
                <p>
                  Radar for Fraud Teams helps you fine-tune how Radar operates,
                  get fraud insights on suspicious charges, and assess your
                  fraud management performance from a unified dashboard.
                </p>
                <div className="powerful-tools-btn">
                  <a
                    href="#"
                    className="common-button get_started_btn common-Link"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="common-button contact_sales_btn common-Link"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
              <div className="fraud-teams-media">
                <div className="fraudteams_video-container">
                  <div className="fraudteams_video">
                    <div className="fraud-Video">
                      <video
                        muted=""
                        playsinline=""
                        autoplay=""
                        webkit-playsinline=""
                        loop=""
                        id="demovideo"
                        poster="images/video-poster.jpg"
                        preload="metadata"
                      >
                        <source src={props.sample} type="video/mp4"></source>
                        <source src={props.sample} type="video/ogg"></source>
                      </video>
                    </div>
                    <div className="actualVideo">
                      <video
                        className="js-actual-video"
                        id="Video1"
                        poster=""
                        controls
                        className="opacity: 0"
                      >
                        <source src={props.sample} type="video/webm"></source>
                        <source src={props.sample} type="video/mp4"></source>
                      </video>
                    </div>
                    <div className="fraudteams_video_controls">
                      <button
                        className="fraudteams_video_toggle js-toggle playbutton-visible"
                        data-play="Play video"
                        data-pause="Pause video"
                      >
                        <div className="js-play-pulse Hero__pulse"></div>
                        <div className="Hero__tooltip--play">
                          <div className="Helm-Tooltip">
                            <div className="Tooltip">
                              <div className="Tooltip__icon "></div>
                              <p
                                className-name="Tooltip__content"
                                className="common-BodyText Helm__text--slate1 Tooltip__content"
                              >
                                Hear from our cofounders and COO
                              </p>
                              <div x-arrow="" className="Tooltip__arrow"></div>
                            </div>
                          </div>
                        </div>
                        <span className="video_controls-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="#555abf"
                            className="icon--play"
                          >
                            <path d="M7.74,31.44C5.67,32.69,4,31.74,4,29.32V2.67C4,.25,5.68-.7,7.74.55L29.56,13.73c2.07,1.25,2.06,3.28,0,4.52Z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
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

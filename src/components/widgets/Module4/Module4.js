import React, { useEffect } from "react"
import style from "./Module4.module.css"
import $ from "jquery"

export default props => {
  useEffect(() => {
    $(document).ready(function() {
      $(".fraudteamsVideoToggle").on("click", function(e) {
        $(".fraudteamsVideoToggle").toggleClass("fraudteamsVideoTogglePlaying")
        $(".powerfulToolsSection").toggleClass("fraudteamsVideoPlaying")
        $(".powerfulToolsWrapper").toggleClass("visible")
        var video = document.getElementById("Video1")
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
        e.preventDefault()
      })
      $(".fraudteamsVideoToggle").hover(function() {
        $(".HelmTooltip").toggleClass("HelmTooltipShown")
      })
      $(document).click(function(e) {
        if ($(e.target).is(".visible")) {
          var video = document.getElementById("Video1")
          video.pause()
          $(".fraudteamsVideo").addClass("video_plaing")
          $(".powerfulToolsWrapper").toggleClass("visible")
          $(".fraudTeamsVideoToggle").toggleClass(
            "fraudTeamsVideoTogglePlaying"
          )
          $(".powerfulToolsSection").toggleClass("fraudTeamsVideoPlaying")
        }
      })
    })
  }, [])
  return (
    <div
      className={[style.contentWrapper, style.powerfulToolsWrapper].join(" ")}
    >
      <div className={style.containerLg}>
        <div className={style.powerfulToolsSection}>
          <div className={style.powerfulToolsSection}>
            <div className={style.powerfulTitleSection}>
              <h2>Powerful tools for fraud professionals</h2>
              <p>
                Radar for Fraud Teams helps you fine-tune how Radar operates,
                get fraud insights on suspicious charges, and assess your fraud
                management performance from a unified dashboard.
              </p>
              <div className={style.powerfulToolsBtn}>
                <a
                  href="#"
                  className={[
                    style.commonButton,
                    style.getStartedBtn,
                    style.commonLink,
                  ].join(" ")}
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className={[
                    style.commonButton,
                    style.contactSalesBtn,
                    style.commonLink,
                  ].join(" ")}
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className={style.fraudTeamsMedia}>
              <div className={style.fraudteamsVideoContainer}>
                <div className={style.fraudTeamsVideo}>
                  <div className={style.fraudVideo}>
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
                      <source src="samplevideo.mp4" type="video/mp4" />
                      <source src="samplevideo.mp4" type="video/ogg" />
                    </video>
                    <div className={style.actualVideo}>
                      <video
                        className={style.jsActualVideo}
                        id="Video1"
                        poster=""
                        controls
                        style={{ opacity: 0 }}
                      >
                        <source src="sample.mp4" type="video/webm" />
                        <source src="sample.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className={style.fraudteamsVideoControls}>
                      <button
                        className={[
                          style.fraudTeamsVideoToggle,
                          style.jsToggle,
                          style.playbuttonVisible,
                        ].join(" ")}
                        data-play="Play video"
                        data-pause="Pause video"
                      >
                        <div
                          className={[
                            style.jsPlayPulse,
                            style.Hero__pulse,
                          ].join(" ")}
                        ></div>
                        <div className={style.Hero__tooltipPlay}>
                          <div className={style.HelmTooltip}>
                            <div className={style.Tooltip}>
                              <div className={style.Tooltip__icon}></div>
                              <p
                                className={[
                                  style.commonBodyText,
                                  style.Helm__textSlate1,
                                  style.Tooltip__content,
                                ].join(" ")}
                              >
                                Hear from our cofounders and COO
                              </p>
                              <div
                                x-arrow=""
                                className={style.Tooltip__arrow}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <span className={style.video_controlsIcon}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="#555abf"
                            className={style.iconPlay}
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
    </div>
  )
}

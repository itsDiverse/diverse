import React from "react"
import style from "../../styles/module4.module.css"

export default props => (
  <div className={`content-wrapper powerful-tools-wrapper`}>
    <div className={`container-lg`}>
      <div className={`powerfultoolssection`}>
        <div className={`powerful-tools-section`}>
          <div className={`powerful-title-section`}>
            <h2>Powerful tools for fraud professionals</h2>
            <p>
              Radar for Fraud Teams helps you fine-tune how Radar operates, get
              fraud insights on suspicious charges, and assess your fraud
              management performance from a unified dashboard.
            </p>
            <div className={`powerful-tools-btn`}>
              <a
                href="#"
                className={`common-button get_started_btn common-Link`}
              >
                Get Started
              </a>
              <a
                href="#"
                className={`common-button contact_sales_btn common-Link`}
              >
                Contact Sales
              </a>
            </div>
          </div>
          <div className={`fraud-teams-media`}>
            <div className={`fraudteams_video-container`}>
              <div className={`fraudteams_video`}>
                <div className={`fraud-Video`}>
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
                  <div className={`actualVideo`}>
                    <video
                      className={`js-actual-video`}
                      id="Video1"
                      poster=""
                      controls
                      style={{ opacity: 0 }}
                    >
                      <source src="sample.mp4" type="video/webm" />
                      <source src="sample.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className={`fraudteams_video_controls`}>
                    <button
                      className={`fraudteams_video_toggle js-toggle playbutton-visible`}
                      data-play="Play video"
                      data-pause="Pause video"
                    >
                      <div className={`js-play-pulse Hero__pulse`}></div>
                      <div className={`Hero__tooltip--play`}>
                        <div className={`Helm-Tooltip`}>
                          <div className={`Tooltip`}>
                            <div className={`Tooltip__icon`}></div>
                            <p
                              className={`common-BodyText Helm__text--slate1 Tooltip__content`}
                            >
                              Hear from our cofounders and COO
                            </p>
                            <div x-arrow="" className={`Tooltip__arrow`}></div>
                          </div>
                        </div>
                      </div>
                      <span className={`video_controls-icon`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="#555abf"
                          className={`icon--play`}
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

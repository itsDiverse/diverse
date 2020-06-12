import React from "react"
import style from "./Module20.module.css"

export default props => (
  <>
    <div className={"contentWapper"}>
      <div className={style.saveTimeOnReviews}>
        <div className={"containerLg"}>
          <div className={style.saveTimeOnReviewsTitle}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </div>
        <div className={[style.feature, style.patterns].join(" ")}>
          <div className={"containerLg"}>
            <div className={style.patternsContent}>
              <div className={style.patternsLeftContent}>
                <h3>{props.title1}</h3>
                <p>{props.text1}</p>
              </div>
              <div className={style.patternsRightContent}>
                <div className={style.imageContainer}>
                  <img src={props.image1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={[style.feature, style.networks].join(" ")}>
          <div className={"containerLg"}>
            <div className={style.networksContent}>
              <div className={style.networksLeftContent}>
                <h3>{props.title2}</h3>
                <p>{props.text2}</p>
              </div>
              <div className={style.networksRightContent}>
                <div className={style.imageContainer}>
                  <img src={props.image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

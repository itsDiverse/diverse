import React from "react"
import style from "./ContentHeader.module.css"

export default props => (
  <>
    <div className={"contentContainer"}>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
          <button className={"button" + props.button1style}>
            {props.button1title}
          </button>
          <button className={"button" + props.button2style}>
            {props.button2title}
          </button>
        </div>
        <div className={style.videoContainer}>
          <video width="100%" controls autoplay="true">
            <source src={props.headerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </>
)

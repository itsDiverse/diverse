import React from "react"
import style from "./ContentHeader.module.css"
import { Video } from "../../../videos/sample.mp4"
export default props => (
  <div className={style.contentContainer}>
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
          <source src={props.headerVideo || Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
)

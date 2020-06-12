import React from "react"
import style from "./Module1a.module.css"

export default props => (
  <>
    <div className={"contentWrapper"}>
      <section className={["containerLg", style.logoSection].join(" ")}>
        <ul>
          <li>
            <img src={props.image1} alt={props.image1alt} />
          </li>
          <li>
            <img src={props.image2} alt={props.image2alt} />
          </li>
          <li>
            <img src={props.image3} alt={props.image3alt} />
          </li>
          <li>
            <img src={props.image4} alt={props.image4alt} />
          </li>
          <li>
            <img src={props.image5} alt={props.image5alt} />
          </li>
          <li>
            <img src={props.image6} alt={props.image6alt} />
          </li>
          <li>
            <img src={props.image7} alt={props.image7alt} />
          </li>
        </ul>
        <a href="#">
          <span className={[style.commonodyText, style.linkArrow].join(" ")}>
            {props.text}
          </span>
        </a>
      </section>
    </div>
  </>
)

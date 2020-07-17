import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"

import { StyledContentWrapper } from "./Module16.styles"

const AnimatedText = ({ texts, className }) => {
  const [index, setIndex] = useState(0)
  const [actualText, setText] = useState(texts[index] || "go coding")

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * texts.length))
      setText(texts[index])
    }, 2000)
    return () => clearTimeout(timer)
  }, [index, texts])

  return <h2 className={className}>{actualText}</h2>
}

export default props => {
  return (
    <StyledContentWrapper theme={props.theme} data={props.data}>
      <div class="content-wrapper">
        <div class="get-funding-section">
          <div class="container-lg">
            <div class="get-funding-content-wrapper">
              <div class="get-funding-content">
                <div class="get-funding-title-section">
                  <figure>
                    <span>
                      <img
                        className="img-icon"
                        src={props.images.icon}
                        alt={props.images.iconAlt}
                      />
                    </span>
                  </figure>
                  <h2>{props.data.topTitle}</h2>
                  <span class="background-blue">{props.data.topSpan}</span>
                </div>
                <div class="get-funding-text-rotate">
                  <h2>{props.data.title.first}</h2>
                  <h2>
                    <CSSTransition
                      timeout={{ enter: 100, exit: 400 }}
                      classNames="fade"
                      transitionName="example"
                      transitionEnterTimeout={100}
                      transitionLeaveTimeout={100}
                    >
                      <AnimatedText
                        className="rotate"
                        texts={props.data.texts}
                      ></AnimatedText>
                    </CSSTransition>
                  </h2>
                </div>
                <div class="get-funding-content-bottom">
                  <p class="common-text">{props.data.subtitle}</p>
                  <div class="get-funding-content-bottom-btn">
                    <a href={props.data.button.left.url} class="start_now">
                      {props.data.button.left.text}
                    </a>
                    <a href={props.data.button.right.url} class="learn_more">
                      {props.data.button.right.text}
                    </a>
                  </div>
                </div>
              </div>
              <div class="get-funding-content-media">video or image</div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentWrapper>
  )
}

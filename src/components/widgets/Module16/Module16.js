import React from "react"
// import Typing from "react-typing-animation"

import { StyledContentWrapper } from "./Module16.styles"

// const AnimatedText = ({ texts, className }) => {
//   return (
//     <Typing loop speed={50}>
//       {texts.map(text => (
//         <>
//           <span>{text}</span>
//           <Typing.Delay ms={Math.ceil(Math.random() * 1000)} />
//           <Typing.Backspace count={text.length} />
//         </>
//       ))}
//     </Typing>
//   )
// }

export default props => {
  return (
    <StyledContentWrapper theme={props.theme} data={props.data}>
      <div className="content-wrapper">
        <div className="get-funding-section">
          <div className="container-lg">
            <div className="get-funding-content-wrapper">
              <div className="get-funding-content">
                <div className="get-funding-title-section">
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
                  <span className="background-blue">{props.data.topSpan}</span>
                </div>
                <div className="get-funding-text-rotate">
                  <h2>{props.data.title.first}</h2>
                  <h2>
                    {/* <AnimatedText
                      className="rotate"
                      texts={props.data.texts}
                    ></AnimatedText> */}
                  </h2>
                </div>
                <div className="get-funding-content-bottom">
                  <p className="common-text">{props.data.subtitle}</p>
                  <div className="get-funding-content-bottom-btn">
                    <a href={props.data.button.left.url} className="start_now">
                      {props.data.button.left.text}
                    </a>
                    <a
                      href={props.data.button.right.url}
                      className="learn_more"
                    >
                      {props.data.button.right.text}
                    </a>
                  </div>
                </div>
              </div>
              <div className="get-funding-content-media">video or image</div>
            </div>
          </div>
        </div>
      </div>
    </StyledContentWrapper>
  )
}

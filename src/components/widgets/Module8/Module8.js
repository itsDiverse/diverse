import React from "react"

import { StyledContentWrapper } from "./Module8.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} data={props.data}>
    <div className="content-wrapper">
      <section className="one-time-to-lifetime-customer">
        <div className="container-lg">
          <div className="text-center lifetime-customer-intro">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <image
                  href={props.images.titleImg}
                  alt={props.images.titleImgAlt}
                  height="70"
                  width="70"
                ></image>
              </g>
            </svg>
            <h2 className="section-title">{props.data.title}</h2>
            <p className="section-desc">{props.data.subtitle}</p>
          </div>
        </div>
        <div className="container-lg onetime-lifetime-first-section">
          <div className="onetime-lifetime-first-section-left">
            <div className="onetime-lifetime-left-section">
              <div className="onetime-lifetime-left-content">
                <span>
                  {props.data.leftBox.text.before}{" "}
                  <span className="medium color-medium">
                    {props.data.leftBox.text.color.text}
                  </span>{" "}
                  {props.data.leftBox.text.color.after}{" "}
                  <span className="medium">
                    <b>{props.data.leftBox.text.bold}</b>
                  </span>{" "}
                  {props.data.leftBox.text.after}
                </span>
              </div>
              <div className="onetime-lifetime-left-footer">
                <svg width="166" height="70" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="nonzero">
                    <image
                      href={props.images.logoBox}
                      height="70"
                      width="166"
                    />
                  </g>
                </svg>
              </div>
              <div className="onetime-lifetime-left-quotes">
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72 0v2.272c-1.203 0-2.324.382-3.36 1.146-1.038.764-1.556 1.676-1.556 2.736 0 .631.256.947.768.947.115 0 .346-.044.691-.133a4.4 4.4 0 0 1 .865-.113c.704 0 1.366.28 1.987.842.621.562.932 1.335.932 2.32 0 .96-.32 1.783-.96 2.471-.64.688-1.518 1.032-2.632 1.032-1.331 0-2.407-.495-3.226-1.486C.41 11.043 0 9.664 0 7.896 0 5.46.752 3.55 2.257 2.168 3.76.786 5.582.063 7.72 0zm10.544 0v2.272c-1.14 0-2.244.376-3.313 1.127-1.07.751-1.604 1.67-1.604 2.755 0 .631.256.947.768.947.116 0 .346-.044.692-.133a4.4 4.4 0 0 1 .864-.113c.742 0 1.415.29 2.016.87.602.581.903 1.345.903 2.292 0 .96-.32 1.783-.96 2.471-.64.688-1.517 1.032-2.631 1.032-1.332 0-2.407-.495-3.227-1.486-.819-.991-1.229-2.37-1.229-4.138 0-2.436.752-4.346 2.257-5.728C14.304.786 16.125.063 18.264 0z"
                    fill={props.theme.colors.secondary}
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="onetime-lifetime-first-section-right">
            <h4 className="color-slate UppercaseTitle">
              {props.data.rightText.title}
            </h4>
            <p className="title-desc">{props.data.rightText.text}</p>
            <ul className="onetime-lifetime-list">
              <li>
                <div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={props.theme.colors.secondary}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        d="M9.396 9.066c2.282-1.852 4.966-2.606 7.637-1.38 2.436 1.12 4.137 3.477 4.453 5.966 0 .002-1.997.024-2.001 0-.323-1.82-1.45-3.424-3.172-4.242-1.972-.937-3.926-.412-5.667.907l1.336 1.426a.508.508 0 0 1-.359.867H7.218a.704.704 0 0 1-.704-.703v-4.4a.509.509 0 0 1 .869-.359l2.013 1.918zm11.258 12.758a.51.51 0 0 0 .869-.36v-4.4a.704.704 0 0 0-.704-.703h-4.406a.51.51 0 0 0-.359.868l1.714 1.711a5.851 5.851 0 0 1-6.044.621 5.91 5.91 0 0 1-3.245-4.241c-.002-.01-2.002-.001-2.002 0 0 1.909 2.125 4.861 4.527 5.965a7.723 7.723 0 0 0 8.09-1.02l1.56 1.559z"
                        fill="#FFF"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h5 className="title-h5">{props.data.rightText.title2}</h5>
                  <p className="text-desc">{props.data.rightText.text2}</p>
                </div>
              </li>
              <li>
                <div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        cx="14"
                        cy="14"
                        r="14"
                        fill={props.theme.colors.secondary}
                      ></circle>
                      <path
                        d="M11.2 20.867a2.406 2.406 0 0 0 2.333 1.866c1.13 0 2.081-.793 2.334-1.866H11.2zm7.669-7.671c.356 2.022 1.118 3.738 1.92 4.958.555.833-.05 1.92-1.069 1.764H8.276c-1.02.156-1.614-.931-1.07-1.764.713-1.098 1.584-2.713 1.98-4.958.198-1.087.327-2.052.426-2.875.228-1.971 1.96-3.454 4.01-3.454h.811c2.05 0 3.782 1.483 4.01 3.454.1.813.228 1.778.426 2.875zM14 6.866A.933.933 0 1 1 14 5a.933.933 0 0 1 0 1.867z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h5 className="title-h5">{props.data.rightText.title3}</h5>
                  <p className="text-desc">{props.data.rightText.text3}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-lg onetime-lifetime-second-section">
          <div>
            <h4 className="color-slate UppercaseTitle">
              {props.data.leftText.title}
            </h4>
            <p className="title-desc">{props.data.leftText.text}</p>
            <ul className="onetime-lifetime-list">
              <li>
                <div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={props.theme.colors.secondary}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        d="M23.808 11.4C21.163 8.5 17.857 7 14 7s-7.163 1.5-9.808 4.4c-.33.4-.22 1 .22 1.4.441.4 1.213.3 1.543-.1C8.16 10.2 10.805 9 14 9c3.196 0 5.84 1.2 8.045 3.6.22.3.55.4.881.4.22 0 .441-.1.661-.2.441-.4.551-1 .22-1.4zM14 12c-2.535 0-4.849 1.1-6.392 3.1-.33.5-.22 1.1.22 1.4.221.1.442.2.662.2.33 0 .661-.1.882-.4.771-1 2.204-2.3 4.628-2.3s3.857 1.2 4.628 2.3c.331.5.992.6 1.543.2.551-.3.661-.9.22-1.4C18.85 13.1 16.536 12 14 12zm0 5c-1.212 0-2.204.9-2.204 2s.992 2 2.204 2c1.212 0 2.204-.9 2.204-2s-.992-2-2.204-2z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h5 className="title-h5">{props.data.leftText.title2}</h5>
                  <p className="text-desc">{props.data.leftText.text2}</p>
                </div>
              </li>
              <li>
                <div>
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={props.theme.colors.secondary}
                        cx="14.5"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        d="M19.217 18.47v-5.59a.985.985 0 0 0-.99-.985.994.994 0 0 0-.99.986v5.575l-1.809-1.81a.99.99 0 1 0-1.4 1.4l3.5 3.498a.993.993 0 0 0 .706.293.993.993 0 0 0 .707-.293l3.498-3.498a.99.99 0 1 0-1.4-1.4l-1.822 1.824zM12.48 9.368v5.589c0 .544-.44.986-.99.986a.994.994 0 0 1-.99-.986V9.382l-1.809 1.81a.99.99 0 1 1-1.399-1.4l3.499-3.498A.993.993 0 0 1 11.497 6c.256-.001.511.097.707.293l3.499 3.498a.99.99 0 1 1-1.4 1.4L12.48 9.367z"
                        fill="#FFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h5 className="title-h5">{props.data.leftText.title3}</h5>
                  <p className="text-desc">{props.data.leftText.text3}</p>
                </div>
              </li>
              <li>
                <div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={props.theme.colors.secondary}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        d="M9.396 9.066c2.282-1.852 4.966-2.606 7.637-1.38 2.436 1.12 4.137 3.477 4.453 5.966 0 .002-1.997.024-2.001 0-.323-1.82-1.45-3.424-3.172-4.242-1.972-.937-3.926-.412-5.667.907l1.336 1.426a.508.508 0 0 1-.359.867H7.218a.704.704 0 0 1-.704-.703v-4.4a.509.509 0 0 1 .869-.359l2.013 1.918zm11.258 12.758a.51.51 0 0 0 .869-.36v-4.4a.704.704 0 0 0-.704-.703h-4.406a.51.51 0 0 0-.359.868l1.714 1.711a5.851 5.851 0 0 1-6.044.621 5.91 5.91 0 0 1-3.245-4.241c-.002-.01-2.002-.001-2.002 0 0 1.909 2.125 4.861 4.527 5.965a7.723 7.723 0 0 0 8.09-1.02l1.56 1.559z"
                        fill="#FFF"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h5 className="title-h5">{props.data.leftText.title4}</h5>
                  <p className="text-desc">{props.data.leftText.text4}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="img-container">
              <img
                src={props.images.rightImage}
                alt={props.images.rightImageAlt}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </StyledContentWrapper>
)

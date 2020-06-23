import React from "react"
import { StyledContentWrapper } from "./Module5.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="footer-with-card-section-wrapper">
        <section className="footer-with-card-section">
          <div className="container-xl">
            <div className="footer-cards">
              <div className="footer-cards-wrapper">
                <a href={props.data.linkLeft}>
                  <span className="footer-cards-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="112"
                      height="89"
                      viewBox="0 0 112 89"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          className="Helm__fill--cyan3 hover-fillDark"
                          fill-rule="nonzero"
                          d="M103.737705,89 L56.3304918,89 C54.2887869,89 52.2305574,87.5558144 51.492459,85.993268 C49.5783607,81.9469794 42.6490492,79.8247423 33.9672131,79.8247423 L4.59016393,79.8247423 C2.05508639,79.8247423 3.1045746e-16,77.7707908 0,75.2371134 L0,9.17525773 C-3.1045746e-16,6.64158027 2.05508639,4.58762887 4.59016393,4.58762887 L34.8852459,4.58762887 C45.024918,4.58762887 53.2459016,8.69539175 53.2459016,13.7628866 L53.2459016,47.7113402 L108.327869,47.7113402 L108.327869,84.4123711 C108.327869,86.9460485 106.272783,89 103.737705,89 Z"
                        ></path>
                        <path
                          className="Helm__fill--cyan6 hover-fillLight"
                          fill-rule="nonzero"
                          d="M111.993574,71.5670103 C111.993574,77.0721649 100.643934,81.6570412 86.8541639,81.6570412 L83.6740984,81.6570412 L83.6740984,81.6662165 L61.9993443,81.6662165 	C53.5358649,83.0702636 53.2498119,82.574759 53.2504918,82.038732 L53.2532459,13.3068763 C53.2532459,9.50831959 57.6735738,6.42543299 63.1266885,6.42543299 L72.7752131,6.42543299 C72.8440656,6.42359794 72.911082,6.41809278 72.9808525,6.41809278 L85.0713443,6.41809278 C93.2620328,6.41809278 104.058098,4.3646701 108.591344,1.30472165 C110.048262,0.321134021 111.989902,1.22214433 111.989902,2.97461856 C111.989902,2.97461856 111.996328,65.1424948 111.989902,71.5651753 L111.993574,71.5670103 Z"
                        ></path>
                        <path
                          stroke="#FFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.754"
                          d="M73.9016393,65.6030928 L97.7704918,65.6030928 M73.9016393,56.4278351 L97.7704918,56.4278351 M73.9016393,40.8298969 L97.7704918,40.8298969 M73.9016393,31.6546392 L97.7704918,31.6546392 M73.9016393,22.4793814 L97.7704918,22.4793814"
                        ></path>
                        <path
                          stroke="#FFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.295"
                          d="M63.336918,57.8105464 L66.5647213,61.0163814 L63.336918,64.2240515 M63.336918,23.8620928 L66.5647213,27.0688454 L63.336918,30.2765155"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <h3 className="link-arrow">{props.data.titleLeft}</h3>
                  <p>{props.data.textLeft}</p>
                </a>
              </div>
              <div className="footer-cards-wrapper">
                <a href={props.data.linkRight}>
                  <span className="footer-cards-icon">
                    <svg
                      viewBox="0 0 111 111"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M105.28 4.72a11 11 0 1 1-15.56 15.56"
                          className="Helm__stroke--cyan3 hover-strokeDark"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M103.55,99.037 L68.772,99.023 C64.6550791,99.0213453 61.317759,95.6849204 61.315,91.568 L61.292,31.948 C61.2916131,30.5638687 61.678908,29.2072974 62.41,28.032 C62.43,28.002 62.448,27.968 62.47,27.937 C62.9289633,27.2196772 63.5073128,26.5861985 64.18,26.064 L80.16,10.104 C83.5,6.764 88.77,6.622 91.932,9.784 L109.174,27.044 C110.114,27.984 110.654,29.168 110.804,30.392 C110.917305,30.9093691 110.974966,31.4373702 110.976,31.967 L110.999,91.587 C111.000328,93.5632696 110.215846,95.4589777 108.818412,96.8564117 C107.420978,98.2538456 105.52527,99.0383277 103.549,99.037 L103.55,99.037 Z M86.11,14.337 C80.8909091,14.337 76.66,18.5679091 76.66,23.787 C76.6611046,29.0055386 80.8924614,33.2351046 86.111,33.234 C91.3295386,33.2328954 95.5591046,29.0015386 95.558,23.783 C95.558,18.565 91.328,14.335 86.111,14.336 L86.11,14.337 Z"
                          className="Helm__fill--cyan3 hover-fillDark"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M103.99 48.22c0 1.68-.58 3.23-1.54 4.46-.37.57-.79 1.1-1.26 1.57l-53.44 53.48a9.44 9.44 0 0 1-13.36 0L3.22 76.53a9.46 9.46 0 0 1 0-13.37L56.66 9.68a9.39 9.39 0 0 1 4.5-2.5l.15-.04a9.48 9.48 0 0 1 3.21-.15l28.64.02c5.98 0 10.84 4.6 10.84 10.27l-.02 30.94zM91.4 19.58a6.67 6.67 0 1 0-9.45 9.43 6.67 6.67 0 0 0 9.45-9.43z"
                          className="Helm__fill--cyan6 hover-fillLight"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M26.1 66.93l33.28-33.28M34.95 75.31l37.98-37.98M43.8 84.16l28.58-28.58"
                          stroke="#FFF"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M89.72 20.28a11 11 0 1 1 15.56-15.56"
                          className="Helm__stroke--cyan3 hover-strokeDark"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <h3 className="link-arrow">{props.data.titleRight}</h3>
                  <p>{props.data.textRight}</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="get-in-touch-section">
          <div className="container-lg">
            <div className="get-in-touch-content-wrapper">
              <div className="get-in-touch-content">
                <h2>{props.data.title}</h2>
                <h3>{props.data.subtitle}</h3>
              </div>
              <div className="get-in-touch-btn">
                <a
                  className="btn-left btn-default"
                  href={props.data.buttonLinkLeft}
                >
                  {props.data.buttonLeft}
                </a>
                <a
                  className="btn-right btn-default"
                  href={props.data.buttonLinkRight}
                >
                  {props.data.buttonRight}
                </a>
              </div>
            </div>
            <p>{props.data.text}</p>
          </div>
        </section>
      </div>
    </div>
  </StyledContentWrapper>
)

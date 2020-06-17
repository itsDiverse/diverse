import React from "react"
//import "./Module14.module.css"

import { StyledContentWrapper } from "./Module14.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="going-about-20-minutes">
        <div className="container-lg">
          <div className="going-about-20-minutes-box">
            <div className="left-box-content about-minutes-title">
              <h2>Get going in about 20 minutes</h2>
              <p>
                We guide you through the essentials and handle the rest. Fill
                out a bit of information, which takes about 20 minutes, and then
                we’ll begin creating the legal framework for your company.
              </p>
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <rect
                            width="30"
                            height="2"
                            x="10"
                            y="43"
                            fill="#E5A03E"
                            rx="1"
                          ></rect>
                          <path
                            stroke="#E5A03E"
                            stroke-width="2"
                            d="M1 41l5 5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            stroke="#E5A03E"
                            stroke-width="2"
                            d="M6 41l-5 5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            stroke="#E5A03E"
                            stroke-width="2.5"
                            d="M40.34 8.74s5.2 3.76.9 8.07c-4.3 4.3-7.8 3.91-10.86 6.98-3.07 3.07-1.5 6.37-1.5 6.37"
                            stroke-linecap="round"
                          ></path>
                          <path
                            fill="#FDD760"
                            d="M21.73 1.74a4.5 4.5 0 0 1 9 0v30.5h-9V1.73zm4.5 40.5l-4.5-10h9l-4.5 10z"
                            transform="rotate(45 26.232 19.732)"
                          ></path>
                          <rect
                            width="9"
                            height="2"
                            x="13.6"
                            y="26.86"
                            fill="#E5A03E"
                            transform="rotate(45 18.1 27.864)"
                          ></rect>
                          <rect
                            width="9"
                            height="2"
                            x="31.28"
                            y="9.19"
                            fill="#E5A03E"
                            transform="rotate(45 35.778 10.186)"
                          ></rect>
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>Form a legal entity</h3>
                  <p>
                    Set up your new company as a C Corporation in the state of
                    Delaware. We’ll create the legal documents, file the
                    paperwork, and apply for your Tax ID number. Our goal is to
                    have you in business within a few days.
                  </p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <figure className="devices-dashboard loaded">
                <div className="ground">
                  <div className="shadow"></div>
                </div>
                <div className="laptop">
                  <div className="device"></div>
                  <div className="controls"></div>
                  <div className="screen country-IN"></div>
                </div>
              </figure>
            </div>
          </div>
          <div className="going-about-20-minutes-box">
            <div className="left-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <rect
                            width="44"
                            height="5"
                            x="2"
                            y="40"
                            fill="#FDD760"
                            rx="1"
                          ></rect>
                          <path
                            fill="#E5A03E"
                            d="M6 38.5c0-.83.67-1.5 1.5-1.5h33c.83 0 1.5.67 1.5 1.5V40H6v-1.5z"
                          ></path>
                          <path
                            fill="#FDD760"
                            d="M38 21a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1v1h-6v-1a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1v-1h6v1zm-11 0a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1v1h-6v-1a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1v-1h6v1zm-11 0a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1v1h-6v-1a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1v-1h6v1z"
                          ></path>
                          <path
                            fill="#E5A03E"
                            d="M6 15h36v1.5c0 .83-.67 1.5-1.5 1.5h-33A1.5 1.5 0 0 1 6 16.5V15z"
                          ></path>
                          <path
                            fill="#FDD760"
                            d="M22.22 3.9a4.5 4.5 0 0 1 3.56 0l19.54 9.76C46.8 14.4 46.67 15 45 15H3c-1.66 0-1.8-.6-.32-1.34l19.54-9.77z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>Integrate your bank account</h3>
                  <p>
                    Choose one of our banking partners to set up a U.S. business
                    bank account. Start conducting business with your Stripe
                    Atlas company, without ever having to visit a branch in
                    person.{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <path
                            fill="#E5A03E"
                            d="M6 16a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V16zm0 3v4.17h40V19H6z"
                            transform="rotate(8 26 26.5)"
                          ></path>
                          <rect
                            width="40"
                            height="27"
                            x="1"
                            y="6"
                            fill="#FDD760"
                            rx="3"
                          ></rect>
                          <path
                            fill="#E5A03E"
                            d="M30 26a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1zm-8 0a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1zm-8 0a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1zm-8 0a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zM5 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>Stripe account</h3>
                  <p>
                    Activate your Stripe account to start accepting payments
                    from customers in 100+ currencies. You can also take
                    advantage of a range of Stripe’s other products, including{" "}
                    <a className="common-link" href="#">
                      Billing
                    </a>
                    ,{" "}
                    <a className="common-link" href="#">
                      Capital
                    </a>
                    ,{" "}
                    <a className="common-link" href="#">
                      Connect
                    </a>
                    ,{" "}
                    <a className="common-link" href="#">
                      Corporate Card
                    </a>
                    , and&nbsp;
                    <a className="common-link" href="#">
                      Radar
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="going-about-20-minutes-box">
            <div className="left-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path
                        d="M43 6H5C3.3 6 2 7.3 2 9v28c0 1.7 1.3 3 3 3h13.4l1.7-3H9c0-2.2-1.8-4-4-4V13c2.2 0 4-1.8 4-4h30c0 2.2 1.8 4 4 4v20c-2.2 0-4 1.8-4 4h-1.2l1.7 3H43c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm-8 9H13c-1.1 0-2 .9-2 2s.9 2 2 2h22c1.1 0 2-.9 2-2s-.9-2-2-2zm-6 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
                        fill="#FDD760"
                      ></path>
                      <path
                        d="M38.2 41.9l-4-5.4c1.1-1.2 1.7-2.8 1.7-4.6 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 1.8.7 3.4 1.7 4.6l-4 5.4c-.2.2 0 .6.3.5l3.6-1c.2 0 .4.1.4.2l1 3.7c.1.3.5.3.6 0l2.7-6.4h1.2l2.7 6.4c.1.3.5.3.6 0l1-3.7c0-.2.2-.3.4-.2l3.6 1c.5.1.7-.2.5-.5zM24 32c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
                        fill="#E5A03E"
                      ></path>
                    </svg>
                  </figure>
                  <h3>Form a legal entity</h3>
                  <p>
                    Set up your new company as a C Corporation in the state of
                    Delaware. We’ll create the legal documents, file the
                    paperwork, and apply for your Tax ID number. Our goal is to
                    have you in business within a few days.
                  </p>
                </li>
              </ul>
            </div>
            <div className="right-box-content">
              <ul className="about-minutes-box-list">
                <li>
                  <figure className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <path
                            fill="#E5A03E"
                            fill-rule="nonzero"
                            d="M32.54 12.43l-1.05-1.06c3.93-5.84.96-5.75-6.76-6.62L23.3 3.32c11.6-1.11 13.51.8 16.85 4.14 1.43 1.43 1.89 3.84 2.84 4.8.73.72 2.29 1.3 3.35 2.37.48.47 0 .96 0 .96l-2.94 2.94s-.49.48-.97 0c-.95-.95-.8-1.4-.97-1.9-1.5-4.65-5.81-1.1-5.81-1.1l-.99-.98-14.18 14.19.24.24c.65.65.65 1.7 0 2.33L7.52 44.52c-.64.64-1.7.64-2.34 0l-2.6-2.6a1.65 1.65 0 0 1 0-2.34l13.2-13.2a1.66 1.66 0 0 1 2.34 0l.24.24 14.18-14.19z"
                          ></path>
                          <path
                            fill="#FDD760"
                            d="M11.62 11.09l-1.06-3.2L4.53 4 2.41 6.13l3.9 6.02 3.18 1.06 15.76 15.76-.24.24c-.65.65-.65 1.7 0 2.35L37.96 44.5c.65.65 1.7.65 2.35 0l2.6-2.6c.66-.66.66-1.7.01-2.36L29.97 26.6a1.66 1.66 0 0 0-2.35 0l-.24.24L11.62 11.1z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <h3>Form a legal entity</h3>
                  <p>
                    Set up your new company as a C Corporation in the state of
                    Delaware. We’ll create the legal documents, file the
                    paperwork, and apply for your Tax ID number. Our goal is to
                    have you in business within a few days.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

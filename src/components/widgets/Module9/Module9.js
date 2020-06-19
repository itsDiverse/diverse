import React from "react"
// import "./Module9.module.css"

import { StyledContentWrapper } from "./Module9.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="payments-stack-section">
        <div className="container-lg">
          <div className="payments-stack-section-intro">
            <h2 className="section-title">{props.data.title}</h2>
            <p className="section-desc">
              Stripe combines a payments platform with applications that put
              revenue data at the heart of business operations.
            </p>
          </div>
          <div className="platform-diagram diagram">
            <div className="diagram-apps diagram-section animated fadeInLeft ">
              <a href="#" className="diagram-product diagram-product-radar">
                <svg viewBox="0 0 48 48">
                  <path
                    className="hover-fillLight"
                    fill="#F6A4EB"
                    d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z"
                  ></path>
                  <path
                    className="hover-fillDark"
                    fill="#9251AC"
                    d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z"
                  ></path>
                </svg>
                <span>Radar</span>
              </a>
              <a href="#" className="diagram-product diagram-product-sigma">
                <svg viewBox="0 0 48 48">
                  <path
                    className="hover-fillLight"
                    d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z"
                    fill="#beb0f4"
                  ></path>
                  <path
                    className="hover-fillDark"
                    d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z"
                    fill="#7356b6"
                  ></path>
                  <path
                    d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z"
                    fill="#FFF"
                  ></path>
                </svg>
                <span>Sigma</span>
              </a>
              <a href="#" className="diagram-product diagram-product-billing">
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#74E4A2"
                    className="hover-fillLight"
                    d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z"
                  ></path>
                  <path
                    fill="#159570"
                    className="hover-fillDark"
                    d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z"
                  ></path>
                </svg>
                <span>Billing</span>
              </a>
              <a href="#" className="diagram-product diagram-product-atlas">
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#FCD669"
                    className="hover-fillLight"
                    d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"
                  ></path>
                  <path
                    fill="#CE7C3A"
                    className="hover-fillDark"
                    d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z"
                  ></path>
                </svg>
                <span>Atlas</span>
              </a>
            </div>
            <div className="diagram-apps-content diagram-content animated fadeInRight">
              <h4 className="uppercase-text diagram-title">Applications</h4>
              <p className="diagram-desc">
                Sitting atop our payments platform are applications to manage
                revenue, prevent fraud, and expand internationally.
              </p>
            </div>
            <div className="diagram-platforms diagram-section animated delay-06s left15 fadeInLeft">
              <a href="#" className="diagram-product diagram-product-payments">
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#87BBFD"
                    className="hover-fillLight"
                    d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"
                  ></path>
                  <path
                    fill="#555ABF"
                    className="hover-fillDark"
                    d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"
                  ></path>
                </svg>
                <span>Payments</span>
              </a>
              <a href="#" className="diagram-product diagram-product-connect">
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#68D4F8"
                    className="hover-fillLight"
                    d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z"
                  ></path>
                  <path
                    fill="#217AB7"
                    className="hover-fillDark"
                    d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z"
                  ></path>
                </svg>
                <span>Connect</span>
              </a>
            </div>
            <div className="diagram-platforms-content diagram-content animated delay-06s right15 fadeInRight">
              <h4 className="uppercase-text diagram-title">
                Payments platform
              </h4>
              <p className="diagram-desc">
                At our core is a powerful payments engine that makes moving
                money easy.
              </p>
            </div>
            <div className="diagram-infra diagram-section js-diagram animated fadeInLeft delay-03s left10">
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
              <div className="diagram-infra-service" aria-hidden="true"></div>
            </div>
            <div className="diagram-infra-content diagram-content js-diagram-explanation animated fadeInRight delay-03s right10">
              <h4 className="uppercase-text diagram-title">Infrastructure</h4>
              <p className="diagram-desc">
                Our cloud-based infrastructure provides reliability,
                scalability, and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

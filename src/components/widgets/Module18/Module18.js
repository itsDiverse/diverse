import React from "react"
//import "./Module18.module.css"

import { StyledContentWrapper } from "./Module18.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="regulatory-compliance-section">
        <div className="container-lg">
          <div className="regulatory-compliance-title">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <rect width="48" height="48" className="fill-none"></rect>
                <path
                  d="M24,5s7,5,15,5V21c0,16-13,22-15,22S9,37,9,21V10C17,10,24,5,24,5Z"
                  className="fill-purple"
                ></path>
                <path
                  d="M24,5s7,5,15,5V21c0,16-13,22-15,22Z"
                  className="fill-blue"
                ></path>
                <path
                  d="M23.16,25.55l-2.66-2c-.84-.72-1.95,0-1.35,1l2.8,3.91a1.22,1.22,0,0,0,2.05,0l6.7-9.09c.83-1-.25-1.8-1-1.08Z"
                  className="fill-fff"
                ></path>
              </svg>
            </span>
            <h2>{props.data.title}</h2>
          </div>
          <div className="regulatory-compliance-checklist">
            <div className="check-list checklist-left">
              <h3>Get help meeting regulatory requirements</h3>
              <ul>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>API-based sanction screening</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Know Your Customer (KYC) checks</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Risk-based ID checks</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Card industry blacklist filtering</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>
                    Rely on Stripe’s financial and regulatory{" "}
                    <a href="#" className="common-link">
                      licenses
                    </a>{" "}
                    worldwide.
                  </span>
                </li>
              </ul>
            </div>
            <div className="check-list checklist-right">
              <h3>Move money and pay out compliantly</h3>
              <ul>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Securely collect bank information</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Control payout timing</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Support multi-party payments</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Automate PCI compliance</span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>
                    1099 reporting support (IRS tax threshold tracking)
                  </span>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="#24b47e"
                          d="M11.5,23 C5.14872538,23 7.77806814e-16,17.8512746 0,11.5 C-7.77806814e-16,5.14872538 5.14872538,1.16671022e-15 11.5,0 C17.8512746,3.88903407e-16 23,5.14872538 23,11.5 C23,17.8512746 17.8512746,23 11.5,23 Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M17.0468285,6.28269446 L9.74682854,13.7526945 L7.76682854,11.5126945 C6.89682854,10.7626945 5.53682854,11.6426945 6.15682854,12.7626945 L8.50682854,16.7426945 C8.87682854,17.2426945 9.74682854,17.7426945 10.6068285,16.7426945 C10.9768285,16.2426945 18.0368285,7.40269446 18.0368285,7.40269446 C18.9068285,6.40269446 17.7868285,5.53269446 17.0468285,6.28269446 Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>Set custom statement descriptors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

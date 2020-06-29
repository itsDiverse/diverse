import React from "react"

import { StyledContentWrapper } from "./Module21.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="intelligent-revenue-section">
        <div className="container-lg">
          <div className="intelligent-revenue ">
            <div className="intelligent-revenue-left">
              <div className="intelligent-revenue-left-content">
                <h2>{props.data.title}</h2>
                <p>{props.data.subtitle}</p>
                <a href={props.data.link.url} className="intelligent-link">
                  {props.data.link.text}
                </a>
              </div>
            </div>
            <div className="intelligent-revenue-right">
              <div className="intelligent-line">
                <svg
                  width="2px"
                  height="995px"
                  viewBox="0 0 2 995"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M1,1 L1,1001"
                    stroke="#87BBFD"
                    stroke-width="2"
                    stroke-dasharray="2 8"
                  ></path>
                </svg>
              </div>
              <div className="intelligent-checklist">
                <div className="checklist-icon">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>incorporation</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="incorporation"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="incorporation-copy"
                        transform="translate(1.000000, 0.000000)"
                      >
                        <image
                          href={props.images.checkListIcon1}
                          height="29"
                          width="29"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="checklist-content">
                  <h3>{props.data.checkList1.title}</h3>
                  <ul>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList1.item1}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList1.item2}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList1.item3}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="intelligent-checklist">
                <div className="checklist-icon">
                  <svg
                    width="32px"
                    height="36px"
                    viewBox="0 0 32 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>protection</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="protection"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="payments-icons"
                        transform="translate(1.000000, 0.000000)"
                        fill-rule="nonzero"
                      >
                        <image
                          href={props.images.checkListIcon2}
                          height="29"
                          width="29"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="checklist-content">
                  <h3>{props.data.checkList2.title}</h3>
                  <ul>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList2.item1}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList2.item2}/</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList2.item3}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="intelligent-checklist">
                <div className="checklist-icon">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>card-management</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="card-management"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Group"
                        transform="translate(0.000000, 4.000000)"
                        fill-rule="nonzero"
                      >
                        <image
                          href={props.images.checkListIcon3}
                          height="29px"
                          width="29px"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="checklist-content">
                  <h3>{props.data.checkList3.title}</h3>
                  <ul>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList3.item1}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList3.item2}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList3.item3}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="intelligent-checklist">
                <div className="checklist-icon">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>messaging</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="messaging"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="community"
                        transform="translate(0.000000, 3.000000)"
                        fill-rule="nonzero"
                      >
                        <image
                          href={props.images.checkListIcon4}
                          height="29px"
                          width="29px"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="checklist-content">
                  <h3>{props.data.checkList4.title}</h3>
                  <ul>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item1}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item2}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item3}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item4}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item5}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList4.item6}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="intelligent-checklist">
                <div className="checklist-icon">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>machine-learning</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="machine-learning"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g id="fast" fill-rule="nonzero">
                        <image
                          href={props.images.checkListIcon5}
                          height="29px"
                          width="29px"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="checklist-content">
                  <h3>{props.data.checkList5.title}</h3>
                  <ul>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList5.item1}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList5.item2}</span>
                    </li>
                    <li>
                      <span className="check-icon">
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
                      <span>{props.data.checkList5.item3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

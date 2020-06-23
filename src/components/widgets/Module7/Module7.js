import React from "react"
import { StyledContentWrapper } from "./Module7.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="compliance-section">
        <div className="container-lg">
          <div className="compliance-title">
            <img
              src={props.images.section1Title}
              alt={props.images.section1TitleAlt}
            />
            <h2 className="uppercase-text">{props.data.title1}</h2>
          </div>
          <div className="compliance-content-wrapper">
            <div className="compliance-content">
              <div className="compliance-left-content">
                <p>
                  {props.data.paragraph1.text.before}{" "}
                  <a
                    href={props.data.paragraph1.text.link1.url}
                    className="common-link"
                  >
                    {props.data.paragraph1.text.link1.text}
                  </a>{" "}
                  {props.data.paragraph1.text.between}
                  <a
                    href={props.data.paragraph1.text.link2.url}
                    className="common-link"
                  >
                    {" "}
                    {props.data.paragraph1.text.link2.text}{" "}
                  </a>
                  {props.data.paragraph1.text.after}
                </p>
                <p>{props.data.paragraph2.text}</p>
              </div>
              <div className="compliance-right-content">
                <h3>{props.data.bulletList.title}</h3>
                <ul>
                  <li>{props.data.bulletList.item1}</li>
                  <li>{props.data.bulletList.item2}</li>
                  <li>{props.data.bulletList.item3}</li>
                  <li>{props.data.bulletList.item4}</li>
                  <li>{props.data.bulletList.item5}</li>
                  <li>{props.data.bulletList.item6}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="platform-management-section">
            <div className="platform-management-left-content">
              <img
                src={props.images.section2Title}
                alt={props.images.section2TitleAlt}
              />
              <h2 className="uppercase-text">{props.data.title2}</h2>
              <p>{props.data.paragraph3}</p>
              <p>{props.data.paragraph4}</p>
            </div>
            <div className="platform-management-right-content laptop">
              <span className="shadow"></span>
              <span className="lid"></span>
              <span className="camera"></span>
              <div className="screen">
                <section className="dashboard-connected-accounts">
                  <div className="connected-accounts-nav">
                    <h1>{props.data.leftMenu.companyName}</h1>
                    <ul>
                      <li>{props.data.leftMenu.l1}</li>
                      <li>{props.data.leftMenu.l2}</li>
                      <li>{props.data.leftMenu.l3}</li>
                      <li>{props.data.leftMenu.l4}</li>
                    </ul>
                    <ul>
                      <li>{props.data.leftMenu.l5}</li>
                      <li>{props.data.leftMenu.l6}</li>
                      <li className="active">{props.data.leftMenu.l7}</li>
                      <li>{props.data.leftMenu.l8}</li>
                    </ul>
                    <ul>
                      <li>{props.data.leftMenu.l9}</li>
                      <li>{props.data.leftMenu.l10}</li>
                      <li>{props.data.leftMenu.l11}</li>
                    </ul>
                    <ul>
                      <li>{props.data.leftMenu.l12}</li>
                      <li>{props.data.leftMenu.l13}</li>
                    </ul>
                  </div>

                  <div className="connected-accounts-view">
                    <ul className="connected-accounts-subnav">
                      <li className="active">{props.data.topMenu.li1}</li>
                      <li>{props.data.topMenu.li2}</li>
                      <li>{props.data.topMenu.li3}</li>
                      <li>{props.data.topMenu.li}</li>
                    </ul>

                    <section className="connected-accounts-upcoming">
                      <h2>{props.data.boxTop.title}</h2>
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxTop.li1}</strong>
                          {props.data.boxTop.code1}
                          <span className="state-badge">
                            {props.data.boxTop.state}
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxTop.li2}</strong>
                          {props.data.boxTop.code2}
                          <span className="state-badge">
                            {props.data.boxTop.state}
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxTop.li3}</strong>
                          {props.data.boxTop.code3}
                          <span className="state-badge">
                            {props.data.boxTop.state}
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxTop.li4}</strong>
                          {props.data.boxTop.code4}
                          <span className="state-badge">
                            {props.data.boxTop.state}
                          </span>
                        </li>
                      </ul>
                    </section>

                    <section className="connected-accounts-recent">
                      <h2>{props.data.boxBottom.title}</h2>
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxBottom.li1}</strong>
                          {props.data.boxBottom.code1}
                          <span className="state-badge">
                            {props.data.boxBottom.state1}
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxBottom.li2}</strong>
                          {props.data.boxBottom.code2}
                          <span className="state-badge">
                            {props.data.boxBottom.state1}
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                          >
                            <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                            <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                          </svg>
                          <strong>{props.data.boxBottom.li3}</strong>
                          {props.data.boxBottom.code3}
                          <span className="state-badge">
                            {props.data.boxBottom.state2}
                          </span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </section>
              </div>
              <span className="chassis">
                <span className="keyboard"></span>
                <span className="trackpad"></span>
              </span>
            </div>
          </div>
          <div className="international-support">
            <div className="international-support-left-content">
              <img src={props.images.internationalImg} />
              <h2 className="uppercase-text">INTERNATIONAL SUPPORT</h2>
              <p className="common-BodyText">
                Expanding internationally typically requires significant
                resources, time and money. With Connect, you can swiftly expand
                internationally anywhere Stripe operates, without establishing
                separate local subsidiaries. This includes credit card
                processing capabilities in over 30 countries, with charges
                processed centrally or locally in the recipient’s country, which
                saves money on fees and improves decline rates. Accept payments
                in 135+ currencies, pay out in 15+ currencies and present the
                most relevant payment methods in checkout flows to further
                optimize conversion rate. All of Connect’s capabilities are
                supported by Stripe’s core payment functionality, used by
                millions of businesses and available in over 25 countries.
                Stripe has 14 global offices, so we can support{" "}
                <a href="#" className="common-Link">
                  marketplaces
                </a>{" "}
                and{" "}
                <a href="#" className="common-Link">
                  platforms
                </a>{" "}
                all over the world.
                <a href="#features-list" className="js-features-list-trigger">
                  See the full list of Connect features
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                    <path d="M6 4V0H4v4H0v2h4v4h2V6h4V4H6z"></path>
                  </svg>
                </a>
              </p>
            </div>
            <div className="international-support-right-content">
              <aside>
                <h2>Bank networks</h2>
                <ul className="bank-networks">
                  <li
                    title="U.S."
                    className="common-FlagIcon common-FlagIcon--us"
                  >
                    ACH
                  </li>
                  <li
                    title="SG"
                    className="common-FlagIcon common-FlagIcon--sg"
                  >
                    GIRO, FAST
                  </li>
                  <li
                    title="GB"
                    className="common-FlagIcon common-FlagIcon--gb"
                  >
                    Bacs, FPS
                  </li>
                  <li
                    title="JP"
                    className="common-FlagIcon common-FlagIcon--jp"
                  >
                    Zengin
                  </li>
                </ul>

                <p>Single Euro Payments Area (SEPA)</p>
                <ul className="flag-list">
                  <li
                    title="BE"
                    className="common-FlagIcon common-FlagIcon--be"
                  ></li>
                  <li
                    title="FI"
                    className="common-FlagIcon common-FlagIcon--fi"
                  ></li>
                  <li
                    title="FR"
                    className="common-FlagIcon common-FlagIcon--fr"
                  ></li>
                  <li
                    title="DE"
                    className="common-FlagIcon common-FlagIcon--de"
                  ></li>
                  <li
                    title="IE"
                    className="common-FlagIcon common-FlagIcon--ie"
                  ></li>
                  <li
                    title="IT"
                    className="common-FlagIcon common-FlagIcon--it"
                  ></li>
                  <li
                    title="NL"
                    className="common-FlagIcon common-FlagIcon--nl"
                  ></li>
                  <li
                    title="PT"
                    className="common-FlagIcon common-FlagIcon--pt"
                  ></li>
                  <li
                    title="ES"
                    className="common-FlagIcon common-FlagIcon--es"
                  ></li>
                </ul>

                <h2>Instant debit card payouts</h2>
                <p title="U.S." className="common-FlagIcon common-FlagIcon--us">
                  Live
                </p>
                <ul className="flag-list">
                  <li
                    title="CA"
                    className="common-FlagIcon common-FlagIcon--ca"
                  ></li>
                  <li
                    title="SG"
                    className="common-FlagIcon common-FlagIcon--sg"
                  ></li>
                  <li>Coming soon</li>
                </ul>

                <h2>Settlement currencies</h2>
                <ul className="settlement-currencies">
                  <li>EUR</li>
                  <li>USD</li>
                  <li>NOK</li>
                  <li>HKD</li>
                  <li>CHF</li>
                  <li>MXN</li>
                  <li>GBP</li>
                  <li>DKK</li>
                  <li>SEK</li>
                  <li>NZD</li>
                  <li>BRL</li>
                  <li>AUD</li>
                  <li>CAD</li>
                  <li>JPY</li>
                  <li>SGD</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

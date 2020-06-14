import React from "react"
import "./Module7.module.css"

export default props => (
  <div styleName="content-wrapper">
    <div styleName="compliance-section">
      <div styleName="container-lg">
        <div styleName="compliance-title">
          <img src="images/Module7/images/compliance.svg" />
          <h2 styleName="uppercase-text">COMPLIANCE</h2>
        </div>
        <div styleName="compliance-content-wrapper">
          <div styleName="compliance-content">
            <div styleName="compliance-left-content">
              <p>
                If you’re running a multi-sided{" "}
                <a href="#" styleName="common-link">
                  marketplace
                </a>{" "}
                or{" "}
                <a href="#" styleName="common-link">
                  platform
                </a>
                , there’s no doubt you’re wrestling with payments compliance
                issues such as card network rules, money transmission, KYC, and
                tax reporting. Connect makes these burdens easier to manage by
                shifting some of the most onerous obligations to Stripe, letting
                you stay focused on your product and spend less time on
                compliance related tasks.
              </p>
              <p>
                Under the hood, Connect is powered by secure credit card data
                tokenization to help you meet PCI obligations, contains
                monitoring and verification systems to help you with KYC needs
                and tax obligations, and leverages Stripe’s money transmission
                licenses in the U.S. as well as European e-money authorization.
              </p>
            </div>
            <div styleName="compliance-right-content">
              <h3>Lawyer friendly</h3>
              <ul>
                <li>Dynamic risk-based KYC/AML checks for all recipients</li>
                <li>API-based OFAC and sanctions screening</li>
                <li>IRS tax threshold tracking and 1099 support</li>
                <li>Card industry blacklist filtering</li>
                <li>
                  Licensed money transmission from U.S. states &amp; UK FCA
                </li>
                <li>
                  Screening for bad actors using data from the Stripe network
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div styleName="platform-management-section">
          <div styleName="platform-management-left-content">
            <img src="./images/platform-management.svg" />
            <h2 styleName="uppercase-text">Platform management</h2>
            <p>
              If you’re managing payouts for large numbers of people, you need a
              hub for all the workflows involved. Our dashboard lets support and
              operations teams view every stage of the user lifecycle: account
              history, verification, transfers, and more.
            </p>
            <p>
              Easily track the flow of funds from a customer to a recipient,
              with full records of all transactions in Stripe—we provide the
              ledger. Optional application fees let you specify your earnings
              and Stripe nets everything out. In the U.S., Connect includes
              gross earnings tracking and automated 1099 form generation and
              delivery.
            </p>
          </div>
          <div styleName="platform-management-right-content laptop">
            <span styleName="shadow"></span>
            <span styleName="lid"></span>
            <span styleName="camera"></span>
            <div styleName="screen">
              <section styleName="dashboard-connected-accounts">
                <div styleName="connected-accounts-nav">
                  <h1>Kosa Commerce</h1>
                  <ul>
                    <li>Home</li>
                    <li>Payments</li>
                    <li>Transfers</li>
                    <li>Customers</li>
                  </ul>
                  <ul>
                    <li>Radar</li>
                    <li>Subscriptions</li>
                    <li styleName="active">Connect</li>
                    <li>Products</li>
                  </ul>
                  <ul>
                    <li>Webhooks</li>
                    <li>API</li>
                    <li>View Test Data</li>
                  </ul>
                  <ul>
                    <li>Beta Settings</li>
                    <li>Business Settings</li>
                  </ul>
                </div>

                <div styleName="connected-accounts-view">
                  <ul styleName="connected-accounts-subnav">
                    <li styleName="active">Connected accounts</li>
                    <li>Connect transfers</li>
                    <li>Collected fees</li>
                    <li>Recipients</li>
                  </ul>

                  <section styleName="connected-accounts-upcoming">
                    <h2>Accounts with upcoming verification due dates</h2>
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Sublime Succulents</strong>
                        acct_19RLGo12b5oAam
                        <span styleName="state-badge">Upcoming due</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Owen's Pet Supplies</strong>
                        acct_20R0sAPMvcY781
                        <span styleName="state-badge">Upcoming due</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Burgundy Wine Shop</strong>
                        acct_6690dsOLPalQ8i
                        <span styleName="state-badge">Upcoming due</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Amy Carolyn Jewelry</strong>
                        acct_320dqoPaYOxn3c
                        <span styleName="state-badge">Upcoming due</span>
                      </li>
                    </ul>
                  </section>

                  <section styleName="connected-accounts-recent">
                    <h2>Recently connected accounts</h2>
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Michael’s Hardware</strong>
                        acct_426klopma25kaa
                        <span styleName="state-badge">Verified</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Saper Travel Agency</strong>
                        acct_325LSOmq250gNA
                        <span styleName="state-badge">Verified</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path d="M2.5 15A1.5 1.5 0 0 1 1 13.5V7.04c.38.14 1.22.22 1.65.26l.04 3.2c0 .28.23.5.5.5h9.7c.27 0 .5-.22.5-.5l-.05-3.2c.82-.04 1.67-.12 1.66-.26v6.46c0 .83-.68 1.5-1.5 1.5h-11z"></path>
                          <path d="M15.97 3.55l.02.03v.09l-.02.16a2.76 2.76 0 0 1-2.8 2.44c-1 0-1.88-.5-2.38-1.26a3.5 3.5 0 0 1-2.8 1.27A3.5 3.5 0 0 1 5.22 5a2.85 2.85 0 0 1-2.39 1.26 2.76 2.76 0 0 1-2.81-2.6L0 3.58l.02-.03c.01-.12.05-.24.11-.37l.71-1.15.07-.1.4-.64C1.56.78 2.41 0 3.22 0h9.53c.81 0 1.67.78 1.93 1.3l.4.63.06.1.71 1.15c.07.13.1.25.11.37z"></path>
                        </svg>
                        <strong>Nelson Interior Design</strong>
                        acct_104KvnwQYOP341
                        <span styleName="state-badge">Unverified</span>
                      </li>
                    </ul>
                  </section>
                </div>
              </section>
            </div>
            <span styleName="chassis">
              <span styleName="keyboard"></span>
              <span styleName="trackpad"></span>
            </span>
          </div>
        </div>
        <div styleName="international-support">
          <div styleName="international-support-left-content">
            <img src="images/international-support.svg" />
            <h2 styleName="uppercase-text">INTERNATIONAL SUPPORT</h2>
            <p styleName="common-BodyText">
              Expanding internationally typically requires significant
              resources, time and money. With Connect, you can swiftly expand
              internationally anywhere Stripe operates, without establishing
              separate local subsidiaries. This includes credit card processing
              capabilities in over 30 countries, with charges processed
              centrally or locally in the recipient’s country, which saves money
              on fees and improves decline rates. Accept payments in 135+
              currencies, pay out in 15+ currencies and present the most
              relevant payment methods in checkout flows to further optimize
              conversion rate. All of Connect’s capabilities are supported by
              Stripe’s core payment functionality, used by millions of
              businesses and available in over 25 countries. Stripe has 14
              global offices, so we can support{" "}
              <a href="#" styleName="common-Link">
                marketplaces
              </a>{" "}
              and{" "}
              <a href="#" styleName="common-Link">
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
          <div styleName="international-support-right-content">
            <aside>
              <h2>Bank networks</h2>
              <ul styleName="bank-networks">
                <li
                  title="U.S."
                  styleName="common-FlagIcon common-FlagIcon--us"
                >
                  ACH
                </li>
                <li title="SG" styleName="common-FlagIcon common-FlagIcon--sg">
                  GIRO, FAST
                </li>
                <li title="GB" styleName="common-FlagIcon common-FlagIcon--gb">
                  Bacs, FPS
                </li>
                <li title="JP" styleName="common-FlagIcon common-FlagIcon--jp">
                  Zengin
                </li>
              </ul>

              <p>Single Euro Payments Area (SEPA)</p>
              <ul styleName="flag-list">
                <li
                  title="BE"
                  styleName="common-FlagIcon common-FlagIcon--be"
                ></li>
                <li
                  title="FI"
                  styleName="common-FlagIcon common-FlagIcon--fi"
                ></li>
                <li
                  title="FR"
                  styleName="common-FlagIcon common-FlagIcon--fr"
                ></li>
                <li
                  title="DE"
                  styleName="common-FlagIcon common-FlagIcon--de"
                ></li>
                <li
                  title="IE"
                  styleName="common-FlagIcon common-FlagIcon--ie"
                ></li>
                <li
                  title="IT"
                  styleName="common-FlagIcon common-FlagIcon--it"
                ></li>
                <li
                  title="NL"
                  styleName="common-FlagIcon common-FlagIcon--nl"
                ></li>
                <li
                  title="PT"
                  styleName="common-FlagIcon common-FlagIcon--pt"
                ></li>
                <li
                  title="ES"
                  styleName="common-FlagIcon common-FlagIcon--es"
                ></li>
              </ul>

              <h2>Instant debit card payouts</h2>
              <p title="U.S." styleName="common-FlagIcon common-FlagIcon--us">
                Live
              </p>
              <ul styleName="flag-list">
                <li
                  title="CA"
                  styleName="common-FlagIcon common-FlagIcon--ca"
                ></li>
                <li
                  title="SG"
                  styleName="common-FlagIcon common-FlagIcon--sg"
                ></li>
                <li>Coming soon</li>
              </ul>

              <h2>Settlement currencies</h2>
              <ul styleName="settlement-currencies">
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
)

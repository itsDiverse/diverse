import React from "react"
import "./Module1.module.css"
import amazon from "./images/amazon.svg"
import booking from "./images/booking_com.svg"
import docusign from "./images/docusign.svg"
import instacart from "./images/instacart.svg"
import peleton from "./images/peleton.svg"
import shopify from "./images/shopify.svg"
import unicef from "./images/unicef.svg"

export default props => (
  <div styleName="content-wrapper">
    <section styleName="container-lg logo-section">
      <ul>
        <li title="Amazon">
          <img src={amazon} alt="Amazon" />
        </li>
        <li title="Booking com">
          <img src={booking} alt="Booking com" />
        </li>
        <li title="Docusign">
          <img src={docusign} alt="Docusign" />
        </li>
        <li title="Instacart">
          <img src={instacart} alt="Instacart" />
        </li>
        <li title="Peleton">
          <img src={peleton} alt="Peleton" />
        </li>
        <li title="Shopify">
          <img src={shopify} alt="Shopify" />
        </li>
        <li title="Unicef">
          <img src={unicef} alt="Unicef" />
        </li>
      </ul>
    </section>
  </div>
)

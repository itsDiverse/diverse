import React from "react"
//import "./Module1.module.css"

import { StyledContentWrapper } from "./Module1.styles"

export default props => (
  <StyledContentWrapper>
    <div className="content-wrapper">
      <section className="container-lg logo-section">
        <ul>
          <li title="Amazon">
            <img src={props.images.m1Logo1} alt={props.images.logo1Alt} />
          </li>
          <li title="Booking com">
            <img src={props.images.m1Logo2} alt={props.images.logo2Alt} />
          </li>
          <li title="Docusign">
            <img src={props.images.m1Logo3} alt={props.images.logo3Alt} />
          </li>
          <li title="Instacart">
            <img src={props.images.m1Logo4} alt={props.images.logo4Alt} />
          </li>
          <li title="Peleton">
            <img src={props.images.m1Logo5} alt={props.images.logo5Alt} />
          </li>
          <li title="Shopify">
            <img src={props.images.m1Logo6} alt={props.images.logo6Alt} />
          </li>
          <li title="Unicef">
            <img src={props.images.m1Logo7} alt={props.images.logo7Alt} />
          </li>
        </ul>
      </section>
    </div>
  </StyledContentWrapper>
)

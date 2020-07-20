import React from "react"
//import style from "./Module1a.module.css"
import { StyledContentWrapper } from "./Module1a.styles"

export default props => (
  <StyledContentWrapper>
    <div className="content-wrapper">
      <section className="container-lg logo-section">
        <ul>
          <li title="Amazon">
            <img src={props.images.m1aLogo1} alt={props.images.logo1Alt} />
          </li>
          <li title="Booking com">
            <img src={props.images.m1aLogo2} alt={props.images.logo2Alt} />
          </li>
          <li title="Docusign">
            <img src={props.images.m1aLogo3} alt={props.images.logo3Alt} />
          </li>
          <li title="Instacart">
            <img src={props.images.m1aLogo4} alt={props.images.logo4Alt} />
          </li>
          <li title="Peleton">
            <img src={props.images.m1aLogo5} alt={props.images.logo5Alt} />
          </li>
          <li title="Shopify">
            <img src={props.images.m1aLogo6} alt={props.images.logo6Alt} />
          </li>
          <li title="Unicef">
            <img src={props.images.m1aLogo7} alt={props.images.logo7Alt} />
          </li>
        </ul>
        <a href={props.data.link}>
          <span className="common-BodyText link-arrow">
            Millions of tech-forward businesses use Stripe to power
            theirpayments
          </span>
        </a>
      </section>
    </div>
  </StyledContentWrapper>
)

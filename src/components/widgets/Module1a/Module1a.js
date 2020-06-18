import React from "react"
//import style from "./Module1a.module.css"
import { data } from "../../../data"
import { StyledContentWrapper } from "./Module1a.styles"

export default props => (
  <StyledContentWrapper>
    <div className="content-wrapper">
      <section className="container-lg logo-section">
        <ul>
          <li title="Logo1">
            <img
              src={data.module1a.images.m1aLogo1}
              alt={data.module1a.imagesAlt.logo1Alt}
            />
          </li>
          <li title="Logo2">
            <img
              src={data.module1a.images.m1aLogo2}
              alt={data.module1a.imagesAlt.logo2Alt}
            />
          </li>
          <li title="Logo3">
            <img
              src={data.module1a.images.m1aLogo3}
              alt={data.module1a.imagesAlt.logo3Alt}
            />
          </li>
          <li title="Logo4">
            <img
              src={data.module1a.images.m1aLogo4}
              alt={data.module1a.imagesAlt.logo4Alt}
            />
          </li>
          <li title="Logo5">
            <img
              src={data.module1a.images.m1aLogo5}
              alt={data.module1a.imagesAlt.logo5Alt}
            />
          </li>
          <li title="Logo6">
            <img
              src={data.module1a.images.m1aLogo6}
              alt={data.module1a.imagesAlt.logo6Alt}
            />
          </li>
          <li title="Logo7">
            <img
              src={data.module1a.images.m1aLogo7}
              alt={data.module1a.imagesAlt.logo7Alt}
            />
          </li>
        </ul>
        <a href="#">
          <span className="common-BodyText link-arrow">
            Millions of tech-forward businesses use Stripe to power
            theirpayments
          </span>
        </a>
      </section>
    </div>
  </StyledContentWrapper>
)

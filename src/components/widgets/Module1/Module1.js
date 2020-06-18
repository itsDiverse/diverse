import React from "react"
//import "./Module1.module.css"

import { data } from "../../../data"
import { StyledContentWrapper } from "./Module1.styles"

export default props => (
  <StyledContentWrapper>
    <div className="content-wrapper">
      <section className="container-lg logo-section">
        <ul>
          <li title="Amazon">
            <img
              src={data.module1.images.m1Logo1}
              alt={data.module1.imagesAlt.logo1Alt}
            />
          </li>
          <li title="Booking com">
            <img
              src={data.module1.images.m1Logo2}
              alt={data.module1.imagesAlt.logo2Alt}
            />
          </li>
          <li title="Docusign">
            <img
              src={data.module1.images.m1Logo3}
              alt={data.module1.imagesAlt.logo3Alt}
            />
          </li>
          <li title="Instacart">
            <img
              src={data.module1.images.m1Logo4}
              alt={data.module1.imagesAlt.logo4Alt}
            />
          </li>
          <li title="Peleton">
            <img
              src={data.module1.images.m1Logo5}
              alt={data.module1.imagesAlt.logo5Alt}
            />
          </li>
          <li title="Shopify">
            <img
              src={data.module1.images.m1Logo6}
              alt={data.module1.imagesAlt.logo6Alt}
            />
          </li>
          <li title="Unicef">
            <img
              src={data.module1.images.m1Logo7}
              alt={data.module1.imagesAlt.logo7Alt}
            />
          </li>
        </ul>
      </section>
    </div>
  </StyledContentWrapper>
)

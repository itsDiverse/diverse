import React from "react"
//import style from "./Module12.module.css"

import { StyledContentWrapper } from "./Module12.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div class="content-wrapper">
      <div class="section-logos">
        <div class="container-xl">
          <div class="section-logos-wrapper">
            <div>
              <a href="#">
                <span class="Logo-opentable">OpenTable</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-blueapron">Blue Apron</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-goodeggs">Good Eggs</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-under-armour">Under Armour</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-target">Target</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-warby-parker">Warby Parker</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-wish">Wish</span>
              </a>
            </div>
            <div>
              <a href="#">
                <span class="Logo-shopstyle">ShopStyle</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

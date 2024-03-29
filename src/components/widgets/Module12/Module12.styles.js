import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
      }
      body {
        background: #fff;
        min-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        font-size: 62.5%;
        font-family: Camphor, Open Sans, Segoe UI, sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: "pnum";
        font-feature-settings: "pnum";
        font-variant-numeric: proportional-nums;
      }
      ol,
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      .content-wrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }
      .container-xl {
        max-width: 1160px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .section-logos-wrapper {
        padding: 0 20px;
        -webkit-box-pack: center;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .section-logos-wrapper a {
        display: block;
        margin: 0;
        padding: 0;
        position: relative;
        height: 120px;
        line-height: 120px;
      }
      .section-logos-wrapper a span {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) scale(0.7);
        transform: translate(-50%, -50%) scale(0.7);
        overflow: hidden;
        text-indent: -500px;
      }
      .section-logos-wrapper span {
        background-size: 1146px 1030px;
        background-image: url(${props.images.contentLogos});
      }
      .Logo-opentable {
        background-position: -184px -737px;
        width: 181px;
        height: 42px;
      }
      .Logo-blueapron {
        background-position: -1014px -579px;
        width: 99px;
        height: 47px;
      }
      .Logo-goodeggs {
        background-position: -907px -275px;
        width: 79px;
        height: 68px;
      }
      .Logo-under-armour {
        background-position: 0 -878px;
        width: 115px;
        height: 55px;
      }
      .Logo-target {
        background-position: -151px -996px;
        width: 146px;
        height: 34px;
      }
      .Logo-warby-parker {
        background-position: -177px -337px;
        width: 196px;
        height: 16px;
      }
      .Logo-wish {
        background-position: -1014px -668px;
        width: 111px;
        height: 39px;
      }
      .Logo-shopstyle {
        background-position: -733px -935px;
        width: 170px;
        height: 22px;
      }
      @media (min-width: 670px) {
        .section-logos-wrapper div {
          flex-basis: 25%;
          max-width: 25%;
        }
        .section-logos-wrapper a span {
          -webkit-transform: translate(-50%, -50%) scale(0.8);
          transform: translate(-50%, -50%) scale(0.8);
        }
      }
      @media (min-width: 880px) {
        .section-logos-wrapper a span {
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
      @media (-webkit-min-device-pixel-ratio: 1.3),
        (-webkit-min-device-pixel-ratio: 1.25),
        (min-resolution: 120dpi) {
        .section-logos-wrapper span {
          background-image: url(${props.images.contentLogos2x});
        }
      }
      @media (max-width: 880px) {
        .section-logos-wrapper div {
          flex-basis: 50%;
          max-width: 50%;
        }
      }
    `}
`

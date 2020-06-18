import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        font-family: Helvetica;
      }
      /*add missing classes*/
      .common-BodyText {
      }
      .link-arrow {
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
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .logo-section {
        margin-bottom: 40px;
        position: relative;
      }
      .logo-section ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        transition-duration: 0.25s;
        transition-timing-function: opacity, filter;
        padding: 0 20px;
      }
      .logo-section ul li {
        padding: 6px 15px;
      }
      .logo-section ul li:first-child {
        padding-left: 0;
      }
      .logo-section ul li img {
        max-width: 100%;
        max-height: 45px;
      }
      .logo-section > a {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        opacity: 0;
        transition: opacity 0.25s;
        cursor: pointer;
        -moz-transition: transform opacity 0.25s;
        -o-transition: transform opacity 0.25s;
        -webkit-transition: transform opacity 0.25s;
      }
      .logo-section > a span {
        color: #32325d;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
      }
      .logo-section:hover > a {
        opacity: 1;
      }
      .link-arrow:after {
        font: normal 16px StripeIcons;
        content: "2192";
        padding-left: 5px;
      }
      .logo-section:hover ul {
        opacity: 0.3;
        filter: blur(5px);
      }
      @media (min-width: 670px) {
        .logo-section {
          margin-bottom: 40px;
        }
      }
      @media (max-width: 767px) {
        .logo-section {
          z-index: 5;
        }
      }
      @media (hover: hover) {
        .logo-section:hover > a {
          opacity: 1;
        }
        .logo-section:hover ul {
          opacity: 0.3;
          filter: blur(5px);
        }
      }
    `}
`

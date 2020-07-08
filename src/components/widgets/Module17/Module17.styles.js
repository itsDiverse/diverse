import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
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

      button {
        border: none;
        outline: none;
        background: none;
        font-family: inherit;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      main,
      menu,
      nav,
      section,
      summary {
        display: block;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .content-wrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        background-color: ${props.theme.background};
        background-image: ${props =>
          props.theme.backgroundImage
            ? `linear-gradient(
          to bottom,
          ${props.theme.backgroundGradient}
        ),
        url("http://picsum.photos/800/600")`
            : "none"};
        background-repeat: no-repeat;
        background-position: ${props.theme.backgroundPosition};
        background-size: ${props.theme.backgroundSize};
        background-blend-mode: ${props.theme.blendMode};
      }
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding-bottom: 50px;
        width: 100%;
      }

      .services-section {
        margin: 10px 0px;
      }
      .services-section {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 0;
        min-width: 100%;
        padding: 0;
      }
      .services-box {
        border-radius: 8px;
        position: relative;
        background-color: #fff;
        transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translateY(0);
        display: block;
      }
      .services-innercontainer {
        height: 100%;
        display: flex;
      }
      .services-box:after,
      .services-box:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        pointer-events: none;
        border-radius: 8px;
      }
      .services-box:before {
        box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
      }
      .services-box:after {
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
          0 30px 60px -30px rgba(0, 0, 0, 0.3),
          0 -18px 60px -10px rgba(0, 0, 0, 0.025);
        opacity: 0;
      }
      .services-icon {
        --container-size: 64px;
        position: absolute;
        z-index: 1;
        top: -22px;
        width: var(--container-size);
        height: var(--container-size);
        border-radius: calc(var(--container-size) / 2);
        left: calc(50% - var(--container-size) / 2);
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform-origin: 50% 20%;
        box-shadow: 0 2px 5px rgba(50, 50, 93, 0.1),
          0 1px 1.5px rgba(0, 0, 0, 0.07);
      }
      .blue-fill {
        fill: #87bbfd;
      }
      .purpel-fill {
        fill: #6772e5;
      }
      .services-box .services-title {
        color: ${props.theme.colors.boxTitle};
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        margin-bottom: 15px;
      }
      .services-box .services-desc {
        color: ${props.theme.colors.boxText};
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
      }
      .services-footer {
        background-color: #fff;
        padding-top: 10px;
        padding-bottom: 20px;
        position: relative;
        width: 100%;
        background-color: transparent;
      }
      .services-link {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .services-link:after {
        font: normal 16px StripeIcons;
        content: "2192";
        padding-left: 5px;
      }
      .services-section .row {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 40px 0;
      }
      .services-icon span {
        background-color: transparent;
        height: 48px;
        width: 48px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-width: 60%;
        max-height: 56%;
      }
      .services-content-wrapper {
        overflow: hidden;
        padding: 50px 30px 80px;
        border-radius: 8px;
        position: relative;
      }
      .services-icon span svg {
        width: 100%;
        height: 100%;
      }
      .services-footer {
        position: absolute;
        bottom: 0;
        left: -10px;
        width: 100%;
        padding: 8px 10px;
        height: 56px;
        box-shadow: none;
        text-align: center;
        transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        background: #f6f9fc;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .background-transparent {
        background-color: transparent;
      }
      .services-footer-icon {
        width: 28px;
        height: 28px;
        margin: 0 10px 0 0;
      }
      .services-footer-icon svg {
        width: 100%;
        height: 100%;
      }
      .services-box:hover {
        transform: translateY(-2px);
        z-index: 2;
      }
      .services-box:hover:before {
        opacity: 0;
      }
      .services-box:hover:after {
        opacity: 1;
      }
      .services-box:hover .services-icon {
        transform: scale(0.8) translateY(-10px);
      }
      .services-box:hover .services-footer {
        transform: translateY(0);
        opacity: 1;
      }
      .services-footer .services-footer-text {
        font-size: 17px;
        line-height: 28px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .text-blue {
        color: ${props.theme.colors.boxFooter};
      }
      .text-green {
        color: #24b47e;
      }
      .services-footer .services-footer-text:after {
        content: "";
        padding-left: 5px;
        font: normal 16px StripeIcons;
        display: inline-block;
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .services-content {
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translateY(0);
      }
      .services-box:hover .services-content {
        transform: translateY(-16px);
      }

      .inner-col {
        position: relative;
        text-align: left;
        margin-bottom: 30px;
        margin-top: -10px;
        padding-left: 30px;
        background-color: #f6f9fc;
        padding-right: 20px;
      }
      .inner-col-wrapper {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      .inner-col-wrapper:first-of-type {
        border-bottom: 1px solid #e6ebf1;
      }
      .services-section-title .services-section-title-content {
        margin: 0 auto 60px;
        max-width: 750px;
        text-align: center;
      }
      .img-icon-top {
        height: 72px;
        width: 72px;
      }
      .img-icon-bottom {
        height: 30px;
        width: 30px;
      }
      .services-section-title-content span {
        overflow: hidden;
        background-color: #c4f0ff;
        height: 72px;
        width: 72px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .services-section-title-content span svg {
        width: 80%;
        height: 80%;
        transform: translateX(-10%);
      }
      .services-section-title-content h2 {
        color: ${props.theme.colors.title};
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        margin: 16px auto;
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 1100px) {
        .container-lg {
          width: calc(100% - 40px);
        }
        .container {
          width: calc(100% - 40px);
        }
      }
      @media (min-width: 670px) {
        .services-section .row {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 50px 20px;
        }
        .services-section-title .services-section-title-content {
          padding: 80px 20px 0;
        }
        .services-section-title-content h2 {
          font-size: 42px;
          line-height: 52px;
        }
        .services-icon {
          --container-size: 78px;
        }
        .services-content-wrapper {
          padding: 65px 40px 60px;
        }
        .services-footer {
          transform: translateY(50%);
          opacity: 0;
        }
      }
      @media (min-width: 880px) {
        .services-section .row {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 1024px) {
        .services-content-wrapper {
          padding: 65px 38px 60px;
        }
        .services-footer {
          transform: translateY(0);
        }
        .services-footer .services-footer-text {
          font-size: 15px;
        }
      }
      @media (max-width: 767px) {
        .services-content-wrapper {
          padding: 50px 30px 80px;
        }
        .content-wrapper {
          background-image: none;
        }
      }
    `}
`

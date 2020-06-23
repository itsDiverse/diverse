import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
        font-family: NovaReg;
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
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .footer-with-card-section-wrapper {
        background: transparent;
        overflow: hidden;
        padding-top: 500px;
        margin-top: -480px;
        position: relative;
      }
      .footer-with-card-section-wrapper:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 600px;

        background: #f6f9fc;
        -webkit-transform: skew(0, -12deg);
        transform: skew(0, -12deg);
      }
      .footer-cards > * {
        pointer-events: auto;
        position: relative;
      }
      .footer-cards-wrapper {
        position: relative;
        display: block;
        overflow: hidden;
        padding: 40px 40px 40px 120px;
        margin: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        transition-property: color, background-color, box-shadow, transform;
        transition-duration: 0.15s;
      }
      .footer-cards {
        display: flex;
        width: 100%;
      }
      .footer-cards-icon {
        position: absolute;
        width: 130px;
        height: 130px;
        left: -35px;
        top: calc(50% - 65px);
        z-index: 2;
        display: flex;
        align-items: center;
      }
      .link-arrow:after {
        font: normal 16px StripeIcons;
        content: "";
        padding-left: 5px;
      }
      .footer-cards-wrapper h3 {
        font-size: 17px;
        line-height: 28px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        margin: 0 0 5px;
        white-space: normal;
        color: ${props.theme.colors.boxTitle};
      }
      .footer-cards-wrapper p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.boxText};
        margin: 5px 0 0;
      }
      .footer-cards-icon svg {
        max-width: 110px;
        max-height: 110px;
        width: 100%;
        height: 100%;
      }
      .Helm__fill--cyan6 {
        fill: ${props.theme.colors.boxIconFill1};
      }
      .Helm__fill--cyan3 {
        fill: ${props.theme.colors.boxIconFill2};
      }
      .footer-cards-wrapper:hover {
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        color: ${props.theme.colors.boxIconHover} !important;
        transform: translateY(-2px);
      }
      .footer-cards-wrapper:hover svg .hover-fillDark {
        fill: ${props.theme.colors.boxIconHoverDark};
      }
      .footer-cards-wrapper:hover svg .hover-fillLight {
        fill: ${props.theme.colors.boxIconHoverLight};
      }
      .footer-cards-wrapper svg .hover-fillDark,
      .footer-cards-wrapper svg .hover-fillLight {
        transition: fill 0.15s;
      }
      .get-in-touch-section {
        padding: 50px 20px;
        border-bottom: 2px solid rgba(207, 215, 223, 0.25);
      }
      .get-in-touch-content-wrapper {
        z-index: 1;
        position: relative;
      }
      .get-in-touch-content h2 {
        font-weight: 300;
        color: ${props.theme.colors.title};
        display: block;
        font-size: 30px;
        line-height: 45px;
        margin: 0.75em 0 0;
      }
      .get-in-touch-content h3 {
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
        color: ${props.theme.colors.subtitle};
        margin: 0 0 0.75em;
      }
      .get-in-touch-btn .btn-default {
        white-space: nowrap;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        background: #fff;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #6772e5;
        text-decoration: none;
        -webkit-transition: all 0.15s ease;
        transition: all 0.15s ease;
        flex-shrink: 0;
        margin: 10px;
        color: ${props.theme.buttons.textRight};
        background: ${props.theme.buttons.colorRight};
        cursor: pointer;
      }
      .get-in-touch-btn .btn-left {
        background-color: ${props.theme.buttons.colorLeft};
        color: ${props.theme.buttons.textLeft};
      }
      .get-in-touch-btn .btn-default:hover {
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
        -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
      }
      .get-in-touch-section .container-lg > p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.text};
        position: relative;
      }
      .get-in-touch-content,
      .get-in-touch-btn {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 50%;
        flex: 1 0 50%;
      }
      @media (min-width: 880px) {
        .footer-cards-wrapper {
          padding-left: 120px;
        }
        .get-in-touch-btn {
          display: flex;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
        }
      }
      @media (min-width: 670px) {
        .get-in-touch-content-wrapper {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 100%;
        }
        .footer-cards-wrapper {
          width: calc(50% - 30px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      @media (max-width: 990px) {
        .footer-cards-wrapper {
          padding: 30px 30px 30px 110px;
        }
      }
      @media (max-width: 767px) {
        .footer-cards {
          display: block;
        }
        .get-in-touch-content-wrapper {
          margin-bottom: 20px;
        }
        .get-in-touch-btn .btn-default {
          font-size: 13px;
          padding: 0 10px;
        }
        .get-in-touch-section {
          padding: 50px 15px;
        }
        .get-in-touch-btn .btn-left {
          margin-left: 0px;
        }
        .get-in-touch-btn .btn-right {
          margin-right: 0px;
        }
      }
    `}
`

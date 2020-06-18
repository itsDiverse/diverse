import styled, { css } from "styled-components"
export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        font-family: Helvetica;
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
        font-family: Helvetica;
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
      .uppertext {
        text-transform: uppercase;
      }
      .process-section {
        position: relative;
        padding: 120px 0px;
        background-color: #f6f9fc;
      }
      .section-title {
        color: #32325d;
        margin-bottom: 20px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0.025em;
        font-size: 20px;
      }
      .section-desc {
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: #424770;
      }
      .process-content-title {
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
      }
      .section-title .uppertext {
        font-weight: 600;
      }
      .timeline {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        margin-top: 70px;
      }
      .line {
        padding: 1px;
      }
      .timeline .line {
        background-color: #e6ebf1;
        position: absolute;
        top: 40px;
        bottom: 40px;
        left: 39px;
        width: 2px;
      }
      .timeline-step {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
      }
      .icon-container .submit,
      .icon .submit {
        padding: 1px;
      }

      .timeline .timeline-step .icon-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        margin-right: 20px;
      }
      .timeline .timeline-step .icon {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #fff;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      .timeline .timeline-step .icon.submit {
        background-image: url(${props.images.m6Icon1});
      }
      .timeline .timeline-step .icon.documents {
        background-image: url(${props.images.m6Icon2});
      }
      .timeline .timeline-step .icon.incorporation {
        background-image: url(${props.images.m6Icon3});
      }
      .timeline .timeline-step .icon.tax-id {
        background-image: url(${props.images.m6Icon4});
      }
      .step-no {
      }
      .timeline-step p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #525f7f;
      }
      .documents-bank-account {
        padding: 1px;
      }
      .timeline-step .step-no {
        display: inline-block;
        height: 24px;
        padding: 0 10px;
        margin-top: 5px;
        line-height: 25px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 12px;
        text-transform: uppercase;
        color: #fff;
        background-color: #e39f48;
      }
      .timeline .timeline-step + .timeline-step {
        margin-top: 40px;
      }
      .process-section .container-lg {
        padding: 0 20px;
      }
      .process-content-section {
        padding: 1px;
      }

      @media (min-width: 670px) {
        .section-desc {
          font-size: 24px;
          line-height: 36px;
        }
        .timeline {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .timeline .line {
          top: 39px;
          bottom: auto;
          left: 80px;
          right: 80px;
          width: auto;
          height: 2px;
        }
        .timeline-step {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          max-width: 175px;
          margin: 0 20px;
          text-align: center;
        }
        .timeline .timeline-step .icon-container {
          margin: 0 auto 15px;
        }
        .timeline-step .step-no {
          margin-top: 15px;
        }
        .timeline .timeline-step.sign-documents {
          max-width: 191px;
        }
        .timeline .timeline-step + .timeline-step {
          margin-top: 0px;
        }
      }
      @media (max-width: 670px) {
        .container-lg {
          width: auto;
        }
      }
    `}
`

import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
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
      .listing-card-section {
        padding: 0 20px;
      }
      .listing-card-wrapper {
        margin-bottom: 80px;
      }
      .listing-card-wrapper .listing-card-box {
        position: relative;
        flex-direction: column;
        padding: 16px 16px 16px 0;
        display: flex;
        flex-direction: row;
      }
      .listing-card-wrapper .listing-card-box .listing-card-logo {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        box-shadow: 0 2.5px 5px -1px rgba(50, 50, 93, 0.25),
          0 1.5px 3px -1.5px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        margin: 0 20px 0 0;
        display: block;
        flex-shrink: 0;
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform-origin: right top;
      }
      .listing-card-wrapper .listing-card-box:hover .listing-card-logo {
        transform: scale(0.75);
      }
      .listing-card-wrapper .listing-card-box > a {
        display: flex;
        outline: none;
      }
      .listing-card-box:before,
      .listing-card-box:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .listing-card-box:before {
        top: 0;
        background-color: #fff;
        z-index: -1;
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
          0 5px 15px rgba(0, 0, 0, 0.07);
        border-radius: 4px;
        opacity: 0;
        transform: scale(0.95);
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .listing-card-box:after {
        height: 2px;
        background-color: #f6f9fc;
        transform-origin: left center;
        transition: transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .listing-card-box:hover:before {
        transform: scale(1);
        opacity: 1;
      }
      .listing-card-box:hover:after {
        transform: scaleX(0);
      }
      .listing-card-content h3 {
        line-height: 26px;
        margin: 0 0 6px;
        font-weight: 500;
        font-size: 19px;
        color: #32325d;
      }
      .listing-card-content p {
        color: #525f7f;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .listing-card-badges {
        margin: 14px 0 0;
      }
      .listing-card-badges .listing-card-badge {
        background-color: transparent;
        border: 1px solid #aab7c4;
        color: #aab7c4;
        padding: 1px 6px;
        margin: 0 8px 8px 0;
        display: inline-block;
        border-radius: 12px;
        padding: 2px 8px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
      }
      .listing-card-wrapper .listing-card-box:focus {
        outline: none;
      }
      .listing-card-wrapper .listing-card-box > a:focus {
        outline: none;
      }
      @media (min-width: 670px) {
        .listing-card-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px 20px;
        }
        .listing-card-wrapper .listing-card-box {
          flex-direction: row;
        }
      }
      @media (min-width: 880px) {
        .listing-card-wrapper {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 767px) {
        .listing-card-wrapper .listing-card-box {
          z-index: 5;
        }
      }
    `}
`

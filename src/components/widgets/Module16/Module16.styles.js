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
        padding: 0px;
        width: 100%;
      }
      .content-sections{ 
       
      }
      .get-funding-section {
        display: flex;
        flex: 1;
        padding: 150px 20px 160px;
        margin: 0 auto 120px;
        background-color: #f6f9fc;
      }
      .get-funding-content-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        flex: 1;
        @media (min-width: 670px) {
          flex-direction: row;
        }
      
      }
      .get-funding-content-wrapper .get-funding-content {
        flex: 1;
      }
      .get-funding-content-wrapper .get-funding-content-media {
        flex: 1;
        background: red;
      }
      .get-funding-title-section figure {
        margin-right: 16px;
      }
      .get-funding-title-section figure span {
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
      }
      .get-funding-title-section figure span svg {
        width: 100%;
        height: 100%;
      }
      .img-icon {
        height: 48px;
        width: 48px;
      }
      .get-funding-title-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
      }
      .get-funding-title-section h2 {
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: ${props.theme.colors.topTitle};
      }
      .get-funding-title-section span.background-blue {
        display: inline-block;
        padding: 4px 8px 3px;
        border-radius: 50px;
        font-size: 11px;
        line-height: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.03rem;
        background-color: ${props.theme.colors.span.background};
        color: ${props.theme.colors.span.text};
      }
      .common-text {
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: ${props.theme.colors.subtitle};
      }
      .get-funding-content-bottom {
        margin-top: 16px;
      }
      .get-funding-content-bottom-btn a {
        white-space: nowrap;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        background: ${props.theme.buttons.right.background};
        border-radius: 4px;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: ${props.theme.buttons.right.color};
        text-decoration: none;
        -webkit-transition: all 0.15s ease;
        transition: all 0.15s ease;
      }
      .get-funding-content-bottom-btn a:first-child {
        margin: 10px 20px 12px 0;
      }
      .get-funding-content-bottom-btn a:hover {
        color: #7795f8;
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
      .get-funding-content-bottom-btn a.start_now {
        background-color: ${props.theme.buttons.left.background};
        color: ${props.theme.buttons.left.color};
      }
      .get-funding-content-bottom-btn {
        margin-top: 30px;
      }
      .get-funding-text-rotate h2 {
        color: ${props.theme.colors.title.second};
        font-weight: 400;
        font-size: 28px;
        line-height: 40px;
      }
     
      .get-funding-text-rotate  .rotate {
        color: ${props.theme.colors.title.first};
        transition: opacity 1s easin;
      }

      .example-enter {
        opacity: 0.01;
      }
      
      .example-enter.example-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }
      
      .example-leave {
        opacity: 1;
      }
      
      .example-leave.example-leave-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
      }

      .video-display {
        xflex-basis: 46%;
        transform: skew(0.1rad);
      }
      .video-display-content {
        height: 100%;
        width: 100%;
        background-color: green;
      }
      @media (min-width: 375px) {
        .get-funding-text-rotate h2 {
          font-size: 35px;
          line-height: 48px;
        }
      }
      @media (min-width: 420px) {
        .get-funding-title-section span.background-blue {
          margin-left: 16px;
        }
      }
      @media (min-width: 670px) {
        .get-funding-content-wrapper .get-funding-content {
          flex-basis: 80%;
        }
        .common-text {
          font-size: 24px;
          line-height: 36px;
        }
        .get-funding-text-rotate h2 {
          font-size: 53px;
          line-height: 68px;
        }
      }
      @media (min-width: 880px) {
        .get-funding-content-wrapper .get-funding-content {
          flex-basis: 54%;
        }
      }
      @media (min-width: 1040px) {
        .get-funding-title-section figure {
          margin-left: -20px;
        }
      }

      .media-section {
        display: flex;
        flex: 1;
        background: "red";
      }
    `}
`

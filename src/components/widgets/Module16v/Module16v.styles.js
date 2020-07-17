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
      body:not(.keyboard-navigation)
        .fraud-Video--controls-out
        video::-webkit-media-text-track-container {
        transform: translateY(-20px) !important;
      }
      ol,
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      html[lang="ja"] body {
        font-family: Camphor, Meiryo, Hiragino Sans, sans-serif;
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
      .powerful-tools-section {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        padding: 0px 20px;
        position: relative;
        transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
      }
      .powerful-tools-wrapper {
        padding: 80px 0px;
      }
      .powerful-title-section h2 {
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: #32325d;
        margin-bottom: 24px;
        font-weight: 400;
      }
      .powerful-title-section p {
        font-weight: 400;
        font-size: 19px;
        line-height: 32px;
        color: #525f7f;
      }
      .powerful-tools-btn .common-button {
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
      }
      .powerful-tools-btn {
        margin-top: 24px;
      }
      .powerful-tools-btn .get_started_btn {
        margin: 10px 20px;
        margin-left: 0px;
        background: #8f6ed5;
        color: #fff;
      }
      .powerful-tools-btn .common-button:hover {
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
      .powerful-tools-btn .get_started_btn:hover {
        background-color: #a78ce9;
      }
      .video-container {
        order: ${props => (props.theme.reverseSectionOrder ? "-1" : "0")};
      }
      .js-actual-video {
        border-radius: 8px;
        box-shadow: ${props.theme.shadowColor};
        transform: skew(${props.theme.skew});
      }
      .actualVideo img {
        height: 300px;
        width: 100%;
        transform: skew(${props.theme.skew});
      }
      @media (min-width: 670px) {
        .powerful-tools-section {
          display: grid;
          grid-column-gap: 55px;
          grid-row-gap: 40px;
          grid-template-columns: repeat(2, 1fr);
        }
        .powerful-title-section h2 {
          font-size: 42px;
          line-height: 52px;
        }
        .casestudycard-media {
          display: block;
        }
      }
      .actualVideo video {
        width: 100%;
      }
      @media (max-width: 767px) {
        .video-container {
          padding-top: 20px;
          order: 0;
        }
        .js-actual-video {
          border-radius: 8px;
          box-shadow: ${props.theme.shadowColor};
          transform: skew(0);
        }
        .actualVideo img {
          height: 300px;
          width: 100%;
          transform: skew(0);
        }
      }
    `}
`

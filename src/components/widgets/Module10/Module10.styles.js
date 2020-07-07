import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica;
        font-weight: lighter;
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
      .solutions-rooted-section {
        position: relative;
      }
      .section-title {
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: ${props.theme.colors.titles};
      }
      .section-intro {
        text-align: center;
        padding: 0 20px;
      }
      .section-desc {
        max-width: 840px;
        margin: 0 auto;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: ${props.theme.colors.subtitle};
      }
      .solutions-rooted-content {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
        grid-gap: 30px 0;
        gap: 30px 0;
        margin: 35px 0 -60px;
        padding: 0 20px;
      }
      .rooted-box {
        position: relative;
        margin: 0 0 30px;
        padding: 0 0 0 45px;
      }
      .rooted-box figure {
        position: absolute;
        top: 3px;
        left: 0;
      }
      .rooted-box:last-child {
        margin: 0;
      }
      .rooted-title {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.titles};
      }
      .rooted-desc {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.texts};
      }
      .common-link {
        color: ${props.theme.colors.links};
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .engineering-scale {
        position: relative;
        flex-shrink: 0;
        padding: 30px;
        margin-top: 50px;
      }
      .engineering-scale .cover {
        position: relative;
        height: 200px;
        background-color: ${props.theme.colors.topBackgroundBoxRight};
        background-image: url(${props.images.imageBox});
        background-size: 120%;
        background-position: top;
        margin: -30px -30px 25px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        overflow: hidden;
      }
      .common-Card {
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        padding: 30px;
        -webkit-box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      }
      .engineering-scale-title {
        margin: 0 0 20px;
        color: #32325d;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: ${props.theme.colors.boxTitle};
      }
      .engineering-scale-desc {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.texts};
      }
      .btn-common {
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
      .btn-engineering {
        color: ${props.theme.button.text};
        background-color: ${props.theme.button.background};
        margin: 25px 0 0;
      }
      .btn-engineering:hover {
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
      .btn-common:hover {
        color: ${props.theme.button.hoverText};
        background-color: ${props.theme.button.hoverBackground};
      }
      .engineering-scale .cover:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 200px;
        left: 0;
        top: 100%;
        background-color: #fff;
        transform: skewY(-12deg);
        transform-origin: 0 0;
      }
      .u-italic {
        font-style: italic;
      }
      .common-Grid {
        --stripe-height: 48px;
        --content-columns: 12;
        --gutter-columns: 4;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: -1;
        pointer-events: none;
      }
      .common-Grid .backgroundContainer {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
      }
      .common-Grid .backgroundContainer .grid,
      .backgroundlineContainer .grid {
        height: 200%;
        -ms-flex-line-pack: end;
        align-content: end;
        grid-template-columns: 1fr;
        min-width: 0;
        --content-column-width: minmax(
          0,
          calc(1040px / var(--content-columns))
        );
        --gutter-column-width: 1fr;
        position: absolute;
        width: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fill, var(--stripe-height));
        grid-template-columns:
          [viewport-start] 1fr [left-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [left-gutter-end content-start] repeat(
            var(--content-columns),
            var(--content-column-width)
          )
          [content-end right-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [right-gutter-end] 1fr [viewport-end];
      }
      .common-Grid .backgroundContainer .background {
        grid-row: 1/-1;
        grid-column: 1/-1;
        z-index: -1;
        background-color: #f6f9fc;
      }
      .backgroundlineContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        overflow: hidden;
      }

      .common-Grid .backgroundlineContainer .linebg:first-child {
        grid-column: viewport-start/span 5;
        grid-row: -3;
        background-color: #424770;
      }
      .common-Grid .backgroundlineContainer .linebg:nth-child(2) {
        grid-column: 4 / span 3;
        grid-row: -2;
        background-color: #c4f0ff;
      }
      .common-Grid .backgroundlineContainer .linebg:nth-child(3) {
        grid-column: right-gutter-start/span 3;
        grid-row: -4;
        background-color: #6772e5;
      }
      .common-Grid .backgroundlineContainer .linebg:nth-child(4) {
        grid-column: span 6 / viewport-end;
        grid-row: -3;
        background-color: #87bbfd;
      }
      .common-Grid .backgroundlineContainer .linebg:nth-child(5) {
        grid-column: span 3/-5;
        grid-row: -2;
        background-color: #c4f0ff;
      }
      php
        artisan
        make:controller
        CustomersubcriptionController
        --resource
        --model=Customersubcription
        @media
        (min-width: 420px) {
        .solutions-rooted-section {
          padding: 80px 0 90px;
        }
      }
      @media (min-width: 670px) {
        .solutions-rooted-section {
          padding: 80px 0 100px;
        }
        .section-intro .section-title {
          margin: 25px 0 18px;
        }
        .section-title {
          font-size: 42px;
          line-height: 52px;
        }
        .section-desc {
          font-size: 24px;
          line-height: 36px;
        }
        .solutions-rooted-content {
          margin: 50px 0 -80px;
          grid-template-rows: 1fr;
          grid-template-columns: 0.55fr 0.45fr;
          grid-gap: 0 40px;
          gap: 0 40px;
        }
        .rooted-content-left {
          order: ${props => (props.theme.reverseOrder ? "1" : "0")};
        }
        .engineering-scale-title {
          font-size: 24px;
          line-height: 36px;
        }
        .engineering-scale .cover {
          margin: -30px -30px 25px;
        }
        .common-Grid {
          --stripe-height: 64px;
        }
        .engineering-scale {
          margin-top: 0px;
        }
      }
      @media (min-width: 880px) {
        .solutions-rooted-section {
          padding: 80px 0 120px;
        }
        .solutions-rooted-content {
          margin: 50px 0 -100px;
          grid-gap: 0 85px;
          gap: 0 85px;
        }
        .rooted-box {
          margin: 0 0 45px;
          padding: 0 0 0 55px;
        }
        .engineering-scale {
          padding: 40px;
          margin-top: 0;
        }
      }
      @media (min-width: 1040px) {
        .solutions-rooted-section {
          padding: 80px 0 160px;
        }
        .common-Grid .backgroundContainer .grid {
          --gutter-column-width: var(--content-column-width);
          min-width: calc(
            1040px / var(--content-columns) *
              (var(--gutter-columns) * 2 + var(--content-columns))
          );
        }
      }
      @media (min-width: 1040px) {
        .solutions-rooted-content {
          margin: 50px 0 50px;
          grid-gap: 0 150px;
          gap: 0 150px;
        }
      }
      @media (max-width: 767px) {
        .section-title {
          font-size: 30px;
        }
      }
    `}
`

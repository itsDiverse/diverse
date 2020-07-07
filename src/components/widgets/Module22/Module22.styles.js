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
        overflow-x: hidden;
        outline: none;
      }
      ol,
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      a,
      button,
      input,
      select,
      textarea {
        -webkit-tap-highlight-color: transparent;
      }
      :root {
        overflow-x: hidden;
        height: 100%;
      }
      :focus {
        outline: none;
      }
      blockquote,
      body,
      button,
      dd,
      dl,
      figure,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ol,
      p,
      pre,
      ul {
        margin: 0;
        padding: 0;
      }
      .container-lg {
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
        max-width: 1040px;
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
      .title-h2 {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: #32325d;
      }
      .text-p-desc {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .link-a {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .customer-help-payment {
        position: relative;
        margin: 50px 0px;
      }
      .customer-help-payment .web_nav {
        display: inline-flex;
        font-size: 10px;
      }
      .web_nav {
        display: flex;
        flex-direction: column;
        will-change: transform;
      }
      .web_nav_bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding: 0.5em 1em;
        position: relative;
      }
      .web_nav--chromeless .web_nav_bar {
        display: none;
      }
      .web_nav_stoplight {
        left: 1em;
        top: calc(50% - 0.3125em);
      }
      .web_nav_stoplight,
      .web_nav_stoplight:after,
      .web_nav_stoplight:before {
        width: 0.625em;
        height: 0.625em;
        background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBmaWxsPSIjQ0ZEN0RGIiBjeD0iNSIgY3k9IjUiIHI9IjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
          no-repeat;
        background-size: contain;
        position: absolute;
      }
      .web_nav_stoplight:after,
      .web_nav_stoplight:before {
        content: "";
      }
      .web_nav_stoplight:before {
        left: calc(0.5em + 100%);
      }
      .web_nav_stoplight:after {
        left: calc(1em + 200%);
      }
      .web_nav_navigation {
        background-color: #e6ebf1;
        border-radius: 0.25em;
        width: 50%;
        height: 1.375em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .web_nav_lock {
        position: relative;
        width: 0.6em;
        height: 0.5em;
        border-radius: 1px;
        margin: 0 0.3125em 0 0;
        display: flex;
      }
      .web_nav_lock .icon_nav {
        width: 100%;
        height: 100%;
      }
      .web_nav_address {
        height: 0.25em;
        width: 40%;
        background-color: #aab7c4;
        border-radius: 0.125em;
        border-radius: calc(0.25em / 2);
      }
      .web_nav_content {
        position: relative;
      }
      svg {
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
      }
      .Helm_fill--slate6 {
        fill: #aab7c4;
      }
      .customer-help-payment .Carousel {
        --space-between: 20px;
        width: calc(100vw - 50px);
      }
      .customer-help-payment .slider_item {
        border-radius: 4px;
        transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .customer-help-payment .slider_item img {
        max-width: 100%;
        width: 100%;
        vertical-align: top;
      }
      .payment_slider_horizontal .slider_item {
        opacity: 0.7;
      }
      .payment_slider_horizontal .slider_item:after,
      .payment_slider_horizontal .slider_item:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .payment_slider_horizontal .slider_item:before {
        box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
      }
      .payment_slider_horizontal .slider_item:after {
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        opacity: 0;
      }
      .payment_slider_horizontal .slider_item.is-selected {
        opacity: 1;
      }
      .payment_slider_horizontal .slider_item.is-selected:before {
        opacity: 0;
      }
      .payment_slider_horizontal .slider_item.is-selected:after {
        opacity: 1;
      }
      .payment_slider_vertical .Carousel {
        --space-between: 0px;
      }
      .payment_slider_vertical .Carousel .flickity-viewport {
        border-radius: 4px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
      }
      .payment_slider_vertical .Carousel .slider_item {
        overflow: hidden;
      }
      .payment_slider {
        --column-gap: 40px;
        --column-half-gap: calc(var(--column-gap) / 2);
      }
      .payment_slider_carousel .flickity-page-dots {
        display: none;
      }

      .payment_slider_slider {
        display: flex;
        position: relative;
        width: 100%;
        height: 3px;
        margin: 50px 0 25px;
        border-radius: 1.5px;
      }
      .payment_slider_slider:before {
        display: block;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background-color: #e6ebf1;
        content: "";
      }
      .payment_slider_slider:after {
        display: none;
        content: "horizontal";
      }
      .payment_slider_slider-indicator {
        position: absolute;
        top: 0;
        left: 0;
        width: 33.3333%;
        height: 100%;
        border-radius: inherit;
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .payment_slider_slider-indicator:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background-color: #6772e5;
        content: "";
      }
      .payment_slider_columns .flickity-viewport {
        width: 100%;
        overflow: visible;
      }
      .payment_slider_columns:after {
        display: none;
        content: "flickity";
      }
      .Carousel {
        margin: 0 auto;
      }
      .slider_item {
        width: 100%;
        margin: 0 var(--space-between);
      }
      .Carousel .flickity-slider {
        will-change: transform;
      }
      .Carousel .flickity-viewport {
        overflow: visible;
      }
      .payment_slider_vertical .Carousel .flickity-viewport {
        overflow: hidden;
      }
      .Carousel .flickity-page-dots {
        top: calc(100% + 20px);
        bottom: auto;
      }
      .Carousel .flickity-page-dots .dot {
        margin: 0 5px;
        background-color: #aab7c4;
        opacity: 1;
        transition: background-color 0.4s;
      }
      .Carousel .flickity-page-dots .dot.is-selected {
        background-color: #6b7c93;
      }

      @media (min-width: 420px) {
        .customer-help-payment .Carousel {
          width: 80vw;
        }
      }

      @media (min-width: 670px) {
        .customer-help-payment .Carousel {
          --space-between: 25px;
        }
        .customer-help-payment .web_nav {
          font-size: 16px;
        }
        .payment_slider_horizontal .payment_slider_slider {
          margin-top: 75px;
          padding: 0 var(--column-half-gap);
        }
        .payment_slider_horizontal .payment_slider_slider-indicator:before {
          left: var(--column-half-gap);
          right: var(--column-half-gap);
        }
        .payment_slider_horizontal .payment_slider_columns {
          display: flex;
          justify-content: space-between;
        }
        .payment_slider_horizontal .payment_slider_columns:after {
          content: "";
        }
        .payment_slider_horizontal .payment_slider_column {
          width: 33.3333%;
          margin-left: 0;
          margin-right: 0;
          padding: 0 var(--column-half-gap);
        }
      }

      @media (min-width: 880px) {
        .customer-help-payment .slider_item {
          max-width: 50vw;
        }

        .payment_slider_column {
          width: 100%;
          margin: 0 var(--column-half-gap);
        }
      }
      @media (min-width: 1040px) {
        .customer-help-payment .Carousel {
          width: 820px;
        }
      }
      @media (max-width: 767px) {
        /*.container-lg{padding: 0px;}
	.customer-help-payment{padding: 0 20px;}*/
        .payment_slider_column {
          width: 100%;
          margin: 0 0px;
          padding: 0 20px;
        }
        .container-lg {
          max-width: 100%;
          width: auto;
        }
      }
    `}
`

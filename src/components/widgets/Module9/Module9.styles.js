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
      .payments-stack-section {
        background-color: #fff;
        padding: 60px 0;
        position: relative;
      }
      .section-title {
        margin: 25px 0 18px;
        font-size: 42px;
        line-height: 52px;
        color: ${props.theme.colors.titles};
        font-weight: 400;
      }
      .section-desc {
        margin-bottom: 70px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        line-height: 36px;
        color: ${props.theme.colors.subtitle};
        font-weight: 300;
      }
      .payments-stack-section-intro {
        text-align: center;
        padding: 0 20px;
      }
      .diagram-apps {
        grid-area: diagram-apps;
        grid-template-columns: repeat(4, 1fr);
      }
      .diagram-product svg {
        width: 25px;
        height: 25px;
        transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .diagram-product {
        border-radius: 8px;
        background-color: #c4f0ff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-transform: uppercase;
        border: 2px solid;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .diagram-section {
        display: flex;
        min-height: 80px;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        grid-gap: 10px;
        gap: 10px;
        will-change: transform;
        box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
          0 3px 6px 0 rgba(0, 0, 0, 0.07);
      }
      .diagram-product-radar {
        background-image: url(${props.images.image1});
        background-repeat: no-repeat;
        height: 150px;
        width: 100%;
      }
      .diagram-product-sigma {
        background-color: #a688e7;
        border-color: #a688e7;
      }
      .diagram-product-billing {
        background-color: #3ecf8e;
        border-color: #3ecf8e;
      }
      .diagram-product-atlas {
        background-color: #f0b64b;
        border-color: #f0b64b;
      }
      .diagram-product span {
        display: block;
        margin: 8px 0 0;
        font-size: 15px;
        font-weight: 600;
      }
      .platform-diagram {
        margin: 60px 0 0;
      }
      .diagram {
        position: relative;
        display: grid;
        gap: 20px 0;
        grid-gap: 20px 0;
        grid-template-rows: repeat(6, auto);
        grid-template-areas: "diagram-apps" "diagram-apps-content" "diagram-platforms" "diagram-platforms-content" "diagram-infra" "diagram-infra-content";
        padding: 0 20px;
      }
      .diagram-title {
        color: ${props.theme.colors.titles};
        margin: 0 0 4px;
      }
      .uppercase-text {
        font-size: 17px;
        line-height: 28px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .diagram-desc {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: ${props.theme.colors.texts};
      }
      .diagram-product-payments {
        background-image: url(${props.images.image2});
        background-repeat: no-repeat;
        height: 150px;
        width: 100%;
      }
      .diagram-product-connect {
        background-image: url(${props.images.image3});
        background-repeat: no-repeat;
        height: 150px;
        width: 100%;
      }
      .diagram-platforms {
        grid-area: diagram-platforms;
        grid-template-columns: repeat(2, 1fr);
      }
      .diagram-infra {
        position: relative;
        grid-area: diagram-infra;
        display: flex;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr 1fr;
      }
      .diagram-infra-service {
        border: 2px dashed #7795f8;
        border-radius: 8px;
        opacity: 0.5;
      }
      .diagram-infra-service:first-child {
        grid-row: 1;
        grid-column: 1 / span 2;
      }
      .diagram-infra-service:nth-child(2) {
        grid-row: 2;
        grid-column: 1 / span 2;
      }
      .diagram-infra-service:nth-child(3) {
        grid-row: 1 / span 2;
        grid-column: 3;
      }
      .diagram-infra-service:nth-child(4) {
        grid-row: 1;
        grid-column: 4 / span 3;
      }
      .diagram-infra-service:nth-child(5) {
        grid-row: 2;
        grid-column: 4;
      }
      .diagram-infra-service:nth-child(6) {
        grid-row: 2;
        grid-column: 5 / span 2;
      }
      .diagram-infra-service:nth-child(7) {
        grid-row: 1;
        grid-column: 7 / span 3;
      }
      .diagram-infra-service:nth-child(8) {
        grid-row: 2;
        grid-column: 7 / span 1;
      }
      .diagram-infra-service:nth-child(9) {
        grid-row: 2;
        grid-column: 8 / span 2;
      }
      .diagram-infra-service:nth-child(10) {
        grid-row: 1 / span 2;
        grid-column: 10;
      }
      .diagram-infra:after {
        content: "";
        position: absolute;
        width: calc(100% + 60px);
        height: 150px;
        bottom: 0;
        left: -30px;
        transform: translateY(40%);
        background: linear-gradient(hsla(0, 0%, 100%, 0), #fff 50%);
        display: none;
      }
      .animated {
        -webkit-animation-duration: 1.5s;
        animation-duration: 1.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      @-webkit-keyframes fadeInLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-30%, 0, 0);
          transform: translate3d(-30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-30%, 0, 0);
          transform: translate3d(-30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
      }

      @-webkit-keyframes fadeInRight {
        from {
          opacity: 0;
          -webkit-transform: translate3d(30%, 0, 0);
          transform: translate3d(30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes fadeInRight {
        from {
          opacity: 0;
          -webkit-transform: translate3d(30%, 0, 0);
          transform: translate3d(30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
      }

      @-webkit-keyframes rightten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes rightten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .right10 {
        -webkit-animation-name: rightten;
        animation-name: rightten;
      }

      @-webkit-keyframes leftten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes leftten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .left10 {
        -webkit-animation-name: leftten;
        animation-name: leftten;
      }
      .animated.delay-03s {
        -webkit-animation-delay: 0.05s;
        animation-delay: 0.05s;
      }
      .animated.delay-06s {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      @-webkit-keyframes rightfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(20%, 0, 0);
          transform: translate3d(20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes rightfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(20%, 0, 0);
          transform: translate3d(20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .right15 {
        -webkit-animation-name: rightfifteen;
        animation-name: rightfifteen;
      }

      @-webkit-keyframes leftfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-20%, 0, 0);
          transform: translate3d(-20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes leftfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-20%, 0, 0);
          transform: translate3d(-20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .left15 {
        -webkit-animation-name: leftfifteen;
        animation-name: leftfifteen;
      }

      @media (min-width: 670px) {
        .payments-stack-section {
          background-color: #fff;
          padding: 80px 0 100px;
        }
        .diagram-section {
          min-height: 104px;
        }
        .diagram-product svg {
          width: 40px;
          height: 40px;
        }
      }

      @media (min-width: 880px) {
        .diagram-section {
          min-height: 104px;
          border-radius: 18px;
          padding: 15px;
          grid-gap: 15px;
          gap: 15px;
        }
        .diagram {
          align-items: center;
          gap: 30px 75px;
          grid-gap: 30px 75px;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 2fr 1fr;
          grid-template-areas: "diagram-apps diagram-apps-content" "diagram-platforms diagram-platforms-content" "diagram-infra diagram-infra-content";
        }
        .diagram-infra-service {
          border-radius: 10px;
        }
        .diagram-infra:after {
          display: block;
        }
      }
      @media (max-width: 767px) {
        .section-title {
          font-size: 32px;
        }
        .section-desc {
          font-size: 21px;
          line-height: 32px;
        }
        .diagram-product span {
          font-size: 13px;
        }
      }
    `}
`

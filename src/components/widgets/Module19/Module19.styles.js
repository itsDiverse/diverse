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
        padding: 20px 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
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
        background-color: ${props.theme.background};
      }
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .background-container {
        position: absolute;
        width: 100%;
        overflow: hidden;
        height: 620px;
      }
      .background-large {
        display: block;
        bottom: 45%;
        -webkit-transform: skew(0, -12deg);
        transform: skew(0, -12deg);
        will-change: transform;
        position: absolute;
        left: 0;
        right: 0;
      }
      .background-part {
        position: absolute;
        height: 50px;
        top: auto;
      }
      .background-part.bp1 {
        background-color: #6772e5;
        bottom: 0;
        left: 0;
        right: calc(100% - 35px);
      }
      .background-part.bp2 {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(6%, #edf6ff),
          color-stop(23%, #edf6ff),
          color-stop(95%, #fff)
        );
        background-image: linear-gradient(
          90deg,
          #edf6ff 6%,
          #edf6ff 23%,
          #fff 95%
        );
        bottom: 0;
        left: 355px;
        right: 600px;
      }
      .background-part.bp3 {
        background: #9cdbff;
        bottom: 0;
        left: calc(50% + 260px);
        right: 0;
      }
      .background-part.bp4 {
        opacity: 0.16;
        background: #9cdbff;
        bottom: -50px;
        left: 0;
        right: calc(50% + 475px);
      }
      .background-part.bp5 {
        background-color: rgba(0, 0, 0, 0.14);
        mix-blend-mode: soft-light;
        bottom: 200px;
        right: 0;
        width: 100px;
      }
      .background-part.bp6 {
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(transparent),
          color-stop(rgba(0, 0, 0, 0.3)),
          to(transparent)
        );
        background-image: linear-gradient(
          -90deg,
          transparent,
          rgba(0, 0, 0, 0.3),
          transparent
        );
        mix-blend-mode: soft-light;
        bottom: 100px;
        left: 53px;
        right: calc(50% + 40px);
        opacity: 0;
        -webkit-animation: none;
        animation: none;
      }
      .background-part.bp7 {
        opacity: 0;
        -webkit-animation: backgroundpart-7 5s infinite;
        animation: backgroundpart-7 5s infinite;
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
        will-change: transfrom, opacity;
      }
      @-webkit-keyframes backgroundpart-7 {
        0% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          -webkit-transform: translateX(100px);
          transform: translateX(100px);
          opacity: 0;
        }
        to {
          -webkit-transform: translateX(100px);
          transform: translateX(100px);
          opacity: 0;
        }
      }

      @keyframes backgroundpart-7 {
        0% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          -webkit-transform: translateX(100px);
          transform: translateX(100px);
          opacity: 0;
        }
        to {
          -webkit-transform: translateX(100px);
          transform: translateX(100px);
          opacity: 0;
        }
      }
      .background-part.bp8 {
        -webkit-animation: backgroundpart-8 7s infinite;
        animation: backgroundpart-8 7s infinite;
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        will-change: transfrom, opacity;
      }

      @-webkit-keyframes backgroundpart-8 {
        0% {
          -webkit-transform: translateX(-350px);
          transform: translateX(-350px);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          -webkit-transform: translateX(200px);
          transform: translateX(200px);
          opacity: 0;
        }
        to {
          -webkit-transform: translateX(200px);
          transform: translateX(200px);
          opacity: 0;
        }
      }

      @keyframes backgroundpart-8 {
        0% {
          -webkit-transform: translateX(-350px);
          transform: translateX(-350px);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          -webkit-transform: translateX(200px);
          transform: translateX(200px);
          opacity: 0;
        }
        to {
          -webkit-transform: translateX(200px);
          transform: translateX(200px);
          opacity: 0;
        }
      }

      .background-part.bp9 {
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(transparent),
          color-stop(rgba(0, 0, 0, 0.4)),
          to(transparent)
        );
        background-image: linear-gradient(
          -90deg,
          transparent,
          rgba(0, 0, 0, 0.4),
          transparent
        );
        mix-blend-mode: soft-light;
        bottom: 150px;
        left: 50%;
        right: calc(50% - 360px);
        -webkit-animation: backgroundpart-9 4s infinite;
        animation: backgroundpart-9 4s infinite;
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        will-change: transfrom, opacity;
      }

      @-webkit-keyframes backgroundpart-9 {
        0% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        30% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        to {
          -webkit-transform: translateX(80px);
          transform: translateX(80px);
          opacity: 0;
        }
      }

      @keyframes backgroundpart-9 {
        0% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        30% {
          -webkit-transform: translateX(-200px);
          transform: translateX(-200px);
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        to {
          -webkit-transform: translateX(80px);
          transform: translateX(80px);
          opacity: 0;
        }
      }
      .background-part.bp10 {
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(hsla(0, 0%, 100%, 0)),
          color-stop(hsla(0, 0%, 100%, 0.4)),
          to(hsla(0, 0%, 100%, 0))
        );
        background-image: linear-gradient(
          -90deg,
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0.4),
          hsla(0, 0%, 100%, 0)
        );
        mix-blend-mode: soft-light;
        bottom: 150px;
        left: calc(50% + 220px);
        right: 0;
        opacity: 0;
        -webkit-animation: none;
        animation: none;
      }
      .background-part.bp11 {
        opacity: 0.12;
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(#000),
          color-stop(97%, #000)
        );
        background-image: linear-gradient(-90deg, #000, #000 97%);
        mix-blend-mode: soft-light;
        bottom: 200px;
        left: calc(50% - 430px);
        right: calc(50% + 200px);
      }
      .background-part.bp12 {
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(transparent),
          color-stop(rgba(0, 0, 0, 0.3)),
          to(transparent)
        );
        background-image: linear-gradient(
          -90deg,
          transparent,
          rgba(0, 0, 0, 0.3),
          transparent
        );
        mix-blend-mode: soft-light;
        bottom: 600px;
        left: 53px;
        right: calc(50% + 40px);
        opacity: 0;
        -webkit-animation: none;
        animation: none;
      }
      .background-part.bp13 {
        background-image: -webkit-gradient(
          linear,
          right top,
          left top,
          from(hsla(0, 0%, 100%, 0)),
          color-stop(hsla(0, 0%, 100%, 0.24)),
          to(hsla(0, 0%, 100%, 0))
        );
        background-image: linear-gradient(
          -90deg,
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0.24),
          hsla(0, 0%, 100%, 0)
        );
        mix-blend-mode: soft-light;
        bottom: 550px;
        left: 53px;
        right: calc(50% + 40px);
        opacity: 0;
        -webkit-animation: none;
        animation: none;
      }
      .gradient {
        background-image: linear-gradient(-81deg, #6fa7f8 1%, #777bf8);
        bottom: 0;
        left: 0;
        right: 0;
        height: 5000px;
        margin-bottom: 50px;
      }
      .background-part.below {
        bottom: 0;
        left: calc(100% - 112px);
        right: calc(50% - 312px);
        background-color: #ecfaff;
        display: none;
      }
      .background-large .dots {
        position: absolute;
        height: 200px;
        width: 290px;
        top: auto;
        bottom: -50px;
        left: calc(100% - 150px);
        background: url(images/dots.svg);
        background-size: auto;
        -webkit-transform: skew(0, 12deg) rotate(90deg);
        transform: skew(0, 12deg) rotate(90deg);
        opacity: 0.5;
      }

      .container {
        max-width: 1080px;

        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .banner-container {
        position: relative;
        padding: 0;
        text-align: center;
      }
      .banner-wrapper {
        padding-top: 0px;
        text-align: center;
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
        min-height: 170px;
      }
      .banner-title {
        color: ${props.theme.colors.title};
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
      }
      .banner-intro {
        color: ${props.theme.colors.subtitle};
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
      }
      .services-section {
        margin-top: ${props => (props.theme.heading ? "0" : "40px")};
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
        -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2),
          0 5px 15px rgba(0, 0, 0, 0.07);
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2),
          0 5px 15px rgba(0, 0, 0, 0.07);
      }
      .services-box:hover .services-footer .services-footer-text {
        color: ${props.theme.colors.linkHover};
      }
      .services-innercontainer {
        height: 100%;
        display: flex;
      }

      .services-icon {
        --container-size: 80px;
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
        color: ${props.theme.colors.titleBox};
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        margin-bottom: 15px;
      }
      .services-box .services-desc {
        color: ${props.theme.colors.textBox};
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
        content: "";
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
        text-align: center;
      }
      .services-icon span svg {
        width: 100%;
        height: 100%;
      }
      .services-footer {
        position: absolute;
        bottom: 0;
        left: 0px;
        width: 100%;
        padding: 10px 0px;
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
        -webkit-box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
          0 8px 15px rgba(0, 0, 0, 0.07);
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
          0 8px 15px rgba(0, 0, 0, 0.07);
      }
      .services-box:hover:before {
        opacity: 0;
      }
      .services-box:hover:after {
        opacity: 1;
      }
      .services-footer .services-footer-text {
        font-size: 17px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 0.025em;
      }
      .text-blue {
        color: ${props.theme.colors.linkBox};
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

      .inner-col {
        position: relative;
        text-align: left;
        margin-bottom: 30px;
        margin-top: -10px;
        padding-left: 30px;
        padding-right: 20px;
      }
      .inner-col-wrapper {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      .inner-col-wrapper:first-of-type {
        border-bottom: 1px solid #e6ebf1;
      }
      .join-us-title {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.innerTitle};
      }

      .join-us-desc {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.innerText};
      }
      .mail-link {
        color: ${props.theme.colors.innerLink};
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .join-us-desc strong {
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.innerStrong};
      }

      @media only screen and (max-width: 1100px) {
        .container-lg {
          width: calc(100% - 60px);
        }
        .container {
          width: calc(100% - 40px);
        }
      }
      @media (min-width: 670px) {
        .background-container {
          height: 900px;
        }

        .background-part.bp1 {
          right: calc(100% - 355px);
        }
        .background-part.bp6 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 3s;
          animation-delay: 3s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .background-part.bp7 {
          opacity: 0;
          -webkit-animation: animate-stripe-7 5s infinite;
          animation: animate-stripe-7 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 1s;
          animation-delay: 1s;
          will-change: transfrom, opacity;
        }
        .background-part.bp8 {
          background-image: -webkit-gradient(
            linear,
            right top,
            left top,
            from(hsla(0, 0%, 100%, 0)),
            color-stop(hsla(0, 0%, 100%, 0.24)),
            to(hsla(0, 0%, 100%, 0))
          );
          background-image: linear-gradient(
            -90deg,
            hsla(0, 0%, 100%, 0),
            hsla(0, 0%, 100%, 0.24),
            hsla(0, 0%, 100%, 0)
          );
          mix-blend-mode: soft-light;
          bottom: 150px;
          left: 53px;
          right: calc(50% + 220px);
          opacity: 0;
          -webkit-animation: none;
          animation: none;
        }
        .background-part.bp10 {
          opacity: 0;
          -webkit-animation: animate-stripe-10 6s infinite;
          animation: animate-stripe-10 6s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          will-change: transfrom, opacity;
        }
        .background-part.bp12 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 3s;
          animation-delay: 3s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .background-part.bp13 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 1s;
          animation-delay: 1s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .background-part.below {
          display: block;
          bottom: -50px;
          left: calc(100% - 440px);
          right: calc(50% - 572px);
          background-color: #ecfaff;
        }
        .background-large .dots {
          opacity: 1;
          position: absolute;
          height: 200px;
          width: 450px;
          top: auto;
          bottom: 50px;
          left: calc(100% - 450px);
          background: url(images/dots.svg);
          background-size: auto;
          -webkit-transform: skew(0, 12deg) rotate(-12deg);
          transform: skew(0, 12deg) rotate(-12deg);
        }

        .banner-title {
          font-size: 42px;
          line-height: 52px;
        }
        .banner-intro {
          font-size: 24px;
          line-height: 36px;
        }

        .services-section .row {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 50px 20px;
        }
        .services-icon {
          --container-size: 100px;
        }
        .services-content-wrapper {
          padding: 90px 40px 75px;
        }
        .inner-col {
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          margin-bottom: 50px;
          margin-top: 40px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          text-align: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-left: 0;
          padding-right: 0;
          background-color: #0000000a;
        }
        .inner-col-wrapper:first-of-type {
          border-right: 1px solid #e6ebf1;
          border-bottom: none;
        }
        .inner-col-wrapper {
          padding-left: 40px;
          padding-right: 40px;
          max-width: 470px;
        }
      }
      @media (min-width: 880px) {
        .services-section .row {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 1024px) {
        .services-content-wrapper {
          padding: 90px 30px 80px;
        }
        .services-footer {
          transform: translateY(0);
          opacity: 1;
        }
        .services-footer .services-footer-text {
          font-size: 15px;
        }
      }
      @media (max-width: 767px) {
        .join-us-section {
          margin-top: 60px;
        }
        .services-box {
        }
        .services-footer {
          background-color: #f6f9fc;
        }
        .services-content-wrapper {
          width: 100%;
        }
        .services-icon {
          background-color: #f6f9fc;
        }
        .inner-col {
          background-color: #0000000c;
        }
        .content-wrapper {
          background-image: none;
        }
        .banner-container {
          padding-top: ${props =>
            props.theme.backgroundLayout ? "50px" : "0"};
        }
      }
    `}
`

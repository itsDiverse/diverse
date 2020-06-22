import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica;
      }
      .backgroundContainer {
        position: absolute;
        width: 100%;
        overflow: hidden;
        height: 620px;
      }
      .backgroundLarge {
        display: block;
        bottom: 45%;
        -webkit-transform: skew(0, -12deg);
        transform: skew(0, -12deg);
        will-change: transform;
        position: absolute;
        left: 0;
        right: 0;
      }
      .backgroundPart {
        position: absolute;
        height: 50px;
        top: auto;
      }
      .backgroundPart.bp1 {
        background-color: #6772e5;
        bottom: 0;
        left: 0;
        right: calc(100% - 35px);
      }
      .backgroundPart.bp2 {
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
      .backgroundPart.bp3 {
        background: #9cdbff;
        bottom: 0;
        left: calc(50% + 260px);
        right: 0;
      }
      .backgroundPart.bp4 {
        opacity: 0.16;
        background: #9cdbff;
        bottom: -50px;
        left: 0;
        right: calc(50% + 475px);
      }
      .backgroundPart.bp5 {
        background-color: rgba(0, 0, 0, 0.14);
        mix-blend-mode: soft-light;
        bottom: 200px;
        right: 0;
        width: 100px;
      }
      .backgroundPart.bp6 {
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
      .backgroundPart.bp7 {
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
      .backgroundPart.bp8 {
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

      .backgroundPart.bp9 {
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
      .backgroundPart.bp10 {
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
      .backgroundPart.bp11 {
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
      .backgroundPart.bp12 {
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
      .backgroundPart.bp13 {
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
      .backgroundPart.below {
        bottom: 0;
        left: calc(100% - 112px);
        right: calc(50% - 312px);
        background-color: #ecfaff;
        display: none;
      }
      .backgroundLarge .dots {
        position: absolute;
        height: 200px;
        width: 290px;
        top: auto;
        bottom: -50px;
        left: calc(100% - 150px);
        background: url(../../../images/template/dots.svg);
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
      .bannerContainer {
        position: relative;
        padding: 0;
        text-align: center;
      }
      .bannerWrapper {
        padding-top: 50px;
        text-align: center;
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
        min-height: 200px;
      }
      .bannerTitle {
        color: #fff;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
      }
      .bannerIntro {
        color: #fff;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
      }
      .servicesAection {
        margin-top: 0;
      }
      .servicesSection {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 0;
        min-width: 100%;
        padding: 0;
      }
      .servicesBox {
        border-radius: 8px;
        position: relative;
        background-color: #fff;
        transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translateY(0);
        display: block;
        -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
          0 5px 15px rgba(0, 0, 0, 0.07);
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
          0 5px 15px rgba(0, 0, 0, 0.07);
      }
      .servicesBox:hover .servicesFooter .servicesFooterText {
        color: #32325d;
      }
      .servicesInnercontainer {
        height: 100%;
        display: flex;
      }

      .servicesIcon {
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
      .blueFill {
        fill: #87bbfd;
      }
      .purpelFill {
        fill: #6772e5;
      }
      .servicesBox .services-title {
        color: #32325d;
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        margin-bottom: 15px;
      }
      .servicesBox .servicesDesc {
        color: #6b7c93;
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
      }
      .servicesFooter {
        background-color: #fff;
        padding-top: 10px;
        padding-bottom: 20px;
        position: relative;
        width: 100%;
        background-color: transparent;
      }
      .servicesLink {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .servicesLink:after {
        font: normal 16px StripeIcons;
        content: "\2192";
        padding-left: 5px;
      }
      .servicesSection .row {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 40px 0;
      }
      .servicesIcon span {
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
      .servicesContentWrapper {
        overflow: hidden;
        padding: 50px 30px 80px;
        border-radius: 8px;
        position: relative;
        text-align: center;
      }
      .servicesIcon span svg {
        width: 100%;
        height: 100%;
      }
      .servicesFooter {
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
      .backgroundTransparent {
        background-color: transparent;
      }
      .servicesFooterIcon {
        width: 28px;
        height: 28px;
        margin: 0 10px 0 0;
      }
      .servicesFooterIcon svg {
        width: 100%;
        height: 100%;
      }
      .servicesBox:hover {
        transform: translateY(-2px);
        z-index: 2;
        -webkit-box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
          0 8px 15px rgba(0, 0, 0, 0.07);
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
          0 8px 15px rgba(0, 0, 0, 0.07);
      }
      .servicesBox:hover:before {
        opacity: 0;
      }
      .servicesBox:hover:after {
        opacity: 1;
      }
      .servicesFooter .servicesFooterText {
        font-size: 17px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 0.025em;
      }
      .textBlue {
        color: #6772e5;
      }
      .textGreen {
        color: #24b47e;
      }
      .servicesFooter .servicesFooterText:after {
        content: "279C";
        padding-left: 5px;
        font: normal 16px StripeIcons;
        display: inline-block;
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .servicesContent {
        transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translateY(0);
      }

      .innerCol {
        position: relative;
        text-align: left;
        margin-bottom: 30px;
        margin-top: -10px;
        padding-left: 30px;
        background-color: #f6f9fc;
        padding-right: 20px;
      }
      .innerColWrapper {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      .innerColWrapper:first-of-type {
        border-bottom: 1px solid #e6ebf1;
      }
      .joinUsTitle {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: #32325d;
      }

      .joinUsDesc {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .mailLink {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .joinUsDesc strong {
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }

      @media only screen and (max-width: 1100px) {
        .containerLg {
          width: calc(100% - 60px);
        }
        .container {
          width: calc(100% - 40px);
        }
      }
      @media (min-width: 670px) {
        .backgroundContainer {
          height: 900px;
        }

        .backgroundPart.bp1 {
          right: calc(100% - 355px);
        }
        .backgroundPart.bp6 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 3s;
          animation-delay: 3s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .backgroundPart.bp7 {
          opacity: 0;
          -webkit-animation: animate-stripe-7 5s infinite;
          animation: animate-stripe-7 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 1s;
          animation-delay: 1s;
          will-change: transfrom, opacity;
        }
        .backgroundPart.bp8 {
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
        .backgroundPart.bp10 {
          opacity: 0;
          -webkit-animation: animate-stripe-10 6s infinite;
          animation: animate-stripe-10 6s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          will-change: transfrom, opacity;
        }
        .backgroundPart.bp12 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 3s;
          animation-delay: 3s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .backgroundPart.bp13 {
          -webkit-animation: backgroundpart-8 5s infinite;
          animation: backgroundpart-8 5s infinite;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-delay: 1s;
          animation-delay: 1s;
          opacity: 0;
          will-change: transfrom, opacity;
        }
        .backgroundPart.below {
          display: block;
          bottom: -50px;
          left: calc(100% - 440px);
          right: calc(50% - 572px);
          background-color: #ecfaff;
        }
        .backgroundLarge .dots {
          opacity: 1;
          position: absolute;
          height: 200px;
          width: 450px;
          top: auto;
          bottom: 50px;
          left: calc(100% - 450px);
          background: url(../../../images/template/dots.svg);
          background-size: auto;
          -webkit-transform: skew(0, 12deg) rotate(-12deg);
          transform: skew(0, 12deg) rotate(-12deg);
        }

        .bannerTitle {
          font-size: 42px;
          line-height: 52px;
        }
        .bannerIntro {
          font-size: 24px;
          line-height: 36px;
        }

        .servicesSection .row {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 50px 20px;
        }
        .servicesIcon {
          --container-size: 100px;
        }
        .servicesContentWrapper {
          padding: 90px 40px 75px;
        }
        .innerCol {
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          margin-bottom: 70px;
          margin-top: 40px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          text-align: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          background-color: transparent;
          padding-left: 0;
          padding-right: 0;
        }
        .innerColWrapper:first-of-type {
          border-right: 1px solid #e6ebf1;
          border-bottom: none;
        }
        .innerColWrapper {
          padding-left: 40px;
          padding-right: 40px;
          max-width: 470px;
        }
      }
      @media (min-width: 880px) {
        .servicesSection .row {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 1024px) {
        .servicesContentWrapper {
          padding: 90px 30px 80px;
        }
        .servicesFooter {
          transform: translateY(0);
          opacity: 1;
        }
        .servicesFooter .servicesFooterText {
          font-size: 15px;
        }
      }
      @media (max-width: 767px) {
        .joinUsSection {
          margin-top: 60px;
        }
        .servicesBox {
          box-shadow: none;
        }
        .servicesFooter {
          background-color: #fff;
        }
        .servicesContentWrapper {
          width: 100%;
        }
        .servicesIcon {
          background-color: #f6f9fc;
          box-shadow: none;
        }
      }
    `}
`

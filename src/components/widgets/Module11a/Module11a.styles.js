import styled, { css } from "styled-components"
import charityWaterImg from "./images/charity-water.jpg"
import lyftVertImg from "./images/lyft-vert.svg"
import lyftSvg from "./images/lyft.svg"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      /*added classes to make it work*/
      .Quote--lyft {
      }
      .marketplaces-gallery-bottom-content-left {
      }
      .marketplaces-gallery-routing {
      }
      /*regular styles*/
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
        opacity: ${props.theme.containerLg.opacity};
      }
      .container-xl {
        max-width: 1160px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .b2c-marketplaces {
        margin-top: 130px;
        margin-bottom: 50px;
        padding: 0 20px;
      }
      .marketplaces-title-section {
        text-align: center;
      }
      .marketplaces-title-section img {
        vertical-align: middle;
      }
      .marketplaces-title-section h3 {
        color: #24b47e;
        text-align: center;
        width: 100%;
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        margin: 1em 0;
      }
      .marketplaces-title-section p {
        margin: 0 0 1em;
        padding: 0;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: #424770;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
      }
      .marketplaces-gallery-section {
        background: #f4f4f4;
        -webkit-box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        margin: 30px 0 60px;
      }
      .marketplaces-gallery-photo {
        background-color: #a19273;
        background-image: url(${props.images.m11aBanner});
        width: 100%;
        min-height: 370px;
        background-size: cover;
        background-position: 50% 50%;
      }
      .marketplaces-gallery-content {
        webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-end;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -0.5rem;
        margin-right: 0;
        margin-right: calc((0 * 0.5) * -1);
        margin-left: -0.5rem;
        margin-left: 0;
        margin-left: calc((0 * 0.5) * -1);
      }

      .marketplaces-quote-wrapper .marketplaces-quote {
        margin: 0;
        padding: 40px;
        position: relative;
        z-index: 5;
        color: #fff;
      }
      .marketplaces-quote h2 {
        margin: 0 0 10px -2px;
      }
      .marketplaces-quote p {
        position: relative;
        font-style: italic;
        font-size: 2.1em;
        line-height: 1.6em;
        margin-bottom: 0;
      }
      .marketplaces-quote:before {
        content: "";
        display: block;
        background: #eab504;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
      .marketplaces-quote:after {
        content: "";
        display: block;
        width: 100%;
        height: 95px;
        background: url(${props.images.m11aBannerShadow});
        background-size: 100% 100%;
        position: absolute;
        top: -95px;
        left: 0;
      }
      .marketplaces-gallery-section-wrapper {
        padding: 0 20px;
      }
      .marketplaces-gallery-bottom-content {
        padding: 0 20px;
        margin-bottom: 30px;
      }
      .marketplaces-gallery-bottom-content figure {
        width: 72px;
        margin: 10px;
        margin-left: 40px;
        float: right;
        text-align: center;
      }
      .marketplaces-gallery-bottom-content div p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
        margin: 0 0 1em;
      }
      .common-link {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .marketplaces-gallery-bottom-content-right ul {
        line-height: 2em;
        list-style-type: none;
        padding: 1.5em 0 0;
        margin: 1.5em 0 0;
        border-top: 1px solid rgba(7, 96, 115, 0.07);
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .link-arrow:after {
        font: normal 16px StripeIcons;
        content: "2192";
        padding-left: 5px;
      }
      .marketplaces-quote-wrapper {
        width: 100%;
      }
      @media (min-width: 670px) {
        .marketplaces-title-section p {
          font-size: 24px;
          line-height: 36px;
        }
        .marketplaces-title-section h3 {
          font-size: 21px;
          line-height: 32px;
        }
        .marketplaces-gallery-photo {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          min-height: auto;
        }
        .marketplaces-quote-wrapper .marketplaces-quote {
          padding: 66px;
        }
        .marketplaces-quote:after {
          width: 206px;
          height: 100%;
          background: url(${props.images.m11aBannerShadow2});
          background-size: 100% 100%;
          z-index: -1;
          left: -129px;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
        .marketplaces-quote:before {
          opacity: 0.9216;
          left: 76px;
        }
        .marketplaces-gallery-content .marketplaces-quote-wrapper {
          flex-basis: 50%;
          max-width: 50%;
        }
        .marketplaces-gallery-bottom-content div {
          flex-basis: 41.667%;
          max-width: 41.667%;
        }
        .marketplaces-gallery-bottom-content {
          display: flex;
          justify-content: space-around;
        }
      }
      @media (max-width: 767px) {
        .b2c-marketplaces {
          margin-top: 50px;
        }
      }
    `}
`

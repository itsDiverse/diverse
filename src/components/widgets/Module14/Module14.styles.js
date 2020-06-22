import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        font-family: Helvetica;
      }
      /* Added class to  make it work*/
      .country-IN {
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
      }
      .going-about-20-minutes {
        position: relative;
        padding: 0 0 120px;
        margin-top: 150px;
      }
      .going-about-20-minutes-box .left-box-content h2 {
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: ${props.theme.colors.primary};
        margin-bottom: 20px;
        padding: 0 20px;
      }
      .going-about-20-minutes-box .left-box-content p {
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: #424770;
      }
      .about-minutes-title p {
        padding: 0 20px;
      }
      .about-minutes-title ul li p {
        padding: 0px;
      }
      .going-about-20-minutes-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      .going-about-20-minutes-box .left-box-content {
        -ms-flex-preferred-size: 51%;
        flex-basis: 51%;
      }
      .going-about-20-minutes-box .right-box-content {
        -ms-flex-preferred-size: 49%;
        flex-basis: 49%;
        position: relative;
      }
      .going-about-20-minutes-box .about-minutes-box-list {
        list-style: none;
      }
      .going-about-20-minutes-box .about-minutes-box-list li {
        padding-left: 50px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 20px;
        position: relative;
      }
      .going-about-20-minutes-box .about-minutes-box-list .icon {
        width: 48px;
        height: 48px;
        margin: 10px 0 20px -3px;
      }
      .going-about-20-minutes-box .about-minutes-box-list li h3 {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: #32325d;
        margin-bottom: 10px;
      }
      .going-about-20-minutes-box .about-minutes-box-list li p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .going-about-20-minutes-box .left-box-content ul {
        margin-top: 40px;
      }
      .going-about-20-minutes-box .about-minutes-box-list li .common-link {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .going-about-20-minutes .devices-dashboard.loaded {
        opacity: 1;
      }
      .going-about-20-minutes .devices-dashboard div {
        position: absolute;
        width: 1000px;
        height: 750px;
        background-size: 100% 100%;
      }
      .going-about-20-minutes .devices-dashboard .laptop .device {
        background-image: url(./images/laptop-device.jpg);
      }
      .going-about-20-minutes .devices-dashboard .laptop .controls {
        background-image: url(./images/laptop-controls.svg);
      }
      .going-about-20-minutes .devices-dashboard .screen {
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        overflow: hidden;
        will-change: transform;
      }
      .going-about-20-minutes .devices-dashboard img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .going-about-20-minutes .devices-dashboard .ground .shadow {
      }
      .going-about-20-minutes .devices-dashboard .laptop {
        -webkit-mask: url(./images/laptop-mask.svg);
        mask: url(/./images/laptop-mask.svg);
      }
      .going-about-20-minutes .devices-dashboard .laptop .screen {
        width: 720px;
        height: 450px;
        border-radius: 6px;
        -webkit-transform: matrix3d(
          0.8562198209416383,
          0.021937972700884066,
          0,
          0.00007058940264233656,
          0.08894470190852294,
          0.8079581585858137,
          0,
          -0.00009582949605178664,
          0,
          0,
          1,
          0,
          35,
          42,
          0,
          1
        );
        transform: matrix3d(
          0.8562198209416383,
          0.021937972700884066,
          0,
          0.00007058940264233656,
          0.08894470190852294,
          0.8079581585858137,
          0,
          -0.00009582949605178664,
          0,
          0,
          1,
          0,
          35,
          42,
          0,
          1
        );
        -webkit-box-shadow: 1px 1px 4px rgba(107, 124, 147, 0.5);
        box-shadow: 1px 1px 4px rgba(107, 124, 147, 0.5);
        background: url(./images/laptop-screen.jpg) 0 0/100% 100%;
      }
      .going-about-20-minutes .devices-dashboard {
        display: none;
        width: 1000px;
        height: 750px;
        position: absolute;
        z-index: -1;
        left: 30px;
        bottom: -140px;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0;
        -webkit-transition: opacity 1s ease;
        transition: opacity 1s ease;
      }
      @media (min-width: 670px) {
        .going-about-20-minutes-box .left-box-content h2 {
          font-size: 42px;
          line-height: 52px;
        }
        .going-about-20-minutes-box .left-box-content p {
          font-size: 24px;
          line-height: 36px;
        }
        .going-about-20-minutes .devices-dashboard {
          display: block;
          -webkit-transform: none;
          transform: none;
        }
        .going-about-20-minutes-box {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
      }
      @media (min-width: 1040px) {
        .going-about-20-minutes-box .about-minutes-box-list {
          margin-left: 45px;
        }
        .going-about-20-minutes-box .about-minutes-box-list .icon {
          position: absolute;
          left: -24px;
          top: 7px;
        }
        .going-about-20-minutes-box .about-minutes-box-list li {
          padding-left: 50px;
        }
      }
    `}
`

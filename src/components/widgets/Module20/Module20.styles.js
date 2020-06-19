import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica;
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
        opacity: ${props.theme.containerLg.opacity};
      }
      .save-time-on-reviews-title {
        text-align: center;
        padding: 0 15px;
      }
      .save-time-on-reviews-title h3 {
        max-width: 850px;
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: #32325d;
        margin: 0 auto;
      }
      .save-time-on-reviews-title p {
        margin: 12px auto 60px;
        max-width: 850px;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: #424770;
      }
      .save-time-on-reviews .patterns .patterns-content {
        display: grid;
        grid: auto/auto;
        grid-gap: 40px;
        position: relative;
        padding: 0 15px;
      }
      .save-time-on-reviews .feature h3 {
        color: #32325d;
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .save-time-on-reviews .feature p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }

      .patterns-left-content {
        padding: 1px;
      }

      .patterns-right-content {
        --transform: rotate3d(1, 0, 0, 0deg);
        --shadow: 0px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
          0px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
        --lighting-angle: 0deg;
        -webkit-perspective: 1500px;
        perspective: 1500px;
        z-index: 1;
      }
      .save-time-on-reviews .feature .image-container {
        border-radius: 8px;
        -webkit-transform: var(--transform);
        transform: var(--transform);
        -webkit-box-shadow: var(--shadow);
        box-shadow: var(--shadow);
      }
      .save-time-on-reviews .feature .image-container:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--lighting-angle)),
          color-stop(hsla(0, 0%, 100%, 0)),
          to(hsla(0, 0%, 100%, 0.35))
        );
        background: linear-gradient(
          var(--lighting-angle),
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0.35)
        );
        border-radius: 8px;
      }
      .save-time-on-reviews .feature .image-container img {
        width: 100%;
      }
      .save-time-on-reviews .feature {
        position: relative;
      }
      .save-time-on-reviews .networks .networks-content {
        padding: 80px 15px;
        display: grid;
        grid: auto/auto;
        grid-gap: 40px;
        position: relative;
      }
      .networks-right-content .image-container img {
        max-width: 800px;
      }
      .save-time-on-reviews .networks:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        background-color: #edf2f7;
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
        z-index: -1;
      }
      @media (min-width: 670px) {
        .save-time-on-reviews {
          padding-top: 120px;
        }
        .save-time-on-reviews-title h3 {
          font-size: 42px;
          line-height: 52px;
        }
        .save-time-on-reviews-title p {
          font-size: 24px;
          line-height: 36px;
        }
        .save-time-on-reviews .patterns .patterns-content {
          grid: auto/40% 1fr;
          grid-gap: 60px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .save-time-on-reviews .feature h3 {
          font-size: 21px;
          line-height: 32px;
        }
        .patterns-right-content {
          --transform: rotate3d(0.342, -0.94, 0, 15deg);
          --shadow: 29.4px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
            17.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          --lighting-angle: 290deg;
        }
        .save-time-on-reviews .feature .image-container img {
          width: auto;
        }
        .save-time-on-reviews .networks .networks-content {
          grid: auto/1fr 40%;
          grid-gap: 60px;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: end;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .save-time-on-reviews .networks .networks-left-content {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
        }
        .networks-right-content {
          --transform: rotate3d(0.342, 0.94, 0, 15deg);
          --shadow: -29.4px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
            -17.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          --lighting-angle: 70deg;
        }
      }
    `}
`

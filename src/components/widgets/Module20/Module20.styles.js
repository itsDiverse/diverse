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
      :root {
        overflow-x: hidden;
        height: 100%;
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
      .save-time-on-reviews-title {
        text-align: center;
        padding: 0 15px;
      }
      .save-time-on-reviews-title h3 {
        max-width: 850px;
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: ${props.theme.colors.titles};
        margin: 0 auto;
      }
      .save-time-on-reviews-title p {
        margin: 12px auto 60px;
        max-width: 850px;
        font-weight: 300;
        font-size: 21px;
        line-height: 32px;
        color: ${props.theme.colors.subtitle};
      }
      .save-time-on-reviews .patterns .patterns-content {
        display: grid;
        grid: auto/auto;
        grid-gap: 40px;
        position: relative;
        padding: 0 15px;
      }
      .save-time-on-reviews .feature h3 {
        color: ${props.theme.colors.titles};
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
        color: ${props.theme.colors.textDesc};
      }
      .patterns-right-content {
        --transform: rotate3d(1, 0, 0, 0deg);
        --shadow: 0px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
          0px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
        --lighting-angle: 0deg;
        -webkit-perspective: 1500px;
        perspective: 1500px;
        z-index: 1;
        order: ${props => (props.theme.shiftContentFirst ? "-1" : "1")};
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
        /*background: linear-gradient(
          var(--lighting-angle),
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0.35)
        );*/
        border-radius: 8px;
      }
      .save-time-on-reviews .feature .image-container img {
        width: 100%;
        margin-bottom: -5px;
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
          --shadow: ${props =>
              props.theme.colors.shadow
                ? `29.4px 62.5px 125px -25px ${props.theme.colors.shadowColor}`
                : "none"},
            17.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          --lighting-angle: 290deg;
          width: 100%;
        }
        .save-time-on-reviews .feature .image-container img {
          width: ${props => (props.theme.shiftContentFirst ? "100%" : "auto")};
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
          order: ${props => (props.theme.shiftContentSecond ? "0" : "2")};
        }
        .networks-right-content {
          --transform: rotate3d(0.342, 0.94, 0, 15deg);
          --shadow: ${props =>
              props.theme.colors.shadow
                ? `29.4px 62.5px 125px -25px ${props.theme.colors.shadowColor}`
                : "none"},
            17.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
          --lighting-angle: 70deg;
          width: 100%;
        }
      }
    `}
`

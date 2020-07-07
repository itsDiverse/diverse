import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
      }
      ol,
      ul {
        list-style: none;
      }
      .one-time-to-lifetime-customer {
        background-color: #f6f9fc;
        padding: 40px 0;
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
      .text-center {
        text-align: center;
      }
      .section-title {
        margin: 25px 0 18px;
        font-size: 42px;
        line-height: 52px;
        color: ${props.theme.colors.titles};
        font-weight: 400;
      }
      .section-desc {
        margin-bottom: 90px;
        max-width: 880px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        line-height: 36px;
        color: #424770;
        font-weight: 300;
      }

      @media only screen and (min-width: 880px) {
        .onetime-lifetime-second-section {
          grid-template-columns: 0.45fr 0.55fr;
          grid-template-rows: 1fr;
          grid-gap: 0 70px;
          gap: 0 70px;
          display: grid;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
      }
      @media only screen and (min-width: 767px) {
        .onetime-lifetime-first-section {
          grid-template-columns: 0.45fr 0.55fr;
          grid-template-rows: 1fr;
          grid-gap: 0 70px;
          gap: 0 70px;
          display: grid;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .onetime-lifetime-first-section-right {
          grid-row: ${props =>
            props.theme.reverseOrderFirstSection ? "1" : "0"};
        }
      }
      .onetime-lifetime-left-section {
        position: relative;
        z-index: 5;
        -webkit-transform: ${props =>
          props.theme.skewFirstSection
            ? `scale(0.9) perspective(2910px) rotateY(20deg)
          rotateX(5deg) rotate(-1deg)`
            : "0"};
        transform: ${props =>
          props.theme.skewFirstSection
            ? `scale(0.9) perspective(2910px) rotateY(20deg) rotateX(5deg)
            rotate(-1deg)`
            : "0"};
        border-radius: 14px;
        -webkit-box-shadow: -1px -1px 5px 0 rgba(26, 26, 67, 0.05),
          -12px 20px 125px -25px rgba(50, 50, 93, 0.5),
          -18px 20px 75px -37.5px rgba(0, 0, 0, 0.6);
        box-shadow: ${props =>
          props.theme.colors.shadow
            ? `
          -12px 20px 125px -25px ${props.theme.colors.shadowColor}`
            : "none"};
        font-size: 16px;
        grid-column: 1;
      }
      .onetime-lifetime-left-content {
        font-size: 1.625em;
        line-height: 1.5;
        padding: ${props => (props.theme.contentImage ? "0" : "2.4em 1.9em")};
        color: #424770;
        background-color: #fff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        font-weight: 300;
      }
      .onetime-lifetime-left-content img {
        max-height: 500px;
        margin-bottom: -14px;
        border-radius: 8px;
      }

      .onetime-lifetime-left-content span {
        font-size: 25px;
      }
      .onetime-lifetime-left-content span b {
        font-weight: 500;
      }
      .onetime-lifetime-left-content .medium {
        font-weight: 500;
      }
      .color-medium {
        color: ${props.data.leftBox.text.color.color};
      }
      .onetime-lifetime-left-footer {
        padding: 3.5em 1em;
        background-color: ${props.theme.colors.secondary};
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .onetime-lifetime-left-quotes {
        width: 2.5em;
        height: 2.5em;
        border-radius: 100%;
        -webkit-box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        top: 0;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .second-right-section {
        position: relative;
        border-radius: 14px;
        -webkit-transform: ${props =>
          props.theme.skewSecondSection
            ? `scale(0.9) perspective(2910px) rotateY(20deg)
          rotateX(5deg) rotate(-1deg)`
            : "0"};
        transform: ${props =>
          props.theme.skewSecondSection
            ? `scale(0.9) perspective(2910px) rotateY(20deg) rotateX(5deg)
            rotate(-1deg)`
            : "0"};
        border-radius: 14px;
        -webkit-box-shadow: -1px -1px 5px 0 rgba(26, 26, 67, 0.05),
          -12px 20px 125px -25px rgba(50, 50, 93, 0.5),
          -18px 20px 75px -37.5px rgba(0, 0, 0, 0.6);
        box-shadow: ${props =>
          props.theme.colors.shadow
            ? `
            -12px 20px 125px -25px ${props.theme.colors.shadowColor}`
            : "none"};
        font-size: 16px;
        margin: 50px;
        grid-row: ${props =>
          props.theme.reverseOrderSecondSection ? "1" : "0"};
      }
      .img-container {
        height: 520px;
        width: 100%;
      }
      .img-container img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
      }
      .color-slate {
        color: ${props.theme.colors.titles};
      }
      .UppercaseTitle {
        font-size: 21px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .text-desc {
        margin: 0px;
        font-weight: 400;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.texts};
      }
      .onetime-lifetime-list {
        font-size: 16px;
      }
      .onetime-lifetime-list li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 1.5em;
      }
      .onetime-lifetime-list li div:first-child {
        margin-right: 1em;
      }
      .title-h5 {
        color: ${props.theme.colors.titles};
        margin-bottom: 0.2em;
        font-weight: 500;
        font-size: 19px;
      }
      .title-desc {
        margin: 0.3em 0 1.5em;
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.texts};
      }
      .onetime-lifetime-second-section {
        margin: 120px auto 0;
      }
      .bg-module-8 {
        background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(70%, #f6f9fc),
          to(rgba(246, 249, 252, 0))
        );
        background-image: linear-gradient(
          0deg,
          #f6f9fc 70%,
          rgba(246, 249, 252, 0)
        );
      }
      .meow:nth-child(2),
      .meow:nth-child(3),
      .meow:nth-child(4) {
        -webkit-box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
      }
      .inner {
        display: flex;
        align-items: end;
      }

      @media only screen and (max-width: 1100px) {
        .container-lg {
          width: calc(100% - 40px);
        }
        .container {
          width: calc(100% - 40px);
        }
      }
      @media only screen and (max-width: 990px) {
        .onetime-lifetime-left-content {
          padding: ${props => (props.theme.contentImage ? "0" : "1.4em 1.9em")};
        }
        .onetime-lifetime-left-content span {
          font-size: 20px;
        }
        .onetime-lifetime-left-content {
          line-height: 1.1;
        }
        .onetime-lifetime-second-section {
          display: grid;
        }
        .onetime-lifetime-second-section > div:last-child {
          grid-row: 3;
          margin: 0px;
        }
        .onetime-lifetime-second-section > div:first-child {
          grid-row: 2;
          position: relative;
          z-index: 12;
        }
        .one-time-to-lifetime-customer {
          padding: 90px 0;
        }
        .section-title {
          font-size: 34px;
          line-height: 44px;
        }
        .onetime-lifetime-second-section {
          display: grid;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          grid-gap: 30px 0;
          gap: 0px 0;
          grid-template-rows: repeat(2, auto);
        }
        .second-right-section {
          margin: 0;
        }
        .img-container {
          max-height: 500px;
          width: 100%;
        }
      }
      @media only screen and (max-width: 767px) {
        .onetime-lifetime-first-section {
          display: grid;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          grid-gap: 30px 0;
          gap: 30px 0;
          grid-template-rows: repeat(2, auto);
        }
        .section-desc {
          font-size: 21px;
          line-height: 32px;
        }
        .onetime-lifetime-second-section {
          margin: 50px auto 0;
        }
        .UppercaseTitle {
          padding-top: 10px;
        }
        .section-desc {
          margin-bottom: 30px;
        }
        .one-time-to-lifetime-customer {
          background-image: none;
          padding: 50px 0px;
        }
      }
    `}
`

import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      .wrapper {
        background-color: ${props.theme.background};
        padding-top: 80px;
        padding-bottom: 80px;
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

      .quadBoxContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 40px;
        justify-items: stretch;
        margin: 0 auto;
        max-width: 1200px;
        padding: 40px;
      }

      .headerBox {
        max-width: 1200px;
        padding-top: 40px;
        margin: 0 auto;
        text-align: center;
        width: 80vw;
      }

      h2.heading {
        margin-top: 20px;
        font-size: 40px;
        color: ${props.theme.colors.title};
      }

      h3.heading {
        margin-top: 30px;
        margin-bottom: 50px;
        font-weight: 400;
        font-size: 21px;
        color: ${props.theme.colors.subtitle};
      }

      .quadBox {
        box-shadow: ${props.theme.shadow
            ? `0 6px 12px -2px rgba(50, 50, 93, 0.25)`
            : "none"},
          0 3px 7px -3px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        display: flex;
        position: relative;
        overflow: hidden;
        background-color: ${props.theme.colors.backgroundBox};
      }

      .quadBoxLeft {
        width: 40%;
        padding: 20px;
        position: relative;
        z-index: 2;
      }

      .quadBoxLeftSkew {
        transform: skewX(-12deg);
        right: -20px;
        transform-origin: top right;
        width: 100%;
        height: 100%;
        content: "";
        background-color: ${props.theme.colors.backgroundLeftSkew};
        position: absolute;
        top: 0;
        left: 0;
      }

      .imageContainer {
        position: absolute;
        left: -15%;
        right: 0;
        top: 0;
        bottom: 0;
        background-position: 50%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
      }

      .imageContainer img {
        width: 100%;
        height: 60px;
      }

      .quadBoxText {
        text-align: left;
        padding: 20px;
        width: 60%;
      }

      .quadBoxText h1 {
        font-size: 28px;
        margin-bottom: 15px;
        margin-top: 5px;
        color: ${props.theme.colors.boxTitle};
      }
      .quadBoxText p {
        font-size: 18px;
        line-height: 31px;
        color: ${props.theme.colors.boxText};
      }
      @media only screen and (max-width: 1200px) {
        .quadBoxContainer {
          grid-template-columns: auto;
          padding: 20px;
          grid-template-rows: auto;
        }
        .wrapper {
          background-image: none;
        }
      }

      @media only screen and (max-width: 768px) {
        .quadBoxContainer {
          grid-template-columns: auto;
          padding: 20px;
          grid-template-rows: auto;
          background-image: "none";
        }
        .wrapper {
          background-image: none;
          padding-top: 0px;
          padding-bottom: 0px;
        }

        .quadBox {
          flex-direction: column;
          padding-left: 0px;
        }

        .quadBoxLeft {
          width: 100%;
          padding: 20px;
          transform: none;
          height: 70px;
          align-self: center;
        }

        .quadBoxLeftSkew {
          transform: none;
          left: 0;
        }

        .imageContainer {
          left: 0;
        }

        .imageContainer img {
          height: 50%;
        }

        .quadBoxText {
          text-align: center;
          padding: 20px;
          width: 100%;
          align-self: center;
        }
      }
    `}
`

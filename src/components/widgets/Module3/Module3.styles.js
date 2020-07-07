import styled, { css } from "styled-components"
import "../../../styles/global.css"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        font-family: NovaReg;
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
      .corporate-card-section {
        padding: 0 20px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        margin: 30px 0px;
      }
      .corporate-card-content h3 {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.title};
        margin-bottom: 8px;
      }
      .corporate-card-content p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.cardText};
        margin-bottom: 8px;
      }
      .corporate-card-column {
        padding: 1px;
      }
      .corporate-card-icon {
        margin: 0 16px 20px 0;
      }
      @media (min-width: 670px) {
        .corporate-card-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 767px) {
        .corporate-card-section {
          grid-column-gap: 32px;
          grid-row-gap: 32px;
        }
      }
    `}
`

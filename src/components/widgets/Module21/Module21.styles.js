import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica;
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
      .intelligent-revenue-section {
        position: relative;
        padding: 50px 0;
        background-color: ${props.theme.background};
      }
      .intelligent-revenue {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-left: auto;
        margin-right: auto;
      }
      .intelligent-revenue-section .intelligent-revenue {
        grid-column-gap: 15%;
      }
      .intelligent-revenue-left h2 {
        font-weight: 400;
        font-size: 34px;
        line-height: 1.4;
        color: ${props.theme.colors.title};
      }
      .intelligent-revenue-left p {
        margin: 20px 0;
        font-weight: 400;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.subtitle};
      }
      .intelligent-revenue-left .intelligent-link {
        color: ${props.theme.colors.link};
        font-size: 19px;
        line-height: 32px;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        display: block;
        margin-bottom: 20px;
      }
      .intelligent-revenue-left .intelligent-link:hover {
        color: ${props.theme.colors.linkHover};
      }
      .intelligent-revenue-left .intelligent-link:after {
        font: normal 16px StripeIcons;
        content: "";
        padding-left: 5px;
      }
      .intelligent-revenue-right {
        position: relative;
        overflow: hidden;
      }
      .intelligent-line {
        position: absolute;
        top: 0;
        left: calc((32px - 2px) / 2);
        height: 100%;
      }
      .intelligent-checklist {
        display: flex;
        margin: 30px 0;
      }
      .checklist-icon:after {
        position: absolute;
        top: calc(32px / 2);
        left: calc(32px / 2);
        width: calc(32px * 2);
        height: calc(32px * 2);
        transform: translate(calc(32px * -1), calc(32px * -1));
        border-radius: 50%;
        background-color: #32325d;
        content: "";
      }
      .intelligent-checklist .checklist-icon svg {
        position: relative;
        z-index: 1;
      }
      .checklist-icon {
        position: relative;
        flex: 0 0 auto;
        width: 32px;
      }
      .checklist-content {
        padding-left: 25px;
      }
      .checklist-content h3 {
        font-weight: 500;
        font-size: 17px;
        line-height: 32px;
        color: ${props.theme.colors.checkListH3};
      }
      .checklist-content ul {
        list-style: none;
      }
      .checklist-content ul li {
        margin: 6px 0;
        counter-increment: helm-checklist;
        position: relative;
        margin: 12px 0;
        padding-left: 32px;
      }
      .checklist-content ul li span.check-icon {
        position: absolute;
        top: 4px;
        left: 0;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .checklist-content ul li span {
        font-size: 15px;
        color: ${props.theme.colors.checkListSpan};
        font-weight: 400;
        line-height: 28px;
      }
      .intelligent-revenue-right div:nth-of-type(2) {
        margin-top: 0px;
      }
      @media (min-width: 1024px) {
        .intelligent-revenue-left-content {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }
      }
      @media (min-width: 880px) {
        .intelligent-revenue-section {
          padding: 150px 0;
        }
      }
      @media (min-width: 670px) {
        .intelligent-revenue-section {
          padding: 100px 0;
        }
        .intelligent-revenue {
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 40px;
          grid-template-columns: repeat(2, 1fr);
        }
        .intelligent-revenue-left h2 {
          font-size: 47px;
        }
        .intelligent-revenue-left p {
          margin: 40px 0;
        }
        .intelligent-checklist {
          margin: 0px;
        }
        .checklist-content {
          padding-left: 50px;
        }
        .intelligent-checklist {
          padding-bottom: 35px;
        }
      }
      @media (max-width: 320px) {
        .intelligent-checklist {
          margin: 20px 0;
        }
      }
    `}
`

import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
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

      .regulatory-compliance-section {
        padding: 1px;
      }
      .regulatory-compliance-title {
        padding: 50px 20px 0;
        max-width: 700px;
        margin: 0 auto 30px;
        text-align: center;
      }
      .regulatory-compliance-title svg {
        width: 48px;
        height: 48px;
      }
      .fill-purple {
        fill: #9cdbff;
      }
      .fill-blue {
        fill: #7795f8;
      }
      .fill-fff {
        fill: #ffffff;
      }

      .fill-none {
        fill: none;
      }
      .regulatory-compliance-title span {
        background-color: #c4f0ff;
        border-radius: 50%;
        height: 72px;
        width: 72px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .regulatory-compliance-title h2 {
        margin: 16px auto;
        color: #32325d;
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: ${props.theme.colors.titles};
      }
      .regulatory-compliance-checklist {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-left: auto;
        margin-right: auto;
        grid-column-gap: 80px;
      }
      .regulatory-compliance-checklist .check-list h3 {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.titles};
      }
      .regulatory-compliance-checklist .check-list ul {
        list-style: none;
      }
      .regulatory-compliance-checklist .check-list ul li {
        counter-increment: helm-checklist;
        position: relative;
        margin: 12px 0;
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.li};
        position: relative;
        display: flex;
      }
      .regulatory-compliance-checklist .check-list ul li span {
        padding-right: 14px;
        position: relative;
      }
      .regulatory-compliance-checklist .check-list ul li span svg {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 3px;
      }
      .regulatory-compliance-checklist .check-list ul li span:first-child {
        padding-right: 32px;
      }
      .regulatory-compliance-checklist .check-list ul li span a {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }

      .common-link {
        padding: 1px;
      }

      .checklist-right {
        padding: 1px;
      }

      .img-icon-top {
        height: 72px;
        width: 72px;
      }

      @media (min-width: 670px) {
        .regulatory-compliance-title h2 {
          font-size: 42px;
          line-height: 52px;
        }
        .regulatory-compliance-checklist {
          grid-template-columns: repeat(2, 1fr);
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 40px;
        }
      }
      @media (max-width: 767px) {
        .checklist-left {
          margin-bottom: 30px;
        }
        .checklist-left ul {
          padding-left: 10px;
        }
        .checklist-right ul {
          padding-left: 10px;
        }
        .regulatory-compliance-checklist {
          padding: 0 20px;
        }
        .content-wrapper {
          background-image: none;
        }
        .regulatory-compliance-title {
          padding: 0;
        }
        .regulatory-compliance-checklist .check-list h3 {
          font-weight: 500;
          font-size: 21px;
      }
    `}
`

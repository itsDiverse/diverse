import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
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
        color: #32325d;
        margin-bottom: 8px;
      }
      .corporate-card-content p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
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

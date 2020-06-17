import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      .content-wrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        font-size: 20px;
      }
      .containerLg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
        opacity: ${props.theme.containerLg.opacity};
      }
      .logo-section {
        margin-bottom: 40px;
      }
      .logo-section ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        transition-duration: 0.25s;
        transition-timing-function: opacity, filter;
        padding: 0 20px;
      }
      .logo-section ul li {
        padding: 6px 15px;
      }
      .logo-section ul li:first-child {
        padding-left: 0;
      }
      .logo-section ul li img {
        max-width: 100%;
        max-height: 45px;
      }
      @media (min-width: 670px) {
        .logo-section {
          margin-bottom: 40px;
        }
      }
    `}
`

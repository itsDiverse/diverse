import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
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
      }
      .container-xl {
        max-width: 1160px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .callout-card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        padding: 30px;
        -webkit-box-shadow: ${props =>
          props.theme.colors.shadow
            ? `0 30px 60px -12px  ${props.theme.colors.shadowColor}`
            : "none"};
        box-shadow: ${props =>
          props.theme.colors.shadow
            ? `0 30px 60px -12px ${props.theme.colors.shadowColor}`
            : "none"};
      }
      .idc-callout {
        position: relative;
        z-index: 2;
        padding-bottom: 60px;
        padding-top: 40px;
      }
      .callout-content {
        -ms-flex-negative: 1;
        flex-shrink: 1;
        padding-bottom: 25px;
      }
      .callout-content span {
        font-size: 26px;
        line-height: 42px;
        color: ${props.theme.colors.text};
        font-weight: 400;
      }
      .callout-content span a {
        color: ${props.theme.colors.link};
        font-weight: 500;
        -webkit-transition: color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .callout-card svg {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin: 0 auto;
      }
      .common-idc-grid {
        --stripe-height: 48px;
        --content-columns: 12;
        --gutter-columns: 4;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: -1;
        pointer-events: none;
      }
      .common-idc-grid .backgroundContainer,
      .common-idc-grid .idcbgContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .common-idc-grid .backgroundContainer .grid {
        height: 100%;
        -ms-flex-line-pack: end;
        align-content: end;
        --content-column-width: minmax(
          0,
          calc(1040px / var(--content-columns))
        );
        --gutter-column-width: 1fr;
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fill, var(--stripe-height));
        grid-template-columns:
          [viewport-start] 1fr [left-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [left-gutter-end content-start] repeat(
            var(--content-columns),
            var(--content-column-width)
          )
          [content-end right-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [right-gutter-end] 1fr [viewport-end];
      }
      .common-idc-grid .backgroundContainer .grid {
        grid-template-columns: 1fr;
        min-width: 0;
      }
      .backgroundContainer .grid .background {
        grid-row: 1/-1;
        grid-column: 1/-1;
        z-index: -1;
      }
      .common-idc-grid .idcbgContainer {
        overflow: hidden;
      }
      .idcbgContainer .grid {
        --content-column-width: minmax(
          0,
          calc(1040px / var(--content-columns))
        );
        --gutter-column-width: 1fr;
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fill, var(--stripe-height));
        grid-template-columns:
          [viewport-start] 1fr [left-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [left-gutter-end content-start] repeat(
            var(--content-columns),
            var(--content-column-width)
          )
          [content-end right-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [right-gutter-end] 1fr [viewport-end];
        height: 100%;
        -ms-flex-line-pack: end;
        align-content: end;
      }
      .idcbgContainer .idcbg:first-child {
        grid-column: left-gutter-start/span 4;
        grid-row: -5;
        background: #7795f8;
      }
      .idcbgContainer .idcbg:nth-child(2) {
        grid-column: viewport-start/span 3;
        grid-row: -4;
        background-color: #555abf;
      }
      .idcbgContainer .idcbg:nth-child(3) {
        grid-column: right-gutter-start/span 4;
        grid-row: -4;
        background-color: #e6ebf1;
      }
      .idcbgContainer .idcbg:nth-child(4) {
        grid-column: right-gutter-start/viewport-end;
        grid-row: -3;
        background-color: #87bbfd;
      }
      .idcbgContainer .idcbg:nth-child(5) {
        grid-column: span 7/-1;
        grid-row: -2;
        border: 2px solid #e6ebf1;
        border-top: none;
      }
      .idcbgContainer .idcbg:nth-child(6) {
        grid-column: 15 / span 3;
        grid-row: -4;
        background-color: #fff;
      }
      @media (min-width: 1040px) {
        .common-idc-grid .backgroundContainer .grid {
          --gutter-column-width: var(--content-column-width);
          min-width: calc(
            1040px / var(--content-columns) *
              (var(--gutter-columns) * 2 + var(--content-columns))
          );
        }
        .idcbgContainer .grid {
          --gutter-column-width: var(--content-column-width);
          min-width: calc(
            1040px / var(--content-columns) *
              (var(--gutter-columns) * 2 + var(--content-columns))
          );
        }
      }
      @media (min-width: 880px) {
        .callout-card {
          padding: 50px;
        }
      }
      @media (min-width: 670px) {
        .callout-card {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          padding-top: 25px;
          padding-bottom: 0;
        }
        .callout-card svg {
          margin: 20px 0 -75px;
        }
        .callout-content {
          margin: 0 0 0 50px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .common-idc-grid {
          --stripe-height: 64px;
        }
      }
      @media (max-width: 767px) {
        .idc-callout .container-xl {
          width: calc(100% - 20px);
        }
        .callout-card {
          padding: 25px;
        }
      }
    `}
`

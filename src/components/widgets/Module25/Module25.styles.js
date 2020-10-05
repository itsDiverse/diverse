import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props => css`
    .content-wrapper {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
    }
    .container-lg {
      max-width: 1240px;
      margin: 0 auto;
      margin-top: 50px;
    }
    .item-section {
      display: flex;
      width: 100%;
    }
    .item-wrapper {
      padding: 0px 20px;
      max-width: 400px;
    }
    .item-first-wrapper {
      display: flex;
      flex-direction: column;
      padding: 20px 0px;
      border-top: 4px solid #356ae6;
    }
    .item-first-title {
      margin: 0px;
    }
    .item-first-urls {
      font-family: NovaSemi;
      list-style: none;
      margin: 0px;
      padding: 0px;
      color: #356ae6;
    }
    .item-first-urls li {
      padding-bottom: 8px;
    }
    .item-second-wrapper {
      display: flex;
      flex-direction: column;
      padding: 20px 0px;
      border-top: 4px solid #ff8730;
    }
    .item-second-title {
      margin: 0px;
    }
    .item-second-urls {
      font-family: NovaSemi;
      list-style: none;
      margin: 0px;
      padding: 0px;
      color: #ff8730;
    }
    .item-second-urls li {
      padding-bottom: 8px;
    }
    .item-third-wrapper {
      display: flex;
      flex-direction: column;
      padding: 20px 0px;
      border-top: 4px solid #19cca3;
    }
    .item-third-title {
      margin: 0px;
    }
    .item-third-urls {
      font-family: NovaSemi;
      list-style: none;
      margin: 0px;
      padding: 0px;
      color: #19cca3;
    }
    .item-third-urls li {
      padding-bottom: 8px;
    }

    @media (max-width: 768px) {
      .item-section {
        flex-direction: column;
        align-items: center;
      }
    }
  `}
`

import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props => css`
    .content-wrapper {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }
    .container-lg {
      max-width: 1240px;
      margin: 0 auto;
      margin-top: 30px;
    }
    .tools-section {
      display: flex;
      flex-direction: column-reverse;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
    }
    .title-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .heading-section {
      font-weight: 600;
      font-size: 15px;
      color: ${props.theme.colors.text};
    }
    .tools-wrapper {
      padding: 80px 0px;
    }
    .title-section h1 {
      font-family: NovaBlack;
      font-size: 50px;
      line-height: 44px;
      color: ${props.theme.colors.title};
      margin-bottom: -2px;
      margin-top: -15px;
      font-weight: 400;
    }
    .subtitle-section {
      font-weight: 400;
      font-size: 15px;
      line-height: 32px;
      color: ${props.theme.colors.text};
    }

    .tools-btn {
      margin-top: 24px;
    }
    .video-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .video-container video {
      height: 100%;
      width: 100%;
    }
    @media (min-width: 670px) {
      .tools-section {
        display: grid;
        grid-column-gap: 0px;
        grid-template-columns: repeat(2, 1fr);
      }
      .title-section {
        padding-left: 4rem;
        text-align: left;
      }
      .title-section h2 {
        font-size: 42px;
        line-height: 52px;
      }
      .video-container video {
        height: 500px;
        width: 800px;
      }
    }
  `}
`

export const StyledBrandsWrapper = styled.div`
  width: 100%;
  margin: 0;
`

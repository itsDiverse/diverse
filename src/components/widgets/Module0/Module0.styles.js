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
      margin-top: 80px;
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
      order: -1;
    }
    .heading-section {
      font-family: NovaSemi;
      font-size: 16px;
      color: ${props.theme.colors.text};
    }
    .tools-wrapper {
      padding: 80px 0px;
    }
    .title-section h1 {
      font-family: NovaBlack;
      font-size: 50px;
      line-height: 40px;
      color: ${props.theme.colors.title};
      margin-bottom: -2px;
      margin-top: -5px;
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
    .brands-wrapper {
      width: 100%;
      margin: 0;
      padding-top: 20px;
    }
    .brands-wrapper img {
      width: 50%;
    }
    .video-container {
      display: flex;
      width: fit-content;
    }
    .video-container video {
      height: 100%;
      width: 100%;
      transform: scale(1) translateX(-35px);
    }
    @media (max-width: 768px) {
      .tools-section {
        min-height: 100vh;
      }
      .title-section {
        margin-top: 30px;
      }
      .brands-wrapper {
        margin-top: 50px;
      }
      .brands-wrapper img {
        width: 85%;
      }
      .video-container {
        display: flex;
        width: fit-content;
        margin-top: -30px;
        margin-bottom: 60px;
      }
      .video-container video {
        transform: scale(1.5) translateY(1px) translateX(-30px);
      }
    }
    @media (min-width: 1000px) {
      .tools-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .title-section {
        margin: 40px 0px;
        padding-left: 2rem;
        text-align: left;
        z-index: 0;
      }
      .title-section h1 {
        font-size: 67px;
        line-height: 52px;
        width: 500px;
      }
      .brands-wrapper img {
        width: fit-content;
      }
      .brands-wrapper svg {
        margin-left: -39px;
      }
      .video-container video {
        transform: scale(1.8) translateX(-55px);
        z-index: 0;
      }
    }
  `}
`

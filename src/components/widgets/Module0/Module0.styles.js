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
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      flex-direction: column-reverse;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid red;
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
      font-style: normal;
      font-weight: 00;
      font-size: 18px;
      color: ${props.theme.colors.text};
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
      font-family: NovaReg;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: ${props.theme.colors.text};
    }

    .tools-btn {
      margin-top: 24px;
    }
    .brands-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 20px;
      margin-left: 30px;
    }
    .video-container {
      display: flex;
      width: fit-content;
      z-index: 0;
      border: 2px solid orange;
    }
    .video-container video {
      height: 100%;
      width: 100%;
      // transform: scale(1) translateX(-35px);
    }
    @media (max-width: 768px) {
      .container-lg {
        margin-top: 0px;
      }
      .tools-section {
        flex: 1;
        justify-content: space-around;
      }
      .title-section {
        margin-top: 0px;
        z-index: 1;
        border: 2px solid yellow;
        flex: 1;
        justify-content: flex-start;
      }
      .brands-wrapper {
        margin-left: 0px;
        margin-top: 0px;
        width: 100%;
      }
      .brands-wrapper img {
        margin-left: 5px;
        margin-right: 5px;
        max-width: 100%;
      }
      .video-container {
        display: flex;
        width: fit-content;
      }
      .video-container video {
        // transform: scale(0) translateY(10px) translateX(-30px);
      }
    }
    @media (min-width: 1000px) {
      .tools-section {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border: 1px solid red;
      }
      .title-section {
        margin: 40px 0px;
        padding-left: 2rem;
        padding-bottom: 0px;
        text-align: left;
        z-index: 1;
      }
      .title-section h1 {
        font-size: 67px;
        line-height: 52px;
        width: 500px;
      }
      .brands-wrapper {
        margin-top: -30px;
        justify-content: flex-start;
      }
      .brands-wrapper img {
        width: fit-content;
        border: 1px solid green;
      }
      .brands-wrapper svg {
        margin-left: -39px;
      }
      .video-container video {
        //transform: scale(1) translateX(-55px);
        z-index: 0;
      }
    }
  `}
`

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
    .toolssection {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .tools-section {
      display: flex;
      justify-content: space-around;
      flex-direction: column-reverse;
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
      padding-top: 20px;
      justify-content: center;
      width: 100%;
    }
    .video-container {
      display: flex;
      width: 100%;
      z-index: 0;
    }
    .video-container video {
      height: 100%;
      width: 100%;
      transform: scale(1.2) translateY(-35px) translateX(-70px);
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
    }
    .image-container {
      display: flex;
      width: 100%;
      z-index: 0;
    }
    .image-container img {
      width: 100%;
      height: 100%;
      transform: scale(1.2) translateX(-70px) translateY(-30px);
    }
    @media (max-width: 768px) and (orientation: portrait) {
      .container-lg {
        margin-top: 0px;
      }
      .tools-section {
        min-height: 80vh;
        // flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title-section {
        z-index: 1;
        // flex: 1;
        justify-content: center;
      }
      .brands-wrapper {
        width: 95%;
        margin: 0px auto;
        height: 100%;
      }
      .brands-wrapper img {
        margin: 5px;
        max-width: 100%;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .video-container {
        display: flex;
        width: fit-content;
        // flex: 1;
      }
      .video-container video {
        transform: scale(1.5) translateX(-35px) translateY(-30px);
      }
      .image-container img {
        width: 100%;
        transform: scale(1.5) translateX(-30px) translateY(0px);
      }
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
      .tools-section {
        min-height: 100vh;
      }
      .video-container video {
        transform: scale(1.6) translateX(-60px) translateY(-30px);
      }
      .image-container img {
        width: 100%;
        transform: scale(1.5) translateX(-60px) translateY(-40px);
      }
    }
    @media (max-width: 320px) {
      .video-container video {
        transform: scale(1.4) translateX(-30px) translateY(-50px);
      }
      .title-section {
        margin-top: -70px;
      }
      .title-section h1 {
        font-size: 40px;
      }
      .brands-wrapper img {
        max-height: 120px;
        max-width: 100%;
        padding-top: 5px;
        padding-bottom: 0px;
      }
      .image-container img {
        width: 100%;
        transform: scale(1.2) translateX(-30px) translateY(-35px);
      }
    }
    @media (min-width: 1000px) {
      .tools-section {
        height: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .title-section {
        margin: 40px 0px;
        padding-left: 2rem;
        padding-bottom: 0px;
        text-align: left;
        align-items: start;
        z-index: 1;
      }
      .title-section h1 {
        font-size: 67px;
        line-height: 52px;
        width: 500px;
      }
      .brands-wrapper {
        padding-top: 0;
        margin-top: -30px;
        margin-left: 30px;
        justify-content: flex-start;
      }
      .brands-wrapper img {
        width: fit-content;
        z-index: 1;
      }
      .brands-wrapper svg {
        margin-left: -39px;
      }
      .video-container video {
        transform: scale(1.8) translateX(-55px) translateY(30px);
        z-index: 0;
      }
    }
  `}
`

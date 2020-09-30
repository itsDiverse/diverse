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
      margin-top: 50px;
    }
    .tools-section {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
    }
    .title-section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      padding: 0px 16px;
      order: -1;
      max-width: 500px;
    }
    .heading-section {
      font-family: NovaSemi;
      font-size: 16px;
      color: ${props.theme.colors.text};
    }
    .tools-wrapper {
      padding: 80px 0px;
    }
    .title-section h2 {
      font-family: NovaBold;
      font-weight: 400;
      font-size: 30px;
      line-height: 35px;
      color: ${props.theme.colors.title};
      margin: 0;
    }
    .subtitle-section {
      font-family: NovaLight;
      font-style: normal;
      font-size: 18px;
      margin-top: 10px;
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
      width: 100%;
    }
    .video-container {
      display: flex;
      width: fit-content;
      transform: scale(1) translateX(85px) translateY(-100px);
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
    }
    .video-container video {
      height: 100%;
      width: 100%;
    }
    video::-webkit-media-controls {
      display: none !important;
    }
    .services-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      color: ${props.theme.colors.text};
    }
    .services-wrapper {
      display: flex;
      justify-content: space-around;
      margin: 0px 0px 0px 30px;
    }
    .services-title {
      font-family: NovaBold;
      color: ${props.theme.colors.title};
      font-weight: 400;
      font-size: 16px;
      margin-bottom: -10px;
    }
    .services-list {
      list-style-image: url(${props.images.ellipse});
      padding: 0;
    }
    .services-left {
      width: 50%;
    }
    .services-right {
      width: 50%;
    }
    .services-list li {
      font-size: 14px;
      padding: 5px;
      color: ${props.theme.colors.text};
    }
    .video-container {
      margin-bottom: -100px;
    }
    .image-container {
      display: flex;
      width: 100%;
      margin-bottom: -25px;
    }
    .image-container img {
      width: 100%;
      height: 100%;
      transform: scale(1px) translateX(-20px) translateY(-50px);
    }

    @media (min-width: 1000px) {
      .tools-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .title-section {
        margin: 40px 0px;
        padding: 205px 75px 0px 40px;
        text-align: left;
        z-index: 1;
        order: -1;
      }
      .title-section h2 {
        font-size: 35px;
        font-weight: bold;
        padding: 0px;
      }
      .subtitle-section {
        font-weight: 200;
      }
      .brands-wrapper img {
        width: fit-content;
      }
      .brands-wrapper svg {
        margin-left: -39px;
      }
      .video-container {
        display: flex;
        width: fit-content;
        z-index: 1;
        transform: translateX(50px) translateY(-100px);
      }
      .services-list li {
        padding: 5px;
      }
    }
    @media (max-width: 768px) {
      .services-wrapper {
        width: 100%;
        margin-left: 20px;
        padding: 0;
      }
      .services-left {
        padding-right: 5px;
      }
      .services-right {
        padding-left: 5px;
        padding-right: 10px;
      }
      .video-container {
        transform: scale(1) translateX(65px) translateY(-100px);
        -webkit-mask-image: -webkit-radial-gradient(white, black);
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
      }
    }
  `}
`

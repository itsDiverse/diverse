import styled, { css } from "styled-components"

export const GetFreeProposalButtonWhite = styled.button`
  width: 210px;
  height: 43px;
  font-size: 13.5px;
  background: #fff;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #195bb6;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
  font-weight: bold;
  &:hover,
  &:focus {
    opacity: 0.9;
    background: #195bb6;
    color: #fff;
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`

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
      z-index: 1;
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
      line-height: 140.3%;
      color: ${props.theme.colors.text};
    }

    .tools-btn {
      margin-top: 24px;
    }
    .video-container {
      display: none;
      width: fit-content;
    }
    .video-container video {
      height: 600px;
      width: 100%;
      transform: scale(1) translateX(-35px);
    }

    @media (min-width: 1000px) {
      .tools-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .title-section {
        margin: 40px 0px;
        padding: 75px 75px 0px 90px;
        text-align: left;
        z-index: 2;
      }
      .title-section h2 {
        font-size: 35px;
        font-weight: bold;
        padding: 0px;
        line-height: 40px;
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
      }
      .video-container video {
        transform: scale(1.5) translateY(95px) translateX(-10px);
        z-index: 0;
      }
    }
  `}
`

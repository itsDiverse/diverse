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
      justify-content: flex-start;
      text-align: left;
      padding: 0px 16px;
    }
    .heading-section {
      font-weight: 600;
      font-size: 16px;
      color: ${props.theme.colors.text};
    }
    .tools-wrapper {
      padding: 80px 0px;
    }
    .title-section h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 40px;
      color: ${props.theme.colors.title};
      margin: 0;
    }
    .subtitle-section {
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 140.3%;
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
      display: none;
      width: fit-content;
    }
    .video-container video {
      height: 100%;
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
        z-index: 0;
      }
      .title-section h2 {
        font-size: 35px;
        font-weight: bold;
        padding: 0px;
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
        transform: scale(1.8) translateX(-55px);
        z-index: 0;
      }
    }
  `}
`

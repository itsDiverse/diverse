import styled from "styled-components"

export const StyledComingWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`

export const StyledHeading = styled.p`
  font-family: NovaSemi;
  font-style: normal;
  font-weight: 00;
  font-size: 18px;
  color: #555;
  z-index: 1;
`
export const StyledTitle = styled.h1`
  font-family: NovaBlack;
  font-size: 50px;
  line-height: 40px;
  color: #555;
  margin-bottom: -2px;
  margin-top: -5px;
  font-weight: 400;
  text-align: center;
  z-index: 1;
`

export const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 442px;
  z-index: 0;
`
export const StyledVideo = styled.video`
  transform: scale(1.5);
  @media (min-width: 1000px) {
    transform: scale(1.5) translateY(-50px);
  }
`

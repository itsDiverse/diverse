import styled, { css } from "styled-components"
import { Field } from "formik"
import { Link } from "gatsby"

export const StyledClose = styled(Link)`
  text-decoration: none;
  font-size: 12px;

  color: white-smoke;
  &:visited {
    color: whiteSmoke;
  }
  ,
  &:active {
    color: whiteSmoke;
    transform: scale(0.95);
  }
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding-top: 0.5rem;
    display: block;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

export const StyledContentWrapper = styled.div`
  margin: 0;
  padding: 0px;
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
  background-image: linear-gradient(
    180deg,
    #e5e5e5 37%,
    #e5e5e5 50%,
    #ffffff 100%
  );

  @media (max-width: 768px) {
    padding: 0px;
    min-height: 100vh;
  }
`
export const StyledProposalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 770px;
  height: 645px;

  background: linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%);
  box-shadow: 0px 4px 55px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media (max-width: 768px) {
    border-radius: 10px;
    height: fit-content;
    padding: 0px;
    margin: 5px;
  }
`
export const StyledProposalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 3rem;
`

export const StyledProposalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 77px;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex: 1;
  }
`

export const StyledProposalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    flex: 1;
  }
`

export const StyledProposalForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const StyledProposalLabel = styled.label`
  color: #ffffff;
  text-align: center;
  font-family: NovaSemi;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 2px;
`

export const StyledProposalSelect = styled.select`
  display: block;
  height: 53px;
  width: 273px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 5px;

  font-size: 12.5px;
  line-height: 15px;
  color: #858585;
  background: #ffffff;
  border: 1px solid #195bb6;
  box-sizing: border-box;
  border-radius: 2px;
  & .select-placeholder {
    color: green;
  }
`
export const ErrorValidation = styled.div`
  color: white;
  font-size: 10px;
  font-style: italic;
  height: 20px;
  margin-top: -10px;
`

export const StyledProposalInput = styled(Field)`
  display: block;
  height: 53px;
  width: 273px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-left: 5px;
  font-weight: 600;
  font-size: 12.5px;
  line-height: 15px;
  color: #858585;
  background: #ffffff;
  border: 1px solid #195bb6;
  box-sizing: border-box;
  border-radius: 2px;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
  input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(12, 103, 228);

      &:focus,
      &:active {
        border: 1px solid rgbrgb(12, 103, 228);
        box-shadow: rgb(12, 103, 228) 0px 0px 2px 1px,
          rgb(12, 103, 228) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(12, 103, 228);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`

export const StyledSelectWrapper = styled.div`
  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`

export const StyledProposalButton = styled.button`
  cursor: pointer;
  width: 239px;
  height: 46.4px;
  background: #0c67e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  border-style: none;
  outline: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  &:hover {
    background: #0c59e4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    border: 2px solid #e5e5e5;
  }
  &:active {
    border: 2px solid #e5e5e5;
  }
`

export const StyledProposalTextContainer = styled.div`
  padding-bottom: 40px;
  font-style: normal;
  font-family: NovaSemi;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledProposalText = styled.p`
  max-width: 100%;
  font-weight: 100;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`

export const StyledProposalFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex: 1;
  }
`
export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`
export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 5px;
`

export const StyledFooterTitle = styled.p`
  color: white;
  text-align: center;
  font-style: normal !important;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`

export const StyledFooterTitleStepTwo = styled.p`
  color: white;
  text-align: center;
  font-weight: 400;
  font-size: 17.5px;
  line-height: 21px;
`

export const StyledNameStrong = styled.p`
  margin-top: 5px;
  margin-bottom: -15px;
  font-family: NovaSemi;
  font-size: 18px;
  line-height: 22px;
`

export const StyledFooterText = styled.p`
  color: white;
  margin: 0;
  font-style: italic;
`

export const StyledSectionDescription = styled.p`
  padding: 2px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`
export const StyledFooterCardSection = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledFooterCardSectionImg = styled.div``

export const StyledFooterCardSectionText = styled.p`
  color: white;
  font-weight: 100;
  align-self: center;
  margin-left: 10px;
`

export const StyledCallNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 230px;
  height: 254px;
  text-align: center;
  background: #ffffff;
  border: 9px solid #ededed;
  border-radius: 11px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

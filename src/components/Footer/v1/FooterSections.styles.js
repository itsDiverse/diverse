import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 20px;
`

export const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex: 1;
`
export const StyledSectionPhrase = styled.p`
  max-width: 400px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  color: #707070;
  margin-bottom: 10px;
`

export const StyledSectionButton = styled.button`
  width: 190px;
  height: 43px;

  background: #ffffff;
  border: 3px solid #195bb6;
  box-sizing: border-box;
  border-radius: 5px;
  color: #195bb6;
  font-weight: bold;
  &:hover,
  &:focus {
    opacity: 0.9;
    background: #195bb6;
    color: #ffffff;
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`
export const StyledSectionColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 25px;
`
export const StyledSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-content: flex-start;
  padding: 20px 12px;
`
export const StyledSectionRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`

export const StyledSectionTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  color: #707070;
  padding-bottom: 14px;
`

export const StyledSectionSubtitle = styled(props => <Link {...props} />)`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #707070;
  text-decoration: none;
  padding-bottom: 11px;

  &:hover {
    text-decoration: underline;
  }
  span {
    color: #195bb6;
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }

  > label {
    background: #195bb6;
    color: #fff;
    padding: 3px 8px;
    border-radius: 20px;
    align-items: center;
    font-size: 9px;
    border: none;
    display: inline;
  }
`

export const StyledSectionSubtitleSmall = styled.p`
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;

  color: #707070;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
export const StyledSectionSocialMedia = styled.div`
  svg:first-child {
    margin-right: 10px;
  }
  opacity: 0.4 !important;
`

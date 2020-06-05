import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 0px;
`

export const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex: 1;
`
export const StyledSectionPhrase = styled.p`
  max-width: 400px;
  font-size: 18px;
  color: #707070;
  font-weight: normal;
  margin-bottom: 10px;
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
  justify-content: flex-end;
`

export const StyledSectionTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #707070;
  padding-bottom: 10px;
`

export const StyledSectionSubtitle = styled(props => <Link {...props} />)`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: medium;
  color: #707070;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  span {
    color: #195bb6;
  }
  a {
    text-decoration: none;
  }
`

export const StyledSectionSubtitleSmall = styled.p`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: medium;
  color: #707070;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
export const StyledSectionSocialMedia = styled.div`
  svg:first-child {
    margin-right: 10px;
  }
`

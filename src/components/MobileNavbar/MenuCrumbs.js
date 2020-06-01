import React from "react"
import {
  StyledMenuCrumbs,
  StyledMenuCrumbsItem,
  StyledMenuCrumbsHome,
  StyledMenuHeaderText,
  StyledMenuCrumbsHeaderRow,
} from "./MenuCrumbs.styles"
import { IconPlay, IconPhone } from "../icons"

const MenuCrumbsHome = () => (
  <StyledMenuCrumbsHome>
    <StyledMenuCrumbsHeaderRow>
      <IconPlay size={20} />
      <StyledMenuHeaderText> How Diverse Works</StyledMenuHeaderText>
    </StyledMenuCrumbsHeaderRow>
    <StyledMenuCrumbsHeaderRow>
      <IconPhone color={"#195bb6"} size={20} />
      <StyledMenuHeaderText>833-Diverse</StyledMenuHeaderText>
    </StyledMenuCrumbsHeaderRow>
  </StyledMenuCrumbsHome>
)

const MenuCrumbs = ({ crumbs, selectedMenu }) => {
  return (
    <StyledMenuCrumbs>
      {selectedMenu === "" ? (
        <MenuCrumbsHome />
      ) : (
        crumbs &&
        crumbs.map((crumb, index) => (
          <StyledMenuCrumbsItem key={index}>{crumb}</StyledMenuCrumbsItem>
        ))
      )}
    </StyledMenuCrumbs>
  )
}

export default MenuCrumbs

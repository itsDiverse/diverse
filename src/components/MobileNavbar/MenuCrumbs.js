import React from "react"
import {
  StyledMenuCrumbs,
  StyledMenuCrumbsItem,
  StyledMenuCrumbsHome,
  StyledMenuHeaderText,
  StyledMenuCrumbsHeaderRow,
} from "./MenuCrumbs.styles"
import { IconPhone } from "../icons"
import { VideoCTA } from "../VideoCTA"

const MenuCrumbsHome = () => (
  <StyledMenuCrumbsHome>
    <StyledMenuCrumbsHeaderRow>
      <VideoCTA icon />
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

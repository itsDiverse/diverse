import React, { useState } from "react"
import {
  MenuIcon,
  MobileNavBar,
  StyledBrandRow,
  StyledBrandName,
} from "./MobileNavbar.styles"
import { IconApp } from "../icons"
import { default as Menu } from "./Menu"

const MobileNavbar = ({ menuOpened, onToggleMenu }) => {
  return (
    <>
      <MobileNavBar>
        <StyledBrandRow>
          <IconApp size={50}></IconApp>
          <StyledBrandName>diverse</StyledBrandName>
        </StyledBrandRow>
        <MenuIcon>
          {menuOpened ? (
            <div onClick={() => onToggleMenu(false)}> X </div>
          ) : (
            <div onClick={() => onToggleMenu(true)}> = </div>
          )}
        </MenuIcon>
      </MobileNavBar>
      {menuOpened && <Menu />}
    </>
  )
}

export default MobileNavbar

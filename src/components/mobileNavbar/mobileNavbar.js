import React, { useState } from "react"
import {
  MenuIcon,
  MobileNavBar,
  StyledBrandRow,
  StyledBrandName,
  StyledIconBurger,
} from "./MobileNavbar.styles"
import { IconApp } from "../icons"
import { default as Menu } from "./Menu"

const MobileNavbar = ({ menuOpened, onToggleMenu }) => {
  return (
    <>
      <MobileNavBar>
        <StyledBrandRow>
          <IconApp size={32}></IconApp>
          <StyledBrandName>diverse</StyledBrandName>
        </StyledBrandRow>
        <StyledIconBurger
          open={menuOpened}
          onClick={() => onToggleMenu(!menuOpened)}
        >
          <div></div>
          <div></div>
          <div></div>
        </StyledIconBurger>
      </MobileNavBar>
      {menuOpened && <Menu />}
    </>
  )
}

export default MobileNavbar

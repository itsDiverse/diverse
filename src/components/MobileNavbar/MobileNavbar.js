import React, { useState } from "react"
import { MenuIcon, MobileNavBar, StyledIconBurger } from "./MobileNavbar.styles"
import { IconApp } from "../icons"
import { default as Menu } from "./Menu"
import { Brand } from "../Brand"

const MobileNavbar = ({ menuOpened, onToggleMenu }) => {
  return (
    <>
      <MobileNavBar>
        <Brand size={50} />
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

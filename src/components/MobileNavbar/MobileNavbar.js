import React from "react"
import {
  MobileNavBar,
  StyledIconBurger,
  StyledMenu,
} from "./MobileNavbar.styles"
import { default as Menu } from "./Menu"
import { Brand } from "../Brand"

const MobileNavbar = ({ menuOpened, onToggleMenu }) => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  )
}

export default MobileNavbar

import React, { useState } from "react"
import { MenuIcon, MobileNavBar } from "./mobileNavbar.styles"

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MobileNavBar>
      navbarMobile
      <MenuIcon>
        {isMenuOpen ? (
          <div onClick={() => setIsMenuOpen(false)}> X </div>
        ) : (
          <div onClick={() => setIsMenuOpen(true)}> = </div>
        )}
      </MenuIcon>
    </MobileNavBar>
  )
}

export default MobileNavbar

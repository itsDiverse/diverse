import React from "react"

import { StyledMenu, StyledMenuHeader, StyledMenuFooter } from "./Menu.styles"

import { default as MenuCrumbs } from "./MenuCrumbs"
import { default as MenuItems } from "./MenuItems"
import { default as MenuFooter } from "./MenuFooter"

import { menu } from "./menuData"

const Menu = () => {
  const [crumbs, setCrumbs] = React.useState(["Main Menu"])
  const [selectedMenu, setSelectedMenu] = React.useState("")
  const [headerMenu, setHeaderMenu] = React.useState("")
  const [actualMenu, setActualMenu] = React.useState(menu)

  const navigate = menuItem => {
    let newMenu = menuItem.items
    let label = menuItem.selectedLabel
    let title = menuItem.title

    if (newMenu) {
      crumbs.push(title)
      setSelectedMenu(title)
      setHeaderMenu(label || title)
      setCrumbs(crumbs)
      setActualMenu(newMenu)
    } else return
  }

  return (
    <StyledMenu>
      <MenuCrumbs crumbs={crumbs} selectedMenu={selectedMenu}></MenuCrumbs>
      {headerMenu !== "" && <StyledMenuHeader>{headerMenu}</StyledMenuHeader>}
      <MenuItems
        menu={actualMenu}
        onClickMenu={menuItem => navigate(menuItem)}
      ></MenuItems>
      <StyledMenuFooter>
        <MenuFooter selectedMenu={selectedMenu}></MenuFooter>
      </StyledMenuFooter>
    </StyledMenu>
  )
}

export default Menu

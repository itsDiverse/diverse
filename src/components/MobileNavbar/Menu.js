import React from "react"

import { StyledMenu, StyledMenuHeader, StyledMenuFooter } from "./Menu.styles"

import { default as MenuCrumbs } from "./MenuCrumbs"
import { default as MenuItems } from "./MenuItems"
import { default as MenuFooter } from "./MenuFooter"

import { menu } from "./menuData"

const Menu = () => {
  const [crumbs, setCrumbs] = React.useState([{ title: "Home", menu: menu }])
  const [selectedMenu, setSelectedMenu] = React.useState("Home")
  const [headerMenu, setHeaderMenu] = React.useState("Home")
  const [actualMenu, setActualMenu] = React.useState(menu.items)

  const navigate = (menuItem, crumbing = true) => {
    let newMenu = menuItem.items
    let label = menuItem.selectedLabel
    let title = menuItem.title

    if (newMenu) {
      if (crumbing) {
        crumbs.push({ title, menu: menuItem })
        setCrumbs(crumbs)
      }

      setSelectedMenu(title)
      setHeaderMenu(label || title)
      setActualMenu(newMenu)
    } else return
  }

  const onClickCrumbs = (menuItem, index) => {
    let newCrumbs = crumbs.slice(0, index + 1)
    setCrumbs(newCrumbs)
    navigate(menuItem, false)
  }

  return (
    <StyledMenu>
      <MenuCrumbs
        crumbs={crumbs}
        onClickCrumbs={onClickCrumbs}
        selectedMenu={selectedMenu}
      ></MenuCrumbs>
      {headerMenu !== "Home" && (
        <StyledMenuHeader>{headerMenu}</StyledMenuHeader>
      )}
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

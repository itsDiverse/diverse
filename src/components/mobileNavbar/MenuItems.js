import React from "react"
import {
  StyledMenuItems,
  StyledMenuItem,
  StyledIconWrapper,
  StyledIconNavigator,
} from "./MenuItems.styles"
import { getIcons } from "../../components/icons"

const MenuItems = ({ menu, onClickMenu }) => {
  return (
    <StyledMenuItems>
      {menu.map((menuItem, index) => {
        let iconComponent = getIcons(menuItem.icon)
        return (
          <StyledMenuItem
            key={index}
            onClick={() => {
              onClickMenu(menuItem)
            }}
            title={menuItem.title}
          >
            {iconComponent && (
              <StyledIconWrapper title={menuItem.title}>
                {iconComponent}
              </StyledIconWrapper>
            )}
            {menuItem.title}
            <StyledIconNavigator />
          </StyledMenuItem>
        )
      })}
    </StyledMenuItems>
  )
}

export default MenuItems

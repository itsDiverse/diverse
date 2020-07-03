import React from "react"
import { Link } from "gatsby"

import { IconDesktopMarketing } from "../../Icons"

import {
  DropdownEl,
  DropdownSection,
  ListItem,
  ListItemTitle,
  ListSection,
  ListPrimary,
  ListItemsRow,
  DropdownButton,
  DropdownTitle,
  DropdownSubtitle,
} from "./Components.js"

export const GenericDropdownContainer = ({
  title,
  subtitle,
  buttonText,
  items,
  columns,
}) => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <IconDesktopMarketing />
          <DropdownTitle>{title}</DropdownTitle>
          <DropdownSubtitle>{subtitle}</DropdownSubtitle>
          <DropdownButton href="/">{buttonText}</DropdownButton>
        </ListPrimary>
        <ListItemsRow columns={columns}>
          {items.map(item => (
            <ListSection>
              <ListItemTitle>{item.title}</ListItemTitle>
              {item.items.map(subitem => (
                <ListItem>{subitem.title}</ListItem>
              ))}
            </ListSection>
          ))}
        </ListItemsRow>
      </DropdownSection>
    </DropdownEl>
  )
}

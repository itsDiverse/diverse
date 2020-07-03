import React from "react"
import { Link } from "gatsby"

import { IconDesktopMarketing } from "../../Icons"

import {
  DropdownEl,
  DropdownSection,
  Heading,
  ListSection,
  ListPrimary,
  ListItemsRow,
  DropdownButton,
  DropdownTitle,
  DropdownSubtitle
} from "./Components.js"

export const GenericDropdownContainer = ({
  title,
  subtitle,
  buttonText,
  items,
  columns
}) => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <IconDesktopMarketing />
          <DropdownTitle>{title}</DropdownTitle>
          <DropdownSubtitle>{subtitle}</DropdownSubtitle>
          <DropdownButton>{buttonText}</DropdownButton>
        </ListPrimary>
        <ListItemsRow columns={columns}>
        {items.map(item => (
          <ListSection>
            <li>
              <Heading>{item.title}</Heading>
            </li>
            {item.items.map(subitem => (
              <li>{subitem.title}</li>
            ))}
          </ListSection>
        ))}
        </ListItemsRow>
      </DropdownSection>
    </DropdownEl>
  )
}

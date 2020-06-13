import React from "react"

import { IconDesktopMarketing } from "../../Icons"

import {
  DropdownEl,
  DropdownSection,
  Heading,
  ListSection,
  ListPrimary,
  DropdownButton,
  DropdownTitle,
} from "./Components.js"

export const GenericDropdownContainer = ({
  title,
  subtitle,
  buttonText,
  items,
}) => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <li>
            <IconDesktopMarketing />
          </li>
          <li>
            <DropdownTitle>{title}</DropdownTitle>
          </li>
          <li>{subtitle}</li>
          <li>
            <DropdownButton>{buttonText}</DropdownButton>
          </li>
        </ListPrimary>
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
      </DropdownSection>
    </DropdownEl>
  )
}

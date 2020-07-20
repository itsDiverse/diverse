import React from "react"

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
  DropDownVideoPlayer,
} from "./Components.js"

import graphicsVideo from "./design.mp4"
import marketingVideo from "./marketing.mp4"
import animationVideo from "./animation.mp4"
import programmingVideo from "./programming.mp4"

const getVideoPath = video => {
  switch (video) {
    case "grahics":
      return graphicsVideo
    case "marketing":
      return marketingVideo
    case "animation":
      return animationVideo
    case "programming":
      return programmingVideo
    default:
      return graphicsVideo
  }
}

export const GenericDropdownContainer = ({
  title,
  subtitle,
  buttonText,
  items,
  columns,
  video,
}) => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <DropDownVideoPlayer autoPlay loop>
            <source src={getVideoPath(video)} type="video/mp4" />
          </DropDownVideoPlayer>
          <DropdownTitle>{title}</DropdownTitle>
          <DropdownSubtitle>{subtitle}</DropdownSubtitle>
          <DropdownButton href="/">{buttonText}</DropdownButton>
        </ListPrimary>
        <ListItemsRow columns={columns}>
          {items.map((item, index) => (
            <ListSection key={`section-${index}`}>
              <ListItemTitle key={`section-${index}`}>
                {item.title}
              </ListItemTitle>
              {item.items.map((subitem, index) => (
                <ListItem>{subitem.title}</ListItem>
              ))}
            </ListSection>
          ))}
        </ListItemsRow>
      </DropdownSection>
    </DropdownEl>
  )
}

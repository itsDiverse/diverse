import React from "react"
import {
  IconMarketing,
  IconGraphicDesign,
  IconProgrammingTech,
  IconVideo,
} from "../icons"

const getIcons = icon => {
  switch (icon) {
    case "marketing":
      return <IconMarketing />
    case "graphics":
      return <IconGraphicDesign />
    case "programming":
      return <IconProgrammingTech />
    case "video":
      return <IconVideo />
    default:
      return null
  }
}

export default getIcons

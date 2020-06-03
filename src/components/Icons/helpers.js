import React from "react"
import {
  IconMarketing,
  IconGraphicDesign,
  IconProgrammingTech,
  IconVideo,
  IconLogin,
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
    case "login":
      return <IconLogin />
    default:
      return null
  }
}

export default getIcons

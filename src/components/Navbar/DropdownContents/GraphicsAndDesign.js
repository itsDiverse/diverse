import React from "react"

import { footerData } from "../../Footer/Footer.data"
import { GenericDropdownContainer } from "./GenericDropdownContainer"

export const GraphicsAndDesignDropdown = () => {
  const graphicsData = footerData[1]
  return (
    <GenericDropdownContainer
      title={graphicsData.title}
      subtitle={graphicsData.subtitle}
      buttonText={graphicsData.buttonText}
      items={graphicsData.items}
    />
  )
}

import React from "react"

import { footerData } from "../../footer/Footer.data"
import { GenericDropdownContainer } from "./GenericDropdownContainer"

export const DigitalMarketingDropdown = () => {
  const marketingData = footerData[0]
  return (
    <GenericDropdownContainer
      title={marketingData.title}
      subtitle={marketingData.subtitle}
      buttonText={marketingData.buttonText}
      items={marketingData.items}
    />
  )
}

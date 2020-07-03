import React from "react"

import { footerData } from "../../footer/Footer.data"
import { GenericDropdownContainer } from "./GenericDropdownContainer"

export const ProgrammingAndTechDropdown = () => {
  const programmingData = footerData[3]
  return (
    <GenericDropdownContainer
      title={programmingData.title}
      subtitle={programmingData.subtitle}
      buttonText={programmingData.buttonText}
      items={programmingData.items}
      columns={1}
    />
  )
}

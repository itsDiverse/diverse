import React from "react"
import { StyledMobileFooterServices } from "./MobileFooterServices.styles"
import { DropDown } from "../DropDown"

export const MobileFooterServices = () => (
  <StyledMobileFooterServices>
    <DropDown
      icon="+"
      title="OUR SERVICES"
      subtitle="We combine services to create profitable sales processes."
    >
      <div>
        <h2>About</h2>
        <h4>something</h4>
        <h4>something else</h4>
      </div>
    </DropDown>
  </StyledMobileFooterServices>
)

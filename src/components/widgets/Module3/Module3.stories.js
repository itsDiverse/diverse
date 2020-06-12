import React from "react"
import { action, config } from "@storybook/addon-actions"
import { Module3 } from "./"
export default {
  title: "Widgets/Module3",
  component: Module3,
}

export const module3 = () => (
  <Module3>
    image1="https://picsum.photos/200/300"
    image2="https://picsum.photos/200/300"
    image3="https://picsum.photos/200/300"
  </Module3>
)

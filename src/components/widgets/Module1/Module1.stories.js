import React from "react"
import { action, config } from "@storybook/addon-actions"
import { Module1 } from "./"
export default {
  title: "Widgets/Module1",
  component: Module1,
}

export const module1 = () => (
  <Module1
    image1="https://picsum.photos/200/300"
    image2="https://picsum.photos/200/300"
    image3="https://picsum.photos/200/300"
    image4="https://picsum.photos/200/300"
    image5="https://picsum.photos/200/300"
    image6="https://picsum.photos/200/300"
    image7="https://picsum.photos/200/300"
  ></Module1>
)

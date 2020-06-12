import React from "react"
import { action, config } from "@storybook/addon-actions"
import { Module1a } from "./"
export default {
  title: "Module1a",
  component: Module1a,
}

export const Primary = () => (
  <Module1a
    image1="https://picsum.photos/200/300"
    image2="https://picsum.photos/200/300"
    image3="https://picsum.photos/200/300"
    image4="https://picsum.photos/200/300"
    image5="https://picsum.photos/200/300"
    image6="https://picsum.photos/200/300"
    image7="https://picsum.photos/200/300"
  ></Module1a>
)

import React from "react"
import { action } from "@storybook/addon-actions"
import { Button } from "./Button"

export default {
  title: "Button",
  component: Button,
}

export const Primary = () => (
  <Button primary onClick={action("clicked")}>
    Hello Button
  </Button>
)

export const SmallPrimary = () => (
  <Button small primary onClick={action("clicked")}>
    Aloha
  </Button>
)

export const SmallPrimaryRounded = () => (
  <Button small primary rounded onClick={action("clicked")}>
    Aloha
  </Button>
)

export const Rounded = () => (
  <Button rounded onClick={action("clicked")}>
    Aloha
  </Button>
)

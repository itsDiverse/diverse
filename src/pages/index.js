import React from "react"

import { Layout } from "../components"
import { Module7, Module8, Module20 } from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
    <Module7
      theme={theme.module7}
      data={data.module7}
      images={images.module7}
    />

    <Module8
      theme={theme.module8}
      data={data.module8}
      images={images.module8}
    />

    <Module20
      theme={theme.module20}
      data={data.module20}
      images={images.module20}
    />
  </Layout>
)

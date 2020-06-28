import React from "react"

import { Layout } from "../components"
import { Module2, Module5, Module9 } from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
    <Module9
      theme={theme.module9}
      data={data.module9}
      videos={videos.module9}
      images={images.module9}
    ></Module9>

    <Module2
      theme={theme.module2}
      data={data.module2}
      videos={videos.module2}
      images={images.module2}
    />

    <Module5
      theme={theme.module5}
      data={data.module5}
      images={images.module5}
    />
  </Layout>
)

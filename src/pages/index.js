import React from "react"

import { Layout } from "../components"
import {
  Module20,
  Module16v,
  Module14,
  Module15,
  Module9,
} from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
    <Module16v
      theme={theme.module16v}
      data={data.module16v}
      images={images.module16v}
      videos={videos.module16v}
    />
    <Module20
      theme={theme.module20}
      data={data.module20}
      images={images.module20}
    />
    <Module9
      images={images.module9}
      data={data.module9}
      theme={theme.module9}
    />
    <Module15
      theme={theme.module15}
      data={data.module15}
      images={images.module15}
    />

    <Module14
      theme={theme.module14}
      data={data.module14}
      images={images.module14}
    />
  </Layout>
)

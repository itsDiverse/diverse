import React from "react"

import { Layout } from "../components"
import {
  QuadBox,
  Module13,
  Module14,
  Module15,
  Module9,
  Module19,
} from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
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
    <Module13
      images={images.module13}
      data={data.module13}
      theme={theme.module13}
    />
    <Module19
      images={images.module19}
      data={data.module19}
      theme={theme.module19}
    />
  </Layout>
)

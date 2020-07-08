import React from "react"

import { Layout } from "../components"
import {
  QuadBox,
  Module2,
  Module4,
  Module7,
  Module7a,
  Module7b,
  Module8,
  Module20,
  Module10,
  Module11,
  Module11a,
  Module13,
  Module15,
  Module16,
  Module16v,
} from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
    <QuadBox
      images={images.quadBox}
      data={data.quadBox}
      theme={theme.quadBox}
    />
    <Module2
      theme={theme.module2}
      data={data.module2}
      images={images.module2}
      videos={videos.module2}
    />
  </Layout>
)

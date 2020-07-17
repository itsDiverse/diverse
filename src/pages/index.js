import React from "react"

import { Layout, AnimatedBackground } from "../components"
import { Module16v, Module15, Module9 } from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <AnimatedBackground>
    <Layout>
      <Module16v
        theme={theme.module16v}
        data={data.module16v}
        images={images.module16v}
        videos={videos.module16v}
      />
      <Module15
        theme={theme.module15}
        data={data.module15}
        images={images.module15}
      />
      <Module9
        theme={theme.module9}
        data={data.module9}
        images={images.module9}
      />
    </Layout>
  </AnimatedBackground>
)

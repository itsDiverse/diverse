import React from "react"
import { Module16v } from "../components/widgets/Module16v"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <>
    <Module16v
      theme={theme.module16v}
      data={data.module16v}
      images={images.module16v}
      videos={videos.module4}
    />
  </>
)

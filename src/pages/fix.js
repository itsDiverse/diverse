import React from "react"

import { Module16 } from "../components/widgets/Module16"
import { Module22 } from "../components/widgets/Module22"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <>
    <Module22
      theme={theme.module22}
      data={data.module22}
      images={images.module22}
      videos={videos.module22}
    />
    <Module16
      theme={theme.module16}
      data={data.module16}
      images={images.module16}
      videos={videos.module16}
    />
  </>
)

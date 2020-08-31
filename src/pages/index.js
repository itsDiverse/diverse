import React from "react"
import { Module0, Module23, Module24 } from "../components/widgets"
import { LayoutV1 } from "../components/Layout"
import SEO from "../components/seo"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <LayoutV1>
    <SEO title="Index" />
    <Module0
      component={Module0}
      theme={theme.module0}
      data={data.module0}
      videos={videos.module0}
      images={images.module0}
    />
    <Module23
      component={Module23}
      theme={theme.module23}
      data={data.module23}
      videos={videos.module23}
    />
    <Module24
      component={Module24}
      theme={theme.module24}
      data={data.module24}
      images={images.module24}
      videos={videos.module24}
    />
  </LayoutV1>
)

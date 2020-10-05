import React from "react"
import { Module25 } from "../components/widgets"
import { LayoutV1 } from "../components/Layout"
import SEO from "../components/seo"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"

export default () => (
  <LayoutV1>
    <SEO title="Diverse" />
    <Module25
      component={Module25}
      theme={theme.module25}
      data={data.module25}
      images={images.module25}
    />
  </LayoutV1>
)

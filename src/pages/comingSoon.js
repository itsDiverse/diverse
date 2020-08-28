import React from "react"
import { ComingSoon } from "../components"
import LayoutV1 from "../components/Layout/v1/Layout_v1"

import { videos } from "../videos"

export default () => (
  <LayoutV1>
    <ComingSoon videos={videos.comingSoon} />
  </LayoutV1>
)

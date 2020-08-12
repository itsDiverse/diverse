import React from "react"
import { Module2 } from "../components/widgets"
import { Content } from "../components/Layout/v1/Scaffold"
import LayoutV1 from "../components/Layout/v1/Layout_v1"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <LayoutV1>
    <Content>
      <Module2
        theme={theme.module2}
        data={data.module2}
        images={images.module2}
        videos={videos.module2}
      />
    </Content>
  </LayoutV1>
)

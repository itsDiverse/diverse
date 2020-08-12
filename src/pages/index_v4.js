import React from "react"
import { Module5 } from "../components/widgets"
import { Content } from "../components/Layout/v1/Scaffold"
import LayoutV1 from "../components/Layout/v1/Layout_v1"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <LayoutV1>
    <Content>
      <Module5
        theme={theme.module5}
        data={data.module5}
        images={images.module5}
        videos={videos.module5}
      />
    </Content>
  </LayoutV1>
)

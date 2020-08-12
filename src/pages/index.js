import React from "react"
import { Module15 } from "../components/widgets"
import { Content } from "../components/Layout/v1/Scaffold"
import LayoutV1 from "../components/Layout/v1/Layout_v1"
import SEO from "../components/seo"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <LayoutV1>
    <SEO title="Index" />
    <Content>
      <h1
        style={{
          fontFamily: "NovaReg",
          fontWeight: "600",
          fontSize: "35px",
          color: "#555555",
        }}
      >
        Multi-Channel Sales Processes
      </h1>
      <Module15
        component={Module15}
        theme={theme.module15}
        data={data.module15}
        images={images.module15}
        videos={videos.module15}
      />
    </Content>
  </LayoutV1>
)

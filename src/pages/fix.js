import React from "react"
import { QuadBox } from "../components/widgets/QuadBox"
import { Module1 } from "../components/widgets/Module1"
import { Module1a } from "../components/widgets/Module1a"
import { Module2 } from "../components/widgets/Module2"
import { Module3 } from "../components/widgets/Module3"
import { Module4 } from "../components/widgets/Module4"
import { Module5 } from "../components/widgets/Module5"
import { Module6 } from "../components/widgets/Module6"
import { Module7 } from "../components/widgets/Module7"
import { Module7a } from "../components/widgets/Module7a"
import { Module7b } from "../components/widgets/Module7b"
import { Module8 } from "../components/widgets/Module8"
import { Module9 } from "../components/widgets/Module9"
import { Module10 } from "../components/widgets/Module10"
import { Module11 } from "../components/widgets/Module11"
import { Module11a } from "../components/widgets/Module11a"
import { Module12 } from "../components/widgets/Module12"
import { Module13 } from "../components/widgets/Module13"
import { Module14 } from "../components/widgets/Module14"
import { Module15 } from "../components/widgets/Module15"
import { Module16 } from "../components/widgets/Module16"
import { Module17 } from "../components/widgets/Module17"
import { Module18 } from "../components/widgets/Module18"
import { Module19 } from "../components/widgets/Module19"
import { Module20 } from "../components/widgets/Module20"
import { Module21 } from "../components/widgets/Module21"
import { Module22 } from "../components/widgets/Module22"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default () => (
  <>
    <h1>#4</h1>
    <Module4
      theme={theme.module4}
      data={data.module4}
      images={images.module4}
      videos={videos.module4}
    />
    <hr></hr>
    <h1>#5</h1>
    <Module5
      theme={theme.module5}
      data={data.module5}
      images={images.module5}
    />
    <hr></hr>
    <Module7b
      theme={theme.module7b}
      data={data.module7b}
      images={images.module7b}
    />
    <hr></hr>
    <h1>#15</h1>
    <Module15
      theme={theme.module15}
      data={data.module15}
      images={images.module15}
    />
    <hr></hr>
    <h1>#16</h1>
    <Module16
      theme={theme.module16}
      data={data.module16}
      images={images.module16}
    />
    <hr></hr>
    <h1>#20</h1>
    <Module20
      theme={theme.module20}
      data={data.module20}
      images={images.module20}
    />
    <hr></hr>
    <h1>Module22</h1>
    <Module22
      theme={theme.module22}
      data={data.module22}
      images={images.module22}
    />
  </>
)

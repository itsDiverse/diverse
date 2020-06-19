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
    <h1>Module1</h1>
    <Module1
      theme={theme.module1}
      data={data.module1}
      images={images.module1}
    />
    <hr></hr>
    <Module1a
      data={data.module1a}
      theme={theme.module1a}
      images={images.module1a}
    />
    <hr></hr>
    <h1>Module2</h1>
    <Module2
      theme={theme.module2}
      data={data.module2}
      videos={videos.module2}
    />
    <hr></hr>
    <h1>Module3</h1>
    <Module3
      theme={theme.module3}
      data={data.module3}
      images={images.module3}
    />
    <hr></hr>
    <h1>Module4</h1>
    <Module4
      theme={theme.module4}
      data={data.module4}
      images={images.module4}
      videos={videos.module4}
    />
    <hr></hr>
    <h1>Module5</h1>
    <Module5
      theme={theme.module5}
      data={data.module5}
      images={images.module5}
    />
    <hr></hr>
    <h1>Module6</h1>
    <Module6
      theme={theme.module6}
      data={data.module6}
      images={images.module6}
    />
    <hr></hr>
    <h1>Module7</h1>
    <Module7
      theme={theme.module7}
      data={data.module7}
      images={images.module7}
    />
    <hr></hr>
    <h1>Module8</h1>
    <Module8
      theme={theme.module8}
      data={data.module8}
      images={images.module8}
    />
    <hr></hr>
    <h1>Module9</h1>
    <Module9
      theme={theme.module9}
      data={data.module9}
      images={images.module9}
    />
    <hr></hr>
    <h1>Module10</h1>
    <Module10
      theme={theme.module10}
      data={data.module10}
      images={images.module10}
    />
    <hr></hr>
    <h1>Module11</h1>
    <Module11
      theme={theme.module11}
      data={data.module11}
      images={images.module11}
    />
    <hr></hr>
    <h1>Module11a</h1>
    <Module11a
      theme={theme.module11a}
      data={data.module11a}
      images={images.module11a}
    />
    <hr></hr>
    <h1>Module12</h1>
    <Module12 theme={{ containerXl: { opacity: 1 } }}></Module12>
    <hr></hr>
    <h1>Module14</h1>
    <Module14 theme={{ containerLg: { opacity: 1 } }}></Module14>
    <hr></hr>
    <h1>Module15</h1>
    <Module15 theme={{ containerXl: { opacity: 1 } }}></Module15>
    <hr></hr>
    <h1>Module16</h1>
    <Module16 />
    <hr></hr>
    <h1>Module17</h1>
    <Module17 />
    <hr></hr>
    <h1>Module18</h1>
    <Module18 theme={{ containerLg: { opacity: 1 } }}></Module18>
    <hr></hr>
    <h1>Module19</h1>
    <Module19 />
    <hr></hr>
    <h1>Module20</h1>
    <Module20 theme={{ containerLg: { opacity: 1 } }}></Module20>
    <hr></hr>
    <h1>Module21</h1>
    <Module21 theme={{ containerLg: { opacity: 1 } }}></Module21>
    <hr></hr>
    <h1>Module22</h1>
    <Module22 />
    <hr></hr>
    <h1>QuadBox</h1>
    <QuadBox />
  </>
)

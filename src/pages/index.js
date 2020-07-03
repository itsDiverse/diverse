import React from "react"

import { Layout } from "../components"
import {
  QuadBox,
  Module2,
  Module7,
  Module7a,
  Module7b,
  Module8,
  Module20,
  Module10,
  Module11,
  Module11a,
  Module13,
  Module15,
} from "../components/widgets"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"
import { videos } from "../videos"

export default props => (
  <Layout>
    <QuadBox
      images={images.quadBox}
      data={data.quadBox}
      theme={theme.quadBox}
    />
    <Module2
      theme={theme.module2}
      data={data.module2}
      images={images.module2}
      videos={videos.module2}
    />
    <Module7
      theme={theme.module7}
      data={data.module7}
      images={images.module7}
    />
    <Module8
      theme={theme.module8}
      data={data.module8}
      images={images.module8}
    />
    <Module7b
      theme={theme.module7b}
      data={data.module7b}
      images={images.module7b}
    />
    <Module20
      theme={theme.module20}
      data={data.module20}
      images={images.module20}
    />
    <Module10
      theme={theme.module10}
      data={data.module10}
      images={images.module10}
    />
    <Module11
      theme={theme.module11}
      data={data.module11}
      images={images.module11}
    />
    s
    <Module11a
      theme={theme.module11a}
      data={data.module11a}
      images={images.module11a}
    />
    <Module13
      theme={theme.module13}
      data={data.module13}
      images={images.module13}
    />
    <Module15
      theme={theme.module15}
      data={data.module15}
      images={images.module15}
    />
    <Module7a
      theme={theme.module7a}
      data={data.module7a}
      images={images.module7a}
    />{" "}
  </Layout>
)

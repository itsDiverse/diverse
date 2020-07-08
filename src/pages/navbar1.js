import React from "react"
import { Layout } from "../components"
import { QuadBox } from "../components/widgets/"

import { theme } from "../theme"
import { data } from "../data"
import { images } from "../images"

export default props => (
  <Layout>
    <h1>Lorem Title</h1>
    <QuadBox
      images={images.quadBox}
      data={data.quadBox}
      theme={theme.quadBox}
    />
  </Layout>
)

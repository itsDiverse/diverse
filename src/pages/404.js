import React from "react"
import styled from "styled-components"

import { LayoutV1 } from "../components/Layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 400px;
  text-align: center;
  font-family: NovaBlack;
  font-size: 20px;
  line-height: 40px;
  color: #555;
  margin-bottom: -2px;
  margin-top: -5px;
  font-weight: 400;
  text-align: center;
  z-index: 1;

  p {
    font-family: NovaReg;
  }
`

const NotFoundPage = () => (
  <LayoutV1>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>Not Found.</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </LayoutV1>
)

export default NotFoundPage

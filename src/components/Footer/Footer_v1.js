import React from "react"
import styled from "styled-components"

import rem from "../../utils/rem"

const Wrapper = styled.div`
  min-height: ${rem(100)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #cecece;
  color: #868686;
`

const FooterLink = styled.a`
  color: currentColor;
  text-decoration: underline;
  transition: opacity: 0.2s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`

const FooterV1 = () => (
  <Wrapper>
    <p>
      Copyright © Diverse Marketing. All Rights Reserved. • Do not sell my
      information <FooterLink href="#">LinkGoesHere</FooterLink>
    </p>
  </Wrapper>
)

export default FooterV1

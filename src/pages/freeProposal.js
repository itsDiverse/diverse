import React from "react"
import { Proposal } from "../components/ProposalModal"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`

export default () => {
  return (
    <Wrapper>
      <Proposal />
    </Wrapper>
  )
}

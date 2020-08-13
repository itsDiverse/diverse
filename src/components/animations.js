import { keyframes } from "styled-components"

export const fadeinout = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`

export const SlideIn = keyframes`
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
`

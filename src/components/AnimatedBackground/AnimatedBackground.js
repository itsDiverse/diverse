import React from "react"
import Sky from "react-sky"
import { StyledContentWrapper } from "./AnimatedBackground.styles"

import myImage from "../../images/triangle.png"
//import myImage2 from "../../images/square.png"
//import myImage3 from "../../images/circle.png"

// you can pass imported images to Sky
const AnimatedBackground = ({ children }) => {
  return (
    <StyledContentWrapper>
      {children}
      <Sky
        images={{
          0: myImage,
        }}
        how={
          10
        } /* Pass the number of images Sky will render chosing randomly */
        time={2000} /* time of animation */
        size={"20px"} /* size of the rendered images */
        background={""} /* color of background */
      />
    </StyledContentWrapper>
  )
}

export default AnimatedBackground

import React from "react"
import Sky from "react-sky"

import myImage from "../../images/triangle.png"
import myImage2 from "../../images/square.png"
import myImage3 from "../../images/circle.png"

// you can pass imported images to Sky
const AnimatedBackground = ({ children }) => {
  return (
    <div>
      {children}
      <Sky
        style={{ height: "100vh" }}
        images={{
          0: myImage,
          1: myImage2,
          2: myImage3,
        }}
        how={
          120
        } /* Pass the number of images Sky will render chosing randomly */
        time={300} /* time of animation */
        size={"20px"} /* size of the rendered images */
        background={""} /* color of background */
      />
    </div>
  )
}

export default AnimatedBackground

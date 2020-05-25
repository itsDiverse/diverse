import React from "react"
import { useMediaQuery } from "react-responsive"
import AnimatedNavbar from "../navbar"
import { default as MobileNavbar } from "../mobileNavbar/mobileNavbar"
import { default as Footer } from "../footer"

//Todo: 1st will use the two different components for menu in desktop and mobile
//because business wants that. But, keeping an eye opened in possible
//responsive with styled components media queries.
const MediaNav = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  if (isDesktopOrLaptop) return <AnimatedNavbar duration={300} />
  if (isTabletOrMobile) return <MobileNavbar></MobileNavbar>

  return null
}

//TODO: mobile footer. May reuse desktop one with Styled media queries.
const MediaFooter = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  if (isDesktopOrLaptop) return <Footer></Footer>
  if (isTabletOrMobile) return <Footer></Footer>

  return null
}

//TODO: refactore inline styles
export default ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <MediaNav />
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
    <MediaFooter />
  </div>
)

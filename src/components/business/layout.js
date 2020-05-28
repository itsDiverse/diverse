import React from "react"
import { useMediaQuery } from "react-responsive"
import AnimatedNavbar from "../navbar"
import { StyledLayoutWrapper, StyledLayoutMain } from "./layout.styles"
import { default as MobileNavbar } from "../mobileNavbar/MobileNavbar"
import { default as Footer } from "../footer"

//Todo: 1st will use the two different components for menu in desktop and mobile
//because business wants that. But, keeping an eye opened in possible
//responsive with styled components media queries.
const MediaNav = ({ menuOpened, onToggleMenu }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  if (isDesktopOrLaptop) return <AnimatedNavbar duration={300} />
  if (isTabletOrMobile)
    return (
      <MobileNavbar
        menuOpened={menuOpened}
        onToggleMenu={onToggleMenu}
      ></MobileNavbar>
    )

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
const Layout = ({ children }) => {
  const [menuOpened, setMenuOpened] = React.useState(false)

  return (
    <StyledLayoutWrapper>
      <MediaNav menuOpened={menuOpened} onToggleMenu={setMenuOpened} />
      <StyledLayoutMain>{!menuOpened && children}</StyledLayoutMain>
      {/*TODO: enable footer !menuOpened*/ false && <MediaFooter />}
    </StyledLayoutWrapper>
  )
}

export default Layout

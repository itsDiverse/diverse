import React from "react"
import { useMediaQuery } from "react-responsive"

import { default as MobileNavbar } from "../MobileNavbar/MobileNavbar"
import AnimatedNavbar from "../Navbar"

import { StyledLayoutWrapper, StyledLayoutMain } from "./Layout.styles"
import { Footer } from "../Footer"
import { MobileFooter } from "../MobileFooter"

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

const MediaFooter = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  if (isDesktopOrLaptop) return <Footer />
  if (isTabletOrMobile) return <MobileFooter />

  return null
}

const Layout = ({ children }) => {
  const [menuOpened, setMenuOpened] = React.useState(false)

  return (
    <StyledLayoutWrapper>
      <MediaNav menuOpened={menuOpened} onToggleMenu={setMenuOpened} />
      {!menuOpened && <StyledLayoutMain>{children}</StyledLayoutMain>}
      {!menuOpened && <MediaFooter></MediaFooter>}
    </StyledLayoutWrapper>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

export const ModalLink = ({ children, to }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <Link to={to} state={{ modal: !isTabletOrMobile }}>
      {children}
    </Link>
  )
}

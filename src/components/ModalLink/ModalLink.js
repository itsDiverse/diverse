import React from "react"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

export const ModalLink = ({ children, to }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={to}
      state={{ modal: !isTabletOrMobile }}
    >
      {children}
    </Link>
  )
}

import React from 'react';
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";



export const ModalLink = ({children, to}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Link to={to} state={{ modal: !isTabletOrMobile }}>
      {children}
    </Link>
  );
}
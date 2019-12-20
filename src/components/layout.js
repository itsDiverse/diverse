import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.css'
import layoutStyles from '../styles/layout.module.css'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.headerContainer}>
        <Header />
      </div>
      <div className={layoutStyles.contentContainer}>
       {props.children}
      </div>
      <div className={layoutStyles.footerContainer}>
        <Footer />
      </div>
  </div> 
    
 )
}

export default Layout

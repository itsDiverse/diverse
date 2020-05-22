import React from "react"
import { Link } from "gatsby"

import "../styles/index.css"
import layoutStyles from "../styles/layout.module.css"

const Layout = props => {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.headerContainer}></div>
        <div className={layoutStyles.contentContainer}>{props.children}</div>
        <div className={layoutStyles.footerContainer}>
          <Link to="/module1">Module 1</Link>&nbsp;|&nbsp;
          <Link to="/module1a">Module 1a</Link>&nbsp;|&nbsp;
          <Link to="/module2">Module 2 x</Link>&nbsp;|&nbsp;
          <Link to="/module3">Module 3</Link>&nbsp;|&nbsp;
          <Link to="/module4">Module 4 x</Link>&nbsp;|&nbsp;
          <Link to="/module5">Module 5</Link>&nbsp;|&nbsp;
          <Link to="/module6">Module 6</Link>&nbsp;|&nbsp;
          <Link to="/module7">Module 7 y</Link>&nbsp;|&nbsp;
          <Link to="/module8">Module 8 x</Link>&nbsp;|&nbsp;
          <Link to="/module9">Module 9</Link>&nbsp;|&nbsp;
          <Link to="/module10">Module 10</Link>&nbsp;|&nbsp;
          <Link to="/module11">Module 11</Link>&nbsp;|&nbsp;
          <Link to="/module11a">Module 11a</Link>&nbsp;|&nbsp;
          <Link to="/module12">Module 12</Link>&nbsp;|&nbsp;
          <Link to="/module13">Module 13</Link>&nbsp;|&nbsp;
          <Link to="/module14">Module 14</Link>&nbsp;|&nbsp;
          <Link to="/module15">Module 15 y</Link>&nbsp;|&nbsp;
          <Link to="/module16">Module 16</Link>&nbsp;|&nbsp;
          <Link to="/module17">Module 17</Link>&nbsp;|&nbsp;
          <Link to="/module18">Module 18</Link>&nbsp;|&nbsp;
          <Link to="/module19">Module 19</Link>&nbsp;|&nbsp;
          <Link to="/module20">Module 20</Link>&nbsp;|&nbsp;
          <Link to="/module21">Module 21</Link>&nbsp;|&nbsp;
          <Link to="/module22">Module 22</Link>&nbsp;|&nbsp;
          <Link to="/module22a">Module 22a</Link>&nbsp;|&nbsp;
          <Link to="/module23">Module 23</Link>&nbsp;|&nbsp;
          <Link to="/module24">Module 24</Link>&nbsp;|&nbsp;
        </div>
      </div>
    </>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import footerStyle from "../styles/footer.module.css"
import diverseLogo from "../images/diverseLogo.svg"
import igLogo from "../images/instagramIcon.svg"
import twLogo from "../images/twitterIcon.svg"
import fbLogo from "../images/facebookIcon.svg"
import ytLogo from "../images/youtubeIcon.svg"
import liLogo from "../images/linkedinLogo.svg"
import globeIcon from "../images/globeIcon.svg"

export default () => 
    
    <div className={footerStyle.footer}>
    <div className={footerStyle.footerSearch}>
      <span className={footerStyle.followUs}>Follow our <Link to="/page-2/">Blog</Link></span>
      <div className={footerStyle.socialMediaIcons}>
        <a href="https://instagram.com/"><img src={igLogo} alt="Instagram Icon" /></a>
        <a href="https://twitter.com/"><img src={twLogo} alt="Twitter Icon" /></a>
        <a href="https://facebook.com/"><img src={fbLogo} alt="Facebook Icon" /></a>
        <a href="https://youtube.com/"><img src={ytLogo} alt="Youtube Icon" /></a>
        <a href="https://linkedin.com/"><img src={liLogo} alt="LinkedIn Icon" /></a>
      </div>
    </div>
    <div className={footerStyle.footerContent}>
      <div className={footerStyle.footerLinks}>
        <ul>
          <h4>Services</h4>
          <li><Link to="/page-2/">Graphics & Design</Link></li>
          <li><Link to="/page-2/">Digital Marketing</Link></li>
          <li><Link to="/page-2/">Writing & Translation</Link></li>
          <li><Link to="/page-2/">Video & Animation</Link></li>
          <li><Link to="/page-2/">Programming & Tech</Link></li>
        </ul>
        <ul>
          <h4>Company</h4>
          <li><Link to="/page-2/">History & Ethos</Link></li>
          <li><Link to="/page-2/">Office Locations</Link></li>
          <li><Link to="/page-2/">Press & Resources</Link></li>
          <li><Link to="/page-2/">Leadership</Link></li>
          <li><Link to="/page-2/">Community Programs</Link></li>
        </ul>
        <ul>
          <h4>Career</h4>
          <li><Link to="/page-2/">Work with Diverse</Link></li>
          <li><Link to="/page-2/">Become a freelancer</Link></li>
          <li><Link to="/page-2/">Lifestyle</Link></li>
        </ul>
        <ul>
          <h4>Career</h4>
          <li><Link to="/page-2/">Work with Diverse</Link></li>
          <li><Link to="/page-2/">Become a freelancer</Link></li>
          <li><Link to="/page-2/">Lifestyle</Link></li>
        </ul>
      </div>
    </div>
    <div className={footerStyle.footerTerms}>
      <div className={footerStyle.footerLogoContainer}>
        <Link to="/page-2/"><img src={diverseLogo} alt="Diverse Company Logo" width="100px" /></Link>
      </div>
      <ul className={footerStyle.footerLinksContainer}>
        <li><Link to="/page-2/">Privacy Policy</Link></li>
        <li><Link to="/page-2/">Terms & Conditions</Link></li>
      </ul>
      <div className={footerStyle.footerRegion}>
        <div style={{ float: `right`}}>English - United States</div>
        <div style={{ float: `right`, marginRight: `10px`}}><img src={globeIcon} alt="Diverse Company Logo" width="15px" /></div>
    </div>
    </div>
    </div>






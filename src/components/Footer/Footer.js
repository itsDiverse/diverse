import React from "react"
/*
import { Link } from "gatsby"
import diverseLogo from "../../images/diverseLogo.svg"
import igLogo from "../../images/instagramIcon.svg"
import twLogo from "../../images/twitterIcon.svg"
import fbLogo from "../../images/facebookIcon.svg"
import ytLogo from "../../images/youtubeIcon.svg"
import liLogo from "../../images/linkedinLogo.svg"
import globeIcon from "../../images/globeIcon.svg"

  <div className={footerStyle.socialMediaIcons}>
    <a href="https://instagram.com/">
      <img src={igLogo} alt="Instagram Icon" />
    </a>
    <a href="https://twitter.com/">
      <img src={twLogo} alt="Twitter Icon" />
    </a>
    <a href="https://facebook.com/">
      <img src={fbLogo} alt="Facebook Icon" />
    </a>
    <a href="https://youtube.com/">
      <img src={ytLogo} alt="Youtube Icon" />
    </a>
    <a href="https://linkedin.com/">
      <img src={liLogo} alt="LinkedIn Icon" />
    </a>
  </div>
*/
import { FooterHeader } from "./FooterHeader"
import { FooterSections } from "./FooterSections"
import { FooterCerts } from "./FooterCerts"
import { FooterCopyright } from "./FooterCopyright"

import { StyledFooter } from "./Footer.styles"

const Footer = () => (
  <StyledFooter>
    <FooterHeader />
    <FooterSections />
    <FooterCerts />
    <FooterCopyright />
  </StyledFooter>
)

export default Footer

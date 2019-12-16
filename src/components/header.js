import PropTypes from "prop-types"
import React from "react"
import { withPrefix, Link } from "gatsby"
import logo from "../images/diverseLogo.svg"

const Header = ({ siteTitle }) => (



  <header>
     <div className="globalNav initialized noDropdownTransition">
     

<div className="container-lg">
  <nav>
    <ul className="navRoot">
      <li className="navSection logo">
          <Link to="/page-2/"><img src={logo} alt="Diverse Company Logo" height="40px" /></Link>
      </li>

      <li className="navSection primary">
        <button className="rootLink item-developers hasDropdown colorize" data-dropdown="developers" aria-haspopup="true" aria-expanded="true">
          <span>Graphics & Design</span>
        </button>
        <button className="rootLink item-company hasDropdown colorize" data-dropdown="company" aria-haspopup="true" aria-expanded="true">
          <span>Digital Marketing</span>
        </button>
        <button className="rootLink item-company hasDropdown colorize" data-dropdown="diverse" aria-haspopup="true" aria-expanded="true">
          <span>Writing & Translation</span>
        </button>
        <button className="rootLink item-company hasDropdown colorize" data-dropdown="diverse" aria-haspopup="true" aria-expanded="true">
          <span>Video & Animation</span>
        </button>
        <button className="rootLink item-company hasDropdown colorize" data-dropdown="diverse" aria-haspopup="true" aria-expanded="true">
          <span>Programming & Tech</span>
        </button>
        
      </li>

      <li className="navSection secondary">
          <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two" href="https://dashboard.stripe.com/login" data-analytics-source="global_nav" data-analytics-action="sign_in" data-convert-cta="dashboard_register"></a>
      </li>

    </ul>
    </nav>
</div>



<div className="dropdownRoot">
  <div className="dropdownBackground" style={{transform: `translateX(158px) scaleX(2.21579) scaleY(1.3325)`}}>
    <div className="alternateBackground" style={{transform: `translateY(400px)`}}></div>
  </div>
  <div className="dropdownArrow" style={{transform: `translateX(579px) rotate(45deg)`}}></div>
  <div className="dropdownContainer" style={{transform: `translateX(158px)`, width: `842px`, height: `533px`}}>
  
  
  
  <div className="dropdownSection active" data-dropdown="products" aria-hidden="true">
    <div className="dropdownContent" data-fixed="true">
      <div className="SubnavColumns">

    <div className="SubnavColumn SubnavColumn--primary">

    </div>
    <div className="SubnavColumn SubnavColumn--secondary">

    </div>

  </div>
</div>
</div>

    <div className="dropdownSection right" data-dropdown="developers" aria-hidden="true">
      <div className="dropdownContent" style={{width: `800px`, height: `400px`}}>
       
      </div>
    </div>

    <div className="dropdownSection right" data-dropdown="company" aria-hidden="true">
      <div className="dropdownContent" style={{width: `800px`, height: `800px`}}>

      </div>
    </div>

    <div className="dropdownSection right" data-dropdown="diverse" aria-hidden="true">
      <div className="dropdownContent" style={{width: `800px`, height: `400px`}}>
      <div className="productNav">
          <h3>Logo & Brand Identity</h3>
          <div className="productNavItem"><Link to="/page-2/">Logo Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Brand Style Guides</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Business Cards and Stationary</Link></div>
        </div>
        <div className="productNav">
          <h3>Web & Mobile</h3>
          <div className="productNavItem"><Link to="/page-2/">Web & Mobile Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Social Media Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Banner Ads</Link></div>
        </div>
        <div className="productNav">
          <h3>Print Design</h3>
          <div className="productNavItem"><Link to="/page-2/">Flyer Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Brochure Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Poster Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Catalog Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Menu Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Postcard Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Invitation Design</Link></div>
        </div>
        <div className="productNav">
          <h3>Packaging & Labels</h3>
          <div className="productNavItem"><Link to="/page-2/">Book & Album Covers</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Packaging Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Car Wraps</Link></div>
        </div>
        <div className="productNav">
          <h3>Visual Design</h3>
          <div className="productNavItem"><Link to="/page-2/">Photoshop Editing</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Presentation Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Info Graphic Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Vector Tracing</Link></div>
        </div>
        <div className="productNav">
          <h3>Architecture & Building Design</h3>
          <div className="productNavItem"><Link to="/page-2/">Architecture & Interior Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Landscape Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Building Information Modeling</Link></div>
        </div>
        <div className="productNav">
          <h3>Product & Characters Design</h3>
          <div className="productNavItem"><Link to="/page-2/">3D Model & Product Design</Link></div>
          <div className="productNavItem"><Link to="/page-2/">Character Modeling</Link></div>
        </div>
        <div className="productNav">
          <h3>Merchandise</h3>
          <div className="productNavItem"><Link to="/page-2/">T-Shirts & Merchandise</Link></div>
        </div>
      </div>
    </div>

  </div>
</div>

</div>


  

  <div className="globalContent">
    
<main>
<div>
  <div id="stripes" aria-hidden="true">
   
  </div>

  <section id="intro">
  
  </section>
</div>

</main>

  </div>



  </header>



)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header



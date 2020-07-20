import React from "react"
import { Layout } from "../components/Layout"
import { Module7 } from "../components/widgets"

//import images Module 7 +++++++++++++
import section1Title from "../images/Module7/compliance.svg"
import checkList from "../images/Module7/lawyer-friendly-checkmark.svg"
// import section2Title from "../images/Module7/platform-management.svg"
// import section2ImageRight from "../images/Module7/imageRight.png"
// import section3Title from "../images/Module7/international-support.svg"
// import backgroundImg from "../images/Module7/background-image.jpg"
import dashboardImg from "../images/Module7/dashboard-chrome.svg"
import flagIconsImg from "../images/Module7/flagIcons.svg"
//++++++++++++++++++++++++++++++++++++
const theme = {
  reverseOrderFirstSection: false,

  colors: {
    title: "#32325d",
    text: "#525f7f",
    titleLeftBox: "#57c3f0",
    shadowColor: "rgba(50, 50, 93, 0.9)",
    shadow: true,
  },
  borderBottom: false,
}
const data = {
  //Section1
  title1: "Compliancee",

  //-------------------------LeftContent
  bulletList: {
    title: "Lawyer friendly",
    item1: "Dynamic risk-based KYC/AML checks for all recipients",
    item2: "API-based OFAC and sanctions screening",
    item3: "IRS tax threshold tracking and 1099 support",
    item4: "Card industry blacklist filtering",
    item5: "Licensed money transmission from U.S. states &amp; UK FCA",
    item6: "Screening for bad actors using data from the Stripe Network",
  },

  //-------------------------RightContent
  paragraph1: {
    text: {
      //Text before link
      before: "If you’re running a multi-sided ",
      link1: {
        url: "https://www.w3schools.com",
        text: "marketplace",
      },
      //Text in between links
      between: "or",
      link2: {
        url: "https://www.w3schools.com",
        text: "platform",
      },
      //Text after links
      after:
        ", there’s no doubt you’re wrestling with payments compliance issues such as card network rules, money transmission, KYC, and tax reporting. Connect makes these burdens easier to manage by shifting some of the most onerous obligations to Stripe, letting you stay focused on your product and spend less time on compliance related tasks.",
    },
  },
  paragraph2: {
    text: `Under the hood, Connect is powered by secure credit card data
      tokenization to help you meet PCI obligations, contains
      monitoring and verification systems to help you with KYC needs
      and tax obligations, and leverages Stripe’s money transmission
      licenses in the U.S. as well as European e-money
      authorization.`,
  },
}
const images = {
  //Section1
  section1Title,
  section1TitleAlt: "",
  checkList,
  checkListAlt: "",

  //Styles.js
  flagIconsImg,
  dashboardImg,
}

export default props => (
  <Layout>
    <Module7 theme={theme} data={data} images={images} />
  </Layout>
)

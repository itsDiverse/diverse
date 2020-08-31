// import React from "react"

// import { Layout } from "../components"
// import {
//   Module3,
//   Module7,
//   Module7a,
//   Module10,
//   Module16v,
// } from "../components/widgets"

// //import videos ++++++++++++
// import sample from "../videos/sample.mp4"
// import sample2 from "../videos/influencerMarketing/InfluencerMarketing.mp4"
// import sampleVideo from "../videos/samplevideo.mp4"
// import playIcon from "../images/Module2/play.svg"
// //++++++++++++++++++++++++++++++++++++

// //import images Module 3 +++++++++++++
// import m3Icon1 from "../images/Module3/submit.svg"
// import m3Icon2 from "../images/Module3/documents.svg"
// import m3Icon3 from "../images/Module3/incorporation.svg"
// //++++++++++++++++++++++++++++++++++++

// //import images Module 7 +++++++++++++
// import section1Title from "../images/Module7/compliance.svg"
// import checkList from "../images/Module7/lawyer-friendly-checkmark.svg"
// //import section2Title from "../images/Module7/platform-management.svg"
// //import section2ImageRight from "../images/Module7/imageRight.png"
// import section3Title from "../images/Module7/international-support.svg"
// import backgroundImg from "../images/Module7/background-image.jpg"
// import dashboardImg from "../images/Module7/dashboard-chrome.svg"
// import flagIconsImg from "../images/Module7/flagIcons.svg"
// //++++++++++++++++++++++++++++++++++++

// //import images Module 10 +++++++++++++
// import icon1 from "../images/Module10/icon1.svg"
// import icon2 from "../images/Module10/icon2.svg"
// import icon3 from "../images/Module10/icon3.png"
// import imageBox from "../images/influencerMarketing/InfluencerMarketing0062.jpg"
// //++++++++++++++++++++++++++++++++++++

// //import images Module 16v+++++++++++
// import icon16v from "../images/Module16v/icon.svg"
// import videoPoster from "../images/Module16v/video-poster.jpg"
// import image16v from "../images/Module16v/image.jpg"
// //++++++++++++++++++++++++++++++++++

// export default props => (
//   <Layout>
//     <Module16v
//       theme={{
//         //---------------------LayoutBackground
//         background: "transparent",
//         backgroundImage: false,
//         backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
//         backgroundPosition: "center top",
//         backgroundSize: "100% 100%",
//         blendMode: `screen, difference, lighten`,
//         //---------------------------
//         video: true,
//         shadow: false,
//         shadowColor: `34.3px 62.5px 125px -25px rgba(50, 50, 93, 0.1),
//     20.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)`,
//         skew: "0.00rad",
//         reverseSectionOrder: false,

//         colors: {
//           title: "#337AC8",
//           text: "#525f7f",
//         },

//         buttons: {
//           display: true,
//           left: {
//             background: "#8f6ed5",
//             hover: "#a78ce9",
//             color: "#fff",
//           },
//           right: {
//             background: "#fff",
//             hover: "",
//             color: "#6772e5",
//           },
//         },
//       }}
//       data={{
//         title: "Influencer Marketing Services",
//         text: `Influencer marketing is a marketing fad that is going to be relevant for some time to come. When executed with a planned strategy, it can reach new audiences, generate brand awareness and drives quality leads. This is where our influencer agency will be there to assist.  `,

//         //Buttons
//         textLeft: "",
//         linkLeft: "https://www.w3schools.com",

//         textRight: "",
//         linkRight: "https://www.w3schools.com",
//       }}
//       images={{
//         icon16v,
//         icon16vAlt: "",
//         videoPoster,
//         videoPosterAlt: "",
//         image16v,
//         image16vAlt: "",
//       }}
//       videos={{
//         sampleVideo,
//         playIcon,
//         sample,
//         sample2,
//       }}
//     />
//     <Module10
//       data={{
//         title: "Influencer Marketing Services",
//         subtitle: `We provide an all-round suite of influencer promotional services that are beneficial for brands: `,
//         //------------------Left Section
//         title1: "Influencer Relations",
//         text1: {
//           link: {
//             before: "",
//             url: "http://www.google.com",
//             text: "",
//             after: `We are more than just an influencer agency. Our team builds key relationships with rising stars and industry leaders, subject matter experts, thought leaders and future brand advocates `,
//           },
//         },
//         title2: "Influencer Content",
//         text2: {
//           link: {
//             before: "",
//             url: "http://www.google.com",
//             text: "",
//             after: `For certain niches, the participation of influencers is a necessity. When trying to pick the correct influencer, It is not always just a numbers game (the amount of likes they have). The strategic approach of picking the right individual and having them execute in a meaningful way is the art behind a successful influencer campaign. This is the foundation behind our influencer marketing services.`,
//           },
//         },
//         title3: "Business to Business (B2B) Influencer-based Campaigns",
//         text3: {
//           link: {
//             before: "",
//             url: "http://www.google.com",
//             text: "",
//             after: `With our influencer outreach services, we can create awareness, buzz and steady engagement around your service or product.`,
//           },
//         },
//         //------------------Right Section
//         box: {
//           title: "Order Now!",
//           text: {
//             before: "Now that you know the",
//             italic: "full-scale benefits",
//             after: ` of influencer marketing, are you ready to take the first step? Do away with the hassle of finding influencers and launching campaigns. Every influencer campaign is different because every Company has different needs. Our influencer marketing services are formatted around one thing: Cultivating Results for our clients.`,
//             button: "Order Now",
//             link: "http://www.google.com",
//           },
//         },
//       }}
//       theme={{
//         heading: false,
//         backgroundLayout: false,
//         reverseOrder: false,
//         //---------------------LayoutBackground
//         background: "#eee",
//         backgroundImage: false,
//         backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
//         backgroundPosition: "center top",
//         backgroundSize: "100% 100%",
//         blendMode: `screen, difference, lighten`,
//         //---------------------------

//         colors: {
//           titles: "#204E86",
//           subtitle: "#337AC8",
//           texts: "#676A6D",
//           topBackgroundBoxRight: "#fa9a91",
//           links: "#6772e5",
//           boxTitle: "#337AC8",
//         },

//         button: {
//           text: "#fff",
//           background: "#337AC8",
//           hoverText: "#337AC8",
//           hoverBackground: "#BDE0F7",
//         },
//       }}
//       images={{
//         icon1,
//         icon2,
//         icon3,
//         imageBox,
//       }}
//     />
//     <Module7a
//       theme={{
//         reverseOrderThirdSection: true,
//         //---------------------LayoutBackground
//         background: "#fff",
//         backgroundImage: false,
//         backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
//         backgroundPosition: "center top",
//         backgroundSize: "100% 100%",
//         blendMode: `screen, difference, lighten`,
//         //---------------------------
//         colors: {
//           title: "#32325d",
//           text: "#525f7f",
//           titleLeftBox: "#57c3f0",
//           shadowColor: "rgba(50, 50, 93, 0.9)",
//           shadow: true,
//         },
//         skew: false,
//         skewImage: ".312rad",
//         borderTop: false,
//       }}
//       data={{
//         title3: "How can an Influencer Marketing Agency create Brand Value?",
//         //-------------------------RightContent
//         text: {
//           p1: `Influencer marketing is a marketing fad that is going to be relevant for some time to come. When executed with a planned strategy, it can reach new audiences, generate brand awareness and drives quality leads. This is where our influencer agency will be there to assist.
//                 `,
//           p2: `An influencer marketing agency help brands and companies find new markets while establishing brand affinity via partnerships and authentic content. The influencer marketing strategy is still developing and a comparatively new avenue - which in our opinion makes it even more exciting. There is tremendous room for creativity and innovation in the space which allows for multiple opportunities to create unique and long lasting connections between brands and audiences.`,

//           p3: `Influencer marketing management companies help develop bespoke strategies to meet goals and growth projections of businesses. They also help circumvent common pitfalls and deliver desired results.`,
//           link1: {
//             url: "http://www.google.com",
//             text: "marketplaces",
//           },
//           between1: "and",
//           link2: {
//             url: "http://www.google.com",
//             text: "platforms",
//           },
//           between2: "all over the world.",
//           link3: {
//             url: "#features-list",
//             text: " See the full list of Connect features.",
//           },
//           after: ``,
//         },
//       }}
//       images={{
//         section3Title,
//         section3TitleAlt: "",
//         backgroundImg,
//       }}
//     />
//     <Module7
//       theme={{
//         reverseOrderFirstSection: false,
//         //---------------------LayoutBackground
//         background: "#fff",
//         backgroundImage: false,
//         backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
//         backgroundPosition: "center top",
//         backgroundSize: "100% 100%",
//         blendMode: `screen, difference, lighten`,
//         //---------------------------
//         colors: {
//           title: "#32325d",
//           text: "#525f7f",
//           titleLeftBox: "#57c3f0",
//           shadowColor: "rgba(50, 50, 93, 0.9)",
//           shadow: true,
//         },
//         borderBottom: false,
//       }}
//       data={{
//         //Section1
//         title1: "How it Works",

//         //-------------------------LeftContent
//         bulletList: {
//           title:
//             "We offer the following with our influencer marketing services",
//           item1: "Creative approaches with the influencers’ influence",
//           item2: "Handpicked influencers dependent on the nature of the brand",
//           item3: "Crafting the right audience size for the desired result",
//           item4:
//             "Proper pieces in place for multiple points of campaign analytics",
//           item5: "Change of approach based off a/b campaign testing",
//           item6: "",
//         },

//         //-------------------------RightContent
//         paragraph1: {
//           text: {
//             //Text before link
//             before: "If you’re running a multi-sided ",
//             link1: {
//               url: "https://www.w3schools.com",
//               text: "marketplace",
//             },
//             //Text in between links
//             between: "or",
//             link2: {
//               url: "https://www.w3schools.com",
//               text: "platform",
//             },
//             //Text after links
//             after:
//               ", there’s no doubt you’re wrestling with payments compliance issues such as card network rules, money transmission, KYC, and tax reporting. Connect makes these burdens easier to manage by shifting some of the most onerous obligations to Stripe, letting you stay focused on your product and spend less time on compliance related tasks.",
//           },
//         },
//         paragraph2: {
//           text: `Under the hood, Connect is powered by secure credit card data
//       tokenization to help you meet PCI obligations, contains
//       monitoring and verification systems to help you with KYC needs
//       and tax obligations, and leverages Stripe’s money transmission
//       licenses in the U.S. as well as European e-money
//       authorization.`,
//         },
//       }}
//       images={{
//         //Section1
//         section1Title,
//         section1TitleAlt: "",
//         checkList,
//         checkListAlt: "",

//         //Styles.js
//         flagIconsImg,
//         dashboardImg,
//       }}
//     />
//     <Module3
//       data={{
//         title1: "What is the cost of a typical influencer marketing campaign?",
//         text1:
//           "Be it a local influencer marketing agency or a global influencer agency, their rates will always depend on a brand name, market value and type of influencers hired. Thus, there is no exact benchmark for charges as a result. It all depends on the type of campaign.",

//         title2: "Is influencer marketing advisable for all the brands?",
//         text2:
//           "The marketing endeavors are advisable if the target audience is on social media and uses it on a daily basis. Some marketing campaigns are more challenging than others, but when executed properly, it can be a runaway success. An influencer marketing agency can advise you whether this marketing avenue is suitable for your business or goals.",

//         title3:
//           "How often are influencer posts necessary on a social media platform?",
//         text3:
//           "This depends on the platform on which an influencer is using. For instance, the frequency of posts on Twitter is comparatively higher than on YouTube. Twitter posts might be 1 to 15 a day, while YouTube videos might be only 1 to 4 a month. Categories also matter in this regard. An influencer marketing agency first establishes the nature of the business and then decides on a viable platform suitable for the business.",
//       }}
//       theme={{
//         //---------------------LayoutBackground
//         background: "#fff",
//         backgroundImage: false,
//         backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
//         backgroundPosition: "center top",
//         backgroundSize: "100% 100%",
//         blendMode: `screen, difference, lighten`,
//         //---------------------------
//         colors: {
//           title: "#32325d",
//           cardText: "#32325d",
//         },
//       }}
//       images={{
//         m3Icon1,
//         m3Icon2,
//         m3Icon3,

//         m3Icon1alt: "alt text 1",
//         m3Icon2alt: "alt text 2",
//         m3Icon3alt: "alt text 3",
//       }}
//     />{" "}
//   </Layout>
// )

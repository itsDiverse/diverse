import React from "react"

import { Layout } from "../components"
import { QuadBox, Module8 } from "../components/widgets"

//import images QuadBox ++++++++++++
import diverseLogo from "../images/QuadBox/diverseLogo.svg"
import imageQuadBox1 from "../images/QuadBox/box1.svg"
import imageQuadBox2 from "../images/QuadBox/box2.svg"
import imageQuadBox3 from "../images/QuadBox/box3.svg"
import imageQuadBox4 from "../images/QuadBox/box4.svg"
//++++++++++++++++++++++++++++++++++++

//import images Module 8 +++++++++++++
import titleImg from "../images/Module8/img1.svg"
import logoBox from "../images/Module8/docusign.svg"
import rightImage from "../images/Module8/imgRight.png"
import imageBox from "../images/Module8/imgRight.png"
import imageBoxLeft from "../images/Module8/imageBox.jpg"
//++++++++++++++++++++++++++++++++++++

export default props => (
  <Layout>
    <QuadBox
      data={{
        title: "Lorem Ipsum",
        subtitle: "Excepteur laboris est commodo velit vol",
        box1: {
          title: "Box111",
          text: `We develop multi-channel sales processes to help businesses
          attract, close, and retain customers.`,
        },
        box2: {
          title: "Box2",
          text: `We develop multi-channel sales processes to help businesses
          attract, close, and retain customers.`,
        },
        box3: {
          title: "Box3",
          text: `We develop multi-channel sales processes to help businesses
          attract, close, and retain customers.`,
        },
        box4: {
          title: "Box4",
          text: `We develop multi-channel sales processes to help businesses
          attract, close, and retain customers.`,
        },
      }}
      theme={{
        heading: true,
        headingLogo: true,
        colors: {
          title: "",
          subtitle: "",
          boxTitle: "rgb(94, 94, 94)",
          boxText: " rgb(134, 134, 134)",
          background: "#fff",
          backgroundBox: "#ffffff",
          backgroundLeftSkew: "#30212114",
        },
        shadow: true,
      }}
      images={{
        diverseLogo,
        imageQuadBox1,
        imageQuadBox1Alt: "",
        imageQuadBox2,
        imageQuadBox2Alt: "",
        imageQuadBox3,
        imageQuadBox3Alt: "",
        imageQuadBox4,
        imageQuadBox4Alt: "",
      }}
    />
    <Module8
      data={{
        title: "Loremmm ipsum dolor sit amet",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //-------------------------TopLeftContent-Box
        leftBox: {
          text: {
            //Text with color
            before: "“We recovered",
            color: {
              color: "#3ecf8e",
              text: "12% of revenue",
              after: "through",
            },
            bold: "Stripe Billing’s automatic card updater",
            after: "in 2017.",
          },
        },
        //-------------------------TopRightContent
        rightText: {
          title: "Reduce declined payments by up to 40%",
          text: `Nearly a quarter of churn is caused by missed payments or declined
        cards. In 2017, Stripe’s recovery tools reduced payment declines
        for users by 45% on average and increased revenue by 10% on
        average.`,
          title2: "Smart retry logic",
          text2: `Stripe uses machine learning algorithms that train on data
        from across the Stripe network to optimize retry logic and
        minimize failed payments.`,
          title3: " Payment reminders and overdue notices",
          text3: `Maximize your chances of getting paid with prebuilt email
        reminders for missed or overdue payments.`,
        },
        //-------------------------BottomLeftContent
        leftText: {
          title: "Optimize the customer lifecycle",
          text: `Use Stripe as a system of record for the customer lifecycle:
        manage important events such as automatically provisioning
        services for new subscribers or sending reminders for renewals.`,
          title2: "Webhooks",
          text2: `Automatically notify other systems of lifecycle events,
        including new subscriptions, payments, or cancellations.`,
          title3: "Billing proration",
          text3: `Stripe automatically prorates billing when any plan changes
      occur.`,
          title4: "Renewal rules",
          text4: `Configure rules to automatically or manually renew
      customers’ subscriptions..`,
        },
      }}
      theme={{
        heading: true,
        reverseOrderFirstSection: false,
        reverseOrderSecondSection: false,
        //-----LeftContentBox
        contentBox: false,
        contentImage: true,

        colors: {
          titles: "#32325d",
          texts: "#525f7f",
          secondary: "#ff9b7c",
          shadow: true,
          shadowColor: "rgba(50, 50, 93, 0.9)",
        },
        skewFirstSection: true,
        skewSecondSection: true,
      }}
      images={{
        //------------BoxContent
        titleImg,
        titleImgAlt: "logo",
        logoBox,
        logoBoxAlt: "",
        //------------ImageBox
        imageBoxLeft,
        imageBoxLeftAlt: "",
        rightImage,
        rightImageAlt: "",
      }}
    ></Module8>{" "}
  </Layout>
)

import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  margin: 4rem;
  max-width: 1200px;
`

const Title = styled.h3``

const MainTitle = styled.h2``

const Description = styled.p`
  margin-top: -15px;
  margin-bottom: 15px;
`

export const Privacy = () => {
  return (
    <Wrapper>
      <Container>
        <MainTitle>Privacy Policy</MainTitle>
        <Title>Introduction</Title>
        <Description>
        Welcome to Diverse Marketing LLC. We are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your information when you visit our
        website. Please read this Privacy Policy carefully. If you do not agree with the terms of this 
        Privacy Policy, please do not access the site.
        </Description>
        {""}
        <MainTitle>Information We Collect</MainTitle>
        <Description>
        We may collect information about you in a variety of ways. The information we may collect on 
        the site includes:
        </Description>
        {""}
        <Title>Personal Data</Title>
        <Description>
          Personally identifiable information, such as your name, shipping address, email address, and 
          telephone number, and demographic information, such as your age, gender, hometown, and 
          interests, that you voluntarily give to us when you register with the site or when you choose to 
          participate in various activities related to the site, such as online chat and message boards.
        </Description>
        {""}
        <Title>Derivative Data</Title>
        <Description>
          Information our servers automatically collect when you access the site, such as your IP address, 
          your browser type, your operating system, your access times, and the pages you have viewed 
          directly before and after accessing the site.
        </Description>
        {""}
        <Title>Financial Data</Title>
        <Description>
          Financial information, such as data related to your payment method (e.g., valid credit card 
          number, card brand, expiration date) that we may collect when you purchase, order, return, 
          exchange, or request information about our services from the site
        </Description>
        {""}
        <Title>Data From Social Networks</Title>
        <Description>
          User information from social networking sites, such as Facebook, Google+, Instagram, including
          your name, your social network username, location, gender, birth date, email address, profile 
          picture, and public data for contacts, if you connect your account to such social networks.
        </Description>
        {""}
        <Title>Mobile Device Data</Title>
        <Description>
          Device information, such as your mobile device ID, model, and manufacturer, and information 
          about the location of your device, if you access the site from a mobile device
        </Description>
        {""}
        <MainTitle>Use of Your Information</MainTitle>
        <Description>
          Having accurate information about you permits us to provide you with a smooth, efficient, and 
          customized experience. Specifically, we may use information collected about you via the site to:
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions and send related information, including purchase confirmations
                and invoices.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the site.</li>
            <li>Increase the efficiency and operation of the site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
            <li>Request feedback and contact you about your use of the site.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
          </ul>
        </Description>
        {""}
        <MainTitle>SMS Communications</MainTitle>
        <Title>Opt-In</Title>
        <Description>
          By providing your mobile phone number, you agree to receive SMS messages from Diverse 
          Marketing LLC. These messages may include updates about your account, transactions, 
          promotional offers, and other information related to our services. Standard message and data 
          rates may apply.
        </Description>
        {""}
        <Title>Opt-Out</Title>
        <Description>
          You can opt out of receiving SMS messages at any time by replying "STOP" to any message you
          receive from us. After opting out, you will no longer receive SMS messages from Diverse 
          Marketing LLC, but you may still receive emails and other forms of communication if you have 
          opted into those.
        </Description>
        {""}
        <Title>Frequency</Title>
        <Description>
          The frequency of SMS messages will vary based on your interactions and the nature of our 
          communications with you. We strive to keep the number of messages reasonable and relevant to 
          your interests.
        </Description>
        {""}
        <MainTitle>Disclosure of Your Information</MainTitle>
        <Description>
          We do not share any information we have collected about you with third parties.
        </Description>
        {""}
        <MainTitle>Security of Your Information</MainTitle>
        <Description>
          We use administrative, technical, and physical security measures to help protect your personal 
          information. While we have taken reasonable steps to secure the personal information you 
          provide to us, please be aware that despite our efforts, no security measures are perfect or 
          impenetrable, and no method of data transmission can be guaranteed against any interception or 
          other types of misuse.
        </Description>
        {""}
        <MainTitle>Policy for Children</MainTitle>
        <Description>
          We do not knowingly solicit information from or market to children under the age of 13. If we 
          learn that we have collected personal information from a child under age 13 without verification 
          of parental consent, we will delete that information as quickly as possible. If you become aware 
          of any data we have collected from children under age 13, please contact us at [contact email].
        </Description>
        {""}
        <MainTitle>Changes to This Privacy Policy</MainTitle>
        <Description>
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to 
          our practices or for other operational, legal, or regulatory reasons. Any changes or modifications 
          will be effective immediately upon posting the updated Privacy Policy on the site, and you waive
          the right to receive specific notice of each such change or modification.
        </Description>
        {""}
        <MainTitle>Contact Us</MainTitle>
        <Description>
          If you have any questions about this Privacy Policy, please contact us at:
        </Description>
        <Description>
          Diverse Marketing LLC
        </Description>
        <Description>
          <a
            style={{ textDecoration: "none", color: "#195bb6" }}
            href={"mailto: office@meetdiverse.com"}
          >
            office@meetdiverse.com
          </a>
        </Description>
        <Description>
          833-DIVERSE
        </Description>
      </Container>
    </Wrapper>
  )
}

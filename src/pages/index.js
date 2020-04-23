import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import QuadBox from '../components/widgets/quadBox'

import Module3 from '../components/widgets/module3'

import Module5 from '../components/widgets/module5'

import Module6 from '../components/widgets/module6'
import Module6Image1 from "../images/template/submit.svg"
import Module6Image2 from '../images/template/incorporation.svg'
import Module6Image3 from '../images/template/tax-id.svg'
import Module6Image4 from '../images/template/documents.svg'

import Module7 from '../components/widgets/module7'
import Module7icon from "../images/template/compliance.svg"
import Module7icon2 from "../images/template/platform-management.svg"
import Module7icon3 from "../images/template/international-support.svg"

import Module8 from '../components/widgets/module8'
import ContentHeader from '../components/widgets/contentHeader'
import diverseSymbol from "../images/diverseSymbol.svg"
import diverseSymbolWhite from "../images/diverseSymbolWhite.svg"
import headerVideo from "../videos/hanzAnimationTest.mp4"

import Module9 from '../components/widgets/module9'

import Module10 from '../components/widgets/module10'

import Module11 from '../components/widgets/module11'
import Module11image1 from "../images/template/sharing.svg"
import Module11image2 from "../images/template/lyft.png"
import Module11image3 from "../images/template/route.svg"

import Module11a from '../components/widgets/module11a'
import Module11aimage1 from "../images/template/sharing.svg"
import Module11aimage2 from "../images/template/lyft.png"
import Module11aimage3 from "../images/template/route.svg"

import Module12 from '../components/widgets/module12'

import Module13 from '../components/widgets/module13'

import Module18 from '../components/widgets/module18'

import Module20 from '../components/widgets/module20'

import Module21 from '../components/widgets/module21'

const IndexPage = () => {
  return (
    <div>
        <Helmet>
          <script src="js/jquery.js"></script>
          <script src="js/jquery.meow.js"></script>
        </Helmet>
      
      <Layout>

        <Module21 />

        <Module20 />

        

        <Module13 />

        <Module12
        
        
        />
        <Module11a 
        image1={Module11aimage1}
        image2={Module11aimage2}
        image3={Module11aimage3}
        />

        <Module11 
          boxHeight='auto'
          image1={Module11image1}
          image2={Module11image2}
          image3={Module11image3}
        />
        <ContentHeader 
          heading='Proxima Nova'
          description='Whether you’re looking to bill customers on a recurring basis, set up a marketplace, or simply accept payments, do it all with a fully integrated, global platform that can support online and in-person payments.'
          background=''
          headerVideo={headerVideo}
          button1title='Start Now'
          button1style='Dark'
          button2title='Contact Sales'
          button2style='Light'
        />

        
        
        <Module3

        />

        <Module5
          box1title='Explore the docs'
          box1text='You can use Connect Payouts through the Dashboard or via the API.'
          box1link='#'

          box2title='Pricing'
          box2text='Starting at 0.25% of payout volume; per-account fee may apply.'
          box2link='#'

          title='Ready to get started?'
          text='Get in touch or create an account.'
          smallText='Connect Payouts is available for platforms based in the US.'

          button1color='#3ecf8e'
          button1textColor='#ffffff'
          button1title='Contact Sales'

          button2color=''
          button2textColor=''
          button2title='Create Account'

        />

        <Module6
          heading='WHATS’S THE PROCESS?'
          text='With Stripe Atlas, your company can be set up within days. We help with all the paperwork.'
          
          image1={Module6Image1}
          step1text='Submit your application'
          step1color='#e39f48'
          
          image2={Module6Image2}
          step2text='Sign documents and access your bank account'
          step2color='#e39f48'

          image3={Module6Image3}
          step3text='Your company is formed in Delaware'
          step3color='#e39f48'
          
          image4={Module6Image4}
          step4text='Receive a tax ID number from the IRS'
          step4color='#e39f48'
        />
        <Module7

        icon={Module7icon}
        title='COMPLIANCE'
        box1title='Lawyer friendly'
        heading2='Platform management'

        icon2={Module7icon2}

        icon3={Module7icon3}

        
        />
        
        <QuadBox 
          boxHeight='auto'
          headingImage={diverseSymbol}
          heading='Seamless integrations with finance software' 
          blurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
          box1title='Expensify'
          box1blurb='An application for expense management, receipt scanning, and business travel.'
          box1Color='#337AC8'
          image1={diverseSymbolWhite}
          box2title='Quickbooks'
          box2blurb='Manage your accounting, get invoices paid, accept payments, and much more.'
          box2Color='#337AC8'
          image2={diverseSymbolWhite}
          box3title='Xero'
          box3blurb="Easy-to-use, cloud-based accounting platform for small businesses and their advisors."
          box3Color='#337AC8'
          image3={diverseSymbolWhite}
          box4title='Bench'
          box4blurb='A team of bookkeepers, and powerful financial reporting software with zero learning curve.'
          box4Color='#337AC8'
          image4={diverseSymbolWhite}
          
         />

         <Module8
         
          textColor1='#3ecf8e'
          textColor2='#32325d'
         />

         <Module9
            title='The new payments stack'
            titleDesc='Stripe combines a payments platform with applications that put revenue data at the heart of business operations.'
            
            subTitle1='Applications'
            title1Desc='Sitting atop our payments platform are applications to manage revenue, prevent fraud, and expand internationally.'

            subTitle2='Payments platform'
            title2Desc='At our core is a powerful payments engine that makes moving money easy.'

            subTitle3='Infrastructure'
            title3Desc='Our cloud-based infrastructure provides reliability, scalability, and security.'
         />


         <Module10 />

         


  
        
       
      </Layout>
    </div>
  )
}

export default IndexPage
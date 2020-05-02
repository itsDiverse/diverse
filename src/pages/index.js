import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../navbar/index'

/* ----------------- QUAD BOX -----------------*/
import QuadBox from '../components/widgets/quadBox'

/* ----------------- MODULE 1 -----------------*/
import Module1 from '../components/widgets/module1'

import Module1image1 from "../images/template/amazon.svg"
import Module1image2 from '../images/template/booking_com.svg'
import Module1image3 from '../images/template/docusign.svg'
import Module1image4 from '../images/template/instacart.svg'
import Module1image5 from '../images/template/peleton.svg'
import Module1image6 from '../images/template/shopify.svg'
import Module1image7 from '../images/template/unicef.svg'

/* ----------------- MODULE 1a -----------------*/
import Module1a from '../components/widgets/module1a'

import Module1aimage1 from "../images/template/amazon.svg"
import Module1aimage2 from '../images/template/booking_com.svg'
import Module1aimage3 from '../images/template/docusign.svg'
import Module1aimage4 from '../images/template/instacart.svg'
import Module1aimage5 from '../images/template/peleton.svg'
import Module1aimage6 from '../images/template/shopify.svg'
import Module1aimage7 from '../images/template/unicef.svg'



/* ----------------- MODULE 3 -----------------*/
import Module3 from '../components/widgets/module3'

/* ----------------- MODULE 5 -----------------*/
import Module5 from '../components/widgets/module5'

/* ----------------- MODULE 6 -----------------*/
import Module6 from '../components/widgets/module6'
import Module6Image1 from "../images/template/submit.svg"
import Module6Image2 from '../images/template/incorporation.svg'
import Module6Image3 from '../images/template/tax-id.svg'
import Module6Image4 from '../images/template/documents.svg'

/* ----------------- MODULE 7 -----------------*/
import Module7 from '../components/widgets/module7'
import Module7icon from "../images/template/compliance.svg"
import Module7icon2 from "../images/template/platform-management.svg"
import Module7icon3 from "../images/template/international-support.svg"

/* ----------------- MODULE 8 -----------------*/
import Module8 from '../components/widgets/module8'
import ContentHeader from '../components/widgets/contentHeader'
import diverseSymbol from "../images/diverseSymbol.svg"
import diverseSymbolWhite from "../images/diverseSymbolWhite.svg"
import headerVideo from "../videos/hanzAnimationTest.mp4"

/* ----------------- MODULE 9 -----------------*/
import Module9 from '../components/widgets/module9'

/* ----------------- MODULE 10 -----------------*/
import Module10 from '../components/widgets/module10'

/* ----------------- MODULE 11 -----------------*/
import Module11 from '../components/widgets/module11'
import Module11image1 from "../images/template/sharing.svg"
import Module11image2 from "../images/template/lyft.png"
import Module11image3 from "../images/template/route.svg"

/* ----------------- MODULE 11a -----------------*/
import Module11a from '../components/widgets/module11a'
import Module11aimage1 from "../images/template/sharing.svg"
import Module11aimage2 from "../images/template/lyft.png"
import Module11aimage3 from "../images/template/route.svg"

/* ----------------- MODULE 12 -----------------*/
import Module12 from '../components/widgets/module12'

/* ----------------- MODULE 13 -----------------*/
import Module13 from '../components/widgets/module13'

/* ----------------- MODULE 14 -----------------*/
import Module14 from '../components/widgets/module14'

/* ----------------- MODULE 17 -----------------*/
import Module17 from '../components/widgets/module17'

/* ----------------- MODULE 18 -----------------*/
import Module18 from '../components/widgets/module18'

/* ----------------- MODULE 19 -----------------*/
import Module19 from '../components/widgets/module19'

/* ----------------- MODULE 20 -----------------*/
import Module20 from '../components/widgets/module20'

/* ----------------- MODULE 21 -----------------*/
import Module21 from '../components/widgets/module21'

const IndexPage = () => {
  return (
    <div>
        <Helmet>
          <script src="js/jquery.js"></script>
          <script src="js/jquery.meow.js"></script>
        </Helmet>
      
      <Layout>

      <Nav />

        <Module19 />

        <Module17 />

        <Module14 />

        <Module1 
         image1={Module1image1}
         image1alt='1'
         image2={Module1image2}
         image2alt='2'
         image3={Module1image3}
         image3alt='3'
         image4={Module1image4}
         image4alt='4'
         image5={Module1image5}
         image5alt='5'
         image6={Module1image6}
         image6alt='6'
         image7={Module1image7}
         image7alt='7'
        
        />

        <Module1a 
         image1={Module1aimage1}
         image1alt='1'
         image2={Module1aimage2}
         image2alt='2'
         image3={Module1aimage3}
         image3alt='3'
         image4={Module1aimage4}
         image4alt='4'
         image5={Module1aimage5}
         image5alt='5'
         image6={Module1aimage6}
         image6alt='6'
         image7={Module1aimage7}
         image7alt='7'
        
        />

        

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

<Module21 />

<Module20 />
        
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
import React from 'react'
import Layout from '../components/layout'

import Module6 from '../components/widgets/module6'

import Module6Image1 from "../images/template/submit.svg"
import Module6Image2 from '../images/template/incorporation.svg'
import Module6Image3 from '../images/template/tax-id.svg'
import Module6Image4 from '../images/template/documents.svg'


const Page6 = () => {
    return (

        <>
       

        <Layout>
            
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

        </Layout>

        
        
        </>

          )
}

export default Page6
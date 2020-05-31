import React from 'react'
import Layout from '../components/layout'

import Module5 from '../components/widgets/module5'

import Module5image1 from "../images/template/submit.svg"
import Module5image2 from "../images/template/incorporation.svg"


const Page5 = () => {
    return (

        <>
       

        <Layout>
            
            <Module5
            box1title='Explore the docs'
            box1text='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            box1link='#'
            image1={Module5image1}
            image1alt='image 1'

            box2title='Pricing'
            box2text='Starting at 0.25% of payout volume; per-account fee may apply.'
            box2link='#'
            image2={Module5image2}
            image2alt='image 2'

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

        </Layout>

        
        
        </>

          )
}

export default Page5
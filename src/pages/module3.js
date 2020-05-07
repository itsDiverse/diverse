import React from 'react'
import Layout from '../components/layout'

import Module3 from '../components/widgets/module3'

import Module3image1 from "../images/template/submit.svg"
import Module3image2 from "../images/template/incorporation.svg"
import Module3image3 from "../images/template/tax-id.svg"


const Page3 = () => {
    return (

        <>
       

        <Layout>
            
            <Module3

            image1={Module3image1}
            image1alt='image 1'
            title1='Get started instantly'
            text1='All you need to apply is a Stripe account—no paperwork or personal guarantee required. Get up and running with a virtual card in minutes.'
            
            image2={Module3image2}
            image2alt='image 2'
            title2='Do it all again'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
            image3={Module3image3}
            image3alt='image 3'
            title3='consectetur adipiscing elit'
            text3='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Placerat orci nulla pellentesque dignissim enim sit amet. In ornare quam viverra orci sagittis eu volutpat. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Congue quisque egestas diam in arcu cursus euismod quis. Pretium lectus quam id leo in vitae. Massa tempor nec feugiat nisl pretium fusce id. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nisi scelerisque eu ultrices vitae auctor eu. Convallis a cras semper auctor neque vitae tempus. Sit amet cursus sit amet dictum sit amet. Et netus et malesuada fames ac turpis egestas. Malesuada pellentesque elit eget gravida cum sociis. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.'

            />

        </Layout>

        
        
        </>

          )
}

export default Page3
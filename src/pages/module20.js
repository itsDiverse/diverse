import React from 'react'
import Layout from '../components/layout'

import Module20 from '../components/widgets/module20'

import Module20checkbox from "../images/template/submit.svg"
import Module20Icon from "../images/template/submit.svg"

import Module20Image1 from '../images/template/related-payments.jpg'
import Module20Image2 from '../images/template/session.jpg'
import Module20Icon4 from '../images/template/documents.svg'
import Module20Icon5 from '../images/template/documents.svg'
import Module20Icon6 from '../images/template/documents.svg'





const Page20 = () => {
    return (

        <>
       

        <Layout>
            
            <Module20

            title='Praesent tincidunt consequat fermentum.'
            text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue. Proin scelerisque sapien vitae sagittis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '

            image1={Module20Image1}
            image2={Module20Image2}
            
            title1='Column 1 title'
            text1='Donec lacinia ultrices neque, commodo congue tortor fringilla nec'

            title2='Column 2 title'
            text2='Donec lacinia ultrices neque, commodo congue tortor fringilla nec'

           

            />

        </Layout>
    
        
        </>

          )
}

export default Page20
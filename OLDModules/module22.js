import React from 'react'
import Layout from '../components/layout'


import Module22 from '../components/widgets/module22'

import Module21checkbox from "../images/template/bulletTick.svg"
import Module21Icon from "../images/template/submit.svg"

import Module21Image1 from '../images/template/related-payments.jpg'
import Module21Image2 from '../images/template/session.jpg'
import Module21line from '../images/template/line.svg'
import Module21Icon5 from '../images/template/documents.svg'
import Module21Icon6 from '../images/template/documents.svg'





const Page22 = () => {
    return (

        <>



        <Layout>
            
            <Module22

            title='Praesent tincidunt consequat fermentum.'
            text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue. Proin scelerisque sapien vitae sagittis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
            linkText='Proin scelerisque sapien vitae sagittis blandit.'
            linkURL='#'
            bullet={Module21checkbox} 
            line={Module21line}


            /*----------------Section 1-----------------*/

            display1='' /* inline css property for display. add 'none' to disable */
            icon1={Module21Icon}
            bulletHeading1='Praesent tincidunt consequat fermentum'
            
            bulletPoint1='vitae sagittis blandit'
            
            bulletPoint2='Pellentesque habitant morbi'
            bulletPoint2display='' /* inline css property for display. add 'none' to disable */
            
            bulletPoint3=' Proin scelerisque'
            bulletPoint3display='' /* inline css property for display. add 'none' to disable */
            
            bulletPoint4=' Aenean ac tellus'
            bulletPoint4display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint5='molestie dui.'
            bulletPoint5display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint6='tincidunt consequat'
            bulletPoint6display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint7='augue. Proin scelerisqu'
            bulletPoint7display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint8='Aenean ac tellus in urna porta faucibus eget eu augue.'
            bulletPoint8display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint9='fames ac'
            bulletPoint9display='none' /* inline css property for display. add 'none' to disable */
            
            bulletPoint10='malesuada fames ac turpis egestas.'
            bulletPoint10display='none' /* inline css property for display. add 'none' to disable */


           

            />

        </Layout>
    
        
        </>

          )
}

export default Page22
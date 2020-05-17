import React from 'react'
import Layout from '../components/layout'

import Module19 from '../components/widgets/module19'

import Module19checkbox from "../images/template/submit.svg"
import Module19Icon from "../images/template/submit.svg"

import Module19Icon2 from '../images/template/incorporation.svg'
import Module19Icon3 from '../images/template/tax-id.svg'
import Module19Icon4 from '../images/template/documents.svg'
import Module19Icon5 from '../images/template/documents.svg'
import Module19Icon6 from '../images/template/documents.svg'





const Page19 = () => {
    return (

        <>
       

        <Layout>
            
            <Module19

            title='Praesent tincidunt consequat fermentum.'
            text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue. Proin scelerisque sapien vitae sagittis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
            icon={Module19Icon}
            checkbox={Module19checkbox}
            
            column1title='Column 1 title'
            column1text='Donec lacinia ultrices neque, commodo congue tortor fringilla nec'

            column2title='Column 2 title'
            column2text='Donec lacinia ultrices neque, commodo congue tortor fringilla nec'

            /*----------------BOX 1-----------------*/

            
            icon1={Module19Icon}
            icon1alt='icon 1'
            box1title='Donec lacinia ultrices neque, commodo congue tortor fringilla nec.'
            box1text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue.'
            box1link='#'
            box1linkText='Box 1 link text'

            /*----------------BOX 2-----------------*/

            
            icon2={Module19Icon}
            icon2alt='icon 2'
            box2title='Donec lacinia ultrices neque, commodo congue tortor fringilla nec.'
            box2text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue.'
            box2link='#'
            box2linkText='Box 2 link text'

            /*----------------BOX 3-----------------*/

            
            icon3={Module19Icon}
            icon3alt='icon 3'
            box3title='Donec lacinia ultrices neque, commodo congue tortor fringilla nec.'
            box3text='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue.'
            box3link='#'
            box3linkText='Box 3 link text'


        
          

      
            


            

            />

        </Layout>
    
        
        </>

          )
}

export default Page19
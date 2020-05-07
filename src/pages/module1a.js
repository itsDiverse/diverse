import React from 'react'
import Layout from '../components/layout'


/* ----------------- MODULE 1a -----------------*/
import Module1a from '../components/widgets/module1a'

import Module1aimage1 from "../images/template/amazon.svg"
import Module1aimage2 from '../images/template/booking_com.svg'
import Module1aimage3 from '../images/template/docusign.svg'
import Module1aimage4 from '../images/template/instacart.svg'
import Module1aimage5 from '../images/template/peleton.svg'
import Module1aimage6 from '../images/template/shopify.svg'
import Module1aimage7 from '../images/template/unicef.svg'

const thirdPage = () => (
  <>  
      <Layout>

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

         text='Here is a bunch of <br /> '
        
        />

    </Layout>
         </>
         )
         
         export default thirdPage
         
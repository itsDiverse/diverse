import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


/* ----------------- MODULE 1 -----------------*/
import Module1 from '../components/widgets/module1'

import Module1image1 from "../images/template/amazon.svg"
import Module1image2 from '../images/template/booking_com.svg'
import Module1image3 from '../images/template/docusign.svg'
import Module1image4 from '../images/template/instacart.svg'
import Module1image5 from '../images/template/peleton.svg'
import Module1image6 from '../images/template/shopify.svg'
import Module1image7 from '../images/template/unicef.svg'


const thirdPage = () => (
  <>  
      <Layout>

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

    </Layout>
         </>
         )
         
         export default thirdPage
         
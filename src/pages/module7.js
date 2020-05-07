import React from 'react'
import Layout from '../components/layout'

import Module7 from '../components/widgets/module7'
import Module7icon from "../images/template/compliance.svg"
import Module7icon2 from "../images/template/platform-management.svg"
import Module7icon3 from "../images/template/international-support.svg"


const Page7 = () => {
    return (

        <>
       

        <Layout>
            
            <Module7

            icon={Module7icon}
            title='COMPLIANCE'
            box1title='Lawyer friendly'
            heading2='Platform management'

            icon2={Module7icon2}

            icon3={Module7icon3}

            />

       </Layout>

        </>

          )
}

export default Page7
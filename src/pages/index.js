import React from 'react'
import Layout from '../components/layout'
import QuadBox from '../components/widgets/quadBox'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <QuadBox 
          boxHeight='auto'
          heading='Seamless integrations with finance software' 
          blurb="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
          box1title='Expensify'
          box1blurb='An application for expense management, receipt scanning, and business travel.'
          box1Color='#14B5EA'
          box2title='Quickbooks'
          box2blurb='Manage your accounting, get invoices paid, accept payments, and much more.'
          box2Color='#14B5EA'
          box3title='Xero'
          box3blurb="Easy-to-use, cloud-based accounting platform for small businesses and their advisors."
          box3Color='#14B5EA'
          box4title='Bench'
          box4blurb='A team of bookkeepers, and powerful financial reporting software with zero learning curve.'
          box4Color='#14B5EA'
        />
  
        
       
      </Layout>
    </div>
  )
}

export default IndexPage
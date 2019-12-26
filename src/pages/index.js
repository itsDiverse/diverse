import React from 'react'
import Layout from '../components/layout'
import QuadBox from '../components/widgets/quadBox'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <QuadBox 
          boxHeight='200px 200px'
          heading='the heading works bro!' 
          blurb='and here is the lipsum!'
          box1title='A box title!'
          box1blurb='a'
          box1Color='blue'
          box2title='2a'
          box2blurb='2'
          box3title='title!'
          box3blurb='a 3rd'
          box4title='A 4th box title!'
          box4blurb='a 4th box description will go here'
        />
  
        
       
      </Layout>
    </div>
  )
}

export default IndexPage
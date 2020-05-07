import React from 'react'
import Layout from '../components/layout'

import Module10 from '../components/widgets/module10'

import Module10image from "../images/template/increment-callout-v2.jpg"




const Page10 = () => {
    return (

        <>
       

        <Layout>
            
            <Module10

                intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ante dui, quis lobortis mauris tristique ut. Suspendisse potenti. Suspendisse molestie accumsan libero sed tempus.'
                description='Integer laoreet, nibh dignissim volutpat scelerisque, sem elit cursus libero, vitae luctus magna mi eu dolor. Fusce vulputate ornare interdum. Integer dictum nisi vitae maximus bibendum. Phasellus lacinia mauris congue turpis laoreet, a malesuada tortor condimentum. Aliquam erat volutpat. Etiam ut mi vitae massa dictum luctus. Phasellus consectetur fringilla massa, in porta eros vestibulum et. Quisque nec sem leo. Maecenas nec egestas mi. Quisque quis volutpat nulla.'
                
                item1title='Nunc sit amet tellus sed diam tristique aliquam at eget diam'
                item1desc='Aliquam erat volutpat. Etiam ut mi vitae massa dictum luctus. Phasellus consectetur fringilla massa, in porta eros vestibulum et. Quisque nec sem leo. Maecenas nec egestas mi. Quisque quis volutpat nulla.'

                item2title='nibh dignissim volutpat'
                item2desc='sit amet, consectetur adipiscing elit. Donec blandit ante dui, quis lobortis mauris tristique ut. Suspendisse potenti. Suspendisse molestie accumsan libero sed tempus'

                item3title='Quisque nec sem leo. Maecenas nec egestas mi.'
                item3desc=' Integer dictum nisi vitae maximus bibendum. Phasellus lacinia mauris congue turpis laoreet, a malesuada tortor condimentum. Aliquam erat volutpat. Etiam ut mi vitae massa dictum luctus. Phasellus consectetur fringilla massa,'

                
                boxTitle=' Phasellus lacinia mauris congue turpis'
                boxDesc='Integer dictum nisi vitae maximus bibendum. Phasellus lacinia mauris congue turpis laoreet, a malesuada tortor condimentum. Aliquam erat volutpat. Etiam ut mi vitae massa dictum luctus.'
                boxImage={Module10image}
                boxImageAlt='image alt'

                buttonText='Yeah baby just press it'
                boxColor=''

            />

        </Layout>

        
        
        </>

          )
}

export default Page10
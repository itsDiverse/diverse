import React from 'react'
import Layout from '../components/layout'

import Module11a from '../components/widgets/module11a'

import Module11aimage1 from "../images/template/sharing.svg"
import Module11aimage2 from "../images/template/lyft.png"
import Module11aimage3 from "../images/template/route.svg"




const Page11a = () => {
    return (

        <>
       

        <Layout>
            
            <Module11a

                image1={Module11aimage1}
                
                title='Lorem ipsum dolor sit amet'
                text='Duis tristique, odio nec porttitor convallis, orci tortor faucibus est, vitae lobortis ex ligula et leo. Nunc ac lacus ipsum. Morbi eget iaculis urna, id consectetur sem. In dictum quis augue malesuada gravida. Donec vitae quam pharetra, dapibus sapien eget, lacinia mi. Donec condimentum congue erat, accumsan placerat ex eleifend vestibulum. Phasellus in ex laoreet, convallis lectus ac, scelerisque tellus. Phasellus ornare nisi vel euismod hendrerit. Donec tincidunt viverra dui quis ultrices. Pellentesque vel fermentum ligula, vel hendrerit dui. Cras nec lobortis dolor. Praesent posuere turpis ac orci convallis, sed ultricies nibh rutrum. Suspendisse eu scelerisque purus, tristique lacinia odio. Vivamus justo ex, pretium sit amet vulputate et, egestas quis ante. '

                boxHeight='auto'
                boxLogo={Module11aimage2}
                boxText='Vestibulum ac scelerisque odio. Fusce congue, ante ac efficitur gravida, purus lacus rutrum nulla, eget lobortis est tellus vel risus. Phasellus fermentum, ante eget eleifend vehicula, neque erat pellentesque diam, et pulvinar odio ex vitae felis. Nam cursus posuere odio a vehicula. Integer hendrerit eu mauris elementum viverra. Donec vulputate diam sit amet tincidunt consectetur. Nam luctus metus vel sapien pulvinar, sed luctus felis sagittis. Nunc venenatis egestas lorem, et porttitor sem consectetur at. Phasellus condimentum eros nec aliquam blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ante dui, placerat non quam ac, malesuada dapibus enim.'

                textLeft='Nunc at molestie dui. Aenean ac tellus in urna porta faucibus eget eu augue. Proin scelerisque sapien vitae sagittis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod turpis sit amet massa posuere, vel eleifend leo blandit. Phasellus interdum interdum mi. Cras vestibulum, risus quis mattis lacinia, ligula nibh convallis ipsum, et cursus risus nulla varius sapien. In convallis semper enim, volutpat hendrerit felis lacinia congue. Cras sed magna vitae tellus fermentum cursus nec id sem. Proin semper feugiat leo eu suscipit. Aliquam egestas in turpis ut vestibulum. Aenean in ornare ipsum. Praesent vel mattis nibh, in vehicula nisl. In hac habitasse platea dictumst. Nullam pulvinar nibh nec efficitur posuere. Ut nulla nisl, facilisis id fringilla quis, pulvinar in mauris. '
                textRight='Praesent tincidunt consequat fermentum. Praesent euismod placerat augue eget commodo. Cras maximus massa augue, commodo feugiat nisi hendrerit nec. Phasellus quis feugiat mi. Nam ultrices lectus in dui ornare porta. Phasellus eu varius ligula. Quisque molestie rutrum arcu, nec elementum turpis laoreet eget. Curabitur ullamcorper erat sapien, vel laoreet massa facilisis nec. Donec vitae quam scelerisque, dictum nibh ac, tincidunt erat. Etiam malesuada risus et enim rhoncus ullamcorper. '
                linkText='Duis tristique, odio nec porttitor convallis'
                link='#'
                image3={Module11aimage3}

            />

        </Layout>
    
        
        </>

          )
}

export default Page11a
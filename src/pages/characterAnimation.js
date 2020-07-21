import React from "react"

import { Layout } from "../components"
import { Module3, Module8, Module10, Module14 } from "../components/widgets"

//import images Module 3 +++++++++++++
import m3Icon1 from "../images/Module3/submit.svg"
import m3Icon2 from "../images/Module3/documents.svg"
import m3Icon3 from "../images/Module3/incorporation.svg"
//++++++++++++++++++++++++++++++++++++

//import images Module 8 +++++++++++++
import titleImg from "../images/Module8/img1.svg"
import logoBox from "../images/Module8/docusign.svg"
import rightImage from "../images/Module8/imgRight.png"
import imageBox from "../images/Module8/imgRight.png"
import imageBoxLeft from "../images/Module8/imageBox.jpg"
//++++++++++++++++++++++++++++++++++++

//import images Module 10 +++++++++++++
import icon1 from "../images/Module10/icon1.svg"
import icon2 from "../images/Module10/icon2.svg"
import icon3 from "../images/Module10/icon3.png"
//++++++++++++++++++++++++++++++++++++

//import images Module 14 ++++++++++
import m14imgRight from "../images/Module14/imgRight.png"
import m14Icon1 from "../images/Module14/icon1.png"
import m14Icon2 from "../images/Module14/icon2.png"
import m14Icon3 from "../images/Module14/icon1.png"
import m14Icon4 from "../images/Module14/icon1.png"
import m14Icon5 from "../images/Module14/icon2.png"
//++++++++++++++++++++++++++++++++++

export default props => (
  <Layout>

    <Module10

    data={{
      title: "Character Animation Company",
      subtitle: `We are among the best character animation company for making characterful, fun and engaging animations. Expert character animators are available to serve you.`,
      //------------------Left Section
      title1: "Industry-leading documentation",
      text1: {
        link: {
          before: "Holaaa sdfssef",
          url: "http://www.google.com",
          text: "Our documentation",
          after: `Character animation is a specialized area of the animation process, which involves bringing animated characters to life. The purpose of a Character Animator is exactly similar to that of a film or stage actor. These animated characters are often said to be "actors with a pencil" (or a mouse).`,
        },
      },
      title2: "Our online animation maker",
      text2: {
        link: {
          before: "brings life in their characters by ",
          url: "http://www.google.com",
          text: "creating them ",
          after: `with the illusion of their thoughts, emotions and unique personalities. Some animation character design is different from creature animation, which involves bringing photo-realistic animals and creatures to life.`,
        },
      },
      title3: "Want to approach an animation maker",
      text3: {
        link: {
          before: "So, here is our",
          url: "http://www.google.com",
          text: "online animation maker",
          after: `team which provides you with professionals and experienced workers to handle your order.`,
        },
      },
      //------------------Right Section
      box: {
        title: "Engineering at scale",
        text: {
          before: "We publish",
          italic: "Increment",
          after: `, an
          engineering magazine dedicated to sharing insights and
          practical advice for building and operating software systems
          at scale.`,
          button: "Visit increment",
          link: "http://www.google.com",
        },
      }

    }}

    theme={{
      heading: true,
      backgroundLayout: false,
      reverseOrder: false,
      //---------------------LayoutBackground
      background: "#fff",
      backgroundImage: false,
      backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
      backgroundPosition: "center top",
      backgroundSize: "100% 100%",
      blendMode: `screen, difference, lighten`,
      //---------------------------
  
      colors: {
        titles: "#32325d",
        subtitle: "#424770",
        texts: "#525f7f",
        topBackgroundBoxRight: "#fa9a91",
        links: "#6772e5",
        boxTitle: "#424770",
      },
  
      button: {
        text: "#fff",
        background: "#6772e5",
        hoverText: "#fff",
        hoverBackground: "#7795f8",
      },
    }}
    
    images={{
      icon1,
      icon2,
      icon3,
      imageBox,
    }}

    />
 <Module3
    data={{
      title1: "Film & Video Character Animation",
      text1:
        "This involves featuring characters animation with the story based animation. Film character animation is the collective set of animated storyboards, 2D and 3D animations, character creation and character animation.",
  
      title2: "Gaming Character Animation",
      text2:
        " if you want to     characters, in real-time! Use our animation character design to simultaneously connect multiple motion capture devices for face, body and hand animations and then edit and combine all these motions to produce the best gaming characters. ",
  
      title3: "Advertising & Marketing Character Animation",
      text3:
        "Nowadays, animations are used in advertising and marketing purposes. We provide you with a highly qualified animation maker to produce the latest and advance character type to make the customers. ",
    }}

    theme={{
      //---------------------LayoutBackground
      background: "#fff",
      backgroundImage: false,
      backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
      backgroundPosition: "center top",
      backgroundSize: "100% 100%",
      blendMode: `screen, difference, lighten`,
      //---------------------------
      colors: {
        title: "#32325d",
        cardText: "#32325d",
      }
    }}

    images={{
      m3Icon1,
      m3Icon2,
      m3Icon3,

      m3Icon1alt: "alt text 1",
      m3Icon2alt: "alt text 2",
      m3Icon3alt: "alt text 3",
    }}
  />

  <Module14

    data={{
      title: "New features we offer",
      subtitle: "We guide you through the essentials and handle the rest.",
      text: {
        title1: "Capturing pictures with Scene Cameras",
        paragraph1: `New scene cameras let you set up specific shots like wide, close-up, and zoom, and trigger between them for a more dynamic performance.`,
  
        title2: "Create your moment by using Keyframes",
        paragraph2: `In animation character design we also offer you to use Key-frames, this lets you animate behavior properties and adjust timing and motion, for example, the effect of wind or gravity. By putting those on the fly provide excitement like a live performance.`,
  
        title3: "Trigger some better music to your animation character design",
        paragraph3: `This will make your scenes more impactful and emotional with audio replays, synced to your animation and performed whenever you want them.`,
        link: {
          url: "#",
          text: "Holaaa",
        },
  
        title4: "Want to set your animated characters in motion?",
        paragraph4: `In character animation after effects include providing motion to your characters, like a sprinkle of fairy dust, motion lines trickling behind your character are designed to convey movement and speed.`,
  
        title5: "Form a legal entity",
        paragraph5: `Set up your new company as a C Corporation in the state of
        Delaware. We’ll create the legal documents, file the
        paperwork, and apply for your Tax ID number. Our goal is to
        have you in business within a few days.`,
      }
    }}

    theme={{
      heading: true,
      //---------------------LayoutBackground
      background: "#fff",
      backgroundImage: false,
      backgroundGradient: `rgba(63,94,251,0.5) 0%, rgba(219,130,148,0.5)`,
      backgroundPosition: "center top",
      backgroundSize: "100% 100%",
      blendMode: `screen, difference, lighten`,
      //---------------------------
      colors: {
        titles: "#32325d",
        subtitle: "#424770",
        texts: "#525f7f",
        link: "#6772e5",
      }
    }}

    images={{
      m14imgRight,
      m14Icon1,
      m14Icon2,
      m14Icon3,
      m14Icon4,
      m14Icon5,
    }}



  />

 
   
   
    
    {" "}
  </Layout>
)

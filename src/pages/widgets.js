import React from "react"
import { ContentHeader } from "../components/widgets/ContentHeader"
import { QuadBox } from "../components/widgets/QuadBox"
import { Module1 } from "../components/widgets/Module1"
import { Module2 } from "../components/widgets/Module2"
import { Module3 } from "../components/widgets/Module3"
import { Module4 } from "../components/widgets/Module4"
import { Module5 } from "../components/widgets/Module5"
import { Module6 } from "../components/widgets/Module6"
import { Module7 } from "../components/widgets/Module7"
import { Module8 } from "../components/widgets/Module8"
import { Module9 } from "../components/widgets/Module9"
import { Module10 } from "../components/widgets/Module10"
import { Module11 } from "../components/widgets/Module11"
import { Module11a } from "../components/widgets/Module11a"
import { Module12 } from "../components/widgets/Module12"
import { Module13 } from "../components/widgets/Module13"
import { Module14 } from "../components/widgets/Module14"
import { Module15 } from "../components/widgets/Module15"
import { Module16 } from "../components/widgets/Module16"
import { Module17 } from "../components/widgets/Module17"
import { Module18 } from "../components/widgets/Module18"
import { Module19 } from "../components/widgets/Module19"
import { Module20 } from "../components/widgets/Module20"
import { Module21 } from "../components/widgets/Module21"
import { Module22 } from "../components/widgets/Module22"

//import images Module 11 ++++++++++
import background from "../images/Module11/lyft.jpg"
import backgroundAfter from "../images/Module11/lyft-vert.svg"
import backgroundAfter2 from "../images/Module11/lyft.svg"
import iconFirst from "../images/Module11/sharing.svg"
import iconSecond from "../images/Module11/route.svg"
import bannerLogo from "../images/Module11/lyft.png"
//++++++++++++++++++++++++++++++++++

//import images Module 11a +++++++++++
import m11aIcon1 from "../images/Module11a/sharing.svg"
import m11aBanner from "../images/Module11a/charity-water.jpg"
import m11aBannerLogo from "../images/Module11a/lyft.svg"
import m11aBannerShadow2 from "../images/Module11a/charity-water.svg"
import m11aBannerShadow from "../images/Module11a/charity-water-vert.svg"
import m11aIcon2 from "../images/Module11a/route.svg"
//++++++++++++++++++++++++++++++++++

export default () => (
  <>
    <h1>ContentHeader</h1>
    <ContentHeader
      heading="Hey how are you doing?"
      descrition="this is a description that comes under the title"
      button1title="button 1"
      button2title="button 2"
    />
    <hr></hr>
    <h1>Module1</h1>
    <Module1
      theme={{ containerLg: { opacity: 1 } }}
      image1="https://picsum.photos/200/300"
      image2="https://picsum.photos/200/300"
      image3="https://picsum.photos/200/300"
      image4="https://picsum.photos/200/300"
      image5="https://picsum.photos/200/300"
      image6="https://picsum.photos/200/300"
      image7="https://picsum.photos/200/300"
    ></Module1>
    <hr></hr>
    <h1>Module2</h1>
    <Module2 />
    <hr></hr>
    <h1>Module3</h1>
    <Module3 theme={{ containerLg: { opacity: 0.2 } }}></Module3>
    <hr></hr>
    <h1>Module4</h1>
    <Module4 />
    <hr></hr>
    <h1>Module5</h1>
    <Module5 theme={{ containerLg: { opacity: 1 } }}></Module5>
    <hr></hr>
    <h1>Module6</h1>
    <Module6 theme={{ containerLg: { opacity: 1 } }}></Module6>
    <hr></hr>
    <h1>Module7</h1>
    <Module7 theme={{ containerLg: { opacity: 1 } }}></Module7>
    <hr></hr>
    <h1>Module8</h1>
    <Module8 theme={{ containerLg: { opacity: 1 } }}></Module8>
    <hr></hr>
    <h1>Module9</h1>
    <Module9 theme={{ containerLg: { opacity: 1 } }}></Module9>
    <hr></hr>
    <h1>Module10</h1>
    <Module10 theme={{ containerLg: { opacity: 1 } }}></Module10>
    <hr></hr>
    <h1>Module11</h1>
    <Module11
      theme={{ containerLg: { opacity: 1 } }}
      images={{
        iconFirst,
        iconSecond,
        background,
        backgroundAfter,
        backgroundAfter2,
        bannerLogo,
      }}
    ></Module11>
    <hr></hr>
    <h1>Module11a</h1>
    <Module11a
      theme={{ containerLg: { opacity: 1 } }}
      images={{
        banner: m11aBanner,
        bannerLogo: m11aBannerLogo,
        bannerShadow: m11aBannerShadow,
        bannerShadow2: m11aBannerShadow2,
        icon1: m11aIcon1,
        icon2: m11aIcon2,
      }}
    ></Module11a>
    <hr></hr>
    <h1>Module12</h1>
    <Module12 theme={{ containerXl: { opacity: 1 } }}></Module12>
    <hr></hr>
    <h1>Module14</h1>
    <Module14 theme={{ containerLg: { opacity: 1 } }}></Module14>
    <hr></hr>
    <h1>Module15</h1>
    <Module15 theme={{ containerXl: { opacity: 1 } }}></Module15>
    <hr></hr>
    <h1>Module16</h1>
    <Module16 />
    <hr></hr>
    <h1>Module17</h1>
    <Module17 />
    <hr></hr>
    <h1>Module18</h1>
    <Module18 theme={{ containerLg: { opacity: 1 } }}></Module18>
    <hr></hr>
    <h1>Module19</h1>
    <Module19 />
    <hr></hr>
    <h1>Module20</h1>
    <Module20 theme={{ containerLg: { opacity: 1 } }}></Module20>
    <hr></hr>
    <h1>Module21</h1>
    <Module21 theme={{ containerLg: { opacity: 1 } }}></Module21>
    <hr></hr>
    <h1>Module22</h1>
    <Module22 />
    <hr></hr>
    <h1>QuadBox</h1>
    <QuadBox />
  </>
)

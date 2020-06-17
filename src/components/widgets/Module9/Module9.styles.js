import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      /*added classses to work*/
      .diagramInfraContent {
      }
      .diagramContent {
      }
      .jsDiagram {
      }
      .diagramPlatformsContent {
      }
      .jsDiagramExplanation {
      }

      /*regular styles */
      .contentWrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }
      .containerLg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
        opacity: ${props.theme.containerLg.opacity};
      }
      .paymentsStackSection {
        background-color: #fff;
        padding: 60px 0;
        position: relative;
      }
      .sectionTitle {
        margin: 25px 0 18px;
        font-size: 42px;
        line-height: 52px;
        color: #32325d;
        font-weight: 400;
      }
      .sectionDesc {
        margin-bottom: 70px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        line-height: 36px;
        color: #424770;
        font-weight: 300;
      }
      .paymentsStackSectionIntro {
        text-align: center;
        padding: 0 20px;
      }
      .diagramApps {
        grid-area: diagramApps;
        grid-template-columns: repeat(4, 1fr);
      }
      .diagramProduct svg {
        width: 25px;
        height: 25px;
        transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .diagramProduct {
        border-radius: 8px;
        background-color: #c4f0ff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-transform: uppercase;
        border: 2px solid;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .diagramSection {
        display: grid;
        min-height: 80px;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        grid-gap: 10px;
        gap: 10px;
        will-change: transform;
        box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
          0 3px 6px 0 rgba(0, 0, 0, 0.07);
      }
      .diagramProductRadar {
        background-color: #db78dd;
        border-color: #db78dd;
      }
      .diagramProductSigma {
        background-color: #a688e7;
        border-color: #a688e7;
      }
      .diagramProductBilling {
        background-color: #3ecf8e;
        border-color: #3ecf8e;
      }
      .diagramProductAtlas {
        background-color: #f0b64b;
        border-color: #f0b64b;
      }
      .diagramProduct span {
        display: block;
        margin: 8px 0 0;
        font-size: 15px;
        font-weight: 600;
      }
      .platformFiagram {
        margin: 60px 0 0;
      }

      .diagram {
        position: relative;
        display: grid;
        gap: 20px 0;
        grid-gap: 20px 0;
        grid-template-rows: repeat(6, auto);
        grid-template-areas: "diagramApps diagramAppsContent diagramPlatforms diagramPlatformsContent diagramInfra diagramInfraContent";
        padding: 0 20px;
      }

      .diagramTitle {
        color: #32325d;
        margin: 0 0 4px;
      }
      .uppercaseText {
        font-size: 17px;
        line-height: 28px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .diagramDesc {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #525f7f;
      }
      .diagramProductPayments {
        background-color: #818bf0;
        border-color: #818bf0;
      }
      .diagramProductConnect {
        background-color: #45b2e8;
        border-color: #45b2e8;
      }
      .diagramPlatforms {
        grid-area: diagram-platforms;
        grid-template-columns: repeat(2, 1fr);
      }
      .diagramInfra {
        position: relative;
        grid-area: diagramInfra;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr 1fr;
      }
      .diagramInfraService {
        border: 2px dashed #7795f8;
        border-radius: 8px;
        opacity: 0.5;
      }
      .diagramInfraService:first-child {
        grid-row: 1;
        grid-column: 1 / span 2;
      }
      .diagramInfraService:nth-child(2) {
        grid-row: 2;
        grid-column: 1 / span 2;
      }
      .diagramInfraService:nth-child(3) {
        grid-row: 1 / span 2;
        grid-column: 3;
      }
      .diagramInfraService:nth-child(4) {
        grid-row: 1;
        grid-column: 4 / span 3;
      }
      .diagramInfraService:nth-child(5) {
        grid-row: 2;
        grid-column: 4;
      }
      .diagramInfraService:nth-child(6) {
        grid-row: 2;
        grid-column: 5 / span 2;
      }
      .diagramInfraService:nth-child(7) {
        grid-row: 1;
        grid-column: 7 / span 3;
      }
      .diagramInfraService:nth-child(8) {
        grid-row: 2;
        grid-column: 7 / span 1;
      }
      .diagramInfraService:nth-child(9) {
        grid-row: 2;
        grid-column: 8 / span 2;
      }
      .diagramInfraService:nth-child(10) {
        grid-row: 1 / span 2;
        grid-column: 10;
      }
      .diagramInfra:after {
        content: "";
        position: absolute;
        width: calc(100% + 60px);
        height: 150px;
        bottom: 0;
        left: -30px;
        transform: translateY(40%);
        background: linear-gradient(hsla(0, 0%, 100%, 0), #fff 50%);
        display: none;
      }
      .animated {
        -webkit-animation-duration: 1.5s;
        animation-duration: 1.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      @-webkit-keyframes fadeInLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-30%, 0, 0);
          transform: translate3d(-30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-30%, 0, 0);
          transform: translate3d(-30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
      }

      @-webkit-keyframes fadeInRight {
        from {
          opacity: 0;
          -webkit-transform: translate3d(30%, 0, 0);
          transform: translate3d(30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes fadeInRight {
        from {
          opacity: 0;
          -webkit-transform: translate3d(30%, 0, 0);
          transform: translate3d(30%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
      }

      @-webkit-keyframes rightten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes rightten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .right10 {
        -webkit-animation-name: rightten;
        animation-name: rightten;
      }

      @-webkit-keyframes leftten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes leftten {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .left10 {
        -webkit-animation-name: leftten;
        animation-name: leftten;
      }
      .animated.delay03s {
        -webkit-animation-delay: 0.05s;
        animation-delay: 0.05s;
      }
      .animated.delay06s {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      @-webkit-keyframes rightfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(20%, 0, 0);
          transform: translate3d(20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes rightfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(20%, 0, 0);
          transform: translate3d(20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .right15 {
        -webkit-animation-name: rightfifteen;
        animation-name: rightfifteen;
      }

      @-webkit-keyframes leftfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-20%, 0, 0);
          transform: translate3d(-20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes leftfifteen {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-20%, 0, 0);
          transform: translate3d(-20%, 0, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      .left15 {
        -webkit-animation-name: leftfifteen;
        animation-name: leftfifteen;
      }

      @media (min-width: 670px) {
        .paymentsStackSection {
          background-color: #fff;
          padding: 80px 0 100px;
        }
        .diagramSection {
          min-height: 104px;
        }
        .diagramProduct svg {
          width: 40px;
          height: 40px;
        }
      }

      @media (min-width: 880px) {
        .diagramSection {
          min-height: 104px;
          border-radius: 18px;
          padding: 15px;
          grid-gap: 15px;
          gap: 15px;
        }
        .diagram {
          align-items: center;
          gap: 30px 75px;
          grid-gap: 30px 75px;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 2fr 1fr;
          grid-template-areas: "diagramApps diagramAppsContent diagramPlatforms diagramPlatformsContent diagramInfra diagramInfraContent";
        }

        .diagramInfraService {
          border-radius: 10px;
        }
        .diagramInfra:after {
          display: block;
        }
      }
      @media (max-width: 767px) {
        .sectioTitle {
          font-size: 32px;
        }
        .sectionDesc {
          font-size: 21px;
          line-height: 32px;
        }
        .diagramProduct span {
          font-size: 13px;
        }
      }
    `}
`

import styled, { css } from "styled-components"
import { data } from "../../../data"
export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      .content-wrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .compliance-section {
        position: relative;
        z-index: 1;
        padding-bottom: 15px;
        padding-top: 140px;
      }
      .uppercase-text {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .compliance-title {
        text-align: center;
        padding-bottom: 15px;
        margin-bottom: 20px;
      }
      .compliance-title img {
        display: block;
        width: 72px;
        height: 72px;
        margin: 0 auto;
        margin-bottom: 23px;
      }
      .compliance-title h2 {
        font-size: 20px;
        line-height: 32px;
        color: #32325d;
      }
      .compliance-content-wrapper {
        padding: 0 20px;
      }
      .compliance-content {
        border-bottom: 2px solid #f2f6fa;
      }
      .compliance-left-content p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
        margin-top: 1em;
      }
      .compliance-left-content p:first-child {
        margin-top: 0px;
      }
      .common-Link,
      .compliance-left-content .common-link {
        color: #6772e5;
        font-weight: 500;
        -webkit-transition: color 0.1s ease;
        transition: color 0.1s ease;
        cursor: pointer;
      }
      .compliance-content .compliance-right-content {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        margin-top: 30px;
        padding: 22px 20px 18px;
        border-radius: 4px;
        background: #f6f9fc;
      }
      .compliance-right-content h3 {
        margin-bottom: 18px;
        color: #57c3f0;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
      }
      .compliance-right-content ul {
        list-style: none;
      }
      .compliance-right-content ul li {
        position: relative;
        padding-left: 28px;
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .compliance-right-content ul li:after {
        content: url(${data.module7.images.lawerImg});
        position: absolute;
        top: 3px;
        left: 0;
        width: 19px;
      }
      .platform-management-right-content {
        padding: 1px;
      }
      .compliance-right-content li + li {
        margin-top: 9px;
      }

      .platform-management-left-content img {
        display: block;
        width: 72px;
        height: 72px;
        margin-bottom: 23px;
        margin-right: auto;
      }
      .platform-management-left-content h2 {
        margin-bottom: 20px;
        color: #32325d;
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .platform-management-left-content p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
        margin-top: 1em;
      }
      .platform-management-left-content p:first-child {
        margin-top: 0em;
      }
      .platform-management-section .laptop {
        position: relative;
        width: 584px;
        height: 405px;
        top: 30px;
        -webkit-transform: scale(0.57);
        transform: scale(0.57);
        -webkit-transform-origin: 0 40px;
        transform-origin: 0 40px;
        left: calc(50% - 166px);
      }
      .platform-management-section .laptop * {
        position: absolute;
      }
      .platform-management-section .laptop .shadow {
        left: 17px;
        right: 17px;
        top: 40px;
        height: 490px;
        opacity: 0.3;
        background: #7692b3;
        -webkit-filter: blur(30px);
        filter: blur(30px);
      }
      .platform-management-section .laptop .lid {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #e5ebf2, #f3f8fb);
        border-radius: 20px;
        -webkit-box-shadow: inset 1px -4px 6px rgba(145, 161, 181, 0.3);
        box-shadow: inset 1px -4px 6px rgba(145, 161, 181, 0.3);
      }
      .platform-management-section .laptop .camera {
        width: 4px;
        height: 4px;
        top: 10px;
        left: 50%;
        margin-left: -2px;
        border-radius: 50%;
        background: #dae0e8;
      }
      .platform-management-section .laptop .screen {
        top: 24px;
        bottom: 15px;
        left: 17px;
        right: 17px;
        border-radius: 4px;
        -webkit-box-shadow: -1px 1px 6px rgba(171, 183, 204, 0.2);
        box-shadow: -1px 1px 6px rgba(171, 183, 204, 0.2);
        background: #f2f6fa;
      }
      .platform-management-section .laptop .chassis {
        width: 100%;
        height: 142px;
        top: calc(100% - 11px);
        border-radius: 8px 8px 14px 14px;
        -webkit-transform: perspective(880px) rotateX(40deg);
        transform: perspective(880px) rotateX(40deg);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        background: linear-gradient(
            rgba(145, 161, 181, 0.2),
            rgba(145, 161, 181, 0)
          ),
          linear-gradient(45deg, #e5ebf2, #f3f8fb);
        -webkit-box-shadow: inset 0 -2px 3px rgba(145, 161, 181, 0.5),
          inset -1px -6px 4px rgba(253, 255, 255, 0.9);
        box-shadow: inset 0 -2px 3px rgba(145, 161, 181, 0.5),
          inset -1px -6px 4px rgba(253, 255, 255, 0.9);
      }
      .platform-management-section .laptop .chassis * {
        opacity: 0.3;
        background: linear-gradient(45deg, #b2bdcc, #c1ccd8);
        -webkit-box-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.75);
        box-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.75);
      }
      .platform-management-section .laptop .keyboard {
        left: 28px;
        right: 28px;
        top: 8px;
        height: 66px;
        border-radius: 2px 2px 4px 4px;
      }
      .platform-management-section .laptop .trackpad {
        left: 165px;
        right: 165px;
        top: 76px;
        height: 52px;
        border-radius: 4px 4px 6px 6px;
      }
      .dashboard-connected-accounts {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 1020px;
        min-height: 550px;
        left: calc(50% - 510px);
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        font-size: 15px;
        background: url(${data.module7.images.dashboardImg}) no-repeat;
        background-size: 100% 550px;
      }
      .platform-management-section .dashboard-connected-accounts * {
        position: static;
      }
      .dashboard-connected-accounts .active {
        font-weight: 600;
        color: #6772e5;
      }
      .connected-accounts-nav {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 256px;
        flex: 0 0 256px;
        padding-top: 26px;
        color: #424770;
      }
      .connected-accounts-nav h1 {
        margin-left: 42px;
        padding-bottom: 3px;
        font-size: 17px;
        font-weight: 500;
      }
      .connected-accounts-nav ul {
        margin: 29px 0 0 32px;
      }
      .connected-accounts-nav li + li {
        margin-top: 15px;
      }
      .connected-accounts-view {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding-top: 77px;
      }
      .connected-accounts-subnav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-bottom: 3px;
        color: #525f7f;
      }
      .connected-accounts-subnav li + li {
        margin-left: 25px;
      }
      .connected-accounts-view section {
        margin-top: 20px;
        border-radius: 6px;
        background: #fff;
        -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        overflow: hidden;
        color: #8898aa;
      }
      .connected-accounts-view section h2 {
        padding: 20px;
        border-bottom: 2px solid #e6ebf1;
        text-transform: uppercase;
        font-size: 1em;
        color: #424770;
      }
      .connected-accounts-view section li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 14px 20px;
      }
      .connected-accounts-view section li:nth-child(2n) {
        background: #f6f9fc;
      }
      .connected-accounts-view section svg {
        width: 16px;
      }
      .connected-accounts-view section strong {
        margin: 0 10px;
      }
      .connected-accounts-view section .state-badge {
        margin-left: auto;
        line-height: 22px;
        padding: 0 8px;
        border-width: 1px;
        border-style: solid;
        border-radius: 12px;
        text-transform: uppercase;
        font-weight: 600;
      }
      .connected-accounts-upcoming strong {
        color: #f79a59;
      }
      .connected-accounts-upcoming path:first-child {
        fill: #fdbc72;
      }
      .connected-accounts-upcoming path:last-child {
        fill: #f79a59;
      }
      .connected-accounts-upcoming .state-badge {
        color: #f79a59;
        border-color: #fdbc72;
      }
      .connected-accounts-recent strong {
        color: #45b2e8;
      }
      .connected-accounts-recent path:first-child {
        fill: #68d4f8;
      }
      .connected-accounts-recent path:last-child {
        fill: #45b2e8;
      }
      .connected-accounts-recent .state-badge {
        color: #45b2e8;
        border-color: #68d4f8;
      }

      .international-support {
        margin-bottom: 50px;
        padding: 0 20px;
      }
      .international-support:before {
        content: "";
        display: block;
        height: 2px;
        margin-bottom: 50px;
        background: #f2f6fa;
      }
      .international-support .common-UppercaseTitle {
        text-align: center;
      }

      .international-support .common-UppercaseTitle img {
        margin-left: auto;
        margin-right: auto;
      }
      .international-support a {
        font-weight: 500;
        color: #6772e5;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
      }
      .international-support a svg {
        width: 10px;
        margin-left: 3px;
        fill: currentcolor;
        -webkit-transition: fill 0.1s;
        transition: fill 0.1s;
      }
      .international-support a:hover {
        color: #45b2e8;
      }
      .international-support aside {
        font-size: 15px;
        color: #6b7c93;
        -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        border-radius: 8px;
        margin-top: 1.5em;
      }
      .international-support aside > * {
        padding: 0 22px;
      }
      .international-support aside h2 {
        color: #57c3f0;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
        padding-top: 1.2em;
        padding-bottom: 1.2em;
      }
      .international-support aside h2:not(:first-child) {
        margin-top: 21px;
        border-top: 2px solid #f1f6fa;
      }
      .international-support aside ul {
        display: grid;
      }
      .international-support .flag-list {
        grid-auto-columns: -webkit-min-content;
        grid-auto-columns: min-content;
        grid-auto-flow: column;
        margin-top: 12px;
      }
      .international-support .flag-list .common-FlagIcon:before {
        margin-right: 5px;
      }
      .international-support .flag-list:not(.common-FlagIcon) {
        white-space: nowrap;
      }
      .international-support .contact-us {
        margin-top: 12px;
      }
      .bank-networks {
        grid: auto 1fr 1fr;
        grid-gap: 12px 0;
        margin-bottom: 1.5em;
      }
      .international-support .settlement-currencies {
        grid-template-columns: repeat(6, -webkit-min-content);
        grid-template-columns: repeat(6, min-content);
        padding-bottom: 22px;
        font-weight: 500;
        font-size: 13px;
      }
      .settlement-currencies li {
        padding: 0 9px;
        border-right: 1px solid #e4edf5;
      }
      .settlement-currencies li:nth-child(6n) {
        border: none;
        padding-right: 0;
      }
      .settlement-currencies li:nth-child(6n - 5) {
        padding-left: 0;
      }
      .settlement-currencies li:nth-child(6) ~ li {
        padding-top: 6px;
      }
      .common-FlagIcon--us:before {
        background-position: -10px -185px;
      }
      .common-FlagIcon:before {
        content: "";
        display: inline-block;
        background-image: url(${data.module7.images.flagIconsImg});
        width: 21px;
        height: 15px;
        margin-right: 12px;
        vertical-align: -2px;
      }
      .common-FlagIcon--sg:before {
        background-position: -72px -160px;
      }
      .common-FlagIcon--gb:before {
        background-position: -41px -60px;
      }
      .common-FlagIcon--jp:before {
        background-position: -196px -85px;
      }
      .international-support .flag-list .common-FlagIcon:before {
        margin-right: 5px;
      }
      .common-FlagIcon--be:before {
        background-position: -227px -10px;
      }
      .common-FlagIcon--ca:before {
        background-position: -382px -10px;
      }
      .common-FlagIcon--sg:before {
        background-position: -72px -160px;
      }
      .common-FlagIcon--fi:before {
        background-position: -444px -35px;
      }
      .common-FlagIcon--fr:before {
        background-position: -506px -35px;
      }
      .common-FlagIcon--de:before {
        background-position: -165px -35px;
      }
      .common-FlagIcon--ie:before {
        background-position: -382px -60px;
      }
      .common-FlagIcon--it:before {
        background-position: -72px -85px;
      }
      .common-FlagIcon--nl:before {
        background-position: -475px -110px;
      }
      .common-FlagIcon--pt:before {
        background-position: -320px -135px;
      }
      .common-FlagIcon--es:before {
        background-position: -382px -35px;
      }
      .international-support-left-content p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #525f7f;
      }
      .international-support .international-support-left-content h2 {
        margin-bottom: 20px;
        color: #32325d;
        font-size: 20px;
        line-height: 32px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .international-support img {
        display: block;
        width: 72px;
        height: 72px;
        margin-bottom: 23px;
      }
      @media (min-width: 670px) {
        .compliance-title h2 {
          font-size: 21px;
          line-height: 32px;
        }
        .platform-management-left-content h2 {
          font-size: 21px;
          line-height: 32px;
        }
        .platform-management-section .laptop {
          margin-top: 2em;
          -webkit-transform: none;
          transform: none;
          left: calc(50% - 292px);
        }
        .international-support aside {
          margin: 0;
        }
        .international-support {
          --gutter: 30px;
          display: grid;
          grid-template-rows: 120px auto;
          grid-template-columns: 306px 1fr;
          grid-gap: 0 var(--gutter);
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin-top: 140px;
        }
        .international-support:before {
          grid-column-end: span 2;
          margin: 0;
        }
        .international-support-left-content {
          -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
          order: 1;
        }

        .international-support-right-content {
          padding: 1px;
        }

        .international-support .common-UppercaseTitle {
          text-align: left;
        }
        .international-support .common-UppercaseTitle img {
          margin-left: 0;
        }
        .international-support-left-content h2 {
          font-size: 21px;
          line-height: 32px;
        }
      }
      @media (min-width: 880px) {
        .compliance-content .compliance-right-content {
          margin-top: 1px;
        }
        .platform-management-section .laptop {
          left: 0;
          margin: 0;
        }
        .platform-management-section .laptop .shadow {
          will-change: transform;
        }
        .international-support {
          --gutter: 41px;
          grid-template-rows: 200px auto;
          margin-top: 0;
        }
        .international-support .common-BodyText {
          -webkit-columns: 2;
          columns: 2;
          -webkit-column-gap: var(--gutter);
          column-gap: var(--gutter);
        }
        .connected-accounts-nav ul {
          margin-top: 25px;
        }
        .platform-management-section {
          display: grid;
          grid: auto/1fr auto;
          grid-gap: 0 70px;
          padding: 0 20px;
          padding-top: 80px;
        }
        .compliance-content {
          display: grid;
          grid: auto/1fr 1fr;
          grid-gap: 35px;
          padding-bottom: 80px;
        }
      }
      @media (max-width: 880px) {
        .compliance-content {
          padding-bottom: 50px;
        }
        .compliance-content-wrapper {
          margin-bottom: 50px;
        }
        .platform-management-section {
          padding: 0 20px;
        }
        .platform-management-left-content img {
          margin: 0 auto;
          margin-bottom: 23px;
        }
        .platform-management-left-content h2 {
          text-align: center;
        }
        .compliance-section {
          padding-top: 80px;
        }
      }
      @media (max-width: 767px) {
        .international-support .international-support-left-content h2 {
          text-align: center;
        }
        .international-support img {
          margin-left: auto;
          margin-right: auto;
        }
        .connected-accounts-nav ul {
          margin-top: 24px;
        }
      }
    `}
`

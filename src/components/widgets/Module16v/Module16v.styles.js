import styled, { css } from "styled-components"
export const StyledContentWrapper = styled.div`
  ${props =>
    css`
      * {
        margin: 0px;
        padding: 0px;
      }
      body {
        background: #fff;
        min-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        font-size: 62.5%;
        font-family: Camphor, Open Sans, Segoe UI, sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: "pnum";
        font-feature-settings: "pnum";
        font-variant-numeric: proportional-nums;
      }
      body:not(.keyboard-navigation)
        .fraud-Video--controls-out
        video::-webkit-media-text-track-container {
        transform: translateY(-20px) !important;
      }
      ol,
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      html[lang="ja"] body {
        font-family: Camphor, Meiryo, Hiragino Sans, sans-serif;
      }
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
      .powerful-tools-section {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        padding: 0px 20px;
        position: relative;
        transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
      }
      .powerful-tools-wrapper {
        padding: 80px 0px;
      }
      .powerful-title-section h2 {
        font-weight: 400;
        font-size: 34px;
        line-height: 44px;
        color: #32325d;
        margin-bottom: 24px;
        font-weight: 400;
      }
      .powerful-title-section p {
        font-weight: 400;
        font-size: 19px;
        line-height: 32px;
        color: #525f7f;
      }
      .powerful-tools-btn .common-button {
        white-space: nowrap;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        background: #fff;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #6772e5;
        text-decoration: none;
        -webkit-transition: all 0.15s ease;
        transition: all 0.15s ease;
      }
      .powerful-tools-btn {
        margin-top: 24px;
      }
      .powerful-tools-btn .get_started_btn {
        margin: 10px 20px;
        margin-left: 0px;
        background: #8f6ed5;
        color: #fff;
      }
      .powerful-tools-btn .common-button:hover {
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
        -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
      }
      .powerful-tools-btn .get_started_btn:hover {
        background-color: #a78ce9;
      }
      .casestudycard-media {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        transform-origin: 80% 50%;
        display: none;
      }
      .fraudteams_video video {
        width: var(--video-width);
        transform-style: preserve-3d;
      }
      .fraud-Video video {
        display: block;
        width: 100%;
        border-radius: 8px;
      }
      .fraud-Video img {
        display: block;
        width: 100%;
        border-radius: 8px;
        height: 500px;
      }
      @media (min-width: 670px) {
        .powerful-tools-section {
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 40px;
          grid-template-columns: repeat(2, 1fr);
        }
        .powerful-title-section h2 {
          font-size: 42px;
          line-height: 52px;
        }
        .casestudycard-media {
          display: block;
        }
      }
      .fraud-teams-media,
      .fraud-teams-media:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
      .fraud-teams-media:before {
        border-radius: 8px;
        background-color: #fff;
        opacity: 0;
        transition: opacity 400ms cubic-bezier(0.645, 0, 0.355, 1);
        content: "";
      }
      .fraudteams--video-playing .fraud-teams-media:before {
        opacity: 0;
      }
      .fraud-teams-media {
        left: -70px;
      }
      .fraudteams--video-playing .fraud-teams-media {
        left: 0px;
      }
      @media (min-width: 670px) {
        .fraud-teams-media {
          display: block;
        }
      }
      .CaseStudyCard__screenshot > svg text,
      .CaseStudyCard__screenshot > svg tspan {
        font-family: Camphor;
      }
      .fraudteams_video-container {
        --viewport-width: 420px;
        --video-width: calc(var(--viewport-width) - var(--video-margin));
        --video-left: calc(var(--video-width) * 1 / 3);
        --video-left: calc(var(--video-width) * 1 / 3);
        --video-top: calc((-960px + var(--video-width)) * 1 / 4);
        --video-top: calc((-960px + var(--video-width)) * 1 / 4);
        --video-margin: 80px;
        --container-max-height: calc(var(--video-width) * 3 / 4);
        --container-max-height: calc(var(--video-width) * 3 / 4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 5%;
        max-height: var(--container-max-height);
        perspective: 1200px;
        perspective-origin: 80% 80%;
      }

      .CaseStudyCarousel .fraudteams_video-container {
        --video-top: 50px;
      }
      .CaseStudyCard {
        --border-radius: 8px;
        --header-border-size: 16px;
        position: relative;
        background-color: #fff;
        border-radius: var(--border-radius);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
      }
      .powerfultoolssection {
        transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1);
      }
      .fraudteams_video {
        --crop-width: calc(var(--video-width) * 2 / 3);
        --crop-width: calc(var(--video-width) * 2 / 3);
        --transform: translate(var(--video-left), var(--video-top)) scale(0.8)
          rotateX(4deg) rotateY(-8deg) rotateZ(2deg);
        display: flex;
        justify-content: center;
        width: var(--crop-width);
        border-radius: 8px;
        transform: var(--transform);
        transform-origin: 100% 50%;
        transition: transform 400ms cubic-bezier(0.645, 0, 0.355, 1),
          width 400ms cubic-bezier(0.645, 0, 0.355, 1);
        pointer-events: auto;
      }
      .fraudteams_video video {
        width: var(--video-width);
        transform-style: preserve-3d;
      }
      .fraudteams_video img {
        width: var(--video-width);
        transform-style: preserve-3d;
      }
      .fraudteams_video .fraudteams_video_controls-bottom {
        transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
        opacity: 0;
      }
      .fraudteams--video-playing {
        transform: scale(0.9);
      }
      .fraudteams--video-playing .fraudteams_video {
        transform: none;
        width: var(--video-width);
      }
      .fraudteams--video-playing
        .fraudteams_video
        .fraudteams_video_controls-bottom {
        opacity: 1;
      }
      .fraud-Video video {
        display: block;
        width: 100%;
        border-radius: 8px;
        box-shadow: ${props =>
          props.theme.shadow ? `${props.theme.shadowColor}` : "none"};
      }
      .fraud-Video img {
        display: block;
        width: 100%;
        border-radius: 8px;
        box-shadow: ${props =>
          props.theme.shadow
            ? `34.3px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
          20.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)`
            : "none"};
      }
      .fraud-Video video::-webkit-media-text-track-container {
        transform: translateY(-40px);
      }
      .fraud-Video img::-webkit-media-text-track-container {
        transform: translateY(-40px);
      }
      .fraudteams_video_controls {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        transition: opacity 0.45s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }
      .fraud-Video--controls-out .fraudteams_video_controls {
        opacity: 0;
      }
      .keyboard-navigation
        .fraud-Video--controls-out
        .fraudteams_video_controls {
        opacity: 1;
      }
      .fraudteams_video_toggle:hover {
        border-top-style: hidden;
      }
      .fraudteams_video_toggle {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transform: translate(-50%, -50%);
        z-index: 7;
        pointer-events: none;
        opacity: 0;
        z-index: 503;
        transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        background: transparent;
        border: 0;
        outline: none;
      }
      .fraudteams_video_toggle:before {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #43458b;
        opacity: 0;
      }
      .fraudteams_video_toggle:before,
      .fraudteams_video_toggle:after {
        position: absolute;
        content: "";
        border-radius: 50%;
        transition: 0.2s;
      }
      .fraudteams_video_toggle:hover:before {
        opacity: 0.35;
        transform: scale(1.7);
      }
      .fraudteams_video_toggle:after {
        width: 80px;
        height: 80px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
      }
      .fraudteams_video_toggle:hover:after {
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
          0 8px 16px -8px rgba(0, 0, 0, 0.3),
          0 -6px 16px -6px rgba(0, 0, 0, 0.025);
      }
      .video_controls-icon {
        height: 32px;
        width: 32px;
        background-color: transparent;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .Hero__pulse {
        position: absolute;
        content: "";
        width: 40px;
        height: 40px;
        left: calc(50% - 20px);
        top: calc(50% - 20px);
        background: #43458b;
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
        animation: blinkingText 3s infinite;
      }
      @keyframes blinkingText {
        0% {
          transform: scale(1);
          opacity: 0.7;
        }
        100% {
          transform: scale(5);
          opacity: 0;
        }
      }
      .playbutton-visible {
        pointer-events: all;
        opacity: 1;
      }
      .video_controls-icon svg {
        width: 100%;
        height: 100%;
        margin-left: 3px;
        z-index: 2;
      }
      .Hero__tooltip--play {
        margin-bottom: 8px;
      }
      .Helm-Tooltip {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        top: 0px;
        left: 0px;
        transform: translate3d(-120px, -50px, 0px);
        width: 320px;
      }
      .Tooltip {
        position: relative;
        display: flex;
        align-items: center;
        background: #fff;
        box-shadow: 0 50px 100px 0 rgba(50, 50, 93, 0.1),
          0 15px 35px 0 rgba(50, 50, 93, 0.15), 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        border-radius: 25px;
        margin-bottom: 5px;
        opacity: 0;
        transform: translateY(2px);
        transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .Hero__tooltip--play .Tooltip__content {
        margin: 0;
        padding: 7px 24px 9px;
        font-weight: 500;
      }
      .Tooltip__arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 4px;
        border-color: #fff;
        border-width: 6px 6px 0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        top: 100%;
        transform: translateY(-0.25px);
        left: calc(50% - 4px);
        margin-top: 0;
        margin-bottom: 0;
      }
      .Helm-Tooltip--shown {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
      }
      .Helm-Tooltip--shown .Tooltip {
        opacity: 1;
        transform: none;
      }
      .Helm-Tooltip p {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: #32325d;
      }
      .fraudteams--video-playing .fraudteams_video {
        background-color: transparent;
        box-shadow: none;
      }
      .powerful-tools-wrapper.visible {
        background-color: rgba(82, 95, 127, 0.35);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 501;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
      }
      .actualVideo {
        --height: calc(
          (var(--aspect-ratio) + var(--tan12)) / var(--aspect-ratio)
        );
        position: absolute;
        left: 0;
        width: auto;
        height: calc(100% * var(--height));
        top: 0%;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        height: auto !important;
        width: calc(100% + 2px) !important;
      }
      .fraudteams--video-playing .js-actual-video {
        opacity: 1 !important;
      }
      .fraudteams--video-playing #demovideo {
        opacity: 0;
      }
      .video_plaing .js-actual-video {
        opacity: 1 !important;
      }
      .video_plaing #demovideo {
        opacity: 0;
      }
      @media (min-width: 670px) {
        .fraudteams_video-container {
          --viewport-width: 670px;
        }
        .fraudteams_video_toggle {
          width: 60px;
          height: 60px;
        }
        .fraud-Video video::-webkit-media-text-track-container {
          transform: translateY(-80px);
        }
        .fraud-Video img::-webkit-media-text-track-container {
          transform: translateY(-80px);
        }
        body:not(.keyboard-navigation)
          .fraud-Video--controls-out
          video::-webkit-media-text-track-container {
          transform: translateY(-40px) !important;
        }
      }
      @media (min-width: 1040px) {
        .fraudteams_video_toggle {
          width: 96px;
          height: 96px;
        }
        .fraudteams_video-container {
          max-height: none;
        }
      }
      .fraudteams_video_toggle.fraudteams_video_toggle--playing {
        display: none;
      }
      @media (min-width: 880px) {
        .fraudteams_video-container {
          --viewport-width: 880px;
        }
      }

      @media (min-width: 1160px) {
        .fraudteams_video-container {
          --viewport-width: 1040px;
        }
        .fraudteams_video {
          width: ${props.theme.rightContentWidth};
          display: inline;
        }
      }
      @media (max-width: 1039px) {
        .Helm-Tooltip {
          transform: translate3d(-140px, -70px, 0px);
        }
      }
      @media (max-width: 990px) {
        .Helm-Tooltip {
          transform: translate3d(-140px, -70px, 0px);
        }
        margin-top: 100px;
      }
      @media (max-width: 660px) {
        .Helm-Tooltip {
          transform: translate3d(-120px, -50px, 0px);
        }
      }
      @media (max-width: 767px) {
        .powerful-tools-wrapper {
          padding-top: 0px;
        }
        .fraudteams_video {
          width: 100%;
          transform: none;
          transform: translateY(calc(var(--offset) * 1px)) scale(var(--scale))
            skewY(var(--skew));
          border-radius: 0px;
          transform: translateY(calc(var(--offset) * 1px)) scale(var(--scale))
            skewY(var(--skew));
          border-radius: 0px;
          --scale: 1;
          --skew: -12deg;
          --border-radius: 0;
          --offset: 420.695;
          margin-top: 30px;
        }
        .fraud-Video video {
          border-radius: 0px;
        }
        .fraud-Video img {
          border-radius: 0px;
          height: 300px;
          margin-top: 100px;
        }
        .powerful-tools-section {
          padding: 0px;
        }
        .powerful-title-section {
          padding: 0 20px;
        }
        .fraudteams_video_controls {
          transform: translateY(1px) scale(1) skewY(12deg);
        }
        .fraudteams--video-playing .fraudteams_video {
          width: 100%;
          padding: 0 15px;
        }
        .fraudteams_video-container {
          --viewport-width: 100%;
          margin-top: -50px;
        }
        .fraudteams--video-playing {
          transform: scale(1);
        }
        .actualVideo {
          width: calc(100% - 30px) !important;
          left: 15px;
        }
        .fraud-teams-media {
          left: 0px;
        }
        .container-lg {
          height: 700px;
        }
        @media only screen and (min-device-width : 375px) and (max-device-width : 667px) and (orientation : landscape) {
          .fraudteams_video-container {
            --viewport-width: 100%;
            margin-top: -200px;
        }
      }
    `}
`

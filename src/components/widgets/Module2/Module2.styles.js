import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
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
      ol,
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      .content-wrapper {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        background-image: ${props =>
          props.theme.backgroundImage
            ? `linear-gradient(
          to bottom,
          ${props.theme.backgroundGradient}
        ),
        url("http://picsum.photos/800/600")`
            : "none"};
        background-repeat: no-repeat;
        background-position: ${props.theme.backgroundPosition};
        background-size: ${props.theme.backgroundSize};
        background-blend-mode: ${props.theme.blendMode};
      }
      .container-lg {
        max-width: 1040px;
        margin: 0 auto;
        padding: 0px;
        width: 100%;
      }
      .container-xl {
        max-width: 1160px;
        margin: 0 auto;
        padding: 50px 0px;
        width: 100%;
      }
      section.feedback {
        --transition-duration: 0.35s;
        --transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        position: relative;
        padding: 50px 0px;
      }
      .common-feedbackbox {
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        padding: 30px;
        -webkit-box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3),
          0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      }
      .common-title {
        font-weight: 500;
        font-size: 19px;
        line-height: 32px;
        color: ${props.theme.colors.title};
      }
      .common-UppercaseText {
        font-size: 17px;
        line-height: 28px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      .common-text {
        font-weight: 400;
        font-size: 17px;
        line-height: 28px;
        color: ${props.theme.colors.text};
      }
      .common-button {
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
      section.feedback .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 56.25vw;
        top: calc(100vw * 0.5625);
        margin-top: -24px;
        border-radius: 50%;
        cursor: pointer;
        will-change: transform;
        padding: 0;
      }

      section.feedback .common-feedbackbox {
        display: grid;
        grid: minmax(auto, 56.25vw) auto/1fr;
        grid: minmax(auto, calc(100vw * 0.5625)) auto/1fr;
        padding: 0;
      }
      section.feedback .feedbacklogo .video .play {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        margin-top: -24px;
        left: 50%;
        margin-left: -36px;
        border-radius: 50%;
        cursor: pointer;
        background-image: url(${props.videos.playIcon});
        background-position: 50%;
        background-repeat: no-repeat;
        padding: 0;
      }
      section.feedback .feedbacklogo {
        position: relative;
        display: grid;
        grid: auto/repeat(5, 100%);
        overflow: hidden;
        margin: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        -webkit-transition: background-color var(--transition-duration)
          var(--transition-timing-function);
        transition: background-color var(--transition-duration)
          var(--transition-timing-function);
        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
      }
      section.feedback .feedbacklogo li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 30px;
        -webkit-transition: -webkit-transform var(--transition-duration)
          var(--transition-timing-function);
        transition: -webkit-transform var(--transition-duration)
          var(--transition-timing-function);
        transition: transform var(--transition-duration)
          var(--transition-timing-function);
        transition: transform var(--transition-duration)
            var(--transition-timing-function),
          -webkit-transform var(--transition-duration) var(--transition-timing-function);
      }
      section.feedback .feedbacklogo li > svg {
        max-width: 230px;
        max-height: 60px;
      }
      section.feedback .feedbacklogo svg path {
        fill: #fff;
      }
      section.feedback .feedbacklogo .video {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        will-change: transform;
      }
      section.feedback .quotes {
        position: relative;
        display: grid;
        grid: auto/repeat(5, 100%);
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
      }
      section.feedback .quotes li {
        padding: 40px 20px 20px;
        margin-bottom: -5px;
        -webkit-transition: -webkit-transform var(--transition-duration)
          var(--transition-timing-function);
        transition: -webkit-transform var(--transition-duration)
          var(--transition-timing-function);
        transition: transform var(--transition-duration)
          var(--transition-timing-function);
        transition: transform var(--transition-duration)
            var(--transition-timing-function),
          -webkit-transform var(--transition-duration) var(--transition-timing-function);
      }

      section.feedback .quotes .common-title {
        position: relative;
        font-weight: 400;
        font-style: italic;
      }
      section.feedback .quotes .common-title:before {
        content: open-quote;
        position: absolute;
        left: -10px;
      }
      html[lang="ja"] section.feedback .quotes .common-title:before {
        left: -20px;
      }
      section.feedback .quotes .common-title:after {
        content: close-quote;
        position: absolute;
      }
      section.feedback .quotes .common-UppercaseText {
        margin-top: 20px;
        color: ${props.theme.colors.uppercaseText};
      }
      section.feedback .logos {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-top: 40px;
      }
      section.feedback .logos li {
        cursor: pointer;
        margin-bottom: 20px;
      }
      section.feedback .logos li:not(:last-child) {
        margin-right: 40px;
      }
      section.feedback .logos li:hover svg path {
        fill: #525f7f;
      }
      section.feedback .logos li svg {
        pointer-events: none;
      }
      section.feedback .logos svg path {
        fill: #aab7c4;
        -webkit-transition: fill var(--transition-duration)
          var(--transition-timing-function);
        transition: fill var(--transition-duration)
          var(--transition-timing-function);
      }
      section.feedback .nav.previous {
        left: -12px;
      }
      section.feedback .nav.previous svg {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      section.feedback .nav.next {
        right: -12px;
      }
      section.feedback[data-visible-quote="0"] .common-feedbackbox li {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
      section.feedback[data-visible-quote="0"] .logos li:first-child svg path {
        fill: #525f7f;
      }
      section.feedback[data-visible-quote="0"] .feedbacklogo {
        background-color: #c54531;
      }
      section.feedback[data-visible-quote="1"] .common-feedbackbox li {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }
      section.feedback[data-visible-quote="1"] .logos li:nth-child(2) svg path {
        fill: #525f7f;
      }
      section.feedback[data-visible-quote="1"] .feedbacklogo {
        background-color: #fff;
      }
      section.feedback[data-visible-quote="2"] .common-feedbackbox li {
        -webkit-transform: translateX(-200%);
        transform: translateX(-200%);
      }
      section.feedback[data-visible-quote="2"] .logos li:nth-child(3) svg path {
        fill: #525f7f;
      }
      section.feedback[data-visible-quote="2"] .feedbacklogo {
        background-color: #2d3138;
      }
      section.feedback[data-visible-quote="3"] .common-feedbackbox li {
        -webkit-transform: translateX(-300%);
        transform: translateX(-300%);
      }
      section.feedback[data-visible-quote="3"] .logos li:nth-child(4) svg path {
        fill: #525f7f;
      }
      section.feedback[data-visible-quote="3"] .feedbacklogo {
        background-color: #ffb300;
      }
      section.feedback[data-visible-quote="4"] .common-feedbackbox li {
        -webkit-transform: translateX(-400%);
        transform: translateX(-400%);
      }
      section.feedback[data-visible-quote="4"] .logos li:nth-child(5) svg path {
        fill: #525f7f;
      }
      section.feedback[data-visible-quote="4"] .feedbacklogo {
        background-color: #6bf;
      }
      section.feedback .feedbacklogo .video.teespring {
        background-image: url(${props.images.placeHolderImg});
        background-size: cover;
        background-position: 75%;
      }
      .li-video {
        width: 100%;
      }
      .video-container {
        --transition-duration: 0.35s;
        --transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        position: fixed;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
        height: calc(100% - 100px);
        top: 0;
        left: 0;
        padding: 20px;
        background-color: rgba(82, 95, 127, 0);
        z-index: 1000;
        -webkit-transition: background-color var(--transition-duration)
          var(--transition-timing-function);
        transition: background-color var(--transition-duration)
          var(--transition-timing-function);
        visibility: hidden;
      }

      @media (min-width: 880px) {
        .video-container {
          padding: 50px 0px;
        }
      }

      .video-container.visible {
        background-color: rgba(82, 95, 127, 0.35);
      }

      .video-container.visible video {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }

      .video-container video {
        width: calc(80% + 2px) !important;
        height: auto !important;
        background-color: #000;
        border-radius: 20px;
        -webkit-box-shadow: 0 62.5px 125px -25px rgba(50, 50, 93, 0.5),
          0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
        box-shadow: 0 62.5px 125px -25px rgba(50, 50, 93, 0.5),
          0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition: opacity var(--transition-duration)
            var(--transition-timing-function),
          -webkit-transform var(--transition-duration) var(--transition-timing-function);
        transition: opacity var(--transition-duration)
            var(--transition-timing-function),
          -webkit-transform var(--transition-duration) var(--transition-timing-function);
        transition: opacity var(--transition-duration)
            var(--transition-timing-function),
          transform var(--transition-duration) var(--transition-timing-function);
        transition: opacity var(--transition-duration)
            var(--transition-timing-function),
          transform var(--transition-duration) var(--transition-timing-function),
          -webkit-transform var(--transition-duration) var(--transition-timing-function);
      }
      @media (min-width: 880px) {
        section.feedback .feedbacklogo:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 1px;
          left: 100%;
          -webkit-transform: skewX(-12deg);
          transform: skewX(-12deg);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          background-color: #fff;
        }
        section.feedback .feedbacklogo {
          border-top-right-radius: 0;
          border-bottom-left-radius: 8px;
        }
        section.feedback .common-feedbackbox {
          grid: auto/7fr 8fr;
        }
        section.feedback .feedbacklogo li {
          padding: 0 80px 0 0px;
        }
        section.feedback .feedbacklogo li > svg {
          max-height: 100px;
        }
        section.feedback .quotes {
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            #000 50px,
            #000 calc(100% - 50px),
            transparent
          );
        }
        section.feedback .logos {
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        section.feedback .quotes li {
          padding: 50px;
        }
        section.feedback .nav {
          top: 50%;
        }
        section.feedback .nav.previous {
          left: -24px;
        }
        section.feedback .nav.next {
          right: -24px;
        }
      }
      @media (min-width: 670px) {
        section.feedback .quotes li {
          padding: 40px;
        }
      }
      @media (-webkit-min-device-pixel-ratio: 1.3),
        (-webkit-min-device-pixel-ratio: 1.25),
        (min-resolution: 120dpi) {
        section.feedback .feedbacklogo .video.teespring {
          background-image: url(${props.images.placeHolderImg});
        }
      }
      @media (max-width: 1200px) {
        .container-xl {
          max-width: calc(100% - 40px);
        }
      }
      @media (max-width: 767px) {
        .video-container {
          height: 100%;
          padding: 0;
        }
        .content-wrapper {
          background-image: none;
          margin-top: -80px;
        }
        section.feedback .quotes li {
          padding: 0px 60px 0px 9px;
        }
        .feedbacklogo {
          padding-left: 0;
        }
        section.feedback .quotes {
          text-align: left;
        }
        section.feedback .feedbacklogo .video.teespring {
          margin-left: 35px;
        }
        .video-container video {
          width: 100% !important;
        }
      }
    `}
`

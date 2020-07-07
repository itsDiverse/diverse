import React from "react"
//import "./Module15.module.css"

import { StyledContentWrapper } from "./Module15.styles"

export default props => (
  <StyledContentWrapper theme={props.theme}>
    <div className="content-wrapper">
      <div className="idc-callout">
        <div className="container-xl">
          <div className="callout-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="228"
              height="295"
              viewBox="0 0 228 295"
            >
              <defs>
                <path
                  id="idc-header-b"
                  d="M5.7660306,0.0202635213 L174.08035,0.0202635213 C176.354879,0.0202635213 178.19875,1.8641341 178.19875,4.13866373 L178.19875,228.732371 C178.19875,231.575533 175.893912,233.880371 173.05075,233.880371 L5.7660306,233.880371 C2.92286857,233.880371 0.618030346,231.575533 0.618030346,228.732371 L0.618030346,5.16826378 C0.618030346,2.32510174 2.92286857,0.0202635213 5.7660306,0.0202635213 Z"
                ></path>
                <filter
                  id="idc-header-a"
                  width="135.5%"
                  height="126.9%"
                  x="-17.7%"
                  y="-9.6%"
                  filterUnits="objectBoundingBox"
                >
                  <feOffset
                    dy="4"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                    stdDeviation="4"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0"
                  ></feColorMatrix>
                  <feOffset
                    dy="9"
                    in="SourceAlpha"
                    result="shadowOffsetOuter2"
                  ></feOffset>
                  <feGaussianBlur
                    in="shadowOffsetOuter2"
                    result="shadowBlurOuter2"
                    stdDeviation="9"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="shadowBlurOuter2"
                    result="shadowMatrixOuter2"
                    values="0 0 0 0 0.196078431   0 0 0 0 0.196078431   0 0 0 0 0.364705882  0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(0 .644)">
                  <path
                    fill="#7795F8"
                    d="M5.14800026,0 L173.227974,8.8817842e-16 C175.502504,4.70354105e-16 177.346374,1.84387058 177.346374,4.11840021 L177.346374,228.712108 C177.346374,231.55527 175.041536,233.860108 172.198374,233.860108 L5.14800026,233.860108 C2.30483822,233.860108 -5.39991491e-16,231.55527 -8.8817842e-16,228.712108 L0,5.14800026 C-3.48186929e-16,2.30483822 2.30483822,-1.25407645e-15 5.14800026,-1.77635684e-15 Z"
                  ></path>
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M21.7501807 1.68852717C21.7357005.647902171 20.595384.933847822 20.595384.619850541 20.595384.491355976 20.6243444.463304346 20.738376.463304346 21.2650937.463304346 21.7782361.520312498 22.3058588.520312498 22.7475052.520312498 23.1891516.463304346 23.630798.463304346 23.8588613.463304346 23.902302.491355976 23.902302.60537228 23.902302.947421192 22.8760171.619850541 22.8760171 1.69124184L22.8760171 9.34209779C22.8760171 10.3112364 24.1430355 9.98366572 24.1430355 10.4107744 24.1430355 10.5103125 24.1004998 10.5528423 23.8579563 10.5528423 23.5303416 10.5528423 22.9176477 10.4958342 22.3049538 10.4958342 21.4361412 10.4958342 21.1365818 10.5528423 20.9365739 10.5528423 20.6804552 10.5528423 20.6370146 10.4813559 20.6370146 10.339288 20.6370146 9.92575268 21.7483707 10.3962962 21.7483707 8.98195105L21.7501807 1.68852717zM26.0055525 1.98804619C26.0055525.534790759 24.8371805.992665757 24.8371805.606277172 24.8371805.506739128 24.9512122.464209237 25.0362834.464209237 25.4788348.464209237 25.8915208.521217389 26.318687.521217389 27.2589957.521217389 28.1857291.464209237 29.4111169.464209237 31.9333885.464209237 34.4122195 2.37352988 34.4122195 5.00947824 34.4131245 8.28518475 32.860122 10.547413 28.9124547 10.547413 28.1884442 10.547413 27.4590036 10.4904048 26.732278 10.4904048 26.6037662 10.4904048 25.2362913 10.547413 25.1367399 10.547413 25.0227082 10.547413 24.9946528 10.4904048 24.9946528 10.4053451 24.9946528 10.0777744 26.0064575 10.4343016 26.0064575 9.0805842L26.0055525 1.98804619zM27.1313888 8.48516573C27.1313888 8.71319834 27.0888532 9.39639127 27.2173651 9.52579072 27.6879719 9.99542931 28.7703676 10.1664538 29.4120219 10.1664538 31.4356313 10.1664538 33.3587842 9.0805842 33.3587842 5.79220922 33.3587842 2.62508966 31.2501036.834309779 28.5423043.819831518 27.1847846.819831518 27.1313888 1.04786413 27.1313888 1.71748369L27.1313888 8.48516573zM40.5165331.335714673C43.195372.335714673 43.9365778 1.43244293 44.3501688 1.43244293 44.4642004 1.43244293 44.5492717 1.29037499 44.6913587 1.29037499 44.847926 1.29037499 44.847926 1.5184076 44.8913666 2.4441114 44.920327 3.19969564 45.0488389 3.66933422 44.8062954 3.66933422 44.6352479 3.66933422 44.5347915 3.29923368 44.4777756 3.19969564 43.5953878 1.6749538 42.5835831.748345106 40.7445964.748345106 37.9653011.748345106 36.6258816 2.6006576 36.6258816 5.25017933 36.6258816 7.72958149 38.0512773 10.2089837 40.7889421 10.2089837 43.0261346 10.2089837 44.4225698 8.78377986 44.6370579 8.12773366 44.6603639 8.03249066 44.7391214 7.96090253 44.8361608 7.9467554 44.914696 7.95485111 44.9720407 8.02470533 44.9646727 8.1033016L44.6370579 9.5285054C44.6225777 9.58460866 43.610773 10.6541902 40.4043115 10.6541902 37.4829291 10.6541902 35.3887287 8.64533149 35.3887287 5.69538585 35.3887287 2.74544021 37.5100795.335714673 40.5165331.335714673zM17.8495741 2.1536413L4.47709999 2.1536413C4.31178284 2.35912742 4.16060013 2.57559191 4.02459342 2.80154347L.133036931 2.80154347C.0625616129 2.80154347.00543007912 2.85866731.00543007912 2.92913314.00543007912 2.99959897.0625616129 3.05672281.133036931 3.05672281L14.1046297 3.05672281C13.9835494 2.83236121 13.8478046 2.61622659 13.6982788 2.40972553L17.8504791 2.40972553C17.9209544 2.40972553 17.978086 2.35260169 17.978086 2.28213586 17.978086 2.21167003 17.9209544 2.15454619 17.8504791 2.15454619L17.8495741 2.1536413zM17.8495741 3.8177364L3.53136126 3.8177364C3.45000321 4.04137619 3.38260108 4.26984771 3.32954333 4.50183422L.127606852 4.50183422C.0571315338 4.50183422 0 4.55895806 0 4.62942389 0 4.69988973.0571315338 4.75701357.127606852 4.75701357L14.7037484 4.75701357C14.6615777 4.52607332 14.6053626 4.29791899 14.535416 4.07382064L17.8531942 4.07382064C17.8987837 4.07382064 17.9409102 4.04950219 17.9637049 4.01002581 17.9864997 3.97054942 17.9864997 3.92191251 17.9637049 3.88243612 17.9409102 3.84295973 17.8987837 3.81864128 17.8531942 3.81864129L17.8495741 3.8177364zM17.8495741 5.37233965L3.19741141 5.37233965C3.1871546 5.51531248 3.18172452 5.65979346 3.18112118 5.80578259 3.18112118 5.92643476 3.18474123 6.04708693 3.19198133 6.16773911L.127606852 6.16773911C.0571315338 6.16773911 0 6.22486295 0 6.29532878 0 6.36579461.0571315338 6.42291845.127606852 6.42291845L14.7634793 6.42291845C14.7850397 6.21912161 14.7959147 6.01433593 14.7960598 5.80940215 14.7960598 5.74967933 14.7960598 5.6899565 14.7960598 5.62842389L17.8531942 5.62842389C17.9236695 5.62842389 17.980801 5.57130005 17.980801 5.50083422 17.980801 5.43036839 17.9236695 5.37324454 17.8531942 5.37324454L17.8495741 5.37233965zM17.8495741 6.96404345L3.30058291 6.96404345C3.36030048 7.25809552 3.44290812 7.54703209 3.5476515 7.82821464L.127606852 7.82821464C.0820173096 7.82821464.0398908319 7.85253309.0170960584 7.89200947-.00569871505 7.93148586-.00569871505 7.98012277.0170960584 8.01959916.0398908319 8.05907554.0820173096 8.083394.127606852 8.08339399L14.3363131 8.08339399C14.4558166 7.80345771 14.5529567 7.51449707 14.6268223 7.2192228L17.8540992 7.2192228C17.9245745 7.2192228 17.981706 7.16209895 17.981706 7.09163312 17.981706 7.02116729 17.9245745 6.96404345 17.8540992 6.96404345L17.8495741 6.96404345zM17.8495741 8.55665214L3.87345623 8.55665214C4.05368237 8.88868359 4.26585577 9.20235489 4.50696542 9.49321464L.127606852 9.49321464C.0571315338 9.49321464 0 9.55033848 0 9.62080431 0 9.69127014.0571315338 9.74839398.127606852 9.74839398L13.2557274 9.74839398C13.5219102 9.46071851 13.7584094 9.14694454 13.9616377 8.81183149L17.8531942 8.81183149C17.8987837 8.81183149 17.9409102 8.78751304 17.9637049 8.74803666 17.9864997 8.70856027 17.9864997 8.65992336 17.9637049 8.62044697 17.9409102 8.58097059 17.8987837 8.55665213 17.8531942 8.55665214L17.8495741 8.55665214zM17.8495741 10.1465462L9.09266699 10.1465462 9.06913664 10.1465462 5.13323451 10.1465462C7.2197971 11.9994898 10.3296813 12.1059002 12.538052 10.3999157L17.8495741 10.3999157C17.9200494 10.3999157 17.9771809 10.3427919 17.9771809 10.272326 17.9771809 10.2018602 17.9200494 10.1447364 17.8495741 10.1447364L17.8495741 10.1465462zM.127606852 1.46592391L8.88089391 1.46592391 8.90442425 1.46592391 12.8430414 1.46592391C12.5960199 1.24656055 12.3308019 1.04858201 12.0502499.874124997L17.8495741.874124997C17.9200494.874124997 17.977181.817001154 17.977181.746535323 17.977181.676069492 17.9200494.61894565 17.8495741.61894565L11.5959333.61894565C9.6008575-.381705376 7.20881526-.15097472 5.44184399 1.21255434L.127606852 1.21255434C.0571315338 1.21255434 0 1.26967819 0 1.34014402 0 1.41060985.0571315338 1.46773369.127606852 1.46773369L.127606852 1.46592391z"
                    transform="translate(12.851 12.85)"
                  ></path>
                </g>
                <g transform="translate(32.165 34.108)">
                  <use
                    fill="#000"
                    filter="url(#idc-header-a)"
                    xlinkHref="#idc-header-b"
                  ></use>
                  <use fill="#FFF" xlinkHref="#idc-header-b"></use>
                  <g fill-rule="nonzero" transform="translate(21.232 14.777)">
                    <path
                      fill="#C1CBD7"
                      d="M97.6659417,102.153179 L115.945648,102.153179 C116.938706,102.153179 117.743738,102.958211 117.743738,103.951268 L117.743738,103.951268 C117.743738,104.944326 116.938706,105.749358 115.945648,105.749358 L97.6659417,105.749358 C96.6728843,105.749358 95.8678522,104.944326 95.8678522,103.951268 L95.8678522,103.951268 C95.8678522,102.958211 96.6728843,102.153179 97.6659417,102.153179 Z"
                    ></path>
                    <path
                      fill="#F0F3F7"
                      d="M106.673659 132.991874L135.208527 132.991874C136.201585 132.991874 137.006617 133.796907 137.006617 134.789964L137.006617 134.789964C137.006617 135.783021 136.201585 136.588054 135.208527 136.588054L106.673659 136.588054C105.680602 136.588054 104.87557 135.783021 104.87557 134.789964L104.87557 134.789964C104.87557 133.796907 105.680602 132.991874 106.673659 132.991874zM106.673659 143.27144L135.208527 143.27144C136.201585 143.27144 137.006617 144.076472 137.006617 145.069529L137.006617 145.069529C137.006617 146.062587 136.201585 146.867619 135.208527 146.867619L106.673659 146.867619C105.680602 146.867619 104.87557 146.062587 104.87557 145.069529L104.87557 145.069529C104.87557 144.076472 105.680602 143.27144 106.673659 143.27144zM106.374924 122.712309L134.909792 122.712309C135.902849 122.712309 136.707881 123.517341 136.707881 124.510399L136.707881 124.510399C136.707881 125.503456 135.902849 126.308488 134.909792 126.308488L106.374924 126.308488C105.381867 126.308488 104.576835 125.503456 104.576835 124.510399L104.576835 124.510399C104.576835 123.517341 105.381867 122.712309 106.374924 122.712309zM106.534165 112.432744L135.069033 112.432744C136.06209 112.432744 136.867122 113.237776 136.867122 114.230834L136.867122 114.230834C136.867122 115.223891 136.06209 116.028923 135.069033 116.028923L106.534165 116.028923C105.541107 116.028923 104.736075 115.223891 104.736075 114.230834L104.736075 114.230834C104.736075 113.237776 105.541107 112.432744 106.534165 112.432744zM97.4763732 112.432744L97.4763732 112.432744C98.3647348 112.432744 99.0848942 113.152904 99.0848942 114.041265L99.0848942 114.420402C99.0848942 115.308764 98.3647348 116.028923 97.4763732 116.028923L97.4763732 116.028923C96.5880116 116.028923 95.8678522 115.308764 95.8678522 114.420402L95.8678522 114.041265C95.8678522 113.152904 96.5880116 112.432744 97.4763732 112.432744zM97.4763732 122.712309L97.4763732 122.712309C98.3647348 122.712309 99.0848942 123.432469 99.0848942 124.32083L99.0848942 124.699967C99.0848942 125.588329 98.3647348 126.308488 97.4763732 126.308488L97.4763732 126.308488C96.5880116 126.308488 95.8678522 125.588329 95.8678522 124.699967L95.8678522 124.32083C95.8678522 123.432469 96.5880116 122.712309 97.4763732 122.712309zM97.4763732 132.991874L97.4763732 132.991874C98.3647348 132.991874 99.0848942 133.712034 99.0848942 134.600395L99.0848942 134.979533C99.0848942 135.867894 98.3647348 136.588054 97.4763732 136.588054L97.4763732 136.588054C96.5880116 136.588054 95.8678522 135.867894 95.8678522 134.979533L95.8678522 134.600395C95.8678522 133.712034 96.5880116 132.991874 97.4763732 132.991874zM97.4763732 143.27144L97.4763732 143.27144C98.3647348 143.27144 99.0848942 143.991599 99.0848942 144.879961L99.0848942 145.259098C99.0848942 146.147459 98.3647348 146.867619 97.4763732 146.867619L97.4763732 146.867619C96.5880116 146.867619 95.8678522 146.147459 95.8678522 145.259098L95.8678522 144.879961C95.8678522 143.991599 96.5880116 143.27144 97.4763732 143.27144z"
                    ></path>
                    <path
                      fill="#C1CBD7"
                      d="M102.239963.635320992L135.21058.635320992C136.203637.635320992 137.008669 1.44035309 137.008669 2.43341052L137.008669 2.43341052C137.008669 3.42646794 136.203637 4.23150004 135.21058 4.23150004L102.239963 4.23150004C101.246906 4.23150004 100.441874 3.42646794 100.441874 2.43341052L100.441874 2.43341052C100.441874 1.44035309 101.246906.635320992 102.239963.635320992zM1.79808953 102.153179L60.5199704 102.153179C61.5130278 102.153179 62.3180599 102.958211 62.3180599 103.951268L62.3180599 103.951268C62.3180599 104.944326 61.5130278 105.749358 60.5199704 105.749358L1.79808953 105.749358C.805032102 105.749358 1.2161446e-16 104.944326 0 103.951268L0 103.951268C-1.2161446e-16 102.958211.805032102 102.153179 1.79808953 102.153179zM1.79808953 159.33326L44.5273156 159.33326C45.520373 159.33326 46.3254051 160.138292 46.3254051 161.13135L46.3254051 161.13135C46.3254051 162.124407 45.520373 162.929439 44.5273156 162.929439L1.79808953 162.929439C.805032102 162.929439 1.2161446e-16 162.124407 0 161.13135L0 161.13135C-1.2161446e-16 160.138292.805032102 159.33326 1.79808953 159.33326z"
                    ></path>
                    <path
                      fill="#F0F3F7"
                      d="M1.79808953 113.71769L72.8253427 113.71769C73.8184001 113.71769 74.6234322 114.522722 74.6234322 115.515779L74.6234322 115.515779C74.6234322 116.508837 73.8184001 117.313869 72.8253427 117.313869L1.79808953 117.313869C.805032102 117.313869 1.2161446e-16 116.508837 0 115.515779L0 115.515779C-1.2161446e-16 114.522722.805032102 113.71769 1.79808953 113.71769zM1.79808953 170.897771L72.8253427 170.897771C73.8184001 170.897771 74.6234322 171.702803 74.6234322 172.695861L74.6234322 172.695861C74.6234322 173.688918 73.8184001 174.49395 72.8253427 174.49395L1.79808953 174.49395C.805032102 174.49395 1.2161446e-16 173.688918 0 172.695861L0 172.695861C-1.2161446e-16 171.702803.805032102 170.897771 1.79808953 170.897771zM1.79808953 134.27682L72.8253427 134.27682C73.8184001 134.27682 74.6234322 135.081852 74.6234322 136.07491L74.6234322 136.07491C74.6234322 137.067967 73.8184001 137.872999 72.8253427 137.872999L1.79808953 137.872999C.805032102 137.872999 1.2161446e-16 137.067967 0 136.07491L0 136.07491C-1.2161446e-16 135.081852.805032102 134.27682 1.79808953 134.27682zM1.79808953 144.556385L72.8253427 144.556385C73.8184001 144.556385 74.6234322 145.361417 74.6234322 146.354475L74.6234322 146.354475C74.6234322 147.347532 73.8184001 148.152564 72.8253427 148.152564L1.79808953 148.152564C.805032102 148.152564 1.2161446e-16 147.347532 0 146.354475L0 146.354475C-1.2161446e-16 145.361417.805032102 144.556385 1.79808953 144.556385zM1.79808953 192.099374L38.7366399 192.099374C39.7296973 192.099374 40.5347294 192.904406 40.5347294 193.897464L40.5347294 193.897464C40.5347294 194.890521 39.7296973 195.695553 38.7366399 195.695553L1.79808953 195.695553C.805032102 195.695553 1.2161446e-16 194.890521 0 193.897464L0 193.897464C-1.2161446e-16 192.904406.805032102 192.099374 1.79808953 192.099374zM1.79808953 123.997255L72.8253427 123.997255C73.8184001 123.997255 74.6234322 124.802287 74.6234322 125.795344L74.6234322 125.795344C74.6234322 126.788402 73.8184001 127.593434 72.8253427 127.593434L1.79808953 127.593434C.805032102 127.593434 1.2161446e-16 126.788402 0 125.795344L0 125.795344C-1.2161446e-16 124.802287.805032102 123.997255 1.79808953 123.997255zM1.79808953 181.819809L72.8253427 181.819809C73.8184001 181.819809 74.6234322 182.624841 74.6234322 183.617899L74.6234322 183.617899C74.6234322 184.610956 73.8184001 185.415988 72.8253427 185.415988L1.79808953 185.415988C.805032102 185.415988 1.2161446e-16 184.610956 0 183.617899L0 183.617899C-1.2161446e-16 182.624841.805032102 181.819809 1.79808953 181.819809z"
                    ></path>
                  </g>
                  <g transform="matrix(-1 0 0 1 158.29 29.283)">
                    <path
                      fill="#ECFAFF"
                      fill-rule="nonzero"
                      d="M7.53049478,0 L129.466232,8.8817842e-16 C133.625209,-1.46514693e-14 136.996727,3.37151735 136.996727,7.53049478 L136.996727,65.420566 C136.996727,69.5795434 133.625209,72.9510608 129.466232,72.9510608 L7.53049478,72.9510608 C3.37151735,72.9510608 3.1738631e-15,69.5795434 2.66453526e-15,65.420566 L8.8817842e-16,7.53049478 C3.78850581e-16,3.37151735 3.37151735,7.63991759e-16 7.53049478,0 Z"
                    ></path>
                    <path
                      fill="#87BBFD"
                      d="M96.3083774,47.7778074 L118.457168,47.7778074 C120.163065,47.7778074 121.545968,49.1607103 121.545968,50.8666076 L121.545968,72.9510608 L93.2195772,72.9510608 L93.2195772,50.8666076 C93.2195772,49.1607103 94.6024801,47.7778074 96.3083774,47.7778074 Z"
                    ></path>
                    <polygon
                      fill="#87BBFD"
                      points="54.593 45.723 82.919 45.723 82.919 72.951 54.593 72.951"
                    ></polygon>
                    <rect
                      width="28.326"
                      height="25.173"
                      x="15.451"
                      y="47.778"
                      fill="#87BBFD"
                    ></rect>
                    <polygon
                      fill="#7795F8"
                      points="15.451 26.201 43.777 26.201 43.777 47.778 15.451 47.778"
                    ></polygon>
                    <path
                      fill="#7795F8"
                      d="M57.6814807,26.2007331 L79.8302713,26.2007331 C81.5361685,26.2007331 82.9190714,27.583636 82.9190714,29.2895332 L82.9190714,47.7778074 L54.5926806,47.7778074 L54.5926806,29.2895332 C54.5926806,27.583636 55.9755835,26.2007331 57.6814807,26.2007331 Z"
                    ></path>
                    <path
                      fill="#6772E5"
                      d="M18.5395588,15.4121959 L40.6883494,15.4121959 C42.3942466,15.4121959 43.7771495,16.7950989 43.7771495,18.5009961 L43.7771495,26.2007331 L15.4507587,26.2007331 L15.4507587,18.5009961 C15.4507587,16.7950989 16.8336616,15.4121959 18.5395588,15.4121959 Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="callout-content">
              <span>
                {props.data.text.before}
                <a href={props.data.text.link.url}>
                  {props.data.text.link.text}
                </a>{" "}
                {props.data.text.after}{" "}
              </span>
            </div>
          </div>
        </div>
        {props.theme.backgroundLayout && (
          <div className="common-idc-grid">
            <div className="backgroundContainer">
              <div className="grid">
                <div className="background"></div>
              </div>
            </div>
            <div className="idcbgContainer">
              <div className="grid">
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
                <span className="idcbg"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </StyledContentWrapper>
)

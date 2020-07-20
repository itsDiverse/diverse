import styled, { css } from "styled-components"

export const StyledContentWrapper = styled.div`
  ${props =>
    css`
       {
        #sky {
          position: fixed !important;
          overflow: inherit !important;
          top: 50px !important;
        }
        #sky img {
        -webkit-animation-name: spin !important;
        -webkit-animation-duration: 4000ms !important;
        -webkit-animation-iteration-count: infinite !important;
        -webkit-animation-timing-function: linear !important;

        -moz-animation-name: spin;
        -moz-animation-duration: 4000ms;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;

        -ms-animation-name: spin;
        -ms-animation-duration: 4000ms;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;

        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @-ms-keyframes spin { 
          from { 
              -ms-transform: rotate(0deg); 
          } to { 
              -ms-transform: rotate(360deg); 
          }
      }
      @-moz-keyframes spin { 
          from { 
              -moz-transform: rotate(0deg); 
          } to { 
              -moz-transform: rotate(360deg); 
          }
      }
      @-webkit-keyframes spin { 
          from { 
              -webkit-transform: rotate(0deg); 
          } to { 
              -webkit-transform: rotate(360deg); 
          }
      }
      @keyframes spin { 
          from { 
              transform: rotate(0deg); 
          } to { 
              transform: rotate(360deg); 
          }
      }
      }
    `}
`

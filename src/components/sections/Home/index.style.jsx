import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeStyle = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  h1 {
    max-width: 875px;
    opacity: 0;
    .line {
      display: inline-block;
      overflow: hidden;
      .word {
        transform: translate3D(0, 100px, 0);
      }
    }
    .underline {
      width: 0;
      opacity: 0;
    }
  }
  .visualization-popup {
    .button-container-popup {
      position: absolute;
      bottom: 10%; right: 7.5%;
      ${down('md')} {
        top: initial !important;
        right: 30px !important;
        bottom: 30px !important; 
        left: initial !important;
      }
    }
    .title-first-icon {
      padding-bottom: 35px;
      ${down('md')} {
        padding-bottom: 17.5px;
      }
    }
    .button-container-popup.open-button-container-popup {
      p {
        opacity: 0;          
        transform: translate3D(-20px, 0, 0);
      }
      .open-button-popup {
        .circle-before {
          transform: translate3D(-50%, -50%, 0) scale3D(0,0,0);
        }
        .circle-after {
          transform: translate3D(-50%, -50%, 0) scale3D(0,0,0);
        }
        svg {
          opacity: 0;
          transform: rotate3D(0,0,1, -189deg);
        }
      }
    }
  }
`
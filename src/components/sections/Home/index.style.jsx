import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeStyle = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  z-index: 1;
  ${down('xs')} {
    height: calc(80vh - 100px) !important;
  }
  .titles {
    position: relative;
    width: 738px;
    opacity: 0;
    padding-top: 150px;
  }
  h1 {
    padding-bottom: 30px;
    .media-hover-container {
      display: inline-block;
    }
  }
  h2 {
    max-width: 538px;
  }
  h1, h2 {
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
    .pricing {
      padding-bottom: 35px;
      ${down('md')} {
        padding-bottom: 17.5px;
      }
    }
    .panel-container-popup .children-container-popup {
      max-width: 425px;
    }
    .description-visualization-popup {
      display: flex;
      justify-content: space-between;
      gap: 62px;
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
          transform: translate3D(-50%, -50%, 0) rotate3D(0,0,1, -189deg);
        }
      }
    }
  }
`
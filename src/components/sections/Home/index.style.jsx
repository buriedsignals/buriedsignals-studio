import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeStyle = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  h1 {
    max-width: 875px;
    .line {
      display: inline-block;
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
  }
`
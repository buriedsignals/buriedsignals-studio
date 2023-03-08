import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeTemplateStyle = styled.div`
  .canvasParent.is-canvas {
    position: relative;
    // background: linear-gradient(90deg, #F5F2ED 44px, transparent 1%) center, linear-gradient(#F5F2ED 44px, transparent 1%) center, #4DAB83;
    // background-size: 50px 50px;
  }
  .canvasParent {
    .toto {
      position: absolute;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
    }
  }
`
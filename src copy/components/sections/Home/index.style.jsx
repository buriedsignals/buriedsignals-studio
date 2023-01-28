import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 68px);
  padding: 0 103px;
  ${down('md')} {
    align-items: flex-end;
    width: fit-content;
    height: 50vh;
    padding: 16.755vw 11.977vw 9.814vw;
  }
  h1 {
    max-width: 875px;
  }
  .visualization-popup {
    position: absolute;
    bottom: 10%; left: 65%;
    ${down('md')} {
      position: relative;
      bottom: 0; left: 0;
      padding: 11.977vw 11.977vw 0;
    }
    .title-first-icon {
      color: var(--color-white);
    }
    .description-visualization-popup {
      padding: 35px 0 0 68px;
      p {
        padding-bottom: 30px;
        color: var(--color-white);
      }
    }
  }
`
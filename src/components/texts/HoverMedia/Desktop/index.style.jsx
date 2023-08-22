import styled from "styled-components";

export const HoverMediaDesktopStyle = styled.div`
  position: relative;
  .media-hover {
    position: fixed;
    top: 0; left: 0;
    width: 365px;
    opacity: 0;
    pointer-events: none;
    z-index: 50;
    // transition: opacity .05s cubic-bezier(0.12, 0, 0.39, 0), transform .085s linear;
  }
  &:hover {
    .media-hover {
      opacity: 1;
      // transition: opacity .05s cubic-bezier(0.12, 0, 0.39, 0), transform .085s linear;
    }
  }
`
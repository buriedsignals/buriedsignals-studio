import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.div`
  &.footer {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--color-green02);    
      z-index: 1;
    }
  }
`
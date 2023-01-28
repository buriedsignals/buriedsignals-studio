import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-green02);
  }
  .visu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 61%;
    & > * {
      width: 33%;
    }
  }
  .twitter {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
  .legals {
    p {
      max-width: 311px;
      text-align: right;
      a {
        color: var(--color-black);
        text-decoration: underline;
      }
    }
  }
`
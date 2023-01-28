import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${down('md')} {
    flex-direction: column;
  }
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
    padding-top: 20px;
    padding-bottom: 20px;
    ${down('md')} {
      width: 100%;
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
    padding-top: 20px;
    padding-bottom: 20px;
    ${down('md')} {
      width: 100%;
      background-color: var(--color-green01);
    }
    p {
      color: var(--color-white);
      text-align: center;
      a {
        color: var(--color-white);
        text-decoration: underline;
      }
    }
  }
`
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 42px 20px;
  ${down('md')} {
    padding: 1.782vw 4.403vw 2.097vw;
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
  & > * {
    width: 33%;
  }
  .logo {
    svg {
      ${down('md')} {
        width: 11.321vw;
        height: 2.9355vw;
      }
    }
  }
  .twitter {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 5px;
      ${down('md')} {
        margin-left: 0.5245vw;
      }
    }
  }
  .legals {
    max-width: 311px;
    text-align: right;
    ${down('md')} {
      max-width: 34vw;
    }
    a {
      color: var(--color-black);
      text-decoration: underline;
    }
  }
`
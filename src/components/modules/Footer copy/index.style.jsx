import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 42px;
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
    ${down('md')} {
      width: 100%;
    }
    & > * {
      width: 33%;
      ${down('md')} {
        width: 50%;
      }
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
    ${down('md')} {
      width: 100%;
      background-color: var(--color-green02);
    }
    p {
      max-width: 311px;
      text-align: right;
      ${down('md')} {
        max-width: 245px;
        text-align: right;
      }
      a {
        color: var(--color-black);
        text-decoration: underline;
      }
    }
  }
`
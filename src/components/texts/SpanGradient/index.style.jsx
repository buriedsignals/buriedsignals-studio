import { down } from "styled-breakpoints";
import styled from "styled-components";

export const SpanGradientStyle = styled.span`
  position: relative;
  // display: block;
  width: fit-content;
  background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  .word {
    background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &.can-hover {
    background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
    background-size: 300% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: background 0.95s cubic-bezier(0.61, 1, 0.88, 1);
    .word {
      background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
      background-size: 300% 100%;
      background-position: 100% 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      transition: background 0.95s cubic-bezier(0.61, 1, 0.88, 1);
    }
    .underline {
      position: absolute;
      bottom: -5%; left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
      background-size: 300% 100%;
      background-position: 0 0;
      transition: background .95s cubic-bezier(0.61, 1, 0.88, 1);
      ${down('md')} {
        height: 2px;
      }
    }
    &.is-revert {
      background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
      background-size: 300% 100%;
      background-position: 0 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      transition: background 0.95s cubic-bezier(0.61, 1, 0.88, 1);
      .word {
        background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
        background-size: 300% 100%;
        background-position: 0 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        transition: background 0.95s cubic-bezier(0.61, 1, 0.88, 1);
      }
      .underline {
        position: absolute;
        bottom: -5%; left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-beige) 51%, var(--color-beige) 100%);
        background-size: 300% 100%;
        background-position: 100% 0;
        transition: background .95s cubic-bezier(0.61, 1, 0.88, 1);
        ${down('md')} {
          height: 2px;
        }
      }
    } 
  }
  &:hover {
    &.can-hover {
      background-position: 0 0;
      transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
      .word {
        background-position: 0 0;
        transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
      }
      .underline {
        background-position: 100% 0;
        transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
      }
      &.is-revert {
        background-position: 100% 0;
        transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
        .word {
          background-position: 100% 0;
          transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
        }
        .underline {
          background-position: 0 0;
          transition: background 1s cubic-bezier(0.61, 1, 0.88, 1);
        }
      }
    }
  }
`
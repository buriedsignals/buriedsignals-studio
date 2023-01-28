import styled from "styled-components";

export const SpanGradientStyle = styled.span`
  position: relative;
  background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  &.can-hover {
    background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
    background-size: 300% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.45s ease-out;
    &::before {
      content: '';
      position: absolute;
      bottom: -5%; left: 0;
      display: block;
      width: 100%;
      height: 5%;
      background: linear-gradient(90deg, var(--color-green02) 0%, var(--color-green03) 50%, var(--color-black) 51%, var(--color-black) 100%);
      background-size: 300% 100%;
      background-position: 0 0;
      transition: all .45s ease-out;
    }
  }
  &:hover {
    &.can-hover {
      background-position: 0 0;
      transition: all .5s ease-out;
      &::before {
        background-position: 100% 0;
        transition: all .5s ease-out;
      }
    }
  }
`
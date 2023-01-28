import styled from "styled-components";

export const LetterWStyle = styled.svg`
  path {
    fill: white;
  }
  &.is-colored {
    path {
      &:nth-child(1) {
        fill: #71F2BA;
      }
      &:nth-child(2) {
        fill: #5AC396;
      }
      &:nth-child(3) {
        fill: #6AE0AD;
      }
      &:nth-child(4) {
        fill: #408466;
      }
    }
  }
`
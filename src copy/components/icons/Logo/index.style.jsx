import styled from "styled-components";

export const LogoStyle = styled.svg`
  path {
    fill: white;
  }
  &.is-colored {
    path {
      fill: black;
      &:nth-child(1) {
        fill: #6AE0AD;
      }
      &:nth-child(2) {
        fill: #408466;
      }
      &:nth-child(3) {
        fill: #5AC496;
      }
      &:nth-child(4) {
        fill: #71F2BA;
      }
      &:nth-child(5) {
        fill: #377A5D;
      }
    }
  }
`
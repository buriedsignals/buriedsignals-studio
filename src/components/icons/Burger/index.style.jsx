import styled from "styled-components";

export const BurgerStyle = styled.svg`
  rect {
    fill: white;
  }
  &.is-colored {
    rect {
      &:nth-child(1) {
        fill: #5AC396;
      }
      &:nth-child(2) {
        fill: #71F2BA;
      }
      &:nth-child(3) {
        fill: #377A5D;
      }
    }
  }
`
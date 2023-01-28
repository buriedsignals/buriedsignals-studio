import styled from "styled-components";

export const ArrowStyle = styled.svg`
  rect {
    fill: white;
  }
  &.is-colored {
    rect {
      &:nth-child(1) {
        fill: #71F2BA;
      }
      &:nth-child(2) {
        fill: #6AE0AD;
      }
      &:nth-child(3) {
        fill: #408466;
      }
    }
  }
`
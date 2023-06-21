import styled from "styled-components";

export const LogoStyle = styled.svg`
  path {
    fill: white;
  }
  &.is-colored {
    path {
      fill: black;
      &.figure {
        fill: #5AC396;
      }
    }
  }
`
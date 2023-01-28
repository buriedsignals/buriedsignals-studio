import styled from "styled-components";
import { down } from "styled-breakpoints";

export const AccordionStyle = styled.div`
  .button-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background: var(--color-white);
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    h2 {
      display: flex;
      padding: 20px 0 16px;
    }
    & > svg {
      margin-right: 20px;
      transform: rotate3D(0, 0, 1, 180deg);
      transform-origin: center;
      transition: transform 0.2s ease;
    }
    &.is-active {
      & > svg {
        transform: rotate3D(0, 0, 1, 0deg);
        transition: transform 0.2s ease;
      }
    }
  }
  .panel-container {
    display: none;
    padding: 35px 16px 0 68px;
    color: var(--color-white);
    p {
      padding-bottom: 30px;
    }
    &.is-active {
      display: block;
    }
  }
`
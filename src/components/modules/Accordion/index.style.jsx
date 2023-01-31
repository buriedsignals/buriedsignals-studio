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
      ${down('md')} {
        padding: 10px 0 8px;
      }
      ${down('sm')} {
        font-size: 25px;
      }
      svg {
        &.letter-w {
          ${down('sm')} {
            width: 32px;
            height: 22px;
          }
        } 
        &.letter-h {
          ${down('sm')} {
            width: 24px;
            height: 22px;
          }
        } 
      }
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
    // display: none;
    max-height: 0px;
    overflow: hidden;
    transition: max-height .75s cubic-bezier(0.45, 0, 0.55, 1);
    .children-container {
      padding: 35px 16px 0 68px;
      color: var(--color-white);
      ${down('md')} {
        padding: 15px 0 0;
      }
    }
    p {
      padding-bottom: 30px;
      ${down('md')} {
        padding-bottom: 15px;
      }
      ${down('sm')} {
        font-size: 14px;
      }
    }
    &.is-active {
      // display: block;
      max-height: 1000px;
      transition: max-height 2s cubic-bezier(0.45, 0, 0.55, 1) 0.75s;
    }
  }
`
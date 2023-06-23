import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderStyle = styled.div`
  .header-mobile-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 20px;
    .logo, .menu {
      position: relative;
      z-index: 2;
    }
    .menu {
      &.is-open {
        transform: rotate3d(0, 0, 1, 45deg);
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
    .panel-transition {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 0;
      background-color: var(--color-beige);
      box-shadow: 2px 2px 100px #a8a49e;
      transition: all 1.2s cubic-bezier(0.64, 0, 0.78, 0);
      &.is-open {
        height: 100vh;
        transition: all 1.2s cubic-bezier(0.64, 0, 0.78, 0);
      }
    }
    .pages {
      position: fixed;
      top: 0; left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 47px;
      width: 100vw;
      height: 100vh;
      background-color: var(--color-beige);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 1s linear;
      &.is-open {
        opacity: 1;
        visibility: initial;
        pointer-events: initial;
        transition: all .75s linear 1.2s;
      }
      .page {
        a {
          position: relative;
          text-transform: uppercase;
          &::before, &::after {
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            display: block;
            width: 0;
            height: 2.5px;
            background-color: var(--color-black);
            transform: translate3D(0, -50%, 0);
            transition: width 0.25s ease-in;
          }
          &::before {
            left: -10px;
          }
          &::after {
            right: -10px;
          }
          &.is-active {
            color: var(--color-green01);
            &::before, &::after {
              width: 4px;
              background-color: var(--color-green01);
            }
          }
          &:hover {
            &::before, &::after {
              width: 100%;
              transition: width 0.25s ease-out;
            }
          }
        }
      }
    }
    .external {
      position: relative;
      display: inline-block;
      background-color: var(--color-black);
      border: 1px solid var(--color-black);
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 1s linear, background-color 0.25s ease-in, border 0.25s ease-in;
      &.is-open {
        opacity: 1;
        visibility: initial;
        pointer-events: initial;
        transition: all .75s linear 1.2s;
      }
      .link-container {
        display: flex;
        align-items: center;
        padding: 12px;
        svg {
          path {
            transition: all 0.25s ease-in;
          }
        }
        p {
          color: var(--color-white);
          text-transform: uppercase;
          transition: all 0.25s ease-in;
        }
        & > *:not(:first-child) {
          margin-left: 10px;
        }
      }
      &:hover {
        background-color: inherit;
        border: 1px solid var(--color-black);
        transition: all 0.25s ease-out;
        .link-container {
          p {
            color: var(--color-black);
            transition: all 0.25s ease-out;
          }
        }
      }
    }
  }
`
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderStyle = styled.div`
  .header-desktop-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 20px;
    .logo {
      position: relative;
    }
    .pages {
      display: flex;
      align-items: center;
      column-gap: 47px;
      .page {
        a {
          position: relative;
          text-transform: uppercase;
          &::before {
            content: '';
            position: absolute;
            bottom: -25%; left: 50%;
            display: block;
            width: 0;
            height: 1.5px;
            background-color: var(--color-black);
            transform: translate3D(-50%, 0, 0);
            transition: width 0.15s ease-in, height 0.15s ease-in 0.15s, bottom 0.15s ease-in 0.15s;
            .theme-dark & {
              background-color: var(--color-white);
            }
          }
          &.is-active {
            color: var(--color-green01);
            .theme-dark & {
              color: var(--color-white);
            }
            &::before {
              bottom: -45%;
              width: 4px;
              height: 4px;
              background-color: var(--color-green01);
              .theme-dark & {
                background-color: var(--color-white);
              }
            }
            &:hover {
              &::before {
                bottom: -25%;
                transition: width 0.15s ease-out 0.15s, height 0.15s ease-out, bottom 0.15s ease-out;
              }
            }
          }
          &:hover {
            &::before {
              width: 100%;
              height: 1.5px;
              transition: width 0.15s ease-out;
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
        transition: all 0.25s ease-in;
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
  }
`
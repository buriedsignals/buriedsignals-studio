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
            transition: width 0.25s ease-in;
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
              width: 4px;
              background-color: var(--color-green01);
              .theme-dark & {
                background-color: var(--color-white);
              }
            }
          }
          &:hover {
            &::before {
              width: 100%;
              transition: width 0.25s ease-out;
            }
          }
        }
      }
    }
  }
`
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  z-index: 30;
  opacity: 0;
  top: -66px;
  transform: translateY(-10px);
  transition: top 0.25s ease;
  &.is-stick {
    top: 0;
    transition: top 0.25s ease;
  }
  ${down('md')} {
    top: -56px;
    transition: top 0.25s ease;
  }
  .theme-light & {
    & > div {
      background: var(--color-beige);
    }
  }
  .theme-dark & {
    & > div {
      background: var(--color-black);
    }
  }
  &.header-light {
    .container {
      .pages {
        .page {
          a {
            color: var(--color-white);
            &::before {
              background-color: var(--color-white);
            }
            &.is-active {
              color: var(--color-white);
              &::before {
                background-color: var(--color-white);
              }
            }
          }
        }
      }
    }
  }
  &.header-dark {
    .container {
      .pages {
        .page {
          a {
            color: var(--color-black);
            &::before {
              background-color: var(--color-black);
            }
            &.is-active {
              color: var(--color-green01);
              &::before {
                background-color: var(--color-green01);
              }
            }
          }
        }
      }
    }
  }
  .container {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px 60px 0;
    z-index: 30;
    ${down('md')} {
      padding: 4.193vw 6.515vw 0;
    }
    .logo {
      svg {
        ${down('md')} {
          width: 11.321vw;
          height: 2.9355vw;
        }
      }
    }
    .pages {
      display: flex;
      column-gap: 47px;
      ${down('md')} {
        column-gap: 6.267vw;
      }
      .page {
        a {
          position: relative;
          color: var(--color-black);
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
          }
          &.is-active {
            color: var(--color-green01);
            &::before {
              width: 4px;
              background-color: var(--color-green01);
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
  &.is-hide {
    opacity: 0;
  }
`
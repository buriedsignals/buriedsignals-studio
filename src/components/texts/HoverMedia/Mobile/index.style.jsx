import styled from "styled-components";

export const HoverMediaMobileStyle = styled.div`
  position: relative;
  .panel {
    position: fixed;
    top: 0; left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 100px 30px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.5s ease-in;
    z-index: 3;
    &.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: initial;
      transition: all 0.5s ease-out;
    }
    .media-hover {
      width: 100%;
    }
    .background {
      content: '';
      display: block;
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      .theme-light & {
        background: #F5F2EDee;
      }
      .theme-dark & {
        background: #000000ee;
      }
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      .link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 70px;
        padding: 7.5px 15px;
        border-radius: 5px;
        .theme-light & {
          border: 1px solid var(--color-black);
        }
        .theme-dark & {
          border: 1px solid var(--color-white);
        }
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          line-height: 1;
          .theme-light & {
            color: var(--color-black) !important;
          }
          .theme-dark & {
            color: var(--color-white) !important;
          }
          svg {
            width: 14px;
            height: 14px;
            margin-top: -2px;
          }
        }
        &.external-link {
          .theme-light & {
            background-color: var(--color-black) !important;
          }
          .theme-dark & {
            background-color: var(--color-white) !important;
          }
          p {
            .theme-light & {
              color: var(--color-white) !important;
            }
            .theme-dark & {
              color: var(--color-black) !important;
            }
            svg {
              path {
                .theme-light & {
                  stroke: var(--color-white);
                }
                .theme-dark & {
                  stroke: var(--color-black);
                }
              }
            }
          }
        }
      }
    }
  }
`
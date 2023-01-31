import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PopupStyle = styled.div`
  &.popup {
    .button-container-popup {
      display: flex;
      align-items: center;
      column-gap: 20px;
      .button-popup {
        position: relative;
        width: 109px;
        height: 109px;
        ${down('md')} {
          order: 2;
          width: 77.5px;
          height: 77.5px;
        }
        .circle {
          position: absolute;
          top: 50%; left: 50%;
          content: '';
          display: block;
          border-radius: 100%;
          transform: translate3D(-50%, -50%, 0);
          pointer-events: none;
        }
        .circle-before {
          width: 100%;
          height: 100%;
          opacity: 0.5;
          border: 1px solid var(--color-green04);
        }
        .circle-after {
          width: 90%;
          height: 90%;
          border: 1px solid var(--color-green04);
          transition: width 0.25s ease, height 0.25s ease;
        }
        svg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate3D(-50%, -50%, 0);
          pointer-events: none;
          ${down('md')} {
            width: 22.5px;
            height: 22.5px;
          }
        }
        &:hover {
          .circle-after {
            width: 100%;
            height: 100%;
            transition: width 0.25s ease, height 0.25s ease;
          }
        }
      }
      p {
        max-width: 145px;
        white-space: break-spaces;
        text-transform: uppercase;
        ${down('md')} {
          order: 1;
          text-align: right;
        }
      }
    }
    .open-button-container-popup {
      .open-button-popup {
        .transition-container-popup {
          position: absolute;
          top: 50%; left: 50%;
          width: 0%;
          height: 0%;
          background: var(--color-green05);
          border-radius: 100%;
          transform: translate3D(-50%, -50%, 0);
          // Retour
          transition: all 1.5s cubic-bezier(0.64, 0, 0.78, 0);
          z-index: 2;
          .no-animation-popup & {
            transition: initial;
          }
        }
      }
    }
    .close-button-container-popup {
      position: absolute;
      .close-button-popup {
        .circle-after {
          background: var(--color-beige);
        }
        svg {
          transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);
          z-index: 2;
        }
      }
      p {
        color: var(--color-white);
      }
    }
    .panel-container-popup {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--color-green05);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 1s linear;
      z-index: 3;
      ${down('xs')} {
        min-height: 100% !important;
        height: 100%;
      }
      .no-animation-popup & {
        transition: initial;
      }
      p, h2 {
        color: var(--color-white);
      }
      .container-module-large {
        ${down('xs')} {
          height: 100%;
        }
      }
      .children-container-popup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 605px;
        height: 100vh;
        padding: 167px 0 100px 103px;
        ${down('md')} {
          padding: 80px 0;
          margin: 0 auto;
        }
        ${down('xs')} {
          height: 100%;
          padding: 70px 0;
          // justify-content: flex-start;
        }
      }
    }
    &.is-open {
      .open-button-container-popup {
        .open-button-popup {
          .transition-container-popup {
            width: calc(150vw + 150vh);
            height: calc(150vw + 150vh);
            // Aller
            transition: all 1.2s cubic-bezier(0.64, 0, 0.78, 0);
            .no-animation-popup & {
              transition: initial;
            }
          }
        }
      }
      .panel-container-popup {
        opacity: 1;
        visibility: initial;
        pointer-events: initial;
        transition: all .75s linear 1.2s;
        .no-animation-popup & {
          transition: initial;
        }
      }
    }
  }
`
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PopupStyle = styled.div`
  &.popup {
    .button-container-popup {
      display: flex;
      align-items: center;
      column-gap: 20px;
      ${down('md')} {
        column-gap: 2.097vw;
      }
      .button-popup {
        position: relative;
        width: 109px;
        height: 109px;
        ${down('md')} {
          width: 11.426vw;
          height: 11.426vw;
        }
        &::before, &::after {
          position: absolute;
          top: 50%; left: 50%;
          content: '';
          display: block;
          border-radius: 100%;
          transform: translate3D(-50%, -50%, 0);
        }
        &::before {
          width: 100%;
          height: 100%;
          opacity: 0.5;
          border: 1px solid var(--color-green04);
        }
        &::after {
          width: 90%;
          height: 90%;
          border: 1px solid var(--color-green04);
        }
        svg {
          pointer-events: none;
          ${down('md')} {
            width: 3.145vw;
            height: 3.145vw;
          }
        }
      }
      p {
        max-width: 145px;
        white-space: break-spaces;
        text-transform: uppercase;
        ${down('md')} {
          max-width: 21vw;
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
          transition: all 1s linear 1s;
          z-index: 2;
        }
      }
    }
    .close-button-container-popup {
      position: absolute;
      .close-button-popup {
        &::after {
          background: var(--color-beige);
        }
        svg {
          position: relative;
          transform: rotate3D(0, 0, 1, 45deg);
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
      .children-container-popup {
        max-width: 605px;
        height: 100vh;
        padding: 167px 0 100px 103px;
      }
    }
    &.is-open {
      .open-button-container-popup {
        .open-button-popup {
          .transition-container-popup {
            width: calc(150vw + 150vh);
            height: calc(150vw + 150vh);
            transition: all 1s linear;
          }
        }
      }
      .panel-container-popup {
        opacity: 1;
        visibility: initial;
        pointer-events: initial;
        transition: all 1s linear 1s;
      }
    }
  }
`
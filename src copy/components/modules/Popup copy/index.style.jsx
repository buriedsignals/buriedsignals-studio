import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PopupStyle = styled.div`
  position: relative;
  width: inherit;
  .button-modal-container {
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 20px;
    ${down('md')} {
      column-gap: 2.097vw;
    }
    &.button-modal-container-open {
      top: 350px; left: 350px;
    }
    &.button-modal-container-close {}
    .button-modal {
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
        border-radius: 75%;
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
        position: relative;
        transition: transform 0.1s ease;
        z-index: 2;
        ${down('md')} {
          width: 3.145vw;
          height: 3.145vw;
        }
      }
      .panel-button-transition {
        position: absolute;
        top: 50%; left: 50%;
        width: 90%;
        height: 90%;
        background: var(--color-green05);
        border-radius: 75%;
        transform: translate3D(-50%, -50%, 0);
        transition: all 0.5s ease;
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
    &.is-open {
      z-index: 5;
      .button-modal {
        &::before {
          border: 1px solid var(--color-beige);
        }
        &::after {
          background-color: var(--color-beige);
          border: 1px solid var(--color-beige);
        }
        svg {
          transform: rotate3D(0, 0, 1, 45deg);
          transition: transform 0.1s ease;
        }
        .panel-button-transition {
          width: 200vw;
          height: 200vw;
          transition: all 0.5s ease;
        }
      }
      p {

      }
    }
  }
  .panel-modal-container {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.6s linear;
      z-index: 9;
    &.is-open {
      opacity: 1;
      visibility: inherit;
      pointer-events: initial;
      transition: opacity 1s linear 0.6s;
    }
    .panel-modal {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--color-green05);
      .children-container {
        max-width: 605px;
        height: 100vh;
        padding: 167px 0 100px 103px;
      }
    }
  }
`
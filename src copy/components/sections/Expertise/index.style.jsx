import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ExpertiseStyle = styled.div`
  .expertise-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    padding: 120px 103px 65px;
    ${down('md')} {
      align-items: flex-end;
      width: fit-content;
      padding: 6.814vw 10.797vw;
    }
    .studio-container {
      max-width: 498px;
      ${down('md')} {
        max-width: 100%;
      }
      p {
        padding: 35px 0 0 68px;
        ${down('md')} {
          padding: 3.669vw 0 0 7.128vw;
        }
      }
    }
    .studio-popup {
      position: absolute;
      bottom: 15%; left: 65%;
      ${down('md')} {
        position: relative;
        bottom: 0; left: 0;
        padding: 11.977vw 11.977vw 0;
      }
      .title-first-icon {
        color: var(--color-white);
      }
      .accordion {
        &:last-child {
          .button-container {
            &.is-active {
              &::before {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  .client-container {
    padding-bottom: 170px;
    ${down('md')} {
      padding-bottom: 7.82vw;
    }
    h3 {
      padding: 64px 0;
      text-align: center;
      ${down('md')} {
        padding: 6.709vw 0;
      }
    }
    .clients {
      display: flex;
      justify-content: center;
      align-items: baseline;
      column-gap: 107px;
      ${down('md')} {
        column-gap: 5.216vw;
      }
      .client {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 243px;
        ${down('md')} {
          max-width: 25.472vw;
        }
        svg {
          ${down('md')} {
            &.bubble-icon {
              width: 16.562vw;
              height: 10.692vw;
            }
            &.graph-icon {
              width: 9.015vw;
              height: 11.531vw;
            }
            &.globe-icon {
              width: 10.063vw;
              height: 10.168vw;
            }
          }
        }
        p {
          padding-top: 27px;
          text-align: center;
          ${down('md')} {
            padding-top: 2.831vw;
          }
        }
      }
    }
  }
`